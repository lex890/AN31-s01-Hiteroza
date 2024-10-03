/*
    Functions
        - In Javascript, are lines/block
          of codes that tell our devices/
          applications to perform certain 
          task when called/invoked
        - are mostly created to create
        comlpicaed tasls to run several
        lines of code in succession
        - they are also used to prevent 
        repeasting lines/blocks of codes 
        that perform the same task/function

        Function declarations
            - (function statement) defines a
            function with the specified 
            parameters

        Syntax:
            function funName() {
                code here
            }

            - function keyword
                - used to define JS functions
            -function name
                - the function name, functions
                able to use later in the code
            - function block(){}
                - the statements which compromise 
                the bodu of the function
*/

function printName() {
    console.log('My name is Jane');

}

printName();

// function Invication
    /* the block and statements inside a 
    function is not immediately executed */

/* 
    Function Declaration
        - is a function that came created
        through function declaration by using
        the function letwprd and adding a function
        - declaredFunction() can be hoisted as long

*/

function declaredFunction() {
    console.log('Hello World from declaredFunction!');

}
declaredFunction();

/*

    Function Invocation
        - this code block and statements inside
        a function is not immediatelt executed when the function is define
        - it is common to use the term 'call a function' instead of 'invoke
        a function'
    Anonymous Function
        -function without name
*/

let anonFunc = function() {
    console.log('Hello there');
};

anonFunc();

let funcExpression = function funcName() {
    console.log('Hello again');
};

funcExpression();

// function scoping
/* 
    Scope is the accessibility(visibility)
    of variables within our program

    JavaScript variables has 3 types of scope:
        1. local/block scope
        2. global scope
        3. function scope
*/

{
    let localVar = "Patrick";
}
    let globalVar = "Cuatro";

    console.log(globalVar);
    console.log(localVar); // error, local var is outside bing in a block outside of its code block

    //function scope
    /*
        JS has function scope: Each function creates a new scope
        Variables defined inside a function are not accessible (visible) from outside the function variables declare with var
    */

