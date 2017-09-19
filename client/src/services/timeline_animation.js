
var timelineAnimation = function(){
  var timeline = document.querySelector("#timeline ol");
  var arrows = document.querySelectorAll('.arrows .arrow');
  var prev = document.querySelector('.arrows .prev-arrow');
  var next = document.querySelector('.arrows .next-arrow');
  var scrolling = 280;
  console.log(arrows);


  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(){

        //disable both while waiting for animation
        if (!prev.disabled) {
          prev.disabled = true;
        }

        if (!next.disabled) {
          next.disabled = true;
        }
        //determines whether to remove or add scrolling
        let counter = 0;
        const sign = (this.classList.contains("arrow__prev")) ? "" : "-";
        if(counter === 0){
          timeline.style.transform = `translateX(-${scrolling}px)`;
        }
        else{
          const timelineStyle = getComputedStyle(timeline);
          const timelineTransform = timelineStyle.getPropertyValue("-webkit-transform") || timeline.getPropertyValue("transform");
          const values = parseInt(timelineTransform.split(',')[4]) + parseInt(`${sign}${scrolling}`);
          console.log( timelineStyle, timelineTransform, values);
          timeline.style.transform = `translateX(${values}px)`;
          //adding else from animation timeline
        }

      });
  }

}

module.exports = timelineAnimation;