'use strict';

// Verified project content. Gallery order also defines each card thumbnail.
const projects = {
  "reckless-order": {
    "title": "Reckless Order",
    "year": "2026",
    "genre": "2D Point-and-Click Stealth, Web-Based Game",
    "role": "UI Designer & Graphic Designer",
    "tools": "Figma",
    "overview": "Reckless Order merupakan game 2D berbasis web dengan mekanik point-and-click dan stealth. Dalam proyek ini, saya bertanggung jawab atas desain grafis dan antarmuka permainan, termasuk elemen navigasi dan tampilan yang digunakan pemain.",
    "contributions": [
      "Mendesain Main Menu.",
      "Membuat logo game.",
      "Mendesain tombol dan ikon antarmuka.",
      "Merancang elemen UI dan UX permainan."
    ],
    "demo": "https://viscated.itch.io/reckless-order",
    "gallery": [
      {
        "src": "assets/RecklessOrder1.png",
        "caption": "Main Menu — Desain logo, tombol, dan ikon permainan.",
        "width": 953,
        "height": 540
      },
      {
        "src": "assets/RecklessOrder2.png",
        "caption": "Gameplay — Desain UI Alert Bar yang terletak di sisi kanan layar.",
        "width": 957,
        "height": 538
      },
      {
        "src": "assets/RecklessOrder3.png",
        "caption": "Pause Screen — Desain antarmuka dan tombol navigasi.",
        "width": 957,
        "height": 534
      }
    ]
  },
  "fragile-delivery": {
    "title": "Fragile Delivery",
    "year": "2025",
    "genre": "2D Side-Scrolling Driving Game",
    "role": "Team Lead, Game Designer & UX Designer",
    "tools": "CorelDRAW",
    "overview": "Fragile Delivery merupakan game mengemudi 2D dengan perspektif side-scrolling. Dalam pengembangannya, saya berperan sebagai Team Lead dan Game Designer, dengan kontribusi pada ide permainan, perancangan layout, elemen visual gameplay, serta pemilihan aset audio.",
    "contributions": [
      "Mengembangkan ide dan konsep permainan (Ideation).",
      "Merancang layout permainan.",
      "Mendesain ikon upgrade dan elemen visual gameplay.",
      "Memilih aset suara yang digunakan dalam game."
    ],
    "demo": "https://sultanfajar.itch.io/fragile-delivery",
    "gallery": [
      {
        "src": "assets/FragileDelivery1.png",
        "caption": "Main Menu — Tampilan menu utama game.",
        "width": 1276,
        "height": 717
      },
      {
        "src": "assets/FragileDelivery2.png",
        "caption": "Upgrade Icons — Desain ikon yang digunakan pada sistem upgrade.",
        "width": 1278,
        "height": 711
      },
      {
        "src": "assets/FragileDelivery3.png",
        "caption": "Gameplay — Tampilan permainan dan elemen gameplay.",
        "width": 1275,
        "height": 716
      }
    ]
  },
  "rats-be-gone": {
    "title": "Rats Be Gone",
    "year": "2025",
    "genre": "2D Idle Incremental Game",
    "role": "Team Lead & Game Designer",
    "tools": "CorelDRAW",
    "overview": "Rats Be Gone merupakan game 2D bergenre idle incremental. Dalam proyek ini, saya berperan sebagai Team Lead dan Game Designer dengan tanggung jawab pada pengembangan konsep, perancangan layout, penyusunan antarmuka, serta pemilihan aset audio.",
    "contributions": [
      "Mengembangkan ide dan konsep gameplay.",
      "Merancang layout permainan.",
      "Memilih aset suara.",
      "Membuat dan menyusun elemen antarmuka permainan (Interface Building)."
    ],
    "demo": "https://sultanfajar.itch.io/rats-be-gone",
    "gallery": [
      {
        "src": "assets/RatsBeGone1.png",
        "caption": "Main Menu — Tampilan menu utama game.",
        "width": 1273,
        "height": 713
      },
      {
        "src": "assets/RatsBeGone2.png",
        "caption": "Gameplay — Tampilan permainan.",
        "width": 1276,
        "height": 717
      },
      {
        "src": "assets/RatsBeGone3.png",
        "caption": "Pause Screen — Tampilan antarmuka ketika permainan dijeda.",
        "width": 1276,
        "height": 721
      }
    ]
  },
  "turbo-pedal": {
    "title": "Turbo Pedal",
    "year": "2025",
    "genre": "2D Top-Down Endless Runner",
    "role": "Team Lead & Game Designer",
    "tools": "CorelDRAW",
    "overview": "Turbo Pedal merupakan game 2D bergenre top-down endless runner dan menjadi proyek game pertama yang saya kembangkan bersama tim. Dalam proyek ini, saya berperan sebagai Team Lead dan Game Designer, dengan tanggung jawab pada pengembangan konsep, layout, antarmuka, dan pemilihan aset audio.",
    "contributions": [
      "Mengembangkan ide dan konsep permainan.",
      "Merancang layout permainan.",
      "Memilih aset suara.",
      "Membuat dan menyusun antarmuka permainan."
    ],
    "demo": "https://sultanfajar.itch.io/turbo-pedal",
    "gallery": [
      {
        "src": "assets/TurboPedal1.png",
        "caption": "Main Menu — Tampilan menu utama game.",
        "width": 536,
        "height": 717
      },
      {
        "src": "assets/TurboPedal2.png",
        "caption": "Gameplay — Tampilan permainan.",
        "width": 540,
        "height": 715
      }
    ]
  }
};

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu(); menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        const current = link.getAttribute('href') === `#${entry.target.id}`;
        link.classList.toggle('active', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-10% 0px -65% 0px', threshold: 0 });
  document.querySelectorAll('main > section[id]').forEach(section => observer.observe(section));
}

