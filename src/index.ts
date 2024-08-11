// @ts-ignore
const crypto = require('crypto');

export function hashFunction(input: string, functionName: string = 'SHA256'): string | undefined {
    try {
        //@ts-ignore
        return crypto.createHash(functionName).update(input).digest('hex');
    } catch(error) {
        console.error(error);
    }
}