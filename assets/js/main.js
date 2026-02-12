document.addEventListener('DOMContentLoaded', () => {
    // 1. Define Page-Specific Meta Data
    const defaultImage = "assets/img/logo.png"; // Set Logo as Social Sharing Image
    const defaultType = "website";

    const pageMeta = {
        "index.html": {
            title: "محمد النجار | استشارات بحثية وحلول إحصائية متكاملة",
            description: "طريقك للتميز في البحث العلمي. أقدم استشارات بحثية، تحليل إحصائي (SPSS, R)، ودورات تدريبية متخصصة لمساعدتك في نشر أبحاثك في مجلات عالمية.",
            url: "https://muhamedelnaggar.com/"
        },
        "about.html": {
            title: "عن محمد النجار | باحث واستشاري إحصائي",
            description: "تعرف على رحلة محمد النجار في المعلوماتية الحيوية والإحصاء الحيوي. خبرة تزيد عن 6 سنوات في مساعدة الباحثين وطلاب الدراسات العليا.",
            url: "https://muhamedelnaggar.com/about"
        },
        "stats.html": {
            title: "خدمات التحليل الإحصائي | SPSS, R, Meta-Analysis",
            description: "خدمات تحليل إحصائي احترافية لرسائل الماجستير والدكتوراه. نغطي كافة أنواع التحليلات باستخدام SPSS و R و GraphPad Prism بدقة علمية عالية.",
            url: "https://muhamedelnaggar.com/stats"
        },
        "podcast.html": {
            title: "بودكاست ومصادر تعليمية | محمد النجار",
            description: "مكتبة شاملة من الفيديوهات التعليمية، المقالات، والبودكاست حول البحث العلمي، الإحصاء، وكيفية كتابة الأوراق العلمية ونشرها.",
            url: "https://muhamedelnaggar.com/podcast"
        },
        "advising.html": {
            title: "حجز استشارة بحثية | جلسة خاصة (Zoom)",
            description: "احجز جلسة استشارية خاصة لمدة 60 دقيقة لمناقشة مشروعك البحثي، حل المشكلات الإحصائية، أو الحصول على توجيه أكاديمي مخصص.",
            url: "https://muhamedelnaggar.com/advising"
        }
    };

    // Determine current page
    const path = window.location.pathname;
    let page = path.split("/").pop() || "index.html";
    if (page === "") page = "index.html"; // Handle root path

    // Fallback to index if page not found in map (or handle 404 conceptually)
    const currentMeta = pageMeta[page] || pageMeta["index.html"];

    // 2. Set Favicon Dynamically
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = 'assets/img/logo.png';

    // 3. Update Page Title
    document.title = currentMeta.title;

    // 4. Function to create/update meta tags
    function setMeta(name, content, attribute = 'name') {
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute(attribute, name);
            document.head.appendChild(element);
        }
        element.setAttribute('content', content);
    }

    // 5. Inject Standard Meta Tags
    setMeta('description', currentMeta.description);
    setMeta('keywords', "تحليل إحصائي, بحث علمي, استشارات بحثية, مراجعة منهجية, كورسات إحصاء حيوي, Systematic Review, Biostatistics, SPSS, R programming");
    setMeta('author', "Muhamed Elnaggar");

    // 6. Inject Open Graph (Social Media) Tags
    setMeta('og:title', currentMeta.title, 'property');
    setMeta('og:description', currentMeta.description, 'property');
    setMeta('og:image', window.location.origin + '/' + defaultImage, 'property');
    setMeta('og:url', currentMeta.url, 'property');
    setMeta('og:type', defaultType, 'property');
    setMeta('og:site_name', "Muhamed Elnaggar - Research Consultant", 'property');

    // 7. Inject Twitter Card Tags
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', currentMeta.title);
    setMeta('twitter:description', currentMeta.description);
    setMeta('twitter:image', window.location.origin + '/' + defaultImage);

    // 8. Inject JSON-LD Structured Data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhammed Elnaggar",
        "jobTitle": "Statistical Consultant",
        "description": currentMeta.description,
        "url": currentMeta.url,
        "image": window.location.origin + '/' + defaultImage,
        "sameAs": [
            "https://www.youtube.com/@muhamedelnaggar",
            "https://www.linkedin.com/in/muhamedelnaggar",
            "https://www.facebook.com/Biostats.muhamedelnaggar"
        ]
    });
    // Remove old schema if exists to avoid duplicates (optional, but good practice)
    const oldSchema = document.querySelector('script[type="application/ld+json"]');
    if (oldSchema) oldSchema.remove();
    document.head.appendChild(schemaScript);

    // --- Interaction Logic ---

    // Mobile Menu Logic
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Active Link Highlighting
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        // Simple check: if href matches current page filename
        if (link.getAttribute('href') === page) {
            link.classList.add('active');
        }
    });

    // WhatsApp Button Animation
    setTimeout(() => {
        const waBtn = document.getElementById('waBtn');
        if (waBtn) {
            waBtn.style.animation = 'none';
            waBtn.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        }
    }, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Define Page-Specific Meta Data
    const defaultImage = "assets/img/logo.png"; // Set Logo as Social Sharing Image
    const defaultType = "website";

    const pageMeta = {
        "index.html": {
            title: "محمد النجار | استشارات بحثية وحلول إحصائية متكاملة",
            description: "طريقك للتميز في البحث العلمي. أقدم استشارات بحثية، تحليل إحصائي (SPSS, R)، ودورات تدريبية متخصصة لمساعدتك في نشر أبحاثك في مجلات عالمية.",
            url: "https://muhamedelnaggar.com/"
        },
        "about.html": {
            title: "عن محمد النجار | باحث واستشاري إحصائي",
            description: "تعرف على رحلة محمد النجار في المعلوماتية الحيوية والإحصاء الحيوي. خبرة تزيد عن 6 سنوات في مساعدة الباحثين وطلاب الدراسات العليا.",
            url: "https://muhamedelnaggar.com/about"
        },
        "stats.html": {
            title: "خدمات التحليل الإحصائي | SPSS, R, Meta-Analysis",
            description: "خدمات تحليل إحصائي احترافية لرسائل الماجستير والدكتوراه. نغطي كافة أنواع التحليلات باستخدام SPSS و R و GraphPad Prism بدقة علمية عالية.",
            url: "https://muhamedelnaggar.com/stats"
        },
        "podcast.html": {
            title: "بودكاست ومصادر تعليمية | محمد النجار",
            description: "مكتبة شاملة من الفيديوهات التعليمية، المقالات، والبودكاست حول البحث العلمي، الإحصاء، وكيفية كتابة الأوراق العلمية ونشرها.",
            url: "https://muhamedelnaggar.com/podcast"
        },
        "advising.html": {
            title: "حجز استشارة بحثية | جلسة خاصة (Zoom)",
            description: "احجز جلسة استشارية خاصة لمدة 60 دقيقة لمناقشة مشروعك البحثي، حل المشكلات الإحصائية، أو الحصول على توجيه أكاديمي مخصص.",
            url: "https://muhamedelnaggar.com/advising"
        }
    };

    // Determine current page
    const path = window.location.pathname;
    let page = path.split("/").pop() || "index.html";
    if (page === "") page = "index.html"; // Handle root path

    // Fallback to index if page not found in map (or handle 404 conceptually)
    const currentMeta = pageMeta[page] || pageMeta["index.html"];

    // 2. Set Favicon Dynamically
    let link = document.querySelector("link[rel~=\"icon\"]");
    if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
    }
    link.href = "assets/img/logo.png";

    // 3. Update Page Title
    document.title = currentMeta.title;

    // 4. Function to create/update meta tags
    function setMeta(name, content, attribute = "name") {
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        if (!element) {
            element = document.createElement("meta");
            element.setAttribute(attribute, name);
            document.head.appendChild(element);
        }
        element.setAttribute("content", content);
    }

    // 5. Inject Standard Meta Tags
    setMeta("description", currentMeta.description);
    setMeta("keywords", "تحليل إحصائي, بحث علمي, استشارات بحثية, مراجعة منهجية, كورسات إحصاء حيوي, Systematic Review, Biostatistics, SPSS, R programming");
    setMeta("author", "Muhamed Elnaggar");

    // 6. Inject Open Graph (Social Media) Tags
    setMeta("og:title", currentMeta.title, "property");
    setMeta("og:description", currentMeta.description, "property");
    setMeta("og:image", window.location.origin + "/" + defaultImage, "property");
    setMeta("og:url", currentMeta.url, "property");
    setMeta("og:type", defaultType, "property");
    setMeta("og:site_name", "Muhamed Elnaggar - Research Consultant", "property");

    // 7. Inject Twitter Card Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", currentMeta.title);
    setMeta("twitter:description", currentMeta.description);
    setMeta("twitter:image", window.location.origin + "/" + defaultImage);

    // 8. Inject JSON-LD Structured Data
    const schemaScript = document.createElement("script");
    schemaScript.type = "application/ld+json";
    schemaScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Muhammed Elnaggar",
        "jobTitle": "Statistical Consultant",
        "description": currentMeta.description,
        "url": currentMeta.url,
        "image": window.location.origin + "/" + defaultImage,
        "sameAs": [
            "https://www.youtube.com/@muhamedelnaggar",
            "https://www.linkedin.com/in/muhamedelnaggar",
            "https://www.facebook.com/Biostats.muhamedelnaggar"
        ]
    });
    // Remove old schema if exists to avoid duplicates (optional, but good practice)
    const oldSchema = document.querySelector("script[type=\"application/ld+json\"]");
    if (oldSchema) oldSchema.remove();
    document.head.appendChild(schemaScript);

    // --- Interaction Logic ---

    // Mobile Menu Logic
    const menuBtn = document.getElementById("mobileMenuBtn");
    const navLinks = document.getElementById("navLinks");

    if (menuBtn && navLinks) {
        menuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
    }

    // Active Link Highlighting
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        // Simple check: if href matches current page filename
        if (link.getAttribute("href") === page) {
            link.classList.add("active");
        }
    });

    // WhatsApp Button Animation
    setTimeout(() => {
        const waBtn = document.getElementById("waBtn");
        if (waBtn) {
            waBtn.style.animation = "none";
            waBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
        }
    }, 3000);
});
