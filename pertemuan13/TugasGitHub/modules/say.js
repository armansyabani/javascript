function hi(user) { console.log(`Hello, ${user}`); }
function bye(user) { console.log(`Bye, ${user}`); }
export { hi, bye };


export function hi(user) { console.log(`Hello, ${user}`); }
export function bye(user) { console.log(`Bye, ${user}`); }


function hi(user) { console.log(`Hello, ${user}`); }
function bye(user) { console.log(`Bye, ${user}`); }
export { hi as salam, bye as pamit };
