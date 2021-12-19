$( document ).ready(function() {
  var text = [
    "Percaya gak sih, simpan aset digital bisa bayarin Saldo OVO kamu seumur hidup?", 
    "Percaya gak sih, simpan aset digital bisa bayarin Makan kamu seumur hidup?",
    "Percaya gak sih, simpan aset digital bisa bayarin Voucher Game kamu seumur hidup?",
    "Percaya gak sih, simpan aset digital bisa bayarin belanja eCommerce kamu seumur hidup?",
    "Percaya gak sih, simpan aset digital bisa bayarin Kuota Data kamu seumur hidup?"
  ];
  var counter = 0;
  var elem = document.getElementById("changeText");

  function change() {
    $(elem).fadeTo(3000, 0, function() {
      this.innerHTML = text[counter];
      counter = ++counter % text.length;
      $(this).fadeTo(3000, 8, change)
    })
  }
  change();


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    center: true,
    responsive:{
      0:{
          items: 1
      },
      768:{
          items: 2.25
      }
    }
  })
});