function* basicGenratorFunc() {
    yield 1;
    yield 2;
    yield 3;
}

const basicGen = basicGenratorFunc();
console.log("basicGen1", basicGen.next()); //{value:1, done:false}
console.log("basicGen2", basicGen.next()); //{value:2, done:false}
console.log("basicGen3", basicGen.next()); //{value:3, done:false}
console.log("basicGen4", basicGen.next()); //{value:4, done:true}

function* generateUserId() {
    let counter = 1;
    const user = 'User';
    while (true) {
        yield user + counter;
        counter++;
    }
}

const genUserId = generateUserId();
console.log("UserId 1", genUserId.next()); //{value:User1, done:false}
console.log("UserId 2", genUserId.next()); //{value:User2, done:false}
console.log("UserId 3", genUserId.next()); //{value:User3, done:false}
console.log("UserId 4", genUserId.next()); //{value:User4, done:false}


function* arrayIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i];
    }
}

const genArray = arrayIterator(['Apple', 'Ball', 'Cat', 'Dog', 'Eliphant']);
console.log("ArrayIterator 1", genArray.next().value); //Apple
console.log("ArrayIterator 2", genArray.next().value); // Ball
console.log("ArrayIterator 3", genArray.next().value); // Cat
console.log("ArrayIterator 4", genArray.next().value); // Dog
console.log("ArrayIterator 5", genArray.next().value); // Ellipant


function* incrementByGenrator() {
    let num = 1;

    while (true) {
        const increment = yield num;
        if (increment != null) {
            num += increment
        } else {
            num++;
        }
    }

}

const addBy = incrementByGenrator();
console.log('incrementBy 1', addBy.next().value); // 1
console.log('incrementBy 4', addBy.next(4).value); // 1+4 = 5
console.log('incrementBy 10', addBy.next(10).value); // 5 + 10 = 15
console.log('return number and exit from generater', addBy.return(20).value); // 20 and next gen value will be undefined
console.log('increment by 3', addBy.next().value); // undefined
