let mixed = {
    one: 1,
    two: 2,
    values: [3, 4, 5]
  };

  let { one, two, values:[three, ,five]} = mixed;

  console.log (one,two,three,five)


const dimensions = () => ({ width: 100, height: 200 });


let {width,height} = dimensions ()
console.log(`Width should be 100 - ${width === 100} and height should be 200 ${height === 200}`);



class Candy {
    constructor(sweetness,color){
        this.sweetness = sweetness
        this.color = color
    }
    bite(){
        console.log ('omomom',this.color)
    }
    static showWarning(){
        console.log('JEdzenie słodyzy grozi śmiercią')
    }

}


class Krowka extends Candy {
    constructor(flavour = 'czekoladowy',owner = 'Magda'){
        super('słodki','rudy')
        this.flavour = flavour
        this.owner = owner
    }

    throwToStudent(student){
        this.owner = student
    }
    showOwner(){
        console.log(`this Krowka belongs to ${this.owner} and has ${this.flavour} flavour`)
    }
}
const karmelowaKrowka = new Krowka();
karmelowaKrowka.showOwner()
karmelowaKrowka.bite()
const krowkaMateusza = new Krowka ('vegan','Mateusz')
krowkaMateusza.showOwner()
Candy.showWarning()