const dialog = document.querySelector('#project-dialog');
const detailContent = document.querySelector('#detail-content');
let previousFocus = null;
// All detail copy is plain text, including future user-supplied project descriptions.
function element(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content) node.textContent = content;
  return node;
}
function openProject(id, trigger) {
  const project = projects[id];
  if (!project) return;
  previousFocus = trigger;
  detailContent.replaceChildren();
  detailContent.append(element('p', 'detail-year', project.year));
  const title = element('h2', '', project.title);
  title.id = 'detail-title';
  detailContent.append(title, element('p', 'detail-subtitle', project.genre));
  detailContent.append(element('p', 'detail-role', project.role));

  const overview = element('section', 'detail-section');
  overview.append(element('h3', '', 'Project Overview'), element('p', '', project.overview));

  const roleAndTools = element('section', 'detail-section');
  roleAndTools.append(element('h3', '', 'Role & Tools'));
  const facts = element('dl', 'detail-facts');
  [['PERAN', project.role], ['TOOLS', project.tools]].forEach(([label, value]) => {
    const group = element('div');
    group.append(element('dt', '', label), element('dd', '', value));
    facts.append(group);
  });
  roleAndTools.append(facts);

  const contribution = element('section', 'detail-section');
  const list = element('ul');
  project.contributions.forEach(item => list.append(element('li', '', item)));
  contribution.append(element('h3', '', 'Contributions'), list);

  const gallerySection = element('section', 'detail-section');
  gallerySection.append(element('h3', '', 'Project Gallery'));
  const gallery = element('div', 'project-gallery');
  if (project.gallery.every(item => item.height > item.width)) gallery.classList.add('portrait-gallery');
  project.gallery.forEach((item, index) => {
    const figure = element('figure', 'gallery-item');
    const image = element('img', 'detail-image');
    image.alt = `${project.title} — ${item.caption}`;
    image.width = item.width;
    image.height = item.height;
    image.loading = index === 0 ? 'eager' : 'lazy';
    image.decoding = 'async';
    image.addEventListener('error', () => {
      image.hidden = true;
      figure.prepend(element('p', 'missing-image', `Gambar belum tersedia: ${item.src}`));
    }, { once: true });
    image.src = item.src;
    figure.append(image, element('figcaption', '', item.caption));
    gallery.append(figure);
  });
  gallerySection.append(gallery);

  const play = element('section', 'detail-section');
  const link = element('a', 'button button-lime detail-demo', 'Play Game di itch.io ↗');
  link.href = project.demo;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `Play ${project.title} di itch.io (tab baru)`);
  play.append(element('h3', '', 'Play Game'), link);
  detailContent.append(overview, roleAndTools, contribution, gallerySection, play);
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('dialog-open');
  document.querySelector('#close-dialog').focus();
}
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => openProject(button.dataset.project, button));
});
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  document.body.classList.remove('dialog-open');
  previousFocus?.focus();
});

document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText('sultanfajarkeren@gmail.com');
    status.textContent = 'Alamat email berhasil disalin.';
  } catch {
    status.textContent = 'Salin manual: sultanfajarkeren@gmail.com';
  }
});
