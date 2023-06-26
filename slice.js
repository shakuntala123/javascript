let str = 'hello hi hola'
console.log('use of slice \n')
console.log(str)
let str1 = str.slice(0,5);
console.log(str1)

let str2 = "Mind, Power, Soul";
console.log('use of substring \n ')
let part = str2.substring(6, 11);
console.log(part);

console.log('use of substr \n ')
let str3 = "Mind, Power, Soul";
let part1 = str3.substr(6, 5);
console.log(part1);

console.log('use of replace \n ')
let str4 = "Mind, Power, Soul";
let part2 = str4.replace("Power", "Space");
console.log(part2);

console.log('use of replaceAll \n ')
let str5 = "Mind, Power, Power,  Soul";
let part3 = str5.replaceAll("Power", "Space");
console.log(part3);