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
        return `${student.name} receives a perfect score on ${subject}`;
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

    PRAssignment(subject) {
        return `${student.name} has submitted a PR for ${subject}`;
    }

    sprintChallenge(subject) {
        return `${student.name} has begun sprint challenge on ${subject}`;
    }
}

class TeamLead extends Instructor {
    constructor(tlAttrs) {
    super(tlAttrs);
    this.gradClassName = tlAttrs.gradClassName;
    this.favInstructor = tlAttrs.favInstructor;
    }

    standUp(channel) {
        return `${this.name} announces to ${this.channel}, @channel standy times!`;
    }

    debugsCode(student) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}


const Sally = new Person({

})