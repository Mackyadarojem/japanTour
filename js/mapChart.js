$(document).ready(function(){

  updateFill();

  $('.carousel-control-next').click(function() {
    updateFill();
  });

  $('.carousel-control-prev').click(function() {
    updateFill();
  });
  
});
  
  
function updateFill(){
  $.ajax({
    url: 'mapChart.html',       // URL to send the request to
    type: 'POST',                // Type of request (GET, POST, etc.)
    success: function(response) {  // Function to call on success
      $('#mapContainer').html(response);
      var tokyoElement = document.getElementById("Tokyo");
      var tokyoLabelElement = document.getElementById("Tokyo_label");
      var gifuElement = document.getElementById("Gifu");
      var gifuLabelElement = document.getElementById("Gifu_label");
      var hokkaidoElement = document.getElementById("Hokkaido");
      var hokkaidoLabelElement = document.getElementById("Hokkaido_label");
      var kyotoElement = document.getElementById("Kyoto");
      var kyotoLabelElement = document.getElementById("Kyoto_label");
      var osakaElement = document.getElementById("Osaka");
      var osakaLabelElement = document.getElementById("Osaka_label");
      var kanagawaElement = document.getElementById("Kanagawa");
      var kanagawaLabelElement = document.getElementById("Kanagawa_label");
      
      if ($('#tokyoCard').hasClass('active')) { 
        kyotoElement.style.fill = "";
        osakaElement.style.fill = "";
        hokkaidoElement.style.fill = "";
        gifuElement.style.fill = "";
        kanagawaElement.style.fill = ""
        tokyoElement.style.fill = "red";
        tokyoLabelElement.style.display = "";
      } else if ($('#osakaCard').hasClass('active')) {
        tokyoElement.style.fill = "";
        kyotoElement.style.fill = "";
        hokkaidoElement.style.fill = "";
        gifuElement.style.fill = "";
        kanagawaElement.style.fill = ""
        osakaElement.style.fill = "red";
        osakaLabelElement.style.display = "";
      } else if ($('#kyotoCard').hasClass('active')) {
        tokyoElement.style.fill = "";
        osakaElement.style.fill = "";
        hokkaidoElement.style.fill = "";
        gifuElement.style.fill = "";
        kanagawaElement.style.fill = ""
        kyotoElement.style.fill = "red";
        kyotoLabelElement.style.display = "";
      } else if ($('#sapporoCard').hasClass('active')) {
        tokyoElement.style.fill = "";
        osakaElement.style.fill = "";
        kyotoElement.style.fill = "";
        gifuElement.style.fill = "";
        kanagawaElement.style.fill = ""
        hokkaidoElement.style.fill = "red";
        hokkaidoLabelElement.style.display = "";
      } else if ($('#nagoyaCard').hasClass('active')) {
        tokyoElement.style.fill = "";
        osakaElement.style.fill = "";
        kyotoElement.style.fill = "";
        hokkaidoElement.style.fill = "";
        kanagawaElement.style.fill = ""
        gifuElement.style.fill = "red";
        gifuLabelElement.style.display = "";
      } else if ($('#yokohamaCard').hasClass('active')) {
        tokyoElement.style.fill = "";
        osakaElement.style.fill = "";
        kyotoElement.style.fill = "";
        hokkaidoElement.style.fill = "";
        gifuElement.style.fill = "";
        kanagawaElement.style.fill = "red";
        kanagawaLabelElement.style.display = "";
      }
    },
    error: function(xhr, status, error) { // Function to call on error
        console.log('Error:', status, error);
    }
  });
}