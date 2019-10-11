// CODE here for your Lambda Classes

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
    }

    speak() {
        return `Hello my name is Fred, I am from Bedrock where ${this.name} and ${this.location} are the object's own props.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
    super(instructorAttrs);
    this.specialty = instructorAttrs.specialty;
    this.favLanguage = instructorAttrs.favLanguage;
    this.catchPhrase = instructorAttrs.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}`;
    }

    grade(student, subject) {
        return `${student} receives a perfect score on ${subject}`;
    }
}

class Student extends Person {
    constructor(studentAttrs) {
    super(studentAttrs);
    this.previousBackground = studentAttrs.previousBackground;
    this.className = studentAttrs.className;
    this.favSubjects = studentAttrs.favSubjects;
    }

    listsSubjects() {
        return(this.favSubjects);
    }

    PRAssignment(student, subject) {
        return `${student} has submitted a PR for ${subject}`;
    }

    sprintChallenge(student, subject) {
        return `${student} has begun sprint challenge on ${subject}`;
    }
}

class TeamLead extends Instructor {
    constructor(tlAttrs) {
    super(tlAttrs);
    this.gradClassName = tlAttrs.gradClassName;
    this.favInstructor = tlAttrs.favInstructor;
    }

    standUp(name, channel) {
        return `${name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(name, student, subject) {
        return `${name} debugs ${student}'s code on ${subject}`;
    }
}


const Michonne = new Person({
    name: "Sally",
    age: 24,
    location: "New York",
});

const Rick = new Instructor ({
    specialty: "redux",
    favLanguage: "JavaScript",
    catchPhrase: "Great job team!",
});

const Maggie = new Student ({
    previousBackground: "Logistics",
    className: "DS14",
    favSubjects: ["HTML", "CSS", "JavaScript"],
});

const Daryl = new TeamLead ({
    gradClassName: "DS1",
    favInstructor: "Carol",
});


console.log(Michonne.speak());
console.log(Rick.demo("JavaScript"));
console.log(Rick.grade("Glenn", "Computer Science"));
console.log(Maggie.listsSubjects());
console.log(Maggie.PRAssignment("Maggie", "WebDev"));
console.log(Maggie.sprintChallenge("Maggie", "callbacks"));
console.log(Daryl.standUp("Daryl", "@WEBPT11"));
console.log(Daryl.debugsCode("Daryl", "Maggie", "arrays"));

