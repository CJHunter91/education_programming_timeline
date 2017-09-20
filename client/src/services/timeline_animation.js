
var timelineAnimation = function(){
  var timeline = document.querySelector("#timeline ol");
  var arrows = document.querySelectorAll('.arrows .arrow, #forward, #back');
  var prev = document.querySelector('.arrows .prev-arrow');
  var next = document.querySelector('.arrows .next-arrow');
  var forward = document.querySelector('#forward');
  var back = document.querySelector('#back');
  firstItem = document.querySelector("#timeline-list li:first-child")
  lastItem = document.querySelector("#timeline-list li:last-child")
  var scrolling = 320;

  
  let counter = 0;
  prev.disabled = true;

  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(){
      //set next id so setTimeout will run if language is not set
      //use the transform to set the position
      var nextId = 1;
      if(document.querySelector('#language-id')){
        const modifier = (this.classList.contains("prev-arrow")) ? -1 : 1;
        nextId = parseInt(document.querySelector('#language-id').textContent) + modifier;
      }
      //stops scrolling the timeline if it's the first click on forward
      else if (!document.querySelector('#language-id') && this.id === "forward"){
        back.disabled = true;
        return;
      }
        //disable both while waiting for animation
        prev.disabled = true;
        next.disabled = true;
        forward.disabled = true;
        back.disabled = true;

        //determines whether to remove or add scrolling
        const sign = (this.classList.contains("prev-arrow")) ? "" : "-";

        if(counter === 0){
          timeline.style.transform = `translateX(-${scrolling}px)`;
        }
        else{
          const timelineStyle = getComputedStyle(timeline);
          const timelineTransform = timelineStyle.getPropertyValue("-webkit-transform") || timeline.getPropertyValue("transform");
          console.log(timelineTransform.split(',')[4])
          if(this.id === 'forward' || this.id === 'back'){
            //needs to work on the first one
            moveToID(nextId -1);
          }
          else{
            const values = parseInt(timelineTransform.split(',')[4]) + parseInt(`${sign}${scrolling}`);
            timeline.style.transform = `translateX(${values}px)`;
          //adding else from animation timeline
        }
      }
      counter++;

      setTimeout(() => {
        nextId - 1 === 0 ? setBtnState(back) : setBtnState(back, false);
        nextId + 1 === 13 ? setBtnState(forward) : setBtnState(forward, false);
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

}

var setBtnState = function(element, flag = true) {
    if (flag) {
      element.classList.add('disabled');
      element.disabled = true
    } else {
      if (element.classList.contains('disabled')) {
        element.classList.remove('disabled');
      }
      element.disabled = false;
    }
  }

  var moveToID =  function(id){
    var timeline = document.querySelector("#timeline ol");
    const values = (id * 160) * -1;

    timeline.style.transform = `translateX(${values}px)`;

  }

module.exports = {
  timelineAnimation: timelineAnimation,
  setBtnState: setBtnState, 
  moveToID: moveToID
};