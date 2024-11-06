const axios = require("axios");

exports.sendMessages = async (req, res) => {
  const whatsappApiUrl = process.env.WHATSAPP_URL;
  const whatsappAccessToken = process.env.WHATSAPP_TOKEN;
  const { message, members } = req.body;

  for (let i = 0; i < members.length; i++) {
    const member = members[i];
    const payload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: member.number,
      type: "text",
      text: {
        body: `Hi ${member.name}, ${message}`,
      },
    };

    try {
      const response = await axios.post(whatsappApiUrl, payload, {
        headers: {
          Authorization: `Bearer ${whatsappAccessToken}`,
          "Content-Type": "application/json",
        },
      });
      console.log("Message sent:", response.data);
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response ? error.response.data : error.message
      );
    }
  }
  return res.send({ message: "success" });
};
