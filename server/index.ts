import express, {Express, Request, Response} from 'express'

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('hello from express 486.0')
});

app.listen(8080, () => {
    console.log('Now listening on port 8080')
})