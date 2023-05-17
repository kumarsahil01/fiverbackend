import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderSchema = new Schema({
   gigId:{
    type:String,
    requires:true,
   },
   img:{
    type:String,
    requires:false,
   },
   title:{
    type:Number,
    requires:true,
    enum:[1,2,3,4,5],
   },
   price:{
    type:Number,
    requires:true,
   },
   sellerId:{
    type:String,
    requires:true,
   },
   buyerId:{
    type:String,
    requires:true,
   },
   isCompleted:{
    type:Boolean,
    default:false,
   },
   payment_intent:{
    type:String,
    required:true
   },
   
},{
    timestamps:true
});

export default mongoose.model("Order",OrderSchema)
