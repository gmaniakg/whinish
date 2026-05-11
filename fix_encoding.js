const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory() && !file.includes('.git')) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.html') || file.endsWith('.js') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk('.');

files.forEach(file => {
    try {
        const buffer = fs.readFileSync(file);
        // Re-write as UTF-8 without BOM
        fs.writeFileSync(file, buffer, { encoding: 'utf8' });
        console.log(`Fixed: ${file}`);
    } catch (err) {
        console.error(`Error fixing ${file}:`, err);
    }
});
