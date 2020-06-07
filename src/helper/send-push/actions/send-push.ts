import { Request, Response, NextFunction } from 'express'
import triggerPush from './trigger-push'

const sendpush = async (req: Request, res: Response, next: NextFunction) => {
    triggerPush(req.body.subscriptions, req.body.payload);
    res.status(200).json({
        status: 'success'
    })
}

export default sendpush