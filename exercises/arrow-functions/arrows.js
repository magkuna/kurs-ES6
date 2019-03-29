const up = () => {
    return 'Normal RETURN'
}   // function () {}

const up1 = () => 'test'
const up2 = param =>param.toUpperCase()
const up3 = (par1, par2) => {
    return 'aa'
}

console.log(up())
console.log(up1) // FUNCTION OBJECT!
console.log (`${up1()}`)
console.log(up2('ok'))
console.log(up3())  



const test = function () {
    console.log(this)
}
test ()