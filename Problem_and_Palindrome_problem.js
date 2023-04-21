// prime number

let num=7;
let count;
for(i=1;i<num;i++)
{
if(num%1==0)
{
count++;
}
if(count==2)
console.log(num,"is Prime");
else
console.log(num,"is not Prime");
}


// palindrome 

let str="dad";
let temp="";
for(let i=str.length;i>0;i--)
temp[i]=str[i];

if(temp==str)
console.log("Palindrome");
else
console.log("Not palindrome");
