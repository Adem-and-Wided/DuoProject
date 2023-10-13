
var photogallery = document.querySelectorAll(".photo-gallery .image span img")
var previewbox = document.querySelector(".preview-box")
var image11= document.querySelector(".image11")
var closeIcone =document.querySelector(".fa-regular")
var nextBtn=document.querySelector("#next")
var prevBtn=document.querySelector(".prev")

var m=1 ;
$(nextBtn).on("click",function(){
    if(m<photogallery.length-1){
        m=m+1
        image11.src=photogallery[m].currentSrc
    }else{
        m=0
        image11.src=photogallery[m].currentSrc
    }
})

$(prevBtn).on("click",function(){
    if(m>0){
        m=m-1
        image11.src=photogallery[m].currentSrc
    }
})
$(".image").on("click",function(e){

    
    previewbox.classList.add("show")
    image11.src=$(this).children().children().attr("src")
    m=$(e.currentTarget).index()
   
})

closeIcone.onclick=()=>{
    previewbox.classList.remove("show");
}


