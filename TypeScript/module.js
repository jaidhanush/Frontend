"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var oops_1 = require("./oops");
var Company = /** @class */ (function (_super) {
    __extends(Company, _super);
    function Company(id, name, addr, compname, contact, epost) {
        var _this = _super.call(this, id, name, addr) || this;
        _this.cname = compname;
        _this.contact = contact;
        _this.empPost = epost;
        return _this;
    }
    Company.prototype.personDetails = function () {
        console.log("EmpId:".concat(this.pid, " EmpName: ").concat(this.pname, " Post: ").concat(this.empPost, " \n            Company:").concat(this.cname, " Address:").concat(this.paddress, " Contact: ").concat(this.contact));
    };
    return Company;
}(oops_1.person));
var compObj = new Company(201, "deva", "chennai", "Changepond", 43687647567, "fullstack");
compObj.personDetails();
