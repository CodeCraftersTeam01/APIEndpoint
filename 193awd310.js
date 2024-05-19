// server.js
const express = require('express');
const cors = require('cors'); // Import the cors package
const app = express();
const port = 3000;

app.use(cors()); // Use the cors middleware

app.get('/get-script', (req, res) => {
    const script = `
        setTimeout(() => {
            document.getElementById("developed").innerHTML = "Developed by <b>Arjuna Lanang Adiwarsana (XI RPL)</b>";
        }, 100);
        function P193awd310(){
            document.getElementById("developed").innerHTML = "Developed by <b>Arjuna Lanang Adiwarsana (XI RPL)</b>";
        }
    `;
    res.send(script);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});