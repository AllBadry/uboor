document.getElementById("startBtn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab.url.includes("web.whatsapp.com")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: runCollector
    });
  } else {
    alert("❌ Please open WhatsApp Web first (web.whatsapp.com)");
  }
});

// هنا نضع كود الحصاد كاملاً ليعمل كـ "حقنة" داخل الصفحة
function runCollector() {
  (async function fullWhatsAppCollectorV7_EN() {
  console.clear();
  console.log("🚀 WhatsApp Collector V7 (Wa.me & Profile Pics) — Starting...");

  if (window.__waCollectorRunning) {
    console.warn("⚠️ Collector is already running!");
    return;
  }
  window.__waCollectorRunning = true;

  const PHONE_RE = /(?:\+|00)?\d[\d\-\s\(\)]{7,20}\d/;
  const UI_NOISE = /^(yesterday|today|loading|typing\.\.\.|audio\.\.\.|business account|please wait|updating|scanning|connecting|group admin)$/i;
  const TIME_RE = /^\d{1,2}:\d{2}\s*(AM|PM)?$/i;
  const LINK_RE = /(https?:\/\/[^\s]+|chat\.whatsapp\.com\/[A-Za-z0-9]+)/i;
  const BIZ_RE = /(business)/i;

  const SCROLL_STEP = 250; 
  const SCROLL_DELAY = 600;
  const STABLE_LIMIT = 8;
  const MAX_ROWS = 10000;

  const COUNTRY_CODES = {
    '+1': 'USA/Canada', '+20': 'Egypt', '+33': 'France', '+44': 'UK', '+49': 'Germany', 
    '+90': 'Turkey', '+212': 'Morocco', '+213': 'Algeria', '+216': 'Tunisia', '+218': 'Libya', 
    '+249': 'Sudan', '+961': 'Lebanon', '+962': 'Jordan', '+963': 'Syria', '+964': 'Iraq', 
    '+965': 'Kuwait', '+966': 'Saudi Arabia', '+967': 'Yemen', '+968': 'Oman', '+970': 'Palestine', 
    '+971': 'UAE', '+972': 'Palestine/Israel', '+973': 'Bahrain', '+974': 'Qatar'
  };

  const collectedMap = new Map();
  let observer = null;
  let stopRequested = false;

  const delay = ms => new Promise(r => setTimeout(r, ms));
  const escHtml = s => (s+'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  const normalizeNumber = s => (s||'').replace(/[^\d\+]/g,'').replace(/^00/,'+').trim();

  function extractNumber(text) {
    if (!text) return '';
    const m = text.match(PHONE_RE);
    return m ? normalizeNumber(m[0]) : '';
  }

  function getCountry(num) {
    if (!num) return '-';
    const codes = Object.keys(COUNTRY_CODES).sort((a, b) => b.length - a.length);
    for (const code of codes) {
      if (num.startsWith(code)) return COUNTRY_CODES[code];
    }
    return '-';
  }

  function collectFromNode(node) {
    try {
      const rawText = node.innerText || '';
      if (!rawText.trim()) return false;

      let lines = rawText.split('\n').map(l => l.trim()).filter(l => l.length > 0 && !UI_NOISE.test(l) && !TIME_RE.test(l));
      if (lines.length === 0) return false;

      let num = extractNumber(rawText);
      let name = '';
      let about = '';

      const firstLineNum = extractNumber(lines[0]);
      if (firstLineNum === num && num !== '') {
        const pushName = lines.find(l => l.startsWith('~'));
        name = pushName ? pushName.replace(/^~/, '').trim() : "Unsaved Number";
        about = lines.filter(l => l !== lines[0] && l !== pushName).join(' | ');
      } else {
        name = lines[0];
        about = lines.filter(l => l !== name && extractNumber(l) !== num).join(' | ');
      }

      if (name.length <= 1 || name.toLowerCase() === 'you') return false;
      if (!num && name === "Unsaved Number") return false;

      const isBiz = BIZ_RE.test(rawText) ? 'Yes' : 'No';
      const linkMatch = rawText.match(LINK_RE);
      const link = linkMatch ? linkMatch[0] : '';
      const country = getCountry(num);
      const isGroup = !num; 

      // 🌟 الميزات الجديدة: الصورة والرابط السريع
      let picUrl = '';
      const imgEl = node.querySelector('img');
      if (imgEl && imgEl.src) picUrl = imgEl.src;

      let waLink = '';
      if (num) {
        const cleanNum = num.replace(/[^\d]/g, ''); // إزالة علامة + للفورمات الصحيح
        waLink = `https://wa.me/${cleanNum}`;
      }

      const key = num || name; 
      if (!key) return false;
      
      if (!collectedMap.has(key)) {
        collectedMap.set(key, { name, number: num, about, country, isBiz, link, isGroup, picUrl, waLink });
        return true;
      } else {
        const prev = collectedMap.get(key);
        let updated = false;
        
        if (!prev.number && num) { prev.number = num; prev.country = country; prev.isGroup = false; prev.waLink = waLink; updated = true; }
        if (prev.name === "Unsaved Number" && name !== "Unsaved Number") { prev.name = name; updated = true; }
        if (!prev.about && about) { prev.about = about; updated = true; }
        if (prev.isBiz === 'No' && isBiz === 'Yes') { prev.isBiz = 'Yes'; updated = true; }
        if (!prev.link && link) { prev.link = link; updated = true; }
        if (!prev.picUrl && picUrl) { prev.picUrl = picUrl; updated = true; }
        
        if (updated) collectedMap.set(key, prev);
        return false;
      }
    } catch { return false; }
  }

  function collectVisibleListItems() {
    document.querySelectorAll("div[role='listitem']").forEach(n => collectFromNode(n));
  }

  function findScrollContainer() {
    const sample = document.querySelector("div[role='listitem']");
    if (!sample) return null;
    let p = sample.parentElement;
    while (p) {
      const style = getComputedStyle(p);
      if ((style.overflowY === 'auto' || style.overflowY === 'scroll') && p.scrollHeight > p.clientHeight) return p;
      p = p.parentElement;
    }
    return null;
  }

  function startMutationObserver(container) {
    if (!container) return null;
    const mo = new MutationObserver(() => collectVisibleListItems());
    mo.observe(container, { childList: true, subtree: true });
    return mo;
  }

  const scrollContainer = findScrollContainer();
  if (!scrollContainer) {
    alert("❌ Please open your chats or contacts list first.");
    window.__waCollectorRunning = false;
    return;
  }

  observer = startMutationObserver(document.body);
  collectVisibleListItems();

  async function autoScroll(direction = 1) {
    let stable = 0, loops = 0;
    while (!stopRequested) {
      scrollContainer.scrollBy({ top: SCROLL_STEP * direction, behavior: 'smooth' });
      await delay(SCROLL_DELAY);
      collectVisibleListItems();
      
      const prevSize = collectedMap.size;
      if (prevSize === collectedMap.size) stable++; else stable = 0;
      loops++;

      const atEnd = direction > 0
        ? (scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight - 10)
        : (scrollContainer.scrollTop <= 10);

      if ((stable >= STABLE_LIMIT && atEnd) || loops > 2000) break;
    }
  }

  await autoScroll(1);
  await delay(800);
  await autoScroll(-1);

  if (observer) observer.disconnect();
  let rows = Array.from(collectedMap.values()).slice(0, MAX_ROWS);

  const modal = document.createElement("div");
  modal.style = "position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:999999;padding:20px;direction:ltr;font-family:'Segoe UI', Tahoma, sans-serif;";

  let tableHtml = `
    <style>
      .wa-table { width: 100%; border-collapse: collapse; font-size: 13px; background: #fff; text-align: left; }
      .wa-table th { background: #25D366; color: white; padding: 12px; position: sticky; top: 0; }
      .wa-table td { padding: 8px 12px; border-bottom: 1px solid #f0f0f0; vertical-align: middle; }
      .wa-table tr:hover { background-color: #f9f9f9; }
      .wa-pic { width:40px; height:40px; border-radius:50%; object-fit:cover; border:1px solid #ddd; }
      .wa-badge { background: #dc3545; color: #fff; padding: 3px 6px; border-radius: 4px; font-size: 11px; margin-left: 5px; }
      .wa-biz { color: #ff9800; font-weight: bold; }
      .wa-btn-chat { background: #25D366; color: #fff; text-decoration: none; padding: 5px 10px; border-radius: 4px; font-weight: bold; font-size: 12px; display: inline-block;}
    </style>
    <table class="wa-table">
      <thead><tr>
        <th>Pic</th>
        <th>Name</th>
        <th>Phone Number</th>
        <th>Country</th>
        <th>Business?</th>
        <th>About</th>
        <th>Chat Link</th>
      </tr></thead>
      <tbody>
  `;
  
  for (const r of rows) {
    const badge = r.isGroup ? `<span class="wa-badge">Group</span>` : '';
    const bizClass = r.isBiz === 'Yes' ? 'wa-biz' : '';
    const picHtml = r.picUrl ? `<img src="${r.picUrl}" class="wa-pic" onerror="this.style.display='none'">` : '👤';
    const chatBtn = r.waLink ? `<a href="${r.waLink}" target="_blank" class="wa-btn-chat">💬 Chat</a>` : '-';

    tableHtml += `<tr>
      <td style="text-align:center;">${picHtml}</td>
      <td>${escHtml(r.name)}${badge}</td>
      <td style="font-weight: bold; color: #333;">${escHtml(r.number)}</td>
      <td>${escHtml(r.country)}</td>
      <td class="${bizClass}">${escHtml(r.isBiz)}</td>
      <td style="color:#555; max-width:200px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" title="${escHtml(r.about)}">${escHtml(r.about)}</td>
      <td style="text-align:center;">${chatBtn}</td>
    </tr>`;
  }
  tableHtml += `</tbody></table>`;

  modal.innerHTML = `
    <div style="background:#fff;border-radius:12px;padding:25px;width:95%;max-width:1300px;height:90vh;display:flex;flex-direction:column;box-shadow: 0 15px 40px rgba(0,0,0,0.4);">
      <h2 style="text-align:center;margin:0 0 15px 0;color:#075E54;">✅ WA Collector Pro (V7)</h2>
      <div style="flex:1;overflow:auto;border:1px solid #ddd;border-radius:8px;margin-bottom:20px;">${tableHtml}</div>
      <div style="display:flex;gap:15px;justify-content:center;">
        <button id="csvBtn" style="padding:10px 20px;border:none;border-radius:6px;background:#17a2b8;color:#fff;cursor:pointer;font-weight:bold;">📄 Download CSV</button>
        <button id="excelBtn" style="padding:10px 20px;border:none;border-radius:6px;background:#28a745;color:#fff;cursor:pointer;font-weight:bold;">📊 Download Excel</button>
        <button id="closeBtn" style="padding:10px 20px;border:none;border-radius:6px;background:#dc3545;color:#fff;cursor:pointer;font-weight:bold;">❌ Close</button>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  function downloadFile(content, type, filename) {
    const a = document.createElement('a');
    const blob = new Blob(['\uFEFF' + content], { type });
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  modal.querySelector("#csvBtn").onclick = () => {
    let csv = "Name,Phone Number,Country,Business,About,Wa.me Link,Profile Pic URL\n";
    rows.forEach(r => { csv += `"${r.name}","${r.number}","${r.country}","${r.isBiz}","${r.about.replace(/"/g, '""')}","${r.waLink}","${r.picUrl}"\n`; });
    downloadFile(csv, 'text/csv;charset=utf-8;', `WA_Contacts_V7_${Date.now()}.csv`);
  };

  modal.querySelector("#excelBtn").onclick = () => {
    let html = `<html dir="ltr"><head><meta charset="utf-8"/><style>table{border-collapse:collapse;} th,td{border:1px solid #000;padding:5px;text-align:left;}</style></head><body><table><tr><th>Profile Pic</th><th>Name</th><th>Phone Number</th><th>Country</th><th>Business?</th><th>About</th><th>Wa.me Link</th></tr>`;
    rows.forEach(r => { 
      const img = r.picUrl ? `<img src="${r.picUrl}" width="40" height="40" />` : '';
      const link = r.waLink ? `<a href="${r.waLink}">${r.waLink}</a>` : '';
      html += `<tr><td>${img}</td><td>${escHtml(r.name)}</td><td>${escHtml(r.number)}</td><td>${escHtml(r.country)}</td><td>${escHtml(r.isBiz)}</td><td>${escHtml(r.about)}</td><td>${link}</td></tr>`; 
    });
    html += `</table></body></html>`;
    downloadFile(html, 'application/vnd.ms-excel;charset=utf-8;', `WA_Contacts_V7_${Date.now()}.xls`);
  };

  modal.querySelector("#closeBtn").onclick = () => { modal.remove(); window.__waCollectorRunning = false; };
  window.__waCollectorRunning = false;
  console.log("🎉 Data collection completed successfully!");
})();
}