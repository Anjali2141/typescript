class ClassStudent {
    standard: number;
    subject:string;
    constructor(standard:number, subject:string) {
        this.standard = standard;
        this.subject = subject;
    }
    public getGrade():string {
        return "A"
    }
}


class Student extends ClassStudent {
    studentName: string;
    // id:number;  --strictPropertyInitializer

   public constructor(name:string, standard:number, subject:string) {
       super(standard ,subject);
       this.studentName = name;
   }
   public getName():string {
       return this.studentName;
   }
}
const student = new Student("Ben", 6, "Maths");
// student.id = 66;
console.log(student);
console.log(student.getName());
console.log(student.getGrade());
