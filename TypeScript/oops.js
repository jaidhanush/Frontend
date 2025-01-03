"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    //member-function
    function person(id, name, addr) {
        // data-member
        this.pid = 101;
        this.pname = "jai";
        this.paddress = "chennai";
        this.pid = id;
        this.pname = name;
        this.paddress = addr;
    }
    person.prototype.personDetails = function () {
        console.log("Id:".concat(this.pid, " Name:").concat(this.pname, " Address: ").concat(this.paddress));
    };
    return person;
}());
exports.person = person;
//let objperson=new person(103,"jaidhnaush","manali");
// console.log(objperson.pname);
// objperson.personDetails();
