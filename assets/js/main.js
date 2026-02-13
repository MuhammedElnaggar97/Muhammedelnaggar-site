/* ==============================================
   Main.js — Naggar | نجار
   Site Logic
   ============================================== */

// ===================== PRELOADER =====================
(function () {
    var preloader = document.getElementById('preloader');
    var video = document.getElementById('preloaderVideo');
    var content = document.getElementById('pageContent');
    if (!preloader || !content) return;

    // Check if user has already seen preloader in this session
    var preloaderSeen = sessionStorage.getItem('naggar_preloader_seen');

    if (preloaderSeen) {
        // Skip preloader
        preloader.style.display = 'none';
        content.classList.add('visible');
        preloader.remove();
        return;
    }

    var videoEnded = false;
    var pageLoaded = false;

    function revealPage() {
        if (!videoEnded || !pageLoaded) return;

        // Mark as seen in this session
        sessionStorage.setItem('naggar_preloader_seen', 'true');

        // Fade out preloader, reveal content
        preloader.classList.add('hidden');
        content.classList.add('visible');

        // Clean up preloader from DOM after transition
        setTimeout(function () {
            preloader.remove();
        }, 700);
    }

    // Video finished playing
    if (video) {
        video.addEventListener('ended', function () {
            videoEnded = true;
            revealPage();
        });
        // Fallback: if video can't play (unsupported format), skip after 1s
        video.addEventListener('error', function () {
            videoEnded = true;
            revealPage();
        });
        // Safety timeout: never block the site more than 5 seconds
        setTimeout(function () {
            videoEnded = true;
            revealPage();
        }, 5000);
    } else {
        videoEnded = true;
    }

    // Page fully loaded (all images, fonts, etc.)
    window.addEventListener('load', function () {
        pageLoaded = true;
        revealPage();
    });
})();

