const express = require('express');
const app = express();

app.get('/student-details', (req, res) => {
    res.json({
        name: "Your Name",
        roll: "Your Roll No",
        register: "Your Register No"
    });
});

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});