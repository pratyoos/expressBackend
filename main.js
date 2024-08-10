import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import data from './data.json' assert { type: 'json' };

const app = express();
dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'templates', 'main.jpg');
    res.download(file, (err) => {
        if (err) {
            console.error("File download error:", err);
            res.status(500).send("Error downloading file");
        }
    });
});

app.post('/post', (req, res) => {
    console.log("This is a Post Request");
    res.send('Post request received');
});

app.put('/put', (req, res) => {
    console.log("This is a Put Request");
    res.send('Put request received');
});

app.get('/', (req, res) => {
    console.log("This is a Get Request");
    res.send('Get request received');
});

app.get('/api', async (req, res) => {
    console.log("This is a Get Request for API");
    try {
        res.json(data);
    } catch (err) {
        console.error("Error loading data:", err);
        res.status(500).send("Error retrieving data");
    }
});

app.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});