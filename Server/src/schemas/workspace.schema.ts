import * as mongoose from 'mongoose';

export const WorkSpaceSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    owner: String,
    member_count:{
        type:Number,
        default:1
    },
    members:Array,
    description:{
        type:String,
        default:''
    }
});