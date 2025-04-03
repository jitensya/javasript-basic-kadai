const btn = document.getElementById('btn');
const text = document.getElementById('text');

/*setTimeout(function() {
btn.addEventListener('click',function () 
text.textContent ='ボタンをクリックしました'),},10000); 
*/
btn.addEventListener('click',function (){
 setTimeout(()=> {
    text.textContent =('ボタンをクリックしました');   
 },2000)}); 