import express, {Express, Request, Response} from 'express'
const mysql2 = require('mysql2');

const app: Express = express();

const db = mysql2.createConnection({
    user: 'root',
    host: 'winhost',
    password: 'root',
    database: 'workdaywalkthrough'
})

app.get('/', (req: Request, res: Response) => {
    db.query('INSERT INTO users (username, password, isEmployer) VALUES ("userTwo", "passwordTwo", 1)', (error: any, result: any) => {
        if(error) {
            console.log('Error putting values into db: ', error)
        }
        res.send(result);
    })
});

app.listen(8080, () => {
    console.log('Now listening on port 8080')
})
