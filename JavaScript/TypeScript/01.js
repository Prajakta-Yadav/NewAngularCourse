// let age:number = 15;
// let names:string = "Omkar";
// let isTrue :boolean = true;
// let num:any = 10;
// console.log(num);;
// num ="Omkar";
// console.log(age);
// console.log(names);
// console.log(isTrue);
// console.log(num);;
// let value:unknown = "typescript";
// value = 15;
// if(typeof value === "string"){
//     console.log(value.toUpperCase());
// }else{
//      console.log(value);
// }
// let city:string |null = null;
// let marks:number | undefined = undefined;
// console.log(city);
// console.log(marks);
// city = "Pune";
// marks = 45;
// console.log(city);
// console.log(marks);
//function
// function showMessege():void{
//     console.log("Hello From Void Function");
// }
// showMessege();
//Object 
// let user:{names:string,age:number}={names:"omkar",age:45};
// console.log(user.names);
// console.log(user.age);
// function checkAccess(role:'admin' | 'user'):string{
//     if(role === 'admin'){
//         return "Full Access";
//     }
//     return "Limited Access";
// }
// console.log(checkAccess('admin'));
// console.log(checkAccess('user'));``
// console.log(checkAccess(''));
function greet(name) {
    return "Hello " + name;
}
console.log(greet());
console.log(greet("omkar"));