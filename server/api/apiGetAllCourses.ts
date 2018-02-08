import {Request, Response} from 'express';
import {findAllCourses} from "../queries/findAllCourses";
import * as _ from 'lodash';

export function apiGetAllCourses(req: Request, res: Response) {
findAllCourses()
    .then(results => {
        res.status(200).json({results});
    })
    .catch(_.partial(onError, res, "Find all courses failed"));
}

function onError(res:Response, message: string, err:any) {
    console.error("Promise chain error", message, err);
    res.status(500).send();
}