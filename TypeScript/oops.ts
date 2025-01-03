

 export class person{

    // data-member

    pid:number=101;
    pname:string="jai";
    paddress:string="chennai";


    //member-function

    constructor(id:number,name:string,addr:string)

{
    this.pid=id;
    this.pname=name;
    this.paddress=addr;
}

    personDetails()
    {
        console.log(`Id:${this.pid} Name:${this.pname} Address: ${this.paddress}`);
    }

}

//let objperson=new person(103,"jaidhnaush","manali");

// console.log(objperson.pname);
// objperson.personDetails();

