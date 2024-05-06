const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"));

app.post('/post', (req, res) => {
    console.log("This is a Post Req");
    res.send('Post request');
}
);

app.put('/put', (req, res) => {
    console.log("This is a Put Req");
    res.send('Put request');
}
);

app.get('/index', (req, res) => {
    console.log("This is a Get Req");
    res.send('Get Request');
}
);

app.get('/api', (req, res) => {
    console.log("This is a Get Req");
    res.json({
        message: 'Get Request',
        status: 200,
        data: {
            name: 'Rahul',
            age: 22
        }
    });
}
);

app.get('/google', (req, res) => {
    res.redirect('https://www.google.com');
}
);

app.get('/download', (req, res) => {
    res.download('/templates/main.jpg',{root:__dirname});
}
);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
}
);