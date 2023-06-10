global.companyname="CDAC Acts"
global.course='DAC'

function findval(v){
    console.log(global[v]);
}

findval('companyname'); //CDAC Acts
findval('course')  //DAC
findval('test')  //undefined
console.log("curren folder :",__dirname);
console.log("file name :",__filename);
