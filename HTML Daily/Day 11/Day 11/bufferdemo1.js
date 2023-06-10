var buff=Buffer.alloc(30);
//buff="hello wolrd"
for(var i=0;i<26;i++){
    buff[i]=i+97
}
//it will convert the characters into ascii encoding
console.log(buff.toString("ascii"));
//it will convert the characters into utf8 encoding
console.log(buff.toString('utf8'));
//it will print the characters from 5 th to 7 th index position
console.log(buff.toString('utf8',5,8))

var buff2=new Buffer("node");
console.log(buff2.length);
console.log(buff2.toString());

var buff2=new Buffer("Hello All");
var portion=buff2.slice(6,9);
console.log(buff2.toString());
console.log(portion.toString());

var target=Buffer.alloc(buff2.length);
//copy 0 to 5 chracters of buff2 into target buffer 
//and start writing from 0 th position of target  
buff2.copy(target,0,0,5);
console.log(buff2.toString());
console.log(target.toString());

//write a code for allocating 100 location for a buffer
//and write capital alphabets in it
var buff=Buffer.alloc(100);
for(var i=0;i<26;i++){
    buff[i]=i+65;
}
console.log(buff.toString());