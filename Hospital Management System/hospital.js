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
var patientBiodata = (function () {
    function patientBiodata() {
        this.ill = ["fever", "flue", "Bp"];
        this.Dr = ["A", "B", "C", "D"];
    }
    patientBiodata.prototype.setpatientname = function (patientname) {
        this.patientname = patientname;
    };
    patientBiodata.prototype.setfatherORspouseName = function (fatherORspouseName) {
        this.fatherORspouseName = fatherORspouseName;
    };
    ///////////////////////////////////
    patientBiodata.prototype.setMr_no = function () {
        this.Mr_no = Math.random();
    };
    patientBiodata.prototype.setDateandTime = function () {
        var current = new Date();
        this.Date = "Date = " + current.getDate() + "/" + (current.getMonth() + 1) + "/" + current.getFullYear();
        var minutes = current.getMinutes();
        var hours = current.getHours();
        if (minutes < 10)
            minutes = "0" + minutes; //for 4:05 format not 4:5
        //am or pm 
        var format = "AM";
        if (hours >= 12) {
            format = "PM";
            hours = hours - 12;
        }
        if (hours == 0) {
            hours = 12;
        }
        this.Time = hours + " : " + minutes + " " + format;
    };
    patientBiodata.prototype.setbarCode = function () {
        this.barCode = Math.random();
    };
    patientBiodata.prototype.setNic = function (Nic) {
        this.Nic = Nic;
    };
    patientBiodata.prototype.setpatient_ward = function (patient_ward) {
        this.patient_ward = patient_ward;
    };
    patientBiodata.prototype.getpatientname = function () {
        return this.patientname;
    };
    patientBiodata.prototype.getfatherORspouseName = function () {
        return this.fatherORspouseName;
    };
    patientBiodata.prototype.getMr_no = function () {
        return this.Mr_no;
    };
    patientBiodata.prototype.getDate = function () {
        return this.Date;
    };
    patientBiodata.prototype.getTime = function () {
        return this.Time;
    };
    patientBiodata.prototype.getNic = function () {
        return this.Nic;
    };
    patientBiodata.prototype.getpatient_ward = function () {
        return this.patient_ward;
    };
    patientBiodata.prototype.getbarCode = function () {
        return this.barCode;
    };
    patientBiodata.prototype.setill = function (num) {
        this.p_ill = this.ill[num - 1];
    };
    patientBiodata.prototype.getill = function () {
        return this.p_ill;
    };
    patientBiodata.prototype.setpDr = function (num) {
        this.p_Dr = this.Dr[num - 1];
    };
    patientBiodata.prototype.getpDr = function () {
        return this.p_Dr;
    };
    return patientBiodata;
}());
var appoinment = (function (_super) {
    __extends(appoinment, _super);
    function appoinment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FeeOption = ["online", "card", "cash", "get recieved"];
        return _this;
    }
    appoinment.prototype.setDrAppTime = function (DrAppTime) {
        this.DrAppTime = DrAppTime;
    };
    appoinment.prototype.setDrTimeMatch = function (DrTimeMatch) {
        this.DrTimeMatch = DrTimeMatch;
    };
    appoinment.prototype.setAppoinmentFee = function (AppoinmentFee) {
        this.AppoinmentFee = AppoinmentFee;
    };
    appoinment.prototype.setFeeOption = function (opt) {
        this.fee = this.FeeOption[opt - 1];
    };
    appoinment.prototype.getDrAppTime = function () {
        return this.DrAppTime;
    };
    appoinment.prototype.getDrTimeMatch = function () {
        return this.DrTimeMatch;
    };
    appoinment.prototype.getAppoinmentFee = function () {
        return this.AppoinmentFee;
    };
    appoinment.prototype.getFeeOption = function () {
        return this.fee;
    };
    return appoinment;
}(patientBiodata));
var patient = new appoinment();
patient.setpatientname(prompt("Enter Name"));
patient.setfatherORspouseName(prompt("Enter Father name/Husband name"));
patient.setpatient_ward(prompt("Enter Ward"));
patient.setill(parseInt(prompt("Enter corresponding number \n1 Fever\n2 Flue\n3 Bp")));
patient.setpDr(parseInt(prompt("Enter corresponding number \n1 Dr A\n2 Dr B\n3 Dr C\n4 Dr D")));
patient.setDrAppTime(prompt("Enter Dr. appoinment time"));
patient.setDrTimeMatch(prompt("Enter Time match"));
patient.setAppoinmentFee(prompt("Enter Appoinment Fee"));
patient.setFeeOption(parseInt(prompt("Fee Option \n Enter corresponding number \n1 Online\n2 card option \n3 cash option \n4 get recieved")));
patient.setMr_no();
patient.setDateandTime();
patient.setbarCode();
console.log("Patient Name = " + patient.getpatientname());
console.log("Father name/Husband name = " + patient.getfatherORspouseName());
console.log("Mr # = " + patient.getMr_no());
console.log("Date = " + patient.getDate());
console.log("Time = " + patient.getTime());
console.log("Nic # = " + patient.getNic());
console.log("Patient ward = " + patient.getpatient_ward());
console.log("Patient ill type = " + patient.getill());
console.log("Dr. Name = " + patient.getpDr());
console.log("Bar Code = " + patient.getbarCode());
console.log("Dr. Appoinment Time = " + patient.getDrAppTime());
console.log("Dr. Time match = " + patient.getDrTimeMatch());
console.log("Appoinment Fees = " + patient.getAppoinmentFee());
console.log("Fee Option = " + patient.getFeeOption());
