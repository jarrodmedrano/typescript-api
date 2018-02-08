import {Request, Response, ErrorRequestHandler, NextFunction} from "express";

export const apiErrorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction ) => {
    console.error("Api error handler triggered", err);
    res.status(500).json({errorCode: 'ERR-001', message: 'Internal Server Error'})
};