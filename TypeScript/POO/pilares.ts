//4 Pilares POO 

/* 
    Herencia -> Capacidad de una subclase de obtener todo de su clase padre
    Polimorfismo -> 

    Encapsulamiento -> Limitar el acceso a algo a traves de MODIFICADORES DE ACCESO
    Abstraccion -> Nos da herramientas para interactuar con lo que este limitado de una clase
*/

/* 
    Modificadores de acceso
    Public -> Todo el mundo puede acceder
    Private -> Solo ella misma va a tener acceso
    Protected -> Va a tener acceso la misma clase y sus hijos
*/

class Person{
    private name:string;
    private age:number;
    private dui: string;

    constructor(nameParam:string,ageParam:number,duiParam:string){
        this.name = nameParam;
        this.age = ageParam;
        this.dui = duiParam;
    }

    respirar(){
        console.log("Afff");
    }

    //Getters y Setters
    getName():string {
        return this.name;
    }

    
    setAge(ageParam:number){
        this.age = ageParam;
    }

    getAge(){
        return this.age;
    }

    getDui(){
        return this.dui;
    }

}

let personita = new Person("Jairo Vega",75,"0105080-3");
//personita.name = "Hector";
console.log(personita);
console.log(personita.getName());

class Developer extends Person{
    // modificadores de acceso public, protected, private, etc
    private exp:number;
    private techSkills:string[];
    private softSkills:string[];
    private gitUser:string;
    private area:string;
    private projects:string[];

    constructor(nameParam:string,ageParam:number,duiParam:string,expParam:number,techSkillsParam:string[],softSkillsParam:string[],gitUserParam:string, areaParam:string, projectsParam:string[]){
        super(nameParam,ageParam,duiParam);
        this.exp = expParam;
        this.techSkills = techSkillsParam;
        this.softSkills = softSkillsParam;
        this.gitUser = gitUserParam;
        this.area = areaParam;
        this.projects = projectsParam;
    }

    getArea(){
        return this.area;
    }

    respirar(): void {
        console.log("Sniff")
    }

}

let developersito = new Developer("Will",19,"1234567-8",3,["JavaScript","HTML","CSS","BootStrap","TypeScript","Laravel","PHP","TailwindCSS"],["Comunicacion Efectiva","Creativo","Dedicado"],"Will-Trucker","BackEnd",["MVP Facturacion Electronica","GONLY","SIVAR TECHSTORE"]);
developersito.getArea();


personita.respirar();
developersito.respirar();

