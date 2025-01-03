
import{person} from "./oops";

class Company extends person{
    cname:string;
    contact:number;
    empPost:string;

    constructor(id:number,name:string,addr:string,compname:string,contact:number,epost:string){
        super(id,name,addr);
        this.cname=compname;
        this.contact=contact;
        this.empPost=epost;
    }
    personDetails(){
        console.log(`EmpId:${this.pid} EmpName: ${this.pname} Post: ${this.empPost} 
            Company:${this.cname} Address:${this.paddress} Contact: ${this.contact}`)
    }
}

let compObj=new Company(201,"deva","chennai","Changepond",43687647567,"fullstack");
compObj.personDetails();