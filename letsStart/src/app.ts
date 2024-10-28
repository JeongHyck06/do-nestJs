import * as express from 'express';
import catsRouter from './cats/cats.route';
const app: express.Express = express();

//* logging middleware
app.use((req, res, next) => {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
});

//* json middleware
app.use(express.json());

app.use(catsRouter);
//* read 고양이 데이터 전체 다 조회

//* 404 middleware
app.use((req, res, next) => {
    console.log('this is error middleware');
    res.send({ error: '404 not found' });
    next();
});
app.listen(8000, () => {
    console.log('server is on...');
});
