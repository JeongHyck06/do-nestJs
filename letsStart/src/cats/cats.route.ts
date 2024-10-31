import { Cat, CatType } from './cats.model';
import { Router } from 'express';
import { createCat, deleteCat, readAllcat, readPartialcat, updateCat, updatepartialCat } from './cats.service';

const router = Router();

router.get('/cats', readAllcat);
//* read 특정 고양이 데이터 조회
router.get('/cats/:id', readPartialcat);

//* create 새로운 고양이 추가 api
router.post('/cats', createCat);

//* Update 고양이 데이터 업데이트
router.put('/cats/:id', updateCat);

//* update 고양이 부분 업데이트
router.patch('/cats/:id', updatepartialCat);

//* 고양이 삭제
router.delete('/cats/:id', deleteCat);

export default router;

// mongodb+srv://jack:<db_password>@nestcluster.l4xtt.mongodb.net/
