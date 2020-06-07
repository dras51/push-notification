import express from 'express'
import sendPushRouter from './helper/send-push/routes'

const apiRoutes = express.Router();

apiRoutes.use('/push-api', sendPushRouter)

export default apiRoutes