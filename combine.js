const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const tabs = {
    'hospital': ['principle', 'history', 'doctors', 'floor', 'art', 'map'],
    'minish': ['about', 'ultraprecision', 'fit', 'cases'],
    'system': ['oneday', 'clean', 'global'],
    'center': ['implant', 'ortho', 'whitening'],
    'consult': ['reservation', 'online', 'review', 'global-reviews', 'handwritten-reviews'],
    'media': ['video', 'news', 'instagram']
};

const tabTitles = {
    'hospital': '병원소개 | 화이트스타일치과 WHINISH PREMIUM',
    'minish': 'WHINISH | 화이트스타일치과 프리미엄',
    'system': '시스템 | 화이트스타일치과',
    'center': '진료과목 | 화이트스타일치과',
    'consult': '상담/예약 | 화이트스타일치과',
    'media': '미디어 | 화이트스타일치과'
};

const rootDir = __dirname;

async function combineFiles() {
    for (const [folder, files] of Object.entries(tabs)) {
        let combinedMainHtml = '';
        let headHtml = '';
        
        for (const file of files) {
            const filePath = path.join(rootDir, folder, `${file}.html`);
            if (fs.existsSync(filePath)) {
                console.log(`Reading ${filePath}...`);
                const html = fs.readFileSync(filePath, 'utf-8');
                const dom = new JSDOM(html);
                const document = dom.window.document;
                
                // Extract styles specific to this page
                const styles = document.querySelectorAll('style');
                styles.forEach(style => {
                    headHtml += style.outerHTML + '\n';
                });
                
                // Extract scripts specific to this page
                const scripts = document.querySelectorAll('script:not([src])');
                
                // Extract main content
                const main = document.querySelector('main');
                if (main) {
                    let sectionHtml = `<div id="${file}" class="tab-section" style="padding-top: 80px; margin-top: -80px;">\n`;
                    sectionHtml += main.innerHTML;
                    
                    // append scripts inside the section so they still execute if they are simple inline scripts
                    scripts.forEach(script => {
                        sectionHtml += '\n' + script.outerHTML;
                    });
                    
                    sectionHtml += '\n</div>\n<hr style="border-top: 1px solid var(--border-color); margin: 0;">\n';
                    combinedMainHtml += sectionHtml;
                }
            } else {
                console.warn(`File not found: ${filePath}`);
            }
        }
        
        // Create the combined index.html for this folder
        const template = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${tabTitles[folder]}</title>
    <link rel="stylesheet" href="../assets/css/index.css">
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
    <style>
        html { scroll-behavior: smooth; }
        .tab-section { min-height: 100vh; }
    </style>
    ${headHtml}
</head>
<body>
    <header id="main-header"></header>
    <main>
        ${combinedMainHtml}
    </main>
    <footer id="main-footer"></footer>
    <script src="../assets/js/main.js"></script>
    <script>
        // Smooth scrolling for hash links to offset for fixed header
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                const targetEl = document.querySelector(targetId);
                if(targetEl) {
                    e.preventDefault();
                    window.scrollTo({
                        top: targetEl.offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>
</body>
</html>`;

        const outPath = path.join(rootDir, folder, 'index.html');
        fs.writeFileSync(outPath, template, 'utf-8');
        console.log(`Created ${outPath}`);
    }
}

combineFiles().catch(console.error);
