$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})

let count = document.querySelectorAll(".count")
let arr = Array.from(count)

arr.map(function(left_1box){
    let startnumber = 0

    function counterup(){
        startnumber++
        left_1box.innerHTML = startnumber

        if(startnumber == left_1box.dataset.number){
            clearInterval(stop)
        }
    }
    let stop = setInterval(function(){
        counterup()
    },50)
});