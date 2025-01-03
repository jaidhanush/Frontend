"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var organization = /** @class */ (function () {
    function organization(id, name, contact) {
        this.empId = id;
        this.empName = name;
        this.empContact = contact;
    }
    organization.prototype.employeeDetails = function () {
        return "Id:".concat(this.empId, " Name:").concat(this.empName, " Contact:").concat(this.empContact);
    };
    return organization;
}());
var organiObj = new organization(501, "jaidhanush", 768745676);
console.log(organiObj.employeeDetails());
