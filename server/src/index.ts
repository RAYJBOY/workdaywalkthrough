import express from 'express'

const app: express.Application = express();

app.get('/users', (req: express.Request, res:express.Response) => {
    res.send('got users all...')
    console.log('something');
});

app.listen(5000, () => console.log('Listening on port 5000...'))