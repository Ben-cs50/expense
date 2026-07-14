const rawMessages = [];

export const receivesSmsWebhook = (req, res) => {
    console.log("Receives sms payload:", req.body);

    res.status(200).json({message:"Webhook received successfully"});
    
};
export const listRawMessages = (req, res) => {
  console.log(`[SMS] Listing ${rawMessages.length} raw messages`);
  res.status(200).json(rawMessages);
};