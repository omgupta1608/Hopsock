export interface UserInterface{
    id?:string,
    username: string,
    name: string,
    profile_pic_url: string,
    own_workspaces: Array<string>,
    others_workspaces: Array<string>,
    password: string,
    email:string,
    todo_list_count:number,
    todos:Array<string>
} 