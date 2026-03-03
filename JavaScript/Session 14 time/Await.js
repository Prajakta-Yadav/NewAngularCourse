function getData(){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Response Recieved");
        }, 3000)
    });
}

async function load(){
    console.log("Hello");

    let res = await getData();
    console.log(res);
    console.log("Hello ");
}

load();

