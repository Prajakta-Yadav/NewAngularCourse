function Step1(){
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve("Response Recieved 1");
        }, 2000)
    });
}

function Step2(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Response Recieved 2");
        }, 1000)
    });
}

async function run() {
    console.log(await Step1());
    console.log(await Step2());
}

run();

