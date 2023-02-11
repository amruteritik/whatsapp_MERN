
import express from "express";
import mongoose from "mongoose";
import Messages from "./dbMessages.js";
import Pusher from "pusher"
import Cors from "cors";
import dotenv from "dotenv";



mongoose.set("strictQuery", false);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(Cors());
dotenv.config();

const DB = process.env.DATABASE
mongoose.connect(DB);


const pusher = new Pusher({
    appId: "1549042",
    key: "37e584a20a86154c14fc",
    secret: "df4b32aec5fb53af4773",
    cluster: "mt1",
    useTLS: true
});


const db = mongoose.connection;

db.once("open", () => {
    console.log("DB connected");

    const msgCollection = db.collection("messagecontents");
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {

        if (change.operationType === "insert") {
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timeStamp: messageDetails.timeStamp,
                recieved: messageDetails.recieved
            });
        } else {
            console.log("Error Triggering Pusher");
        }

    });
});




app.get("/", (req, res) => { res.send("hello World") });

app.get("/messages/sync", (req, res) => {

    Messages.find((err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    })
});


app.post("/messages/new", (req, res) => {
    const dbMessage = req.body;

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(data);
        }
    })
})

if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client','build')))
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}



app.listen(port, () => { console.log("server has started at : " + port) })

