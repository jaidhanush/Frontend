import iEmployee from "./interface";

class organization implements iEmployee{
    empId: number;
    empName: string;
    empContact: number;


    constructor(id:number,name:string,contact:number)
    {
        this.empId=id;
        this.empName=name;
        this.empContact=contact;
    }

    employeeDetails(): string {
        return `Id:${this.empId} Name:${this.empName} Contact:${this.empContact}`
    }
}

let organiObj=new organization(501,"jaidhanush",768745676);
console.log(organiObj.employeeDetails());