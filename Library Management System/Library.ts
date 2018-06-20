class bioData
{
    private User_id
    private User_Name
    private Father_Name
    private classOfStudents
    private University_id

    public setUser_id(User_id:string)
    {
        this.User_id =User_id 
    }
    public setUser_Name(User_Name:string)
    {
        this.User_Name= User_Name
    }
    public setFather_Name(Father_Name:string)
    {
        this.Father_Name = Father_Name
    }
    public setclassOfStudents(classOfStudents:number)
    {
        this.classOfStudents = classOfStudents
    }
    public setUniversity_id(University_id:string)
    {
        this.University_id = University_id
    }

    public getUser_id():string
    {
        return this.User_id
    }
    public getUser_Name():string
    {
        return this.User_Name
    }
    public getFname():string
    {
        return this.Father_Name
    }
    public getclassOfStudents():number
    {
        return this.classOfStudents
    }
    public getUniversity_id():string
    {
        return this.University_id
    }
}

class Books extends bioData
{
    private dptId 
    private reqBook
    private dpt =["physics","chemistry","botany","zoology"] ;
    private phy = ["physics1\n","physics2\n","physics3\n","physics4\n","physics5\n","physics6\n","physics7\n","physics8\n","physics9\n","physics10\n"];
    private chem =["chemistry1\n","chemistry2\n","chemistry3\n","chemistry4\n","chemistry5\n","chemistry6\n","chemistry7\n","chemistry8\n","chemistry9\n","chemistry10\n"];
    private bot = ["botony1\n","botony2\n","botony3\n","botony4\n","botony5","botony6\n","botony7\n","botony8\n","botony9\n","botony10\n"]
    private zoo = ["zoology1\n","zoology2\n","zoology3\n","zoology4\n","zoology5\n","zoology6\n","zoology7\n","zoology8\n","zoology9\n","zoology10\n"]

    public setDptId(dptId:number)
    {
        this.dptId = dptId
    }
    public getDptId():number
    {
        return this.dptId
    }
    public getPhy():string
    {
            /*for (var i:number = 0; i<10; i++)
            {
                console.log(this.phy[i])
            }*/
            return(""+this.phy)
    }
    public getChem()
    {
            return(""+this.chem)
    }
    public getBotny()
    {
           return(""+this.bot)
    }
    public getZoo()
    {
            return(""+this.zoo)
    }
    public getBooks():string
    {
        
        if(this.dptId == 1)
        {
            return this.getPhy()
            //return(""+this.phy)
        }
        if(this.dptId == 2)
        {
            return this.getChem()
        }
        if(this.dptId == 3)
        {
           return this.getBotny()
        }
        if(this.dptId == 4)
        {
            return this.getZoo()
        }
    }
    public borrow (Book_number:number):string
    {
        if(this.dptId == 1)
        {
            return this.phy[Book_number-1]
        }
        if(this.dptId == 2)
        {
            return this.chem[Book_number-1]
        }
        if(this.dptId == 3)
        {
            return this.bot[Book_number-1]
        }
        if(this.dptId == 4)
        {
            return this.zoo[Book_number-1]
        }
        else
        prompt("wrong book")
    }

}
var arr=[]
var j:number =0;
var Library = new Books()

Library.setUser_id(prompt("Enter your User id"))
Library.setUser_Name(prompt("Enter your User Name"))
Library.setFather_Name(prompt("Enter Father Name"))
Library.setclassOfStudents(parseInt(prompt("Enter Class of students")))
Library.setUniversity_id(prompt("Enter University id"))

Library.setDptId(parseInt(prompt("Enter corresponding number for Department \n 1 Physics\n 2 Chemistry\n 3 Botnany\n 4 Zoology")))
//prompt("your dpt id is "+Library.getDptId())
 var flag : boolean = false;
do
{
    
    var num:number = parseInt(prompt("Enter your Book number\n"+Library.getBooks()))

        arr[j] = Library.borrow(num);
    
    var ans = prompt("Do you want another book? y/n")
        if(ans == 'y')
        {
            flag = true
        }
        else if(ans == 'n')
        {
            flag = false
            //break;
        }
        else
        console.log("wrong input")
        j++
}
while(flag);



//printing info
console.log("User id = "+Library.getUser_id())
console.log("User Name = "+Library.getUser_Name())
console.log("Father Name = "+Library.getFname())
console.log("classOfStudents = "+Library.getclassOfStudents())
console.log("University_id = "+Library.getUniversity_id())


var k:number = 0;
while( k<arr.length)
{
    console.log("you borrowed "+arr[k])
    k++
}
