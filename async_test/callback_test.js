'use strict';

//
// to-promise
//
class userStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'ellie' && password === 'dream') ||
                    (id === 'coder' && password === 'academy')) {
                    resolve(id);
                } else {
                    reject(new Error(`${id} is not user`));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (user === 'ellie') {
                    resolve({ name: 'ellie', role: 'admin' });
                } else {
                    reject(new Error("user is not ellie"));
                }
            }, 1000);
        });
    }
}

const user_storage = new userStorage();
//const id = prompt("enter your id");
//const passwd = prompt("enter your password");
const id = "ellie";
const passwd = "dream";

user_storage
    .loginUser(id, passwd)
    .then(user_storage.getRoles)
    .then(console.log)
    .catch(console.log);



