let user3 = {
name: "Prajakta",
normalFunc: function(){
console.log(this.name);
},
arrowFunc: () => {
console.log(this.name);
}
};
user3.normalFunc();
user3.arrowFunc();