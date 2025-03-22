let num = Boolean;
let num3 = Boolean;
let num5= Boolean;
num = Math.floor(Math.random()*50+1);


num3 = num%3;
num5 = num%5;

if (num3==0 && num5==0)
{
     console.log('3と5の倍数です');
}

 else if ( num3 == 0){
 console.log('3の倍数です');
 }

else if (num5 == 0){
console.log('5の倍数です');
     }

console.log(num);

