var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var School = (function () {
    function School() {
    }
    School.prototype.setName = function (Name) {
        this.Name = Name;
    };
    School.prototype.setFName = function (Father_Name) {
        this.Father_Name = Father_Name;
    };
    School.prototype.setClass = function (Class) {
        this.Class = Class;
    };
    School.prototype.setLclass = function (Last_Class) {
        this.Last_Class = Last_Class;
    };
    School.prototype.setLpassingMarks = function (Last_passing_marks) {
        this.Last_passing_marks = Last_passing_marks;
    };
    School.prototype.setRollNumber = function (Roll_No) {
        this.Roll_No = Roll_No;
    };
    School.prototype.getName = function () {
        return this.Name;
    };
    School.prototype.getFName = function () {
        return this.Father_Name;
    };
    School.prototype.getClass = function () {
        return this.Class;
    };
    School.prototype.getLclass = function () {
        return this.Last_Class;
    };
    School.prototype.getLpassingMarks = function () {
        return this.Last_passing_marks;
    };
    School.prototype.getRollNumber = function () {
        return this.Roll_No;
    };
    return School;
}());
var fee = (function (_super) {
    __extends(fee, _super);
    function fee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    fee.prototype.setAdmission_Fee = function (Admission_Fee) {
        this.Admission_Fee = Admission_Fee;
    };
    fee.prototype.setMonthly_Fee = function (Monthly_Fee) {
        this.Monthly_Fee = Monthly_Fee;
    };
    fee.prototype.setExtracirculum_Fee = function (Extracirculum_Fee) {
        this.Extracirculum_Fee = Extracirculum_Fee;
    };
    fee.prototype.setGame_Fee = function (Game_Fee) {
        this.Game_Fee = Game_Fee;
    };
    fee.prototype.getAdmission_Fee = function () {
        return this.Admission_Fee;
    };
    fee.prototype.getMonthly_Fee = function () {
        return this.Monthly_Fee;
    };
    fee.prototype.getExtracirculum_Fee = function () {
        return this.Extracirculum_Fee;
    };
    fee.prototype.getGame_Fee = function () {
        return this.Game_Fee;
    };
    return fee;
}(School));
var Marks = (function (_super) {
    __extends(Marks, _super);
    function Marks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Marks.prototype.setEngmarks = function (english) {
        this.english = english;
    };
    Marks.prototype.setPhymarks = function (physics) {
        this.physics = physics;
    };
    Marks.prototype.getEngmarks = function () {
        return this.english;
    };
    Marks.prototype.getPhymarks = function () {
        return this.physics;
    };
    Marks.prototype.getPhyStatus = function () {
        if (this.getPhymarks() >= 50) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    };
    Marks.prototype.getEngStatus = function () {
        if (this.getEngmarks() >= 50) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    };
    return Marks;
}(fee));
var report = new Marks();
report.setName(prompt("Enter Student Name"));
report.setFName(prompt("Enter Father's Name"));
report.setClass(parseInt(prompt("Enter Class")));
report.setLclass(parseInt(prompt("Enter Last Class")));
report.setRollNumber(parseInt(prompt("Enter Roll NUmber")));
report.setAdmission_Fee(parseInt(prompt("Enter Admission Fee")));
report.setMonthly_Fee(parseInt(prompt("Enter Monthly Fee")));
report.setExtracirculum_Fee(parseInt(prompt("Enter Extracirculum Fees")));
report.setGame_Fee(parseInt(prompt("Enter Game Fee")));
report.setEngmarks(parseInt(prompt("Enter Marks obtained in English")));
report.setPhymarks(parseInt(prompt("Enter Marks obtained in Phycics")));
console.log("Student Name = " + report.getName());
console.log("Father's Name = " + report.getFName());
console.log("Class = " + report.getLclass());
console.log("Last Class = " + report.getLclass());
console.log("Last Passing Marks = " + report.getLpassingMarks());
console.log("Roll Number = " + report.getRollNumber());
console.log("Admission Fee = " + report.getAdmission_Fee());
console.log("Monthly Fee = " + report.getMonthly_Fee());
console.log("Extracirculum Fee = " + report.getExtracirculum_Fee());
console.log("Game Fee = " + report.getGame_Fee());
console.log("Marks in English = " + report.getEngmarks());
console.log("Marks in Physics = " + report.getPhymarks());
console.log("Status in English = " + report.getEngStatus());
console.log("Status in Phycics = " + report.getPhyStatus());
