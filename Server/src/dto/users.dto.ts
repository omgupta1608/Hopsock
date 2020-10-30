export class UserDto{
    readonly username:string;
    readonly name:string;
    readonly profile_pic_url: string;
    readonly own_workspaces: Array<string>;
    readonly others_workspaces: Array<string>;
    readonly password: string;
    readonly email: string;
    readonly todo_list_count:number;
    readonly todos:Array<string>;
}