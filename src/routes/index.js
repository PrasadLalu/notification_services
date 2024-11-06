const router = require("express").Router();
const whatsappCtrl = require('../controllers/whatsapp');

router.post('/send-message', whatsappCtrl.sendMessages);

router.get("/health-check", (req, res) => {
  return res.send({ message: "App is running... " });
});

module.exports = router;
