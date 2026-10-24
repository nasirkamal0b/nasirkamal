/* ==========================================================
   Nasir Kamal portfolio — shared script
   1) Edit CONFIG for contact details
   2) Edit PROJECTS to add / remove builds (images live in assets/project-image/)
   ========================================================== */
(() => {
  const CONFIG = {
    whatsapp: '923150841514',            // country code + number, no "+" or spaces
    email: 'nasirkamal2007@gmail.com',
    phone: '+92 315 0841514',
    location: 'Faisalabad, Pakistan',
    agencika: 'https://agencikasolutions.com'
  };
  const HELLO = 'Hi Nasir, I found your portfolio and I’d like to talk about a project.';

  const P = 'assets/project-image/';
  const mk = (platform, dir, list) => list.map(([name, file]) => ({ name, platform, src: encodeURI(P + dir + file) }));
  const PROJECTS = {
    shopify: mk('Shopify', '', [
      ['Marsh Pine', 'marsh-pine.webp'], ['Elme Studios', 'elmestudios.webp'], ['Baldii Store', 'baldii-store.webp'],
      ['Nutrissify Wellness', 'nutrissifywellness.webp'], ['Bling It On Brenda', 'blingitonbrenda.webp'], ['Kuro Studio', 'kurostudio.webp'],
      ['Carcraft', 'Carcraft.webp'], ['Plugged Labs', 'plugged-labs.webp'], ['Excite Daily', 'excitedaily.webp'],
      ['Phoenix Learning Group', 'phoenixlearninggroup.webp'], ['Kamal Prints', 'sidelinestudio-co-myshopify.webp'], ['Steel 23', 'steel23.webp'],
      ['Baarco', 'baarco-co-za.webp'], ['Treedem Sports', 'treedemsports.webp'], ['Axiom', 'axiom.webp'],
      ['Farm Fetch', 'Farm Fetch.webp'], ['LyLyboy', 'LyLyboy.webp'], ['Mira Fashion', 'Mira fashion.webp'],
      ['Mera Patches', 'mera-patches.webp'], ['Pepslab', 'Pepslab.webp'], ['Apotheos', 'Apotheos.webp'],
      ['FlixMerch', 'flixmerch.webp'], ['Floehome', 'floehome.webp'], ['Presisepeptide', 'Presisepeptide.webp'],
      ['Tonerdash', 'Tonerdash.webp'], ['Torfolk', 'torfolk.webp'], ['Tour Ready', 'Tour ready.webp'],
      ['World Development', 'World development.webp'], ['DeadstockOC', 'deadstockoc.webp'], ['Viva bar hire', 'Viva-bar-hire.webp'],
      ['Nerse Corner', 'nerse corner.webp']
    ]),
    wix: mk('Wix', 'wix/', [
      ['Blue Grid Technologies', 'bluegridgetechnologies.webp'], ['Bella Grace Home Spa', 'bellagracehomespa.webp'],
      ['Mason Givano', 'masongivano.webp'], ['Mullman Law Firm', 'mullmanlawfirm.webp'],
      ['Sovagn', 'sovagn.webp'], ['Taughtai Promary', 'taughtaipromary.webp']
    ]),
    // WordPress: drop screenshots in assets/project-image/wordpress/ and add them here, e.g.
    // ['Site Name', 'site-name.webp']
    wordpress: mk('WordPress', 'wordpress/', [])
  };
  PROJECTS.featured = ['Marsh Pine', 'Elme Studios', 'Baldii Store', 'Kamal Prints', 'Steel 23', 'Baarco']
    .map(n => PROJECTS.shopify.find(p => p.name === n));

  const I = {
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>', right: '<path d="M5 12h14m-6-6 6 6-6 6"/>', up: '<path d="m6 14 6-6 6 6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 8 8 6 8-6"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    wa: '<path d="M3 21l1.6-4.7A8.5 8.5 0 1 1 8 19.5z"/><path d="M9 9.5c.3 2.4 2.6 4.7 5.5 5.5l1.2-1.3-2-1-.8.7c-.8-.4-1.6-1.2-2-2l.7-.8-1-2z"/>',
    pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>', prev: '<path d="m15 6-6 6 6 6"/>', next: '<path d="m9 6 6 6-6 6"/>'
  };
  const icon = n => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
  const waLink = (t = HELLO) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}`;
  const page = document.body.dataset.page || 'home';
  const home = page === 'home';
  const h = id => home ? '#' + id : 'index.html#' + id;

  /* ---------- header ---------- */
  const header = document.createElement('header');
  header.className = 'hd';
  header.innerHTML = `<div class="wrap">
    <a class="logo" href="index.html" aria-label="Nasir Kamal — home">NASIR KAMAL<i>.</i></a>
    <ul class="nav" id="nav">
      <li><a href="${home ? '#top' : 'index.html'}" data-k="home">Home</a></li>
      <li class="dd"><a class="dd-t ${['shopify', 'wix', 'wordpress'].includes(page) ? 'on' : ''}" href="${h('work')}" data-k="work">Portfolio ${icon('next').replace('class="ico"', 'class="ico" style="transform:rotate(90deg);width:.8em"')}</a>
        <div class="sub"><a href="shopify-builds.html">Shopify builds ${icon('arrow')}</a><a href="wix-builds.html">Wix builds ${icon('arrow')}</a><a href="wordpress-builds.html">WordPress builds ${icon('arrow')}</a></div></li>
      <li><a href="${h('services')}" data-k="services">Services</a></li>
      <li><a href="${h('about')}" data-k="about">About</a></li>
      <li><a href="${h('contact')}" data-k="contact">Contact</a></li>
    </ul>
    <a class="btn btn-lime" data-wa target="_blank" rel="noopener" href="https://wa.me/${CONFIG.whatsapp}">Contact Me</a>
    <button class="burger" id="burger" aria-label="Open menu" aria-expanded="false" aria-controls="nav"><i></i></button>
  </div>`;
  document.body.prepend(header);
  const bar = Object.assign(document.createElement('div'), { className: 'bar' });
  document.body.prepend(bar);

  /* ---------- footer ---------- */
  const footer = document.createElement('footer');
  footer.innerHTML = `<div class="band"><div class="wrap">
      <h2>Let’s build your next project.</h2>
      <a class="btn btn-dark" data-wa target="_blank" rel="noopener" href="https://wa.me/${CONFIG.whatsapp}">Contact Me on WhatsApp <span class="arr">${icon('arrow')}</span></a>
    </div></div>
    <div class="ft"><div class="wrap">
      <div class="fg">
        <div><a class="logo" href="index.html">NASIR KAMAL<i>.</i></a>
          <p class="about-t">Creative Shopify Designer &amp; Developer helping brands grow through clean design and smart development.</p>
          <span class="live"><b></b>Open for new projects</span></div>
        <div><h4>Navigation</h4><ul>
          <li><a href="${h('services')}">Services</a></li><li><a href="${h('about')}">About</a></li><li><a href="${h('work')}">Projects</a></li><li><a href="${h('contact')}">Contact</a></li></ul></div>
        <div><h4>Portfolio</h4><ul>
          <li><a href="shopify-builds.html">Shopify builds</a></li><li><a href="wix-builds.html">Wix builds</a></li><li><a href="wordpress-builds.html">WordPress builds</a></li><li><a href="assets/NASIR-KAMAL.cv.pdf" download>Download CV</a></li></ul></div>
        <div><h4>Contact</h4><ul>
          <li><a href="tel:${CONFIG.phone.replace(/\s/g, '')}">${CONFIG.phone}</a></li>
          <li><a href="mailto:${CONFIG.email}">${CONFIG.email}</a></li>
          <li>${CONFIG.location}</li>
          <li><a href="${CONFIG.agencika}" target="_blank" rel="noopener">agencikasolutions.com</a></li></ul></div>
      </div>
      <div class="cp"><p>© <span id="yr"></span> Nasir Kamal. All Rights Reserved.</p><p>Founder, Agencika Solutions</p></div>
    </div></div>`;
  document.body.append(footer);
  const up = Object.assign(document.createElement('a'), { className: 'up', href: '#top', innerHTML: icon('up') });
  up.setAttribute('aria-label', 'Back to top');
  document.body.append(up);
  document.getElementById('yr').textContent = new Date().getFullYear();

  document.querySelectorAll('i[data-i]').forEach(el => { el.outerHTML = icon(el.dataset.i); });
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = waLink(a.dataset.wa || HELLO); });

  /* ---------- header behaviour ---------- */
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    header.classList.toggle('stuck', y > 20);
    bar.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    up.classList.toggle('show', y > 700);
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const burger = document.getElementById('burger');
  const setMenu = o => { document.body.classList.toggle('menu-open', o); burger.setAttribute('aria-expanded', o); };
  burger.addEventListener('click', () => setMenu(!document.body.classList.contains('menu-open')));
  document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

  if (home) {
    const links = [...document.querySelectorAll('#nav a[data-k]')];
    const so = new IntersectionObserver(es => es.forEach(e => {
      if (e.isIntersecting) links.forEach(l => l.classList.toggle('on', l.dataset.k === e.target.id || (e.target.id === 'hero-s' && l.dataset.k === 'home')));
    }), { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('#hero-s,#services,#work,#about,#contact').forEach(s => so.observe(s));
  } else if (page !== 'home') {
    /* inner pages: Portfolio stays highlighted via .on in markup */
  }

  /* ---------- project cards + lightbox ---------- */
  const lb = document.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role', 'dialog'); lb.setAttribute('aria-modal', 'true'); lb.setAttribute('aria-label', 'Project preview');
  lb.innerHTML = `<div class="lb-top"><h3><span id="lbN"></span><small id="lbC"></small></h3>
    <div><button class="rb" id="lbP" aria-label="Previous project">${icon('prev')}</button><button class="rb" id="lbX" aria-label="Next project">${icon('next')}</button><button class="rb" id="lbK" aria-label="Close preview">${icon('close')}</button></div></div>
    <div class="lb-body" id="lbB"><img id="lbI" alt=""></div>`;
  document.body.append(lb);
  let cur = [], idx = 0, opener = null;
  const show = i => {
    idx = (i + cur.length) % cur.length; const p = cur[idx];
    const im = document.getElementById('lbI'); im.src = p.src; im.alt = p.name + ' — full page preview';
    document.getElementById('lbN').textContent = p.name;
    document.getElementById('lbC').textContent = `${p.platform} · ${idx + 1} / ${cur.length}`;
    document.getElementById('lbB').scrollTop = 0;
  };
  const openLb = (list, i, from) => { cur = list; opener = from; lb.classList.add('open'); document.body.style.overflow = 'hidden'; show(i); document.getElementById('lbK').focus(); };
  const closeLb = () => { lb.classList.remove('open'); document.body.style.overflow = ''; opener && opener.focus(); };
  document.getElementById('lbK').onclick = closeLb;
  document.getElementById('lbP').onclick = () => show(idx - 1);
  document.getElementById('lbX').onclick = () => show(idx + 1);
  lb.addEventListener('click', e => { if (e.target === lb || e.target.id === 'lbB') closeLb(); });
  addEventListener('keydown', e => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') closeLb();
    if (e.key === 'ArrowLeft') show(idx - 1);
    if (e.key === 'ArrowRight') show(idx + 1);
  });

  document.querySelectorAll('[data-set]').forEach(grid => {
    const list = PROJECTS[grid.dataset.set] || [];
    if (!list.length) {
      grid.innerHTML = `<div class="empty"><h3>New ${grid.dataset.empty || ''} builds are on the way.</h3>
        <p class="lead">I’m adding my latest work here. Tell me what you need and I’ll share relevant examples directly.</p>
        <a class="btn btn-lime" data-wa="Hi Nasir, I’d like to see WordPress examples." target="_blank" rel="noopener" href="#">Ask for WordPress examples</a></div>`;
      grid.querySelector('[data-wa]').href = waLink('Hi Nasir, I’d like to see WordPress examples.');
      return;
    }
    list.forEach((p, i) => {
      const b = document.createElement('button');
      b.className = 'card'; b.type = 'button'; b.setAttribute('aria-label', `Preview ${p.name}`);
      b.innerHTML = `<div class="shot"><img src="${p.src}" alt="${p.name} website preview" loading="lazy"><span class="chip">View full page</span></div><h3>${p.name}<small>${p.platform}</small></h3>`;
      const im = b.querySelector('img'), w = b.querySelector('.shot');
      const go = () => { const d = im.offsetHeight - w.clientHeight; if (d > 0) { im.style.transitionDuration = Math.min(Math.max(d / 260, 2.5), 9) + 's'; im.style.transform = `translateY(-${d}px)`; } };
      const back = () => { im.style.transitionDuration = '.8s'; im.style.transform = ''; };
      b.addEventListener('mouseenter', go); b.addEventListener('mouseleave', back);
      b.addEventListener('focus', go); b.addEventListener('blur', back);
      b.addEventListener('click', () => openLb(list, i, b));
      grid.append(b);
    });
  });
  document.querySelectorAll('[data-count-of]').forEach(el => { el.textContent = PROJECTS[el.dataset.countOf].length || 'Soon'; });

  /* ---------- hero glow, marquee, counters, reveals ---------- */
  const hero = document.querySelector('.hero');
  if (hero && matchMedia('(pointer:fine)').matches) hero.addEventListener('pointermove', e => {
    const r = hero.getBoundingClientRect();
    hero.style.setProperty('--mx', (e.clientX - r.left) + 'px'); hero.style.setProperty('--my', (e.clientY - r.top) + 'px');
  });
  const mq = document.querySelector('.mq div');
  if (mq) mq.innerHTML += mq.innerHTML;

  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); io.unobserve(e.target);
    if (e.target.dataset.count) {
      const el = e.target, n = parseInt(el.dataset.count, 10), s = el.dataset.suffix || '', t0 = performance.now();
      const tick = t => { const k = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(n * (1 - Math.pow(1 - k, 3))) + s; if (k < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }
  }), { threshold: .25 });
  document.querySelectorAll('.rv,.steps,[data-count]').forEach(el => io.observe(el));

  /* ---------- contact form → WhatsApp with pre-filled message ---------- */
  const f = document.getElementById('cf');
  if (f) {
    const el = f.elements, note = document.getElementById('fn');
    const draft = t => `Hi Nasir, I’d like to discuss a ${t} project. Here’s what I need: `;
    let edited = false;
    el.message.value = draft(el.type.value);
    el.message.addEventListener('input', () => { edited = true; });
    f.querySelectorAll('input[name=type]').forEach(r => r.addEventListener('change', () => {
      if (!edited || !el.message.value.trim()) { el.message.value = draft(r.value); edited = false; }
    }));
    f.addEventListener('submit', e => {
      e.preventDefault();
      const name = el.name.value.trim(), msg = el.message.value.trim();
      if (!name || !msg) { note.className = 'fn err'; note.textContent = 'Add your name and a short message to continue.'; (name ? el.message : el.name).focus(); return; }
      const lines = ['Hello Nasir 👋', `Name: ${name}`];
      if (el.phone.value.trim()) lines.push(`Phone: ${el.phone.value.trim()}`);
      if (el.email.value.trim()) lines.push(`Email: ${el.email.value.trim()}`);
      lines.push(`Project: ${el.type.value}`, '', msg);
      const url = waLink(lines.join('\n'));
      note.className = 'fn'; note.textContent = 'Opening WhatsApp with your message ready to send.';
      if (!window.open(url, '_blank', 'noopener')) location.href = url;
    });
  }
  /* ---------- v2: intro, smooth scroll, scroll-linked motion ---------- */
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches;
  let seen = false; try { seen = !!sessionStorage.getItem('nk'); } catch (e) {}
  if (home && !reduce && !seen) {
    const d = Object.assign(document.createElement('div'), { className: 'intro', innerHTML: '<span>NK<i>.</i></span>' });
    document.body.append(d);
    setTimeout(() => { d.classList.add('out'); document.body.classList.add('go'); }, 1050);
    setTimeout(() => d.remove(), 2100);
    try { sessionStorage.setItem('nk', 1); } catch (e) {}
  } else document.body.classList.add('go');

  document.querySelectorAll('.hero h1 .l').forEach((l, li) => {
    const t = l.textContent; l.textContent = '';
    [...t].forEach((c, i) => { const s = document.createElement('span'); s.className = 'ch'; s.textContent = c; s.style.setProperty('--i', i + li * 5); l.append(s); });
  });

  document.querySelectorAll('main h2').forEach(el => {
    let n = 0; const out = document.createDocumentFragment();
    el.childNodes.forEach(nd => {
      const parts = nd.nodeType === 3 ? nd.textContent.split(/(\s+)/) : [nd];
      parts.forEach(pt => {
        if (typeof pt === 'string' && !pt.trim()) { out.append(pt); return; }
        const w = document.createElement('span'), i = document.createElement('span');
        w.className = 'w'; i.style.setProperty('--i', n++);
        typeof pt === 'string' ? (i.textContent = pt) : i.append(pt);
        w.append(i); out.append(w);
      });
    });
    el.textContent = ''; el.append(out); el.classList.add('sp'); io.observe(el);
  });

  /* smooth (inertial) wheel scrolling — desktop only */
  const goTo = y => { smoothTo(y); };
  let smoothTo = y => scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
  if (fine && !reduce) {
    document.documentElement.classList.add('sm');
    let target = scrollY, cur = scrollY, run = false;
    const limit = () => document.documentElement.scrollHeight - innerHeight;
    const loop = () => {
      cur += (target - cur) * .11;
      if (Math.abs(target - cur) < .5) { cur = target; run = false; } else requestAnimationFrame(loop);
      scrollTo({ top: cur, behavior: 'instant' });
    };
    smoothTo = y => { target = Math.max(0, Math.min(limit(), y)); if (!run) { run = true; cur = scrollY; requestAnimationFrame(loop); } };
    addEventListener('wheel', e => {
      if (e.ctrlKey || lb.classList.contains('open') || document.body.classList.contains('menu-open')) return;
      for (let el = e.target; el && el !== document.body; el = el.parentElement) {
        const o = getComputedStyle(el).overflowY;
        if ((o === 'auto' || o === 'scroll') && el.scrollHeight > el.clientHeight) return;
      }
      e.preventDefault();
      smoothTo((run ? target : scrollY) + e.deltaY * (e.deltaMode === 1 ? 32 : 1));
    }, { passive: false });
    addEventListener('scroll', () => { if (!run) target = cur = scrollY; }, { passive: true });
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const id = a.getAttribute('href').slice(1), el = id && id !== 'top' ? document.getElementById(id) : null;
    if (id && id !== 'top' && !el) return;
    e.preventDefault(); goTo(el ? el.getBoundingClientRect().top + scrollY - 70 : 0);
    if (id) history.replaceState(null, '', '#' + id);
  });

  /* scroll-linked motion (one rAF-throttled handler) */
  const kl = [...document.querySelectorAll('.kl')], px = [...document.querySelectorAll('[data-px]')];
  const stepsEl = document.querySelector('.steps'), stepEls = [...document.querySelectorAll('.step')];
  const heroImg = document.querySelector('.portrait .ph img');
  let tick = false, lastY = scrollY;
  const frame = () => {
    tick = false; const y = scrollY, vh = innerHeight;
    const dy = y - lastY;
    if (Math.abs(dy) > 8) { header.classList.toggle('hide', dy > 0 && y > 500 && !document.body.classList.contains('menu-open')); lastY = y; }
    kl.forEach(el => { const r = el.parentElement.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; el.style.transform = `translate3d(${(r.top - vh / 2) * -el.dataset.s * .4}px,0,0)`; });
    px.forEach(el => { const r = el.getBoundingClientRect(); if (r.bottom < 0 || r.top > vh) return; el.style.transform = `translate3d(0,${(r.top + r.height / 2 - vh / 2) * el.dataset.px * -1}px,0)`; });
    if (heroImg && y < vh) heroImg.style.transform = `translate3d(0,${Math.min(y * .03, 26)}px,0) scale(1.1)`;
    if (stepsEl) {
      const r = stepsEl.getBoundingClientRect();
      stepsEl.style.setProperty('--p', Math.min(1, Math.max(0, (vh * .55 - r.top) / r.height)));
      stepEls.forEach(s => s.classList.toggle('on', s.getBoundingClientRect().top < vh * .55));
    }
  };
  if (!reduce) { addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(frame); } }, { passive: true }); frame(); }

  if (fine && !reduce) {
    const ph = document.querySelector('.portrait .ph'), pt = document.querySelector('.portrait');
    if (pt) {
      pt.addEventListener('pointermove', e => { const r = pt.getBoundingClientRect(); const x = (e.clientX - r.left) / r.width - .5, y2 = (e.clientY - r.top) / r.height - .5; ph.style.transform = `perspective(900px) rotateY(${x * 9}deg) rotateX(${-y2 * 9}deg)`; });
      pt.addEventListener('pointerleave', () => { ph.style.transform = ''; });
    }
    document.querySelectorAll('.hero .btn,.band .btn').forEach(b => {
      b.addEventListener('pointermove', e => { const r = b.getBoundingClientRect(); b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .18}px,${(e.clientY - r.top - r.height / 2) * .28}px)`; });
      b.addEventListener('pointerleave', () => { b.style.transform = ''; });
    });
  }
})();
