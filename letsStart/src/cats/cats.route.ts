import { Cat, CatType } from './cats.model';
import { Router } from 'express';

const router = Router();

router.get('/cats', (req, res) => {
    try {
        const cats = Cat;
        res.send({
            successs: true,
            data: {
                cats,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
//* read 특정 고양이 데이터 조회
router.get('/cats/:id', (req, res) => {
    try {
        const params = req.params;
        console.log(params);
        const cats = Cat.find((cat) => {
            return cat.id === params.id;
        });
        res.send({
            successs: true,
            data: {
                cats,
            },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

//* create 새로운 고양이 추가 api
router.post('/cats', (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        Cat.push(data);
        res.status(200).send({
            success: true,
            data: { data },
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});

export default router;
