const obj1 = { 
    name: "Prajakta", 
    age: 22 
};

const obj2 = { 
    city: "Karad", 
    age: 25,
    //name:"Praju"
};

const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);

//If same key exists, later object value overrides earlier value.