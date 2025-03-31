const sendMessage = (req,res)=>{
    res.send("Send message Successfully");
}
const UnsendMessage = (req,res)=>{
    res.send("UnSend message Successfully");
}
const getMessage = (req,res)=>{
    res.send("Get message Successfully");
}
const getAllMessage = (req,res)=>{
    res.send("Get all message Successfully");
}
const ReadMessage = (req,res)=>{
    res.send("Read message Successfully");
}
const DeleteMessage = (req,res)=>{
    res.send("Deleted message Successfully");
}

export { sendMessage, UnsendMessage, getMessage, getAllMessage, ReadMessage, DeleteMessage };
