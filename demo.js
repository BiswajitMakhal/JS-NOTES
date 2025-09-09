function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {    //setTimeout holo js-ar built-in function, jeta bole ai function ke akhuni use korona khanikhon por koro//
            let dataFound = true;
            if (dataFound) {
                resolve({ id: 1, name: "Pizza" });
            } else {
                reject("Data not found");
            }
        }, 2000);
    });
}

fetchData()
    .then((data) => console.log("Received:", data))
    .catch((err) => console.error("Error:", err));




// Easy

const myPromise = new Promise((resolve, reject) => {  //(resolve, reject) => { ... } অংশকে বলে executor function।// 
    let success = false;
    if (success) {
        resolve("✅Operation successful");
    } else {
        reject("❌Operation failed");
    }
});
myPromise
    .then((result) => {     //resolve hole .then cholbe, (result)--> holo parameter ar parameter hisebe sei value pabe jeta resolve-te pathano hoechilo//
        console.log(result);
    })
    .catch((error) => {     //reject hole .catch cholbe// (error)--> holo parameter ar parameter hisebe sei value pabe jeta reject-te pathano hoechilo//
        console.error(error);
    })
    .finally(() => {   //.finally sob somoi cholbe ,resolve hok or reject hok na keno, kichu kichu kaaj thake jeta sofol or bartho hok na keno korte hobei, jemon loading screen off kora , database connection close kora , memory free kora etc.//
        console.log("Promise completed");
    });

// practice
const example = new Promise((resolve, reject) => {
    let jukupuku = true;
    if (jukupuku) {
        resolve("✔️yo boy I am a true person")
    }
    else {
        reject("❌yo boy I am a false perosn")
    }
});

example
    .then((a) => {
        console.log(a)
    })
    .catch((a) => {
        console.error(a);
    })
    .finally(() => {
        console.log("completed");

    })


