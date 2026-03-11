let choice = "rectangle";

if(choice === "circle"){
    let r=5;
    let area = Math.PI * r * r;
    console.log("Area of circle:", area);
}

else if(choice === "rectangle"){
    let length = 10;
    let width = 5;
    console.log("Area of Rectangle:", length * width);
}
else if(choice === "triangle"){
    let base = 8;
    let height = 4;

    console.log("Area of Triangle:", 0.5 * base * height);
}