document.addEventListener('DOMContentLoaded', () => {
    // 1. Define your Meta Data (SEO)
    const seoData = {
        title: " محمد النجار | استشارات بحثية وحلول إحصائية متكاملة",
        description: "أُقدم استشارات بحثية، تحليل إحصائي، ودورات تدريبية في المراجعات المنهجية والبحث العلمي. ساعدت أكثر من 200 مشروع بحثي.",
        keywords: "تحليل إحصائي, بحث علمي, استشارات بحثية, مراجعة منهجية, كورسات إحصاء حيوي, Systematic Review, Biostatistics",
        image: "https://pub-5ffbaa38106d451ba0b52807cf3ad274.r2.dev/Biostats%20101%20Thumbnail.png"
    };

    // 2. Update Page Title
    document.title = seoData.title;

    // 3. Function to create/update meta tags
    function setMeta(property, content, isProperty = false) {
        let element = isProperty ?
            document.querySelector(`meta[property="${property}"]`) :
            document.querySelector(`meta[name="${property}"]`);

        if (!element) {
            element = document.createElement('meta');
            if (isProperty) element.setAttribute('property', property);
            else element.setAttribute('name', property);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    }

    // 4. Inject Tags
    setMeta('description', seoData.description);
    setMeta('keywords', seoData.keywords);

    // Open Graph (Social Media)
    setMeta('og:title', seoData.title, true);
    setMeta('og:description', seoData.description, true);
    setMeta('og:image', seoData.image, true);
    setMeta('og:type', 'website', true);

    // 5. Inject JSON-LD Structured Data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhammed Elnaggar",
        "jobTitle": "Statistical Consultant",
        "description": seoData.description,
        "url": window.location.href,
        "sameAs": [
            "https://www.youtube.com/@muhamedelnaggar"
        ]
    });
    document.head.appendChild(schemaScript);

    // 6. Mobile Menu Logic
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 7. Active Link Highlighting
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 8. WhatsApp Button Animation
    setTimeout(() => {
        const waBtn = document.getElementById('waBtn');
        if (waBtn) {
            waBtn.style.animation = 'none';
            waBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        }
    }, 3000);
});
