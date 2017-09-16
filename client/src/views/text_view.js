var TextView = function(){
}

TextView.prototype.render = function(data) {
  var div = document.querySelector("#main-view");
  var heading = document.createElement('h3');
  var paragraph = document.createElement('p');

  heading.innerText = data[0].title;
  paragraph.innerText = data[0].text;

  div.appendChild(heading);
  div.appendChild(paragraph);
};

module.exports = TextView;