import { Request, Response, NextFunction } from 'express'
import triggerPush from './trigger-push'

const sendpush = async (req: Request, res: Response, next: NextFunction) => {
    try {
        triggerPush(req.body.subscriptions, req.body.payload);
        res.status(200).json({
            status: 'success'
        })
    } catch (err) {
        res.status(err.statusCode).json({
            status: 'fail',
            message: err.message
        })
    }

}

export default sendpush
