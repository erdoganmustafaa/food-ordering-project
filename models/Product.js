import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            maxlength:100,
            required:true,
        },
        description:{
            type:String,
            maxlength:1000,
            required:true,
        },
        prices:{
            type:[Number],
            required:true,

        },
        category:{
            type:String,
            required:true,
            
        },
        img:{
            type:String,
            required:true,
           

        },
        /* Sıkıntı çıkardığı için sildik.
        extraOptions:{
            type:[{
                text:{type:String},
                price:{type:Number},
            }]
        }*/
        
        
    },
    {timestamps:true}
);

export default mongoose.models.Product || mongoose.model("Product",ProductSchema);