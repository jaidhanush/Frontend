function checkData() {

//window.alert("hii");
//let uname=document.getElementById("fname").value;

let uname = document.myform;
let uedu = document.myform.edu;


let regName ="^[a-zA-Z]{3,20}$";
if(uname.trim()==="")
{
    window.alert("Fullname Required");
    document.getElementById("fname").focus();
    return false;
}
if(!uname.trim.match(regname))
    {
        window.alert("Fullname must Contain min-3 and max-20");
        document.getElementById("fname").focus();
        return false;
    }
    
if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false )
    {
        window.alert("Please Select Your Qualification");
        return false;
    }
    



}
