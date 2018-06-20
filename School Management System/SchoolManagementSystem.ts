class School
{
    private  Name : string;
    private  Father_Name:string
    private  Class : number
    private  Last_Class : number
    private  Last_passing_marks : number
    private  Roll_No : number 

    public setName(Name:string)
    {
        this.Name = Name;
    }
    public setFName(Father_Name:string)
    {
        this.Father_Name = Father_Name;
    }
    public setClass(Class:number)
    {
        this.Class = Class;
    }
    public setLclass(Last_Class :number)
    {
        this.Last_Class = Last_Class ;
    }
    public setLpassingMarks(Last_passing_marks:number)
    {
        this.Last_passing_marks = Last_passing_marks;
    }
    public setRollNumber(Roll_No:number)
    {
        this.Roll_No = Roll_No;
    }
     public  getName():string
    {
        return this.Name ;
    }
    public getFName():string
    {
        return this.Father_Name;
    }
    public getClass():number
    {
        return this.Class;
    }
    public getLclass():number
    {
        return this.Last_Class ;
    }
    public getLpassingMarks():number
    {
        return this.Last_passing_marks;
    }
    public getRollNumber():number
    {
        return this.Roll_No;
    }
   
}

class fee extends School
{
    private Admission_Fee
    private Monthly_Fee
    private Extracirculum_Fee
    private Game_Fee


    public setAdmission_Fee (Admission_Fee:number)
    {
        this.Admission_Fee=Admission_Fee
    }
    public setMonthly_Fee (Monthly_Fee:number)
    {
        this.Monthly_Fee=Monthly_Fee
    }
    public setExtracirculum_Fee (Extracirculum_Fee:number)
    {
        this.Extracirculum_Fee=Extracirculum_Fee
    }
    public setGame_Fee (Game_Fee:number)
    {
        this.Game_Fee=Game_Fee
    }


    public getAdmission_Fee () : number
    {
        return this.Admission_Fee
    }
    public getMonthly_Fee () : number
    {
        return this.Monthly_Fee
    }
    public getExtracirculum_Fee () : number
    {
        return this.Extracirculum_Fee
    }
    public getGame_Fee () : number
    {
        return this.Game_Fee
    }
    
}

class Marks extends fee
{
    private english:number
    private physics:number


    public setEngmarks(english:number)
    {
        this.english = english
    }
     public setPhymarks(physics:number)
    {
        this.physics = physics
    }

    public getEngmarks():number
    {
        return this.english
    }
    public getPhymarks():number
    {
        return this.physics
    }
    public getPhyStatus():any
    {
        if(this.getPhymarks() >= 50)
        {
            return "Pass"
        }
        else
        {
            return "Fail"
        }
    }
    public getEngStatus():any
    {
        if(this.getEngmarks() >= 50)
        {
            return "Pass"
        }
        else
        {
            return "Fail"
        }
    }
}

var report = new Marks();

report.setName(prompt("Enter Student Name"))
report.setFName(prompt("Enter Father's Name"))
report.setClass(parseInt(prompt("Enter Class")))
report.setLclass(parseInt(prompt("Enter Last Class")))
report.setRollNumber(parseInt(prompt("Enter Roll NUmber")))

report.setAdmission_Fee(parseInt(prompt("Enter Admission Fee")))
report.setMonthly_Fee(parseInt(prompt("Enter Monthly Fee")))
report.setExtracirculum_Fee(parseInt(prompt("Enter Extracirculum Fees")))
report.setGame_Fee(parseInt(prompt("Enter Game Fee")))

report.setEngmarks(parseInt(prompt("Enter Marks obtained in English")))
report.setPhymarks(parseInt(prompt("Enter Marks obtained in Phycics")))


console.log("Student Name = "+report.getName());
console.log("Father's Name = "+report.getFName());
console.log("Class = "+report.getLclass());
console.log("Last Class = "+report.getLclass());
console.log("Last Passing Marks = "+report.getLpassingMarks());
console.log("Roll Number = "+report.getRollNumber());

console.log("Admission Fee = "+report.getAdmission_Fee());
console.log("Monthly Fee = "+report.getMonthly_Fee());
console.log("Extracirculum Fee = "+report.getExtracirculum_Fee());
console.log("Game Fee = "+report.getGame_Fee());

console.log("Marks in English = "+report.getEngmarks());
console.log("Marks in Physics = "+report.getPhymarks());

console.log("Status in English = "+report.getEngStatus());
console.log("Status in Phycics = "+report.getPhyStatus());