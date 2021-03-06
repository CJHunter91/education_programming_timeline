var AjaxRequest = require('../services/ajax_request');
var IndivLangView = require('./indiv_lang_view');
var Timeline = require('../services/timeline_animation');
var LineChart = require('./lineChart.js')

var TimelineView = function() {
}

TimelineView.prototype.render = function(data) {
  var url = 'http://localhost:3000/api/languages/'
  var section = document.getElementById('timeline');
  var ol = document.getElementById('timeline-list');
  var indivLangView = new IndivLangView();
  //loop through each language
  data.forEach(function(language) {
    var li = document.createElement('li');
    li.innerHTML = `
    <a href="/" class="timeline-date"> ${language.year} <img src=${language.icon}></a>`;
    li.className = "timeline-li";
    //adds click handler to each language element
    li.addEventListener('click', function(event){
      event.preventDefault();
      timeline = new Timeline();
      timeline.moveToID(language.id - 1);
      if(language.id != 1){
        timeline.setBtnState(timeline.back, false)
        timeline.setBtnState(timeline.prev, false)
      }
      var ajaxLangRequest = new AjaxRequest(url + parseInt(language.id));
      ajaxLangRequest.get(indivLangView.render);
    });
    //append to the list
    new LineChart(data);
    ol.appendChild(li);
    
  });


  section.appendChild(ol);
  //set timeline animation
  timelineAnimation = new Timeline();
  timelineAnimation.runTimeline();

  
} 


module.exports = TimelineView;




