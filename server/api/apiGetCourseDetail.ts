import {Request, Response} from 'express';
import * as _ from "lodash";
import {onSuccess} from "./onSuccess";
import {onError} from "./onError";
import {findCourseDetail} from "../queries/findCourseDetail";

export function apiGetCourseDetail(req:Request, res:Response) {
    const courseId = parseInt(req.params.id);
    findCourseDetail(courseId)
        .then(_.partial(onSuccess, res))
        .catch(_.partial(onError, res, "Find all courses failed"));
    ;
}