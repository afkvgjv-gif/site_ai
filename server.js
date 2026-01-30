
const express=require("express");
const cors=require("cors");
require("dotenv").config();

const app=express();
app.use(cors());
app.use(express.json());

app.post("/chat",(req,res)=>{
  res.json({reply:"🤖 AI PRO response (ready for OpenAI API)"});
});

app.listen(5000,()=>console.log("AI PRO Backend running"));
