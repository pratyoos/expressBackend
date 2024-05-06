//get post and put request using express
const { log } = require('console');
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.post('/post', (req, res) => {
    console.log("This is a Post Req");
    res.send('Post request');
}

);
app.put('/put', (req, res) => {
    res.send('Put request');
}
);

app.get('/index', (req, res) => {
    res.sendFile('/templates/about.html',{root:__dirname});
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