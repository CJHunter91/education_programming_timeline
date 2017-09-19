
var timelineAnimation = function(){
  var timeline = document.querySelector("#timeline ol");
  var arrows = document.querySelectorAll('.arrows .arrow, #forward, #back');
  var prev = document.querySelector('.arrows .prev-arrow');
  var next = document.querySelector('.arrows .next-arrow');
  firstItem = document.querySelector("#timeline-list li:first-child")
  lastItem = document.querySelector("#timeline-list li:last-child")
  var scrolling = 280;
  console.log(arrows);

  
  let counter = 0;
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
        const sign = (this.classList.contains("prev-arrow")) ? "" : "-";
        if(counter === 0){
          timeline.style.transform = `translateX(-${scrolling}px)`;
        }
        else{
          console.log(counter)
          const timelineStyle = getComputedStyle(timeline);
          const timelineTransform = timelineStyle.getPropertyValue("-webkit-transform") || timeline.getPropertyValue("transform");
          const values = parseInt(timelineTransform.split(',')[4]) + parseInt(`${sign}${scrolling}`);
          console.log( timelineStyle, timelineTransform, values);
          timeline.style.transform = `translateX(${values}px)`;
          //adding else from animation timeline
        }
        counter++;

        setTimeout(() => {
              isElementInViewport(firstItem) ? setBtnState(prev) : setBtnState(prev, false);
              isElementInViewport(lastItem) ? setBtnState(next) : setBtnState(next, false);
            }, 1100);

      });
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function setBtnState(element, flag = true) {
    if (flag) {
      element.classList.add('disabled');
    } else {
      if (element.classList.contains('disabled')) {
        element.classList.remove('disabled');
      }
      element.disabled = false;
    }
  }

}

module.exports = timelineAnimation;