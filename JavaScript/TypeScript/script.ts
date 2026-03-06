
let marks:number[]=[70,45,50,60,80];

const marksList = document.getElementById("marksList") as HTMLElement;

marks.forEach((m)=>{
    let li = document.createElement("li");
    li.innerText = m.toString();
    marksList.appendChild(li);
})

let mixedData:(number|string)[] = [1,"Omkar",2,"Patil"];

const mixedList = document.getElementById("mixedList") as HTMLElement;
mixedData.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item.toString();
    mixedList.appendChild(li);
})

let user:[number,string,number,string,boolean,boolean,string]=[1,"omkar",2,"patil",true,false,"omkar"];

const userInfo = document.getElementById("userInfo") as HTMLElement;
mixedData.forEach((item)=>{
    let li = document.createElement("li");
    li.innerText = item.toString();
    userInfo.appendChild(li);
})
