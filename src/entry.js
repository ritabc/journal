export function Entry(body, title) {
  this.body = body;
  this.title = title;
}

Entry.prototype.countWords = function() {
  var words = this.body.split(" ");
  var wordCount = words.length;
  return wordCount;
};


Entry.prototype.countLetters = function() {
  var consonants = "bcdfghjklmnpqrstvwxyz";
  var vowels = "aeiou";
  var entry = this.body;
  var vowel_counter = 0;
  var consonant_counter = 0;
  var final_array = [];
  for (var i = 0; i < entry.length; ++i) {
    if (consonants.includes(entry[i])) {
      consonant_counter++;
    }
    else if (vowels.includes(entry[i])) {
      vowel_counter++;
    }
    else {
    }
  }
  final_array.push(vowel_counter, consonant_counter);
  return final_array;
};

Entry.prototype.getTeaser = function() {
  var sentences = this.body.split(/[.!?]/);
  var firstSentence = sentences[0].split(" ");
  var teaser = "";
  if (firstSentence.length >= 8) {
    for (var i = 0; i < 8 ; i++) {
      teaser += (" " + firstSentence[i]);
    }
  } else {
    for (var j = 0; j < firstSentence.length; j++) {
      teaser += (" " + firstSentence[j]);
    }
  }
  return teaser;
};
