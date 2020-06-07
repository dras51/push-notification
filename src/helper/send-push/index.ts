import webpush from 'web-push'

// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();
webpush.setVapidDetails(
    'mailto:davvido51@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  );
console.log(vapidKeys.privateKey, vapidKeys.publicKey);

export default webpush