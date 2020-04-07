var push = require('web-push');

let vapidKeys = {
    publicKey: 'BKkCjrbmEeeUSRxFxP7pxGkremRsnBruGbj3fn6-JbgZIi8igQnP3QxpSLCstZURPtt1SoO77a3UMAG4GliFV0k',
    privateKey: 'OzqE5-L4dsRXeoOem3Lyy2vE64DmvKekibb58sjGvFo'
};

push.setVapidDetails('mailto:s.voronin@bdo.ru', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = { "endpoint": "https://fcm.googleapis.com/fcm/send/epWN4OslQaQ:APA91bFoamh4254kaf8KH3N0EDiF-JEApat2nPaRjRoDbyWA4L5mHQLrx_n6NFibvv7YiwBg9XMWpMMYwNiGHT0kf-r9qyEm6zT8Uyosz7jCpo6WNVP9Bij1e98hg3igFq34SmzyW4sL", "expirationTime": null, "keys": { "p256dh": "BMpruk4EajnEYzNGjP9yujEvKxKTcSIbUYh2DQhrp3mXVcSGouyxnCkQZy1DswBA48IdpIyfiplhYBwPd1NMINs", "auth": "K0rZx4C8Vk5qOVeWkmHZqQ" } };

push.sendNotification(sub, 'test message');