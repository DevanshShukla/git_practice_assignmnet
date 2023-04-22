let num=7;
let count=0;
for(i=1;i<=num;i++){
if(num%i==0){
count++;
}
}
if(count==2){
console.log(num,"is Prime");
}else{
console.log(num,"is not Prime");
}  


//palindrome

let str="dad";
let temp="";
for(let i=str.length-1;i>=0;i--){
  temp=temp+str[i]
}
if(temp==str){
console.log("Palindrome");
}else{
console.log("Not palindrome");
}