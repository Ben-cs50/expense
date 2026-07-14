export const receivesSmsWebhook = (req, res) => {
    console.log("Receives sms payload:", req.body);

    res.status(200).json({message:"Webhook received successfully"});
    
};