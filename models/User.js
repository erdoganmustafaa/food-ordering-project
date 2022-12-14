import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        fullName:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true,
        },
        password:{
            type:String,
            requried:true,
           
        },
        confirmPassword:{
            type:String,
            requried:true,   
        },
        phoneNumber:{
            type:String,
            
        },
        address:{
            type:String,
           
        },
        job:{
            type:String, 
        },
        bio:{
            type:String,
        },
        
    },
    {timestamps:true}
);

export default mongoose.models.User || mongoose.model("User",UserSchema);