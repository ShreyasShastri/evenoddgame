function RandomNumber(){
    let value = Math.floor(Math.random() * 1000);
    return value;
}

function GenerateRandomNumber(){
    
    let intervalId = setInterval(() => {let aNumber = RandomNumber();
            console.log(aNumber);}, 2000);
    console.log(intervalId);
}

GenerateRandomNumber();