import mongoose from "mongoose";
const { Schema } = mongoose;

const GigSchema = new Schema({
 userId:{
    type:String,
    required:true,
 },
 desc:{
    type:String,
    required:true,
 },
 totalStars:{
    type:Number,
    default:0,
 },
 starNumber:{
    type:Number,
    default:0,
 },
 cat:{
    type:String,
    required:true,
 },
 cover:{
    type:Number,
    required:true,
 },
 images:{
    type:[String],
    required:false,
 },
 shortTitle:{
    type:String,
    required:true,
 },
 sortDesc:{
    type:String,
    required:true,
 },
 deliveryTime:{
    type:Number,
    required:true,
 },
 revisionNUmber:{
    type:Number,
    required:true,
 },
 features:{
    type:[String],
    required:false,
 },
 userId:{
    type:String,
    required:true,
 },
 sale:{
    type:Number,
    default:0,
 },
},{
    timestamps:true
});

export default mongoose.model("Gig",GigSchema)
