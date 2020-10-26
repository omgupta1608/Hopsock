import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    name: String,
    profile_pic_url: {
        type: String,
        default: ''
    },
    own_workspaces: Array,
    others_workspaces: Array,
    password: String,
    todo_list_count: {
        type: Number,
        default: 0
    },
    todos:Array
});