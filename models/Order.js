import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
    {
        customer:{
            type:String,
            maxlength:100,
            required:true,
        },
        adress:{
            type:String,
            maxlength:300,
            required:true,
        },
        total:{
            type:Number,
            required:true,

        },
        status:{
            type:Number,
            default:0,
            
        },
        method:{
            type:Number,
            required:true,
           

        },
    },
    {timestamps:true}
);

export default mongoose.models.Order || mongoose.model("Order",OrderSchema);