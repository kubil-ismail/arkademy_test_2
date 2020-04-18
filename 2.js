const usernameCheck = (input) => {
    // At least 2 to 12 characters, the first letter must be @
    let regex = /^[@]+[a-zA-Z\d@]{1,11}$/;
    return regex.test(input);
};

const passwordCheck = (input) => {
    // At least 6 characters, only number
    var regex = /^[0-9]{6,6}$/;
    return regex.test(input);
};

const runUsername = usernameCheck("@koders");
// const runUsername = usernameCheck("@programmerhandal");

const runPassword = passwordCheck("212223");
// const runPassword = passwordCheck("2!2a3B");

console.log(`Username Check = ${runUsername} and Password Check = ${runPassword}`);
