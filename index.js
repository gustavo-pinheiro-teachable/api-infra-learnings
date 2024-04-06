const express = require('express');
const app = express();

app.get('/health', (_req, res) => {
    return res.send('Its alive!');
});

const port = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log(`API Running on port ${port}`);
});
