import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
let options = { 
    useNewUrlParser: true ,
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: 'workers' 
}
try {
    await mongoose.connect("mongodb+srv://dbUser:adeyemi1@cluster0.azvyb.mongodb.net",options,()=>{
        console.log("connected to db")
    });
    
  } catch (error) {
    handleError(error);
  }
  

export default mongoose;