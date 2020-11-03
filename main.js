//METODO 1: UTILIZZO FUNZIONE ADD CLASS
//utilizzo delle classi active e close del css. Prendo a, figlio diretto di header-right, al click di quell'elemento, all'hamburger menu aggiungo la classe active, che dà un display block.
// $(".header-right > a").click(function(){
//   $(".hamburger-menu").addClass("active")
// })
// //quando clicco l'elemento con la classe close viene rimossa la classe active con display block all'hamburger menu
// $(".hamburger-menu > .close").click(function(){
//   $(".hamburger-menu").removeClass("active")
// })

//METODO 2: UTILIZZO LE FUNZIONI DI HIDE E SHOW
$(".header-right > a").click(function(){
  $(".hamburger-menu").show();
})

$(".hamburger-menu > .close").click(function(){
  $(".hamburger-menu").hide();
})
