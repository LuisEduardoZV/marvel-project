export const PUBLIC_KEY = "ac0be0716180ed84e59259a00cc989e3";
const PRIVATE_KEY = "3e7761c75865d5a81ec2c1786f46f94ee4cc7a85";

const md5 = require('md5');

export const createHash = (time) => {
    return md5(`${time}${PRIVATE_KEY}${PUBLIC_KEY}`);
}