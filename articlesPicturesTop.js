let articlesContainer = document.getElementById("articlesContainer");
let articles = articlesContainer.firstChild;
let articlesPictures = document.getElementById("articlesPictures");


function resize(width){
  if(width.matches){
    articlesContainer.insertBefore(articlesPictures, articles);
    // document.body.style.backgroundColor = "yellow";
    console.log("ta mère!");
  }else{
    articlesContainer.insertBefore(articles, articlesPictures);
    // document.body.style.backgroundColor = "pink";
    console.log("Eh j'te mange !");
  }
}

let width = window.matchMedia("(max-width: 1100px)");
resize(width); // Call listener function at run time
width.addListener(resize); // Attach listener function on state changes


window.addEventListener("resize",function()
  {
    if(window.innerWidth < 1100)
    {

      console.log("resizing DOWN");
    }
    if(window.innerWidth > 1100){

      console.log("resizing UP");
    }
  })
