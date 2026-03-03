let timer = setInterval(function(){
    console.log("Timer Afetr Every 2 Second..");
}, 2000);

setTimeout(function(){
    clearInterval(timer);
}, 10000);