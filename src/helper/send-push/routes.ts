import express from 'express';
import sendpush from './actions/send-push'
const router = express.Router()

router.post('/sendpush', sendpush)
export default router