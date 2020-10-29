export interface WorkSpaceInterface{
    id?:string,
    name:string,
    owner:string,
    member_count:number,
    members:Array<string>
    description?:string
}