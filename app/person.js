import $ from 'jquery';

export class Person {
    constructor(name){
        this.name = name;
    }

    speak(text){
        return `${this.name} Says: ${text}`;
    }
}

export class SuperPerson extends Person{
    constructor(name,superpower){
        super(name); // if you have a class that extends another class, must call super() and pass in whatever was passed in the parent constructor
        
        this.superpower = superpower;
    }


    speak(text){
        $('body').append(`<h1>${super.speak(text)}</h1>`);
    }
    saySuperpower(){
        this.speak(`My super power is ${this.superpower}`);
    }
}

