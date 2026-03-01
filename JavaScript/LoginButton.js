
let login = function(username,password){
    if(username ==="admin" && password === "A123"){
      return true;
    }else{
       return false;
    }
};

let val = login("Omkar","a123");


if(val){
    console.log("Login Successful");
}else{
    console.log("Invalid Credentials");
}
val = login("admin","A123");

if(val){
    console.log("Login Successful");
}
