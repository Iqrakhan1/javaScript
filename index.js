
//factory function

const adress = adress1("kolar" , "bhopal" , 246003);
console.log(adress);

function adress1(street, city, zipCode){
   return{
       street, 
       city,
       zipCode,
   }
};


//constracter function 
const newadress = new Adress("dmart" , "Indore" , 673672364);
console.log(newadress);

function Adress(street, city,zipCode){
this.street = street,
this.city =city,
this.zipCode = zipCode
}



