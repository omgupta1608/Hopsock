import * as mongoose from 'mongoose';

export const NoticeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    postdate:String,
    postedby:String,
    type:String
});