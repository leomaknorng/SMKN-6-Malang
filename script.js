document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
    });

    // Play button animation (if ada tombol dengan class .play-btn)
    const playBtn = document.querySelector('.play-btn');
    if (playBtn) {
    playBtn.addEventListener('mousedown', () => {
        playBtn.style.transform = 'scale(0.95)';
    });
    playBtn.addEventListener('mouseup', () => {
        playBtn.style.transform = '';
    });
    }

    // Card hover effect
    document.querySelectorAll('.card-item').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 8px 32px rgba(0,51,102,0.18)';
        card.style.transform = 'translateY(-10px)';
        card.style.transition = 'box-shadow 0.2s, transform 0.2s';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '';
        card.style.transform = '';
        card.style.transition = 'box-shadow 0.2s, transform 0.2s';
    });
    });

    // Fade-in animation on scroll
    function revealOnScroll() {
    document.querySelectorAll('.card-item, .sambutan, .profil-card, .vidio-container').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
        el.style.transition = 'opacity 0.8s cubic-bezier(.4,2,.3,1), transform 0.8s cubic-bezier(.4,2,.3,1)';
        } else {
        el.style.opacity = 0;
        el.style.transform = 'translateY(40px)';
        }
    });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('DOMContentLoaded', revealOnScroll);

    // Ripple effect for all buttons
    function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
    }
    document.querySelectorAll('button, .play-btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
    });

    // Tooltip for scroll-to-top button
    const style = document.createElement('style');
    style.textContent = `.ripple { position: absolute; border-radius: 50%; background: rgba(255,255,255,0.5); transform: scale(0); animation: ripple 0.6s linear; pointer-events: none; z-index: 10; }
    @keyframes ripple { to { transform: scale(2.5); opacity: 0; } }
    .scroll-tooltip { position: absolute; bottom: 60px; right: 0; background: #222; color: #fff; padding: 6px 14px; border-radius: 8px; font-size: 0.95rem; opacity: 0; pointer-events: none; transition: opacity 0.2s; white-space: nowrap; z-index: 10000; }`;
    document.head.appendChild(style);

    // Scroll to top button
    document.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.style.position = 'fixed';
    btn.style.bottom = '30px';
    btn.style.right = '30px';
    btn.style.padding = '0';
    btn.style.width = '60px';
    btn.style.height = '60px';
    btn.style.fontSize = '1.5rem';
    btn.style.borderRadius = '50%';
    btn.style.background = '#003366';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.cursor = 'pointer';
    btn.style.display = 'none';
    btn.style.zIndex = '9999';
    btn.title = 'Kembali ke atas';
    const img = document.createElement('img');
    img.src = 'img/smkn-6png.png';
    img.alt = 'Scroll to top';
    img.style.width = '60%';
    img.style.height = '60%';
    img.style.objectFit = 'contain';
    img.style.display = 'block';
    img.style.margin = 'auto';
    btn.appendChild(img);
    document.body.appendChild(btn);

    // Tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'scroll-tooltip';
    tooltip.textContent = 'Kembali ke atas';
    btn.appendChild(tooltip);
    btn.addEventListener('mouseenter', () => {
        tooltip.style.opacity = 1;
    });
    btn.addEventListener('mouseleave', () => {
        tooltip.style.opacity = 0;
    });

    // Bounce effect
    let lastDisplay = false;
    window.addEventListener('scroll', () => {
        const show = window.scrollY > 300;
        btn.style.display = show ? 'block' : 'none';
        if (show && !lastDisplay) {
        btn.animate([
            { transform: 'translateY(40px)', opacity: 0 },
            { transform: 'translateY(-10px)', opacity: 1 },
            { transform: 'translateY(0)', opacity: 1 }
        ], { duration: 600, easing: 'cubic-bezier(.4,2,.3,1)' });
        }
        lastDisplay = show;
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    });

    // Welcome notification (once per session)
    window.addEventListener('DOMContentLoaded', () => {
    if (!sessionStorage.getItem('welcomed')) {
        const notif = document.createElement('div');
        notif.textContent = 'Selamat datang di Website SMKN 6 Malang!';
        notif.style.position = 'fixed';
        notif.style.top = '30px';
        notif.style.left = '50%';
        notif.style.transform = 'translateX(-50%)';
        notif.style.background = '#003366';
        notif.style.color = '#fff';
        notif.style.padding = '18px 32px';
        notif.style.borderRadius = '12px';
        notif.style.boxShadow = '0 4px 24px rgba(0,0,0,0.18)';
        notif.style.fontSize = '1.1rem';
        notif.style.zIndex = '10001';
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.5s';
        document.body.appendChild(notif);
        setTimeout(() => { notif.style.opacity = '1'; }, 200);
        setTimeout(() => { notif.style.opacity = '0'; setTimeout(() => notif.remove(), 600); }, 3500);
        sessionStorage.setItem('welcomed', '1');
    }
    });

    // Mengecilkan header dan isinya saat discroll ke bawah dengan transisi lebih mulus
let lastScrollY = 0;
let ticking = false;
const header = document.querySelector('header');
function handleHeaderShrink() {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
  ticking = false;
}
window.addEventListener('scroll', function() {
  if (!ticking) {
    window.requestAnimationFrame(handleHeaderShrink);
    ticking = true;
  }
});
