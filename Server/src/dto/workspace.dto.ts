export class WorkSpaceDto{
    readonly name:string;
    readonly owner:string;
    readonly member_count:number;
    readonly members:Array<string>;
    readonly description:string;
}