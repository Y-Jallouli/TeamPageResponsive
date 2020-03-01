
/*
  var body = document.getElementsByTagName("BODY")[0];
  var edge = document.querySelector(".edge");
  var bgAnimation = document.querySelector("#animation-bg");
  var lgMd = document.querySelector(".lg-and-md");
  var sm = document.querySelector(".sm");
  var navbar = document.querySelector(".nav");


  body.onresize = resizeLgMd();

  body.addEventListener("load", resizeLgMd);

  window.onload = resizeLgMd();



  body.addEventListener("load", resizeSm);

  body.onresize = resizeSm;

  window.onload = resizeSm;



  function resizeSm(){
    var windowWidth1 = body.clientWidth;
    if(windowWidth1 < 830){
        if(!(lgMd.classList.contains("d-none"))){
            lgMd.classList.add("d-none");
            navbar.classList.add("d-none")
        }
        
        if((sm.classList.contains("d-none"))){

            sm.classList.remove("d-none");
            navbar.classList.add("d-none")
        }

        
    }else{
        if((lgMd.classList.contains("d-none"))){
            lgMd.classList.remove("d-none");
            navbar.classList.remove("d-none");
        }
        if(!(sm.classList.contains("d-none"))){
            sm.classList.add("d-none");
            navbar.classList.remove("d-none");
        }

    };
}    


  function resizeLgMd(){
    var windowWidth = body.clientWidth;
    if(windowWidth < 1100){
        edge.style.width = "200px";
        if(!(bgAnimation.classList.contains("myanim-md"))){
            bgAnimation.classList.remove("myanim-lg");
            bgAnimation.classList.add("myanim-md");
        }
    }else{
        edge.style.width = "300px";
        if(!(bgAnimation.classList.contains("myanim-lg"))){
            bgAnimation.classList.remove("myanim-md");
            bgAnimation.classList.add("myanim-lg");
        }
    }
  }



*/
