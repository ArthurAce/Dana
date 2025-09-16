function test() {
    let que;
    do {
        que = prompt("Введи правильный ответ:");
        if (que === null) {
            // если пользователь нажал "Отмена"
            return;
        }
    } while (que !== "бісиш"); // пока ответ неверный, спрашиваем снова

    // если правильный ответ
    alert("Знаю, і ти мене))))");
   
}

test();


console.log(emoji)
/* let a = 4
while (a < 10) {
    console.log(a)
    a++
}

let i = 5
while (i) {
    console.log(i)
    i--
}

let i = 3;
while (i) console.log(i--);

let i = 0
do {
    console.log(i)
    i++
} while (i < 5)

let i = 0
while (i < 5) {
    console.log(i)
    i++
} 

for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = `Value at coords (${i},${j})`
    console.log(`Value at coords (${i},${j})`)

    // what if we want to exit from here to Done (below)?
  }
}

console.log('Done!'); */

/* let age = +prompt("what if your age", "")

switch (true) {
  case age === 0: {
    console.log('Error')
    break
  }
  case age >= 1 && age < 18: {
    console.log('Proove it')
    break
  }
  case age >= 18: {
    console.log('okay')
    break
  }
  default: {
    console.log(`Your age: ${age}`)
  }
} */