const mongoose=require("mongoose");

const DB="mongodb+srv://BePositive:BePositive@cluster0.twnyx.mongodb.net/Bepositive?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log("Connection start")).catch((error)=>console.log(error.message));
