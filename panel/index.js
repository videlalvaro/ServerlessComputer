const fs = require("fs");
const path = require('path');

module.exports = async function (context, req) {
    let mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.jpg': 'image/jpeg',
        '.png': 'image/png',
        '.ico': 'image/x-icon',
        '.svg': 'image/svg+xml',
        '.eot': 'application/vnd.ms-fontobject',
        '.ttf': 'font/truetype'
      };

    const staticFolder = __dirname + "/../src/out";
    const reqFile = req.query.file || "index.html";
    const file = path.join(staticFolder, reqFile);
    const extname = path.extname(file);
    const relative = path.relative(staticFolder, path.dirname(file));
    const isSubdir = !relative.startsWith('..') && !path.isAbsolute(relative);
    const contentType = mimeTypes[extname] || "text/plain";

    console.log(`static folder: ${staticFolder}`);
    console.log(`file: ${file}`);
    console.log(`relative: ${relative}`);

    if (relative != "" && !isSubdir) {
        return {
            status: 403,
            body: "Forbidden",
            headers: {
                "Content-Type": "text/html"
            }
        }
    }

    try {
        const page = fs.readFileSync(file, "utf8")
        return {
            status: 200,
            body: page,
            headers: {
                "Content-Type": contentType
            }
        }
    } catch (error) {
        if (error.code == 'ENOENT') {
            return {
                status: 404,
                body: "File Not Found",
                headers: {
                    "Content-Type": "text/html"
                }
            }
        } else {
            return {
                status: 500,
                body: "Internal Server Error",
                headers: {
                    "Content-Type": "text/html"
                }
            }
        }
    }
};