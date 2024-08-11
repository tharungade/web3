import { hashFunction } from ".";

let lowecasealphabets = "abcdefghijklmnopqrstuvwxyz";

// @ts-ignore
const crypto = require('crypto');

function getRandomString(): string {
    let length = Math.floor(Math.random() * 100) + 1;
    let returnStr = "";
    for(let i = 0; i < length; ++i)
    {
        returnStr += lowecasealphabets[Math.floor(Math.random() *  26)]
    }
    
    return returnStr;
}

let prefix = "100xdevs"
while(true)
{
    let input = prefix + getRandomString();
    if(hashFunction(input)?.startsWith("00000"))
    {
        console.log("Found input:", input);
        break;
    }
}
