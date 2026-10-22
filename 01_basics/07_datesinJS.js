//Dates

let myDate=new Date();//Object created from the Date constructor.
// new Date() creates a Date object holding the current date and time
// from your device's clock.It is an instance of the built-in Date class.
console.log(myDate.toString());//"Tue Oct 20 2026 14:30:00 GMT+0530 (India Standard Time)"
console.log(myDate.toDateString());//"Tue Oct 20 2026"(date only,no time).
console.log(myDate.toLocaleString());// "10/20/2026, 2:30:00 PM"  (format depends on your locale)
console.log(typeof myDate);//object.


let myCreateDate=new Date(2024,0,24);
console.log(myCreateDate.toDateString());

console.log(Math.floor(Date.now()/1000));
//Date.now()returns the numbers of milliseconds since 1 January 1970(UTC) called the Unix epoch.
//Dividing by 1000 converts to seconds.
//Math.floor removes the decimals.


let newDate = new Date();
console.log(newDate);//full date object
console.log(newDate.getMonth());// 9(October,bcz it starts at 0;
console.log(newDate.getDay());//2(Tuesday).

//new Date() creates a date object for the current time,
//new Date(y,m,d)makes a specific date(months start at 0),and Date.now()
//return the current timestamp in milliseconds.


