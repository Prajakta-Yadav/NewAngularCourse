let timer = setTimeout(function(){
    console.log("Hello After 2 seconds");
}, 2000);

console.log(timer);
clearTimeout(timer);