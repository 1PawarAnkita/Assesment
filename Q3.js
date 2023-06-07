let obj1 = { "greeting": "hello" };
let obj2 = obj1;
obj1["greeting"] = "Bye";
console.log(obj1);
console.log(obj2);


// O/P:- {greeting: 'Bye'}
//       {greeting: 'Bye'}