import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.json({ 
        
        message: 'Hello World from TypeScript!',
        headers: req.headers,
        body: req.body,    
    });
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
