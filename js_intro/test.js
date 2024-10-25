let fruits = ['pomme', 'banane', 'orange', 'fraise', 'mangue'];


class student {
    
    constructor(nom,age,courses) {
        this.nom = nom
        this.age = age
        this.courses = courses
    }
}


let student1 = new student("Marie",20,["pomme","fraise"])

console.log(student1.nom)