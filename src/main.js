import './styles.css';
import { Entry } from './entry.js';

$(document).ready(function() {
  $('#entry-form').submit(function(event){
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var entry = new Entry(body, title);
    var wordCount = entry.countWords();
    var letters = entry.countLetters();
    var teaser = entry.getTeaser();
    $('#entries').append("<li><h4>" + title + "</h4>" + body + "</br>" + "Number of words: " + wordCount + "</br>" + "This entry has " + letters[0] + " vowels and " + letters[1] + " consonants" + "</br>" + teaser + "</li>");
  });
});
