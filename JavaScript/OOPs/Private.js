
class Product{
    #P_ID = 10;
    #P_Name ="Omkar";

    price;
     #Products(){
        console.log(this.#P_ID)
        // return this.#P_ID;
     }
    Product(name){
        this.#Products();
        return this.#P_Name + name;
      }
}

let obj = new Product();
// console.log(obj.Products());
console.log(obj.Product("hello"));

// class Product
// {    
//             #float P_ID;
//             #char P_Name[40];

//     public :
//             let  price 
//             Product();
//             Product(char[], float, float);
//             ~Product();
// };

// Product::Product(char[] arr, float fl, float fl2){

// }
