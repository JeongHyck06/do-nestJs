import { Request, Response } from 'express';
import { Cat, CatType } from './cats.model';

export const readAllcat = (req: Request, res: Response) => {
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
};
//* read 특정 고양이 데이터 조회
export const readPartialcat = (req: Request, res: Response) => {
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
};

//* create 새로운 고양이 추가 api
export const createCat = (req: Request, res: Response) => {
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
};

//* Update 고양이 데이터 업데이트
export const updateCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = body;
                result = cat;
            }
        });
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
};

//* update 고양이 부분 업데이트
export const updatepartialCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const body = req.body;
        let result;
        Cat.forEach((cat) => {
            if (cat.id === params.id) {
                cat = { ...cat, ...body };
                result = cat;
            }
        });
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
};

//* 고양이 삭제
export const deleteCat = (req: Request, res: Response) => {
    try {
        const params = req.params;
        const newCat = Cat.filter((cat) => {
            cat.id !== params.id;
        });
        res.status(200).send({
            succese: true,
            data: newCat,
        });
    } catch (error: any) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
};
