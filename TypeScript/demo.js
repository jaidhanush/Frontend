console.log("welcome you all ");
//1.String data type
var fname;
fname = "santhosh";
var lname = "perumal";
console.log("FirstName:".concat(fname, " LastName:").concat(lname));
//2.Number
var num1 = 100, num2 = 0.5, num3 = 123456;
console.log(num1, num2, num3);
//3.boolean
var cond1 = true, cond2 = false;
console.log(cond1, cond2);
//4.Array
var courses = ["html", "css", "js", "react"];
var courses1 = ["html", "js", "react"];
var pincode = [4572, 4573, 4574];
console.log(courses, pincode);
//5.tupple:it allows us to store multiple type of data into array
var product = [100, "Santo", true];
//6.enum:it create variable with constant values
var days;
(function (days) {
    days[days["sun"] = 0] = "sun";
    days[days["mon"] = 1] = "mon";
    days[days["tue"] = 2] = "tue";
    days[days["wed"] = 3] = "wed";
    days[days["thur"] = 4] = "thur";
    days[days["fri"] = 5] = "fri";
    days[days["sta"] = 6] = "sta";
})(days || (days = {}));
;
var data1 = days.sun;
//7.union:it allows us to store multiple values in single variable
var info = "Santo";
//8.any:when we don't what type of data is going to store in variable in that case we use it.
var mix = "Hello";
