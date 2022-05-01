document.getElementById("res").innerHTML=''; 
var operand='';
var op1=0;
var ans=0;
function btn0(){
      document.getElementById("res").innerHTML+='0';
  }
 function btn1(){
      document.getElementById("res").innerHTML+='1';
  }
 function btnClr(){
      document.getElementById("res").innerHTML='';
  }
 function btnSum(){
      operand='+';
      op1=parseInt(res.innerHTML,2);
      document.getElementById("res").innerHTML+='+';
  }
 function btnSub(){
     operand='-';
     op1=parseInt(res.innerHTML,2);
      document.getElementById("res").innerHTML+='-';
  }
 function btnMul(){
     operand='*';
      op1=parseInt(res.innerHTML,2);
      document.getElementById("res").innerHTML+='*';
  }
 function btnDiv(){
     operand='/';
      op1=parseInt(res.innerHTML,2);
      document.getElementById("res").innerHTML+='/';
  }
 function btnEql(){
     if(operand=='+'){
         var i=(res.innerHTML).indexOf('+');
         var op2=parseInt((res.innerHTML).substring(i+1),2);
         ans=op1+op2;
          }
     else if(operand=='-'){
         var i=(res.innerHTML).indexOf('-');
         var op2=parseInt((res.innerHTML).substring(i+1),2);
         ans=op1-op2;
          }
     else if(operand=='*'){
         var i=(res.innerHTML).indexOf('*');
         var op2=parseInt((res.innerHTML).substring(i+1),2);
         ans=op1*op2;
          }
     else if(operand=='/'){
         var i=(res.innerHTML).indexOf('/');
         var op2=parseInt((res.innerHTML).substring(i+1),2);
         ans=op1/op2;
          }
      document.getElementById("res").innerHTML=ans.toString(2);
     
     
     
 }