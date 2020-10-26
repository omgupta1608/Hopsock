export interface UserInterface{
    username: string,
    name: string,
    profile_pic_url: string,
    own_workspaces: Array<string>,
    others_workspaces: Array<string>,
    password: string,
    todo_list_count:number,
    todos:Array<string>
} 