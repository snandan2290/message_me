// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "jquery"; // this import first

//= require semantic-ui

$(document).ready(function(){ $('.ui.dropdown').menu()});


// $(document).on('load', function(){
//   $('.ui.dropdown').dropdown();
// });
