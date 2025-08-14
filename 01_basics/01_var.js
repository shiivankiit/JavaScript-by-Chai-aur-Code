const accountId = 123456789; //once value is assing we cant change it now.
let accountEmail = "ankit@gmail.com";//block-scoped variable declaration ...re-assigned but not redclared
var accountpswd= "12345";
accountcity="Jaipur";
let accountstate;
console.table([accountId,accountEmail,accountpswd,accountcity]);

/*
Prefer no to use var 
beacause of issues in block scope and functional scope. 
*/