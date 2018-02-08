import {Request, Response} from 'express';
import * as _ from 'lodash';
import {createLesson} from '../queries/createLesson';
import {onError} from "./onError";
import {onSuccess} from "./onSuccess";

const hri = require('human-readable-ids').hri;

export function apiCreateLesson(req:Request, res:Response) {
    createLesson(req.body)
        .then(_.partial(onSuccess, res))
        .catch(err => {
            const id = hri.random();
            console.error("Database error occurred ", id, err);
            res.status(500).json({code: 'ERR-002', message: `Creation of lesson failed, error code ${id}`});
        })
        .catch(_.partial(onError, res, 'Could not create lesson'));
}