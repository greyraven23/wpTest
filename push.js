var push = require('web-push');

let vapidKeys = {
    publicKey: 'BKkCjrbmEeeUSRxFxP7pxGkremRsnBruGbj3fn6-JbgZIi8igQnP3QxpSLCstZURPtt1SoO77a3UMAG4GliFV0k',
    privateKey: 'OzqE5-L4dsRXeoOem3Lyy2vE64DmvKekibb58sjGvFo'
};

push.setVapidDetails('mailto:s.voronin@bdo.ru', vapidKeys.publicKey, vapidKeys.privateKey);

let sub = {};

push.sendNotification(sub, 'test message');