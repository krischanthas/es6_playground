// import elementToBody from './add_to_dom';
// import $ from 'jquery';

// elementToBody('h1', 'Something Different');

// elementToBody('p', 'What is up dawg');

// $('body').append('<h1>I came from jQuery!</h1>');

// import Person from './person';

import {Person, SuperPerson} from './person';



const bob = new Person('Bob');

console.log(bob.speak('my name is Bob'));
//-------------------------------------------//
const superSarah = new SuperPerson('Sarah', 'high jump');
superSarah.speak('hi i am super sarah');

superSarah.saySuperpower();