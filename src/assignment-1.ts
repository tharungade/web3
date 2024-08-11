// @ts-ignore
const crypto = require('crypto');

const lowecasealphabets = "abcdefghijklmnopqrstuvwxyz";

function hashFunction(input: string, functionName: string = 'SHA256'): string | undefined {
    try {
        //@ts-ignore
        return crypto.createHash(functionName).update(input).digest('hex');
    } catch(error) {
        console.error(error);
    }
}

function getRandomString(): string {
    let length = Math.floor(Math.random() * 100) + 1;
    let returnStr = "";
    for(let i = 0; i < length; ++i)
    {
        returnStr += lowecasealphabets[Math.floor(Math.random() *  26)]
    }
    
    return returnStr;
}

while(true)
{
    let input = getRandomString();
    if(hashFunction(input)?.startsWith("00000"))
    {
        console.log("Found input:", input);
        break;
    }
}
