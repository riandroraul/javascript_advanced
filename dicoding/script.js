1. /* Buatlah class bernama Animal dengan ketentuan:
 *    - Memiliki properti:
 *      - name: string
 *      - age: int
 *      - isMammal: boolean
 *    - Memiliki constructor untuk menginisialisasi properti:
 *      - name
 *      - age
 *      - isMammal
 */
class Animal {
    name = '';
    age = 0;
    isMammal = false;

    constructor(){
        this.name = 'kucing';
        this.age = 4;
        this.isMammal = false;
    }

}



/*
 * 2. Buatlah class bernama Rabbit dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - eat yang mengembalikan nilai string "${this.name} sedang makan!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai true
 /*/
class Rabbit extends Animal{
    constructor(){
        super();
        this.isMammal = true;
        const eat = name => {
            this.name = name;
            return `${name} sedang makan!`;
        }
    }

}

const myRabbit = new Rabbit();
console.log(myRabbit.eat('kelinci'));


 /*
 * 3. Buatlah class bernama Eagle dengan ketentuan:
 *    - Merupakan turunan dari class Animal
 *    - Memiliki method:
 *      - fly yang mengembalikan nilai string "${this.name} sedang terbang!"
 *    - Ketika diinstansiasi, properti isMammal harus bernilai false
 */
class Eagle extends Animal{
    constructor(){
        super();
        const fly = (name) =>{ 
            return `${name} sedang terbang!`;
        }
    }
}

const myEagle = new Eagle();


 
 /*
 * 4. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
 *    - properti name bernilai: "Labi"
 *    - properti age bernilai: 2
 * 5. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
 *    - properti name bernilai: "Elo"
 *    - properti age bernilai: 4
 */

 myRabbit.name = 'Labi';
 myRabbit.age = 2;

 myEagle.name = 'Elo';
 myEagle.age = 4;

 console.log(myEagle.isMammal);