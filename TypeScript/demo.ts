console.log("welcome you all ");

//1.String data type
let fname:string;
fname="santhosh";
let lname:string="perumal";
console.log(`FirstName:${fname} LastName:${lname}`);

//2.Number
let num1:number=100,num2:number=0.5,num3:number=123456;
console.log(num1,num2,num3);

//3.boolean
let cond1:boolean=true,cond2:boolean=false;
console.log(cond1,cond2);


//4.Array
let courses:string[]=["html","css","js","react"];
let courses1:Array<string>=["html","js","react"];
let pincode:number[]=[4572,4573,4574];
console.log(courses,pincode);


//5.tupple:it allows us to store multiple type of data into array

let product:[number,string,boolean]=[100,"Santo",true]


//6.enum:it create variable with constant values
enum days{sun,mon,tue,wed,thur,fri,sta};
let data1=days.sun;


//7.union:it allows us to store multiple values in single variable
let info:number |string |boolean= "Santo";

//8.any:when we don't what type of data is going to store in variable in that case we use it.
let mix:any= "Hello";


