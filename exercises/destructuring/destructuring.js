let colors = ['red', 'green'];

let [error,ok] = colors;

console.log(`Errors takes color ${error} and OK state is in ${ok} color`);

/*let numbers = [1,2,3,4]

let [first,,,fourth] = numbers

console.log (`first- ${first} and fourth- ${fourth} `)




let convolutedArray = ['name',1, ["test", 2 ,"test2"], 3,"new"]

let [a, ,[b, ,c], ,d ]= convolutedArray
console.log(a,b,c,d)*/

const User ={
    name: "Magda",
    age: "15",
    creditCard: {
    creditCardNumber: '4242424242424242',
    cvv:442
},
favouriteFood:'poutine'
}

/*inne rozwiązanie const {
    name: login,
    creditCard: {
        cvv
    },
    favouriteFood: food,
} = User;
console.log (login,cvv, food)*/


// drugie rozwiązanie
let {name,creditCard:{cvv},food} = User
console.log(name,cvv,food)






