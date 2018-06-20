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
var bioData = (function () {
    function bioData() {
    }
    bioData.prototype.seteName = function (eName) {
        this.eName = eName;
    };
    bioData.prototype.seteFullname = function (eFullname) {
        this.eFullname = eFullname;
    };
    bioData.prototype.setfName = function (fName) {
        this.fName = fName;
    };
    bioData.prototype.setNic = function (Nic) {
        this.Nic = Nic;
    };
    bioData.prototype.setAttendence = function (aTTendence) {
        this.aTTendence = aTTendence;
    };
    bioData.prototype.setoverTimeallowance = function (overTimeallowance) {
        this.overTimeallowance = overTimeallowance;
    };
    bioData.prototype.geteName = function () {
        return this.eName;
    };
    bioData.prototype.geteFullname = function () {
        return this.eFullname;
    };
    bioData.prototype.getfName = function () {
        return this.fName;
    };
    bioData.prototype.getNic = function () {
        return this.Nic;
    };
    bioData.prototype.getaTTendence = function () {
        return this.aTTendence;
    };
    bioData.prototype.getoverTimeallowance = function () {
        return this.overTimeallowance;
    };
    return bioData;
}());
var salaryInfo = (function (_super) {
    __extends(salaryInfo, _super);
    function salaryInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    salaryInfo.prototype.setfixSalary = function (fixSalary) {
        this.fixSalary = fixSalary;
    };
    salaryInfo.prototype.setadvanceSalary = function (advanceSalary) {
        this.advanceSalary = advanceSalary;
    };
    salaryInfo.prototype.settravellingAllowance = function (travellingAllowance) {
        this.travellingAllowance = travellingAllowance;
    };
    salaryInfo.prototype.setbonusAllowance = function (bonusAllowance) {
        this.bonusAllowance = bonusAllowance;
    };
    salaryInfo.prototype.setbonusPermonth = function (bonusPermonth) {
        this.bonusPermonth = bonusPermonth;
    };
    salaryInfo.prototype.settaxPermonth = function (taxPermonth) {
        this.taxPermonth = taxPermonth;
    };
    salaryInfo.prototype.getfixSalary = function () {
        return this.fixSalary;
    };
    salaryInfo.prototype.getadvanceSalary = function () {
        return this.advanceSalary;
    };
    salaryInfo.prototype.gettravellingAllowance = function () {
        return this.travellingAllowance;
    };
    salaryInfo.prototype.getbonusAllowance = function () {
        return this.bonusAllowance;
    };
    salaryInfo.prototype.getbonusPermonth = function () {
        return this.bonusPermonth;
    };
    salaryInfo.prototype.gettaxPermonth = function () {
        return this.taxPermonth;
    };
    salaryInfo.prototype.calSalary = function () {
        this.total = this.fixSalary + this.bonusAllowance + this.bonusPermonth + this.travellingAllowance - this.advanceSalary - this.taxPermonth;
    };
    salaryInfo.prototype.voucher = function () {
        console.log(".............VOUCHER.............");
        console.log("Fix Salary = " + this.fixSalary);
        console.log("Employee advance salary = " + this.advanceSalary);
        console.log("Employee trorilling allowance = " + this.travellingAllowance);
        console.log("Employee bonus allowance = " + this.bonusAllowance);
        console.log("Employee bonus per month = " + this.bonusPermonth);
        console.log("Employee tax per month = " + this.taxPermonth);
        console.log("Total Salary = " + this.total);
    };
    return salaryInfo;
}(bioData));
var employee = new salaryInfo();
employee.seteName(prompt("Enter your name"));
employee.seteFullname(prompt("Enter your Full name"));
employee.setfName(prompt("Enter Father name"));
employee.setNic(parseInt(prompt("Enter your NIC #")));
employee.setAttendence(prompt("Enter Attendence present(P) or absent(A)"));
employee.setoverTimeallowance(parseInt(prompt("Enter your over time allowance")));
employee.setfixSalary(parseInt(prompt("Enter your Fix Salary")));
employee.setadvanceSalary(parseInt(prompt("Enter your Advance Salary")));
employee.settravellingAllowance(parseInt(prompt("Enter your travelling Allowance")));
employee.setbonusAllowance(parseInt(prompt("Enter Bonus Allowance")));
employee.setbonusPermonth(parseInt(prompt("Enter Bonus per month")));
employee.settaxPermonth(parseInt(prompt("Enter Tax per month")));
employee.calSalary();
employee.voucher();