document.addEventListener('DOMContentLoaded', function () {

    // ===================== THEME (Light default) =====================
    var themeBtn = document.getElementById('themeToggleBtn');
    var html = document.documentElement;

    // Default is light (no data-theme). Only set dark if stored.
    if (localStorage.getItem('theme') === 'dark') {
        html.setAttribute('data-theme', 'dark');
        if (themeBtn) themeBtn.textContent = '☀️';
    }

    if (themeBtn) {
        themeBtn.onclick = function () {
            var isDark = html.getAttribute('data-theme') === 'dark';
            if (isDark) {
                html.removeAttribute('data-theme');
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = '🌙';
            } else {
                html.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = '☀️';
            }
        };
    }

    // ===================== MOBILE MENU =====================
    var menuBtn = document.getElementById('mobileMenuBtn');
    var navLinks = document.getElementById('navLinks');
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function () { navLinks.classList.toggle('active'); });
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.nav-controls') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    }

    // ===================== NAVBAR SCROLL =====================
    var navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function () {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        }, { passive: true });
    }

    // ===================== ACTIVE NAV =====================
    var path = window.location.pathname;
    var page = path.split('/').pop() || 'index.html';
    if (page === '') page = 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (l) {
        if (l.getAttribute('href') === page) l.classList.add('active');
    });

    // ===================== META / SEO =====================
    var defaultImage = 'assets/img/logo.png';
    var pageMeta = {
        'index.html': { title: 'Naggar | نجار — استشارات بحثية وإحصاء حيوي', description: 'محمد النجار — باحث في الإحصاء الحيوي والمعلوماتية الحيوية. استشارات بحثية وتحليل إحصائي.', url: 'https://muhamedelnaggar.com/' },
        'about.html': { title: 'عن محمد | Naggar', description: 'تعرف على رحلة محمد النجار في المعلوماتية الحيوية والإحصاء.', url: 'https://muhamedelnaggar.com/about' },
        'stats.html': { title: 'تحليل إحصائي | Naggar', description: 'خدمات تحليل إحصائي احترافية باستخدام SPSS و R.', url: 'https://muhamedelnaggar.com/stats' },
        'podcast.html': { title: 'بودكاست ومصادر | Naggar', description: 'مكتبة شاملة من المصادر البحثية.', url: 'https://muhamedelnaggar.com/podcast' },
        'advising.html': { title: 'حجز استشارة | Naggar', description: 'احجز جلسة استشارية خاصة مع محمد النجار.', url: 'https://muhamedelnaggar.com/advising' }
    };
    var meta = pageMeta[page] || pageMeta['index.html'];
    document.title = meta.title;

    function setMeta(n, c, a) {
        a = a || 'name';
        var el = document.querySelector('meta[' + a + '="' + n + '"]');
        if (!el) { el = document.createElement('meta'); el.setAttribute(a, n); document.head.appendChild(el); }
        el.setAttribute('content', c);
    }
    setMeta('description', meta.description);
    setMeta('author', 'Muhamed Elnaggar');
    setMeta('og:title', meta.title, 'property');
    setMeta('og:description', meta.description, 'property');
    setMeta('og:url', meta.url, 'property');
    setMeta('og:type', 'website', 'property');
    setMeta('og:image', defaultImage, 'property');

    // Favicon
    var fav = document.querySelector("link[rel~='icon']");
    if (!fav) { fav = document.createElement('link'); fav.rel = 'icon'; document.head.appendChild(fav); }
    fav.href = defaultImage;

    // ===================== WHATSAPP =====================
    setTimeout(function () {
        var wa = document.getElementById('waBtn');
        if (wa) wa.style.animation = 'none';
    }, 6000);

    // ===================== NEWSLETTER =====================
    var form = document.getElementById('newsletterForm');
    var msgEl = document.getElementById('newsletterMsg');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var inp = document.getElementById('newsletterEmail');
            var email = inp.value;
            var btn = form.querySelector('button');
            var orig = btn.textContent;
            if (!email || email.indexOf('@') === -1) { msgEl.textContent = 'الرجاء إدخال بريد إلكتروني صحيح.'; msgEl.style.color = '#ff6b6b'; return; }
            btn.disabled = true; btn.textContent = 'جاري الاشتراك...'; msgEl.textContent = '';
            var url = 'https://script.google.com/macros/s/AKfycbwU1gHAeSyI8IBB9Ap3JcNU7YOqJGNZLsCmo1oR6QTNSHFT9V242b2iHvCH9QGE9gMN/exec';
            var fd = new FormData(); fd.append('email', email);
            fetch(url, { method: 'POST', body: fd }).then(function () {
                msgEl.textContent = 'تم الاشتراك بنجاح! شكراً لك.'; msgEl.style.color = '#22c55e';
                inp.value = ''; btn.disabled = false; btn.textContent = orig;
            }).catch(function () {
                msgEl.textContent = 'تم الاشتراك بنجاح!'; msgEl.style.color = '#22c55e';
                inp.value = ''; btn.disabled = false; btn.textContent = orig;
            });
        });
    }

    // ===================== ACCORDION (Advising Page) =====================
    document.querySelectorAll('.accordion-header').forEach(function (header) {
        header.addEventListener('click', function () {
            var item = this.closest('.accordion-item');
            var wasActive = item.classList.contains('active');
            // Close all in same container
            item.parentElement.querySelectorAll('.accordion-item').forEach(function (i) {
                i.classList.remove('active');
            });
            if (!wasActive) item.classList.add('active');
        });
    });

    // ===================== GSAP SCROLL REVEAL =====================
    if (typeof gsap !== 'undefined') {
        // Simple Fade Up
        document.querySelectorAll('[data-gsap="fade-up"]').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        // Stagger Reveal for Testimonials
        const staggerEl = document.querySelector('[data-gsap="stagger-up"]');
        if (staggerEl) {
            gsap.from(staggerEl.children, {
                scrollTrigger: {
                    trigger: staggerEl,
                    start: "top 80%"
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out"
            });
        }

        // Horizontal Reveal
        document.querySelectorAll('[data-gsap="fade-right"]').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 85%" },
                x: -50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });

        document.querySelectorAll('[data-gsap="fade-left"]').forEach(el => {
            gsap.from(el, {
                scrollTrigger: { trigger: el, start: "top 85%" },
                x: 50,
                opacity: 0,
                duration: 1,
                ease: "power2.out"
            });
        });
    }

});
