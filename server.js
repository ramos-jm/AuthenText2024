const express = require("express");
const axios = require('axios');
const multer = require('multer');
const path = require("path");
const FormData = require('form-data');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'AutthenTextAI-NEU/ATAI-Interface/Homepage')));

app.use('/homepage', express.static(path.join(__dirname, 'AutthenTextAI-NEU/ATAI-Interface/Homepage')));

// Serve static files from the Product directory
app.use('/product', express.static(path.join(__dirname, 'AutthenTextAI-NEU/ATAI-Interface/Product')));

// Serve static files from the ATAI_Information directory
app.use('/atai-information', express.static(path.join(__dirname, 'AutthenTextAI-NEU/ATAI-Interface/ATAI_Information')));




app.use(bodyParser.json());

app.post('/api/detect/detectText', async (req, res) => {
    try {
        const inputText = req.body.input_text;
        const apiKey = ""; // Replace with your API key
        const apiUrl = "https://api.zerogpt.com/api/detect/detectText";

        // Dynamic import for node-fetch
        const fetch = await import('node-fetch').then(mod => mod.default);

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'ApiKey': apiKey
            },
            body: JSON.stringify({ input_text: inputText })
        });
        
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});



const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/detect/detectFile', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    const fileData = req.file.buffer; // Get file buffer data
    const url = "https://api.zerogpt.com/api/detect/detectFile";

    const data = new FormData();
    data.append('file', fileData, { filename: req.file.originalname });

    const headers = {
        'ApiKey': '',
        'Authorization': 'Bearer ',
        ...data.getHeaders()
    };

    axios.post(url, data, { headers })
    .then(resp => {
        console.log(resp.data);
        res.send(resp.data);
    })
    .catch(error => {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Internal server error' });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
