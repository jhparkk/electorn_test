'use strict';

//
// 2. await
//
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));    
}

async function getApple(error_flag=0) {
    console.log(`getApple : await`);
    await delay(3000);

    if (error_flag) throw new Error("getApple error");
    else return 'apple';
}

async function getBanana(error_flag=0) {
    console.log(`getBanana : await`);
    await delay(3000);

    if (error_flag) throw new Error("getBanana error");
    return 'banana';
}

/*
function pickFruits() {
    return getApple().then(apple => {
        return getBanana().then(banana => `${apple} + ${banana}`);
    });
}

async function pickFruits() {
    const apple = await getApple();
    const banana = await getBanana();
    return `${apple} + ${banana}`;
}

*/
// async function pickFruits() {
//     try {
//         // Case 1
//         // const apple = getApple();
//         // const banana = getBanana();

//         // Case 2
//         // const apple = await getApple();
//         // const banana = await getBanana();

//         // Case 3
//         const applePromise = getApple();
//         const bananaPromise = getBanana();
//         const apple = await applePromise;
//         const banana = await bananaPromise;

//         return `${apple} + ${banana}`;
//     } catch (e) {
//         return e;
//     }
// }

//
// 3. useful APIs
//
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));

}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);