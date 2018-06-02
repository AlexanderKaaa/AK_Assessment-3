/*=========================
    JavaScript Array Methods
=========================*/

/* Use this array for Q1 through Q3 */
var users = [
    {id:1, username: 'luke.sky', firstName: 'Luke', age: 20, race: 'human'},
    {id:2, username: 'leia.org', firstName: 'Leia', age: 20, race: 'human'},
    {id:3, username: 'han.solo', firstName: 'Han', age: 25, race: 'human'},
    {id:4, username: 'chewy', firstName: 'Chewbacca', age:200, race: 'wookie'} 
];

/*==============
    Q1 -  Use JavaScript to retrieve all the 'humans' in the array.
================*/
var humans = [];

humans = users.filter(function(element, index, array){
	 return element.race === 'human';
});


test('q1', humans);



/*==============
    Q2 -  Use JavaScript to retrieve the object in the array with the 'id' equal to 2.
================*/
var leia;

function getByID(IDnumber){
    return users.find(function(users){
       return users.id === IDnumber; 
    })
}

leia=getByID(2);

test('q2', leia);

/*==============
    Q3 - Use JavaScript to calculate the total age of all users.    
================*/
var totalAge = 0;

users.forEach(function(element, index, array){
	
	totalAge+=element.age;
	
});



test('q3', totalAge);
/*==============
    Q4 - Use JavaScript to create a new array that contains only the username of each user
    Expected Output: userNames = ["luke.sky", "leia.org", "han.solo", "chewy"]
================*/
var userNames = [];

userNames=users.map(function(element, index, array){

		return element.username;

});


test('q4', userNames);

/*==============
    Q5 - Use JavaScript to sort this array of numbers ascending.
================*/
var numbers = [15,16,8,4,23,42]

numbers=numbers.sort(function(a, b){return a - b});

test('q5', numbers);

/*==============
    Q6 - Use JavaScript to replace all instances of the word 'lorem' in this string using regular expressions
================*/
var replacement = 'Lorem ipsum dolor sit lorem consectetur adipisicing lorem. Numquam, dicta repellendus excepturi consequatur sint ipsum quibusdam delectus lorem laborum eveniet fuga officiis nesciunt nemo ab dignissimos eos doloremque consectetur quod praesentium reprehenderit. Incidunt voluptate, quo rerum mollitia adipisci nam dignissimos, ex cupiditate accusamus cumque sunt corrupti lorem vlorem nemo explicabo.';

var pattern = /Lorem/gi;
var replacement = replacement.replace(pattern, 'eureka'); 

test('q6', replacement);


/*==============
    Q7 - What is the difference between .forEach() and .map()
================*/
/*forEach() does not return anything by default.But can be made to perform functions for each item.
.map() by default returns a whole new array. And conditions can be specified for what goes into that array.*/

/*==============
    Q8 - What is the difference between .filter() and .find()
================*/
/*

.filter() filter iterates through an array and adds the element to the new array if it returns true. 
So similar to .map() it creates a whole new array, and outputs all the values that meet the filter condition.

.find() acts like filter, but only returns the first one found that matches the parameters. So .find() returns a value, not an array, and only catches the first result,
ignoring other results if they exist. 







*/




function test(id,result){
    document.getElementById(id).innerHTML = JSON.stringify(result);
}