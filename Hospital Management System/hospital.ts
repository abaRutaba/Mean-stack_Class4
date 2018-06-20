class patientBiodata
{
    private patientname
    private fatherORspouseName
    private Mr_no
    private Date
    private Time
    private Nic
    private patient_ward
    private ill = ["fever","flue","Bp"]
    private p_ill
    private Dr = ["A","B","C","D"]
    private p_Dr
    private barCode
    
    public setpatientname(patientname:string)
    {
        this.patientname = patientname
    }
    public setfatherORspouseName(fatherORspouseName:string)
    {
        this.fatherORspouseName = fatherORspouseName
    }
    ///////////////////////////////////
    public setMr_no()
    {
        this.Mr_no = Math.random()
    }
    public setDateandTime()
    {
        var current = new Date();
		this.Date = "Date = "+ current.getDate()+"/"+(current.getMonth()+1)+"/"+current.getFullYear();
		
		
		var minutes:any = current.getMinutes();
		var hours = current.getHours();
		
		if(minutes<10)
			minutes = "0"+minutes;//for 4:05 format not 4:5
		//am or pm 
		var format = "AM";
		if(hours >= 12)
		{
			format = "PM";
			hours = hours - 12;
		}
		if(hours == 0)
			{
				hours = 12;
			}
			
		 this.Time= hours+" : "+minutes+" "+format;
    }
    
    public setbarCode()
        {
            this.barCode = Math.random();
        }

    public setNic(Nic:number)
    {
        this.Nic = Nic
    }
    public setpatient_ward(patient_ward:string)
    {
        this.patient_ward = patient_ward
    }
    public getpatientname():string
    {
        return this.patientname
    }
    public getfatherORspouseName():string
    {
        return this.fatherORspouseName
    }
    
    public getMr_no():number
    {
        return this.Mr_no
    }
    public getDate():any
    {
        return this.Date
    }
    public getTime():any
    {
        return this.Time
    }
    public getNic():number
    {
        return this.Nic
    }

    public getpatient_ward():string
    {
        return this.patient_ward
    }
    public getbarCode():any
    {
        return this.barCode
    }
    public setill(num:number)
    {
        this.p_ill = this.ill[num-1]
    }
    public getill():any
    {
        return this.p_ill
    }
    public setpDr(num : number)
    {
        this.p_Dr = this.Dr[num-1]
    }
    public getpDr ():any
    {
        return this.p_Dr
    }


}
class appoinment extends patientBiodata
{
    private DrAppTime
    private DrTimeMatch
    private AppoinmentFee
    private FeeOption = ["online","card","cash","get recieved"]
    private fee

    public setDrAppTime(DrAppTime:any)
    {
        this.DrAppTime = DrAppTime
    }
    public setDrTimeMatch(DrTimeMatch:any)
    {
        this.DrTimeMatch = DrTimeMatch
    }
    public setAppoinmentFee(AppoinmentFee:any)
    {
        this.AppoinmentFee = AppoinmentFee
    }
    public setFeeOption(opt : number)
    {
        this.fee = this.FeeOption[opt-1]
    }


    public getDrAppTime():any
    {
        return this.DrAppTime 
    }
    public getDrTimeMatch():any
    {
        return this.DrTimeMatch
    }
    public getAppoinmentFee():number
    {
        return this.AppoinmentFee 
    }
    public getFeeOption():number
    {
       return this.fee
    }
}
var patient = new appoinment();
patient.setpatientname(prompt("Enter Name"))
patient.setfatherORspouseName(prompt("Enter Father name/Husband name"))
patient.setpatient_ward(prompt("Enter Ward"))
patient.setill(parseInt(prompt("Enter corresponding number \n1 Fever\n2 Flue\n3 Bp")))
patient.setpDr(parseInt(prompt("Enter corresponding number \n1 Dr A\n2 Dr B\n3 Dr C\n4 Dr D")))
patient.setDrAppTime(prompt("Enter Dr. appoinment time"))
patient.setDrTimeMatch(prompt("Enter Time match"))
patient.setAppoinmentFee(prompt("Enter Appoinment Fee"))
patient.setFeeOption(parseInt(prompt("Fee Option \n Enter corresponding number \n1 Online\n2 card option \n3 cash option \n4 get recieved")))
patient.setMr_no()
patient.setDateandTime()
patient.setbarCode()

console.log("Patient Name = "+patient.getpatientname())
console.log("Father name/Husband name = "+patient.getfatherORspouseName())
console.log("Mr # = "+patient.getMr_no())
console.log("Date = "+patient.getDate())
console.log("Time = "+patient.getTime())
console.log("Nic # = "+patient.getNic())
console.log("Patient ward = "+patient.getpatient_ward())
console.log("Patient ill type = "+patient.getill())
console.log("Dr. Name = "+patient.getpDr())
console.log("Bar Code = "+patient.getbarCode())
console.log("Dr. Appoinment Time = "+patient.getDrAppTime())
console.log("Dr. Time match = "+patient.getDrTimeMatch())
console.log("Appoinment Fees = "+patient.getAppoinmentFee())
console.log("Fee Option = "+patient.getFeeOption())
