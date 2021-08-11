'use strict';

//
// Bad case of using callback
//
class userStorage {
    loginUser(id, password, onSuccess, onError) {
        let result = 0;
        setTimeout(() => {
            if ((id === 'ellie' && password === 'dream') ||
                (id === 'coder' && password === 'academy')) {
                onSuccess(id);
                result = 1;
            } else {
                onError(new Error(`id[${id}] is not found.`));
                result = -1;
            }
        }, 2000);
        return result;
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'ellie') {
                onSuccess({ name: 'ellie', role: 'admin' });
            } else {
                onError(new Error(`user[${user}] has no any roles`));
            }
        }, 1000);
    }
}

function onSuccess(id_user) {
    console.log(`success : `,id_user);
}

function onError(error) {
    console.log(error);
}

const user_storage = new userStorage();
const id = prompt("enter your id");
const passwd = prompt("enter your password");


const ret = user_storage.loginUser(
    id, 
    passwd, 
    () => {
        user_storage.getRoles(id, onSuccess, onError);
    }, 
    onError);


