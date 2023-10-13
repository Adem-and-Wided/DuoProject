


var count = 1



function swipeLeft() {
    if (count > 10) {
        count = 1
    }
    $("#img4").attr("src",`${$("#img3").attr("src")}`)
    $("#img3").attr("src",`${$("#img2").attr("src")}`)
  $("#img2").attr("src",`${$("#img1").attr("src")}`)
  $("#img1").attr("src","./imgs/img"+count+".jpg")
 count = count + 1

}

var count2 = 10
function swipeRight() {
    if (count2 === 0) {
        count2 = 10
    }
    $("#img1").attr("src",`${$("#img2").attr("src")}`)
    $("#img2").attr("src",`${$("#img3").attr("src")}`)
  $("#img3").attr("src",`${$("#img4").attr("src")}`)
  $("#img4").attr("src","./imgs/img"+count2+".jpg")
 count2 = count2 - 1

}

// creating a post

function makePost() {
    var title = $("#title-input").val()
    var img = $("#image-input").val()
    var disc = $("#write-input").val()
    console.log(title,img,disc);
    return createPost(title,disc,img)
    
}
var count = 0
function createPost(title,disc,img) {
    console.log(img)
    
    $(".main-content").prepend(`
    <div  class="post">
    <img src= ${img} alt="" class="post-image">
    <div class="post-preview">
    <h2>${title}</h2>
    <i class="date"> <i class="fa-regular fa-calendar"></i>${new Date().toLocaleString()}</i>
    <p class="preview-text">${disc.substring(0,100)+"..."}</p>
    <a href="./posts.html" class="btn">Read more</a>
    </div>
    </div>`)

    $(".container3").prepend(`
    <div class = "cont">
    <div id="see">
    <h1 class="title">${title}</h1>
    <div class="test">
    <img class="full-img" src= ${img} alt="">
    <i class="date"> <i class="fa-regular fa-calendar"></i>${new Date().toLocaleString()}</i>
    </div>
    <div class="discr">
        <p>${disc}</p>
    </div>
    </div>
</div>
    `)
}




createPost("Eyes Chico","Eyes, chico, are the windows to the soul, as the old saying goes. These intricate orbs of perception serve as our primary source of connection to the world. Through them, we perceive the myriad colors, shapes, and wonders that surround us. Our eyes convey our emotions, from the sparkle of joy to the depths of sorrow, often speaking louder than words ever could. They are the silent storytellers of our lives, revealing our innermost thoughts and feelings with a glance. It's through our eyes that we make connections, share unspoken secrets, and express the beauty of our humanity. They are truly remarkable, these eyes, for they allow us to witness the world's splendors and, in turn, reflect our own essence upon it.","./imgs/img3.jpg")
createPost("Matrix",`"The Matrix," a term that evokes more than just a popular film franchise, delves into a realm of philosophical contemplation and scientific intrigue that transcends the silver screen. Just as in the iconic movie, it beckons us to question the authenticity of our reality. Is it possible that the world we experience is merely an intricate simulation, a construct, or a matrix in which we are unwittingly ensnared?

This tantalizing concept, explored in both philosophy and science, suggests that our everyday existence may not represent the ultimate reality but rather a highly sophisticated illusion, much akin to the virtual world depicted in the film. As a result, "The Matrix" has become a point of reference for discussions that challenge our perception of the world, the power of human choice, and the implications of our growing dependence on technology.

Much like Neo's awakening in the movie, the idea of 'The Matrix' prompts us to delve deeper into the fundamental mysteries of our existence. Philosophers and scientists alike have delved into the profound question: What if the reality we know is just one layer, one version, among many in an intricate web of simulated experiences? It's a notion that compels us to peer beyond the ordinary and consider the astonishing possibility that the world as we perceive it is far more enigmatic and multifaceted than we might ever have imagined. In essence, 'The Matrix' invites us to embark on a journey of contemplation and exploration, pushing the boundaries of our understanding of the universe and our place within it.`,"./imgs/img2.jpg")


createPost("Family is Home","Family, the cornerstone of our lives, is where we discover the true essence of love and its profound importance. It's within the bonds of family that we experience a love that is unconditional, unwavering, and everlasting. This love provides us with a sense of belonging, security, and support. It's the embrace that comforts us in times of trouble and the laughter that amplifies our joy. Family love is the source of strength that enables us to face life's challenges with resilience and courage. It's a love that transcends differences and forgives mistakes, a sanctuary where acceptance and understanding reign. In a fast-paced and ever-changing world, the importance of family love endures as a constant, a lighthouse guiding us through the storms of life. It reminds us that, no matter where we go or what we achieve, the love of family remains our steadfast anchor, grounding us in the knowledge that we are cherished, valued, and forever connected.","./imgs/img1.jpg")

createPost("EQUAL",`Women's power is a force of extraordinary magnitude, quietly shaping the world in profound ways. It's the strength that emanates from every mother who nurtures, every daughter who aspires, and every sister who supports. Women's power is found in the determination of those who shattered glass ceilings and paved the way for countless others to follow. It's the resilience of those who have overcome adversity, the wisdom of those who lead with compassion, and the courage of those who stand up for justice. In every field and at every level, women's power is evident, from politics and business to science, arts, and countless other domains. It is not just a matter of gender equality but a celebration of the unique perspectives and talents that women bring to the table, enriching society and fostering progress. Women's power is not a force that seeks to dominate but one that strives to create a more equitable and harmonious world. It is a testament to the indomitable spirit of half of the world's population and a reminder that when women are empowered, the possibilities are boundless.`,"./imgs/img7.jpg")

createPost("Looking for an outlet",`Passion, that fiery and relentless force that burns within us, is the driving engine of human achievement. It's the spark that ignites our dreams and propels us toward our goals with unwavering determination. When we are passionate, we tap into a boundless well of energy and enthusiasm, making even the most challenging endeavors feel like thrilling adventures. It's the creative fire that fuels innovation, the dedication that turns ordinary individuals into extraordinary leaders, and the love that binds us to our deepest desires. Passion is the life force that transforms work into a labor of love and turns obstacles into opportunities. It knows no boundaries and respects no limitations, for it is the very essence of what makes us human, urging us to reach for the stars and paint the world with the vibrant colors of our dreams. In the pursuit of passion, we find our truest selves and discover the remarkable power within us to shape our destinies and leave an indelible mark on the world.`,"./imgs/img10.jpg")
// ALL BLOGS
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



function postMenu() {
    $(".post-container").css("display","block")
    
}

function closeMenu(){
    $(".post-container").css("display","none")
}









