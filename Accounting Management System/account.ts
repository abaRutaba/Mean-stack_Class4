class bioData
{
    private eName
    private eFullname
    private fName
    private Nic
    private aTTendence
    private overTimeallowance

    public seteName(eName:string)
    {
        this.eName = eName
    }
    public seteFullname(eFullname:string)
    {
        this.eFullname = eFullname
    }
    public setfName(fName:string)
    {
        this.fName = fName
    }
    public setNic(Nic:number)
    {
        this.Nic = Nic
    }
    public setAttendence(aTTendence:string)
    {
        this.aTTendence = aTTendence
    }
    public setoverTimeallowance(overTimeallowance)
    {
        this.overTimeallowance = overTimeallowance
    }


    public geteName():string
    {
        return this.eName
    }
    public geteFullname():string
    {
        return this.eFullname
    }
    public getfName():string
    {
        return this.fName
    }
    public getNic():string
    {
        return this.Nic
    }
    public getaTTendence():string
    {
        return this.aTTendence
    }
    public getoverTimeallowance():string
    {
        return this.overTimeallowance
    }
}
class salaryInfo extends bioData
{
    private fixSalary
    private advanceSalary
    private travellingAllowance
    private bonusAllowance
    private bonusPermonth
    private taxPermonth
    private total

    public setfixSalary(fixSalary:number)
    {
        this.fixSalary = fixSalary
    }
    public setadvanceSalary(advanceSalary:number)
    {
        this.advanceSalary = advanceSalary
    }
    public settravellingAllowance(travellingAllowance:number)
    {
        this.travellingAllowance = travellingAllowance
    }
    public setbonusAllowance(bonusAllowance:number)
    {
        this.bonusAllowance = bonusAllowance
    }
    public setbonusPermonth(bonusPermonth:number)
    {
        this.bonusPermonth = bonusPermonth
    }
    public settaxPermonth(taxPermonth:number)
    {
        this.taxPermonth = taxPermonth
    }

    public getfixSalary():number
    {
        return this.fixSalary
    }
    public getadvanceSalary():number
    {
        return this.advanceSalary
    }
    public gettravellingAllowance():number
    {
        return this.travellingAllowance
    }
    public getbonusAllowance():number
    {
        return this.bonusAllowance
    }
    public getbonusPermonth():number
    {
        return this.bonusPermonth
    }
    public gettaxPermonth():number
    {
        return this.taxPermonth
    }
    
    public calSalary()
    {
        this.total = this.fixSalary + this.bonusAllowance + this.bonusPermonth + this.travellingAllowance - this.advanceSalary - this.taxPermonth
        
    }
    public voucher()
    {
        console.log(".............VOUCHER.............")
        console.log("Fix Salary = "+this.fixSalary)
        console.log("Employee advance salary = "+this.advanceSalary)
        console.log("Employee trorilling allowance = "+this.travellingAllowance)
        console.log("Employee bonus allowance = "+this.bonusAllowance)
        console.log("Employee bonus per month = "+this.bonusPermonth)
        console.log("Employee tax per month = "+this.taxPermonth)
        console.log("Total Salary = "+this.total)
    }
}
var employee = new salaryInfo()
employee.seteName(prompt("Enter your name"))
employee.seteFullname(prompt("Enter your Full name"))
employee.setfName(prompt("Enter Father name"))
employee.setNic(parseInt(prompt("Enter your NIC #")))
employee.setAttendence(prompt("Enter Attendence present(P) or absent(A)"))
employee.setoverTimeallowance(parseInt(prompt("Enter your over time allowance")))

employee.setfixSalary(parseInt(prompt("Enter your Fix Salary")))
employee.setadvanceSalary(parseInt(prompt("Enter your Advance Salary")))
employee.settravellingAllowance(parseInt(prompt("Enter your travelling Allowance")))
employee.setbonusAllowance(parseInt(prompt("Enter Bonus Allowance")))
employee.setbonusPermonth(parseInt(prompt("Enter Bonus per month")))
employee.settaxPermonth(parseInt(prompt("Enter Tax per month")))

employee.calSalary()

employee.voucher()