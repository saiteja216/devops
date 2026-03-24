const express = require('express');
const app = express();

app.get('/student-details', (req, res) => {
    res.json({
        name: "saiteja",
        roll: "2023BCS0211",
        register: "2023BCS0211",
    });
});

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});