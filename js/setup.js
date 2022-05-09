$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$(".mais-info").hide()

$("#btn-ler-agora").click(function() {
    window.location.href="ler-livro.html"
})

$("#btn-info-ler").click(function() {
    window.location.href="ler-livro.html"
})

$("#btn-info").click(function() {
    $(".mais-info").show()
})

$("#btn-fechar-mais-info").click(function() {
    $(".mais-info").hide()
})

