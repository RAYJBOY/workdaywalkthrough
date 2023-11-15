import express, {Express, Request, Response} from 'express'

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello from express 45.0')
});

app.listen(8000, () => {
    console.log('Now listening on port 8000')
})