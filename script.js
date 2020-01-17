class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return (`${this.rate}` * `${this.days}`)
    }
}
const worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker1.name); // виведе 'Ivan'
console.log(worker1.surname); //виведе 'Ivanov'
console.log(worker1.rate); //виведе 10
console.log(worker1.days); //виведе 31
console.log(worker1.getSalary()); //виведе 310 - тобто 10*31
const worker2 = new Worker('Pavlo', 'Pavliv', 11, 31);
console.log(worker1.getSalary() + worker2.getSalary());

class MyString {
    constructor(string) {
        this.string = string;
    }
    reverse() {
        let newStr = '';
        for (let i = (this.string.length - 1); i >= 0; i--) {
            newStr += this.string.charAt(i);            
        }
        return newStr;
    }
    ucFirst() {
        return (this.string.charAt(0).toUpperCase()+this.string.substring(1))
    }
    ucWords() {
        let arr = this.string.split(" ");
        for(let i = 0; i<arr.length;i++){
            arr[i] = (arr[i].charAt(0).toUpperCase()+arr[i].substring(1))
        }
        return(arr.join(" "))
    }
}
const str1 = new MyString('ivan');
console.log(str1.reverse()); 
const str2 = new MyString('arsenal');
console.log(str2.ucFirst());
const str3 = new MyString('arsenal arsenal arsenal');
console.log(str3.ucWords());