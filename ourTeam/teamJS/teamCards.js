function view(){
 var a = document.getElementById('viewOnHover');

  if( a.classList.contains('dispNone') ){
     a.classList.remove('dispNone');
  }
}

function notview(){
    var b = document.getElementById('viewOnHover');
    if( ! (b.classList.contains('dispNone') )){
        b.classList.add('dispNone');
     }
}



function view2(){
    var a = document.getElementById('viewOnHover2');
   
     if( a.classList.contains('dispNone2') ){
        a.classList.remove('dispNone2');
     }
   }
   
   function notview2(){
       var b = document.getElementById('viewOnHover2');
       if( ! (b.classList.contains('dispNone2') )){
           b.classList.add('dispNone2');
        }
   }