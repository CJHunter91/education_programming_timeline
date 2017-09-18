var TextView = function(){
}

TextView.prototype.render = function(data) {
  var div = document.querySelector("#main-view");
  var heading = document.createElement('h3');
  var paragraph = document.createElement('p');
  var fullChart = document.createElement('section')

  heading.innerText = data[0].title;
  paragraph.innerText = data[0].text;
  fullChart.id = "fullChart";

  div.appendChild(heading);
  div.appendChild(paragraph);
  div.appendChild(fullChart);
};

module.exports = TextView;