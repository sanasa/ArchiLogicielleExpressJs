$(document).ready(function() {
  
  $('.deleteButton').on('click', function() {
      var Id = this.dataset.key;
      $.ajax({
        url: "http://localhost:3000/movies/"+Id,
         type: "DELETE",        
         success: function(result) {
           location.href="http://localhost:3000/movies"
         }
      })
   });
  



});