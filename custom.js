function mySplice(str) {
    return str.length<24?str:str.slice(0, 24) + "...";
}
console.log(mySplice("npm install -g typescript npm WARN using --force Recommended protections disabled."));
console.log(mySplice("npm install"));
