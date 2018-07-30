import './styles.css';

$(document).ready(function() {
  $('#entry-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    $('#entries').append("<li><h4>" + title + "</h4>" + body + "</li>");
  });
});
