import { hashFunction } from ".";

let transaction = "harkirat => Raman | Rs 100 Ram => Ankit | Rs 10";
let nounce = 1;
while(true)
{
    let input = nounce.toString() + transaction ;
    let hash = hashFunction(input);
    if(hash?.startsWith("00000"))
    {
        console.log("Found nounce:", nounce);
        console.log("hash: ", hash);
        break;
    }

    nounce++;
}
