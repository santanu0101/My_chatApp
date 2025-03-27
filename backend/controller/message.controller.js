import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";


//send message
export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: reciverId } = req.params;
    const senderId = req.user._id; //currently loged in user        

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, reciverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, reciverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId: reciverId,
      message,
    });

    if (newMessage) {
      //   await newMessage.save();
      conversation.messages.push(newMessage._id);
      //   await conversation.save();
    }
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json({newMessage });

  } catch (error) {
    console.log("Error in sending message " , error);
    res.status(500).json({ error: "Internal server error message" });
  }
};

//get message
export const getMessage = async (req, res)=>{
  try {
    //old messages
    const { id: chatuser } = req.params;
    const senderId = req.user._id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, chatuser] },
      }).populate("messages");
    
    if(!conversation){
      return res.status(201).json([])
    }
    const messages = conversation.messages;
    res.status(201).json(messages);

  } catch (error) {
    console.log("message getting error "+ error)
    res.status(500).json({ message: "Internal server error" });
  }
}
