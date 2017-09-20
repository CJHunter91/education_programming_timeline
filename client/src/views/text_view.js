var TextView = function(){
}

TextView.prototype.render = function(data) {
  var div = document.querySelector("#main-view");
  var heading = document.createElement('h3');
  var paragraph = document.createElement('p');
  var popChart = document.createElement('section')

  heading.innerHTML = data[0].title + "<span>|</span>";
  paragraph.innerText = data[0].text;
  popChart.id = "popChart";
  popChart.classList.add('fullChart');

  div.appendChild(heading);
  div.appendChild(paragraph);
  div.appendChild(popChart);
};

module.exports = TextView;