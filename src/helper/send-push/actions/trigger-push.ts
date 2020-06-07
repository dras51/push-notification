import { webPush } from '../../../index'

const triggerPush = async (subscriptions: Array<webPush.PushSubscription>, dataToSend: string | Buffer) => {
  for (let i = 0; i < subscriptions.length; i++) {
    const subscription: webPush.PushSubscription = subscriptions[i];
    return webPush.sendNotification(subscription, dataToSend)
  }
}

export default triggerPush