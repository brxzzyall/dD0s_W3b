function startAttack() {
    fetch('http://<command_server_ip>:3000/start', {
        method: 'POST'
    }).then(response => response.text())
      .then(data => {
        alert(data);
      });
}

function stopAttack() {
    fetch('http://<command_server_ip>:3000/stop', {
        method: 'POST'
    }).then(response => response.text())
      .then(data => {
        alert(data);
      });
}
