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
    bioData.prototype.setUser_id = function (User_id) {
        this.User_id = User_id;
    };
    bioData.prototype.setUser_Name = function (User_Name) {
        this.User_Name = User_Name;
    };
    bioData.prototype.setFather_Name = function (Father_Name) {
        this.Father_Name = Father_Name;
    };
    bioData.prototype.setclassOfStudents = function (classOfStudents) {
        this.classOfStudents = classOfStudents;
    };
    bioData.prototype.setUniversity_id = function (University_id) {
        this.University_id = University_id;
    };
    bioData.prototype.getUser_id = function () {
        return this.User_id;
    };
    bioData.prototype.getUser_Name = function () {
        return this.User_Name;
    };
    bioData.prototype.getFname = function () {
        return this.Father_Name;
    };
    bioData.prototype.getclassOfStudents = function () {
        return this.classOfStudents;
    };
    bioData.prototype.getUniversity_id = function () {
        return this.University_id;
    };
    return bioData;
}());
var Books = (function (_super) {
    __extends(Books, _super);
    function Books() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.dpt = ["physics", "chemistry", "botany", "zoology"];
        _this.phy = ["physics1\n", "physics2\n", "physics3\n", "physics4\n", "physics5\n", "physics6\n", "physics7\n", "physics8\n", "physics9\n", "physics10\n"];
        _this.chem = ["chemistry1\n", "chemistry2\n", "chemistry3\n", "chemistry4\n", "chemistry5\n", "chemistry6\n", "chemistry7\n", "chemistry8\n", "chemistry9\n", "chemistry10\n"];
        _this.bot = ["botony1\n", "botony2\n", "botony3\n", "botony4\n", "botony5", "botony6\n", "botony7\n", "botony8\n", "botony9\n", "botony10\n"];
        _this.zoo = ["zoology1\n", "zoology2\n", "zoology3\n", "zoology4\n", "zoology5\n", "zoology6\n", "zoology7\n", "zoology8\n", "zoology9\n", "zoology10\n"];
        return _this;
    }
    Books.prototype.setDptId = function (dptId) {
        this.dptId = dptId;
    };
    Books.prototype.getDptId = function () {
        return this.dptId;
    };
    Books.prototype.getPhy = function () {
        /*for (var i:number = 0; i<10; i++)
        {
            console.log(this.phy[i])
        }*/
        return ("" + this.phy);
    };
    Books.prototype.getChem = function () {
        return ("" + this.chem);
    };
    Books.prototype.getBotny = function () {
        return ("" + this.bot);
    };
    Books.prototype.getZoo = function () {
        return ("" + this.zoo);
    };
    Books.prototype.getBooks = function () {
        if (this.dptId == 1) {
            return this.getPhy();
            //return(""+this.phy)
        }
        if (this.dptId == 2) {
            return this.getChem();
        }
        if (this.dptId == 3) {
            return this.getBotny();
        }
        if (this.dptId == 4) {
            return this.getZoo();
        }
    };
    Books.prototype.borrow = function (Book_number) {
        if (this.dptId == 1) {
            return this.phy[Book_number - 1];
        }
        if (this.dptId == 2) {
            return this.chem[Book_number - 1];
        }
        if (this.dptId == 3) {
            return this.bot[Book_number - 1];
        }
        if (this.dptId == 4) {
            return this.zoo[Book_number - 1];
        }
        else
            prompt("wrong book");
    };
    return Books;
}(bioData));
var arr = [];
var j = 0;
var Library = new Books();
Library.setUser_id(prompt("Enter your User id"));
Library.setUser_Name(prompt("Enter your User Name"));
Library.setFather_Name(prompt("Enter Father Name"));
Library.setclassOfStudents(parseInt(prompt("Enter Class of students")));
Library.setUniversity_id(prompt("Enter University id"));
Library.setDptId(parseInt(prompt("Enter corresponding number for Department \n 1 Physics\n 2 Chemistry\n 3 Botnany\n 4 Zoology")));
//prompt("your dpt id is "+Library.getDptId())
var flag = false;
do {
    var num = parseInt(prompt("Enter your Book number\n" + Library.getBooks()));
    arr[j] = Library.borrow(num);
    var ans = prompt("Do you want another book? y/n");
    if (ans == 'y') {
        flag = true;
    }
    else if (ans == 'n') {
        flag = false;
        //break;
    }
    else
        console.log("wrong input");
    j++;
} while (flag);
//printing info
console.log("User id = " + Library.getUser_id());
console.log("User Name = " + Library.getUser_Name());
console.log("Father Name = " + Library.getFname());
console.log("classOfStudents = " + Library.getclassOfStudents());
console.log("University_id = " + Library.getUniversity_id());
var k = 0;
while (k < arr.length) {
    console.log("you borrowed " + arr[k]);
    k++;
}
