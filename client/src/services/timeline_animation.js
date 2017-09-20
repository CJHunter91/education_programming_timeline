
var timelineAnimation = function(){
  var timeline = document.querySelector("#timeline ol");
  var arrows = document.querySelectorAll('.arrows .arrow, #forward, #back');
  var prev = document.querySelector('.arrows .prev-arrow');
  var next = document.querySelector('.arrows .next-arrow');
  var forward = document.querySelector('#forward');
  var back = document.querySelector('#back');
  firstItem = document.querySelector("#timeline-list li:first-child")
  lastItem = document.querySelector("#timeline-list li:last-child")
  var scrolling = 640;

  
  let counter = 0;
  prev.disabled = true;
  back.disabled = true;


  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener('click', function(){

      //determines whether to remove or add scrolling
      const sign = (this.classList.contains("prev-arrow")) ? "" : "-";
      var modifier = 0;
      if(document.querySelector('#language-id')){
        if(this.id == 'back'){
         modifier = -1;
       }
       else if(this.id == 'forward'){
         modifier = 1;
       }
       currentID = parseInt(document.querySelector('#language-id').textContent);
       nextID = currentID + modifier
       //stop forward and back buttons if there is an indiv language 
       back.disabled = true;
       forward.disabled = true;
     }
     //if first click on forward set back to disabled and reset timeline
     else if(!document.querySelector('#language-id') && this.id === 'forward'){
      timeline.style.transform = `translateX(0px)`;
      back.disabled = true;
      return;
    }
        //disable both while waiting for animation
        prev.disabled = true;
        next.disabled = true;
        const timelineStyle = getComputedStyle(timeline);
        const timelineTransform = timelineStyle.getPropertyValue("-webkit-transform") || timeline.getPropertyValue("transform");
        //sets the timeline to move depending on the button clicked
        if(this.id === 'forward' || this.id === 'back'){
            moveToID(nextID - 1);
          }
          else if(counter === 0){
            timeline.style.transform = `translateX(-${scrolling}px)`;
          }
          else{
            const values = parseInt(timelineTransform.split(',')[4]) + parseInt(`${sign}${scrolling}`);
            timeline.style.transform = `translateX(${values}px)`;
        }
        counter++;
        //set timeout for animation to finish
        setTimelineTimeout();

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

var setTimelineTimeout = function(){
  setTimeout(() => {
      //only changes disabled if language in view
      if(document.querySelector('#language-id')){
        nextID - 1  === 0 ? setBtnState(back) : setBtnState(back, false);
        nextID + 1 === 13 ? setBtnState(forward) : setBtnState(forward, false);
      }
      isElementInViewport(firstItem) ? setBtnState(prev) : setBtnState(prev, false);
      isElementInViewport(lastItem) ? setBtnState(next) : setBtnState(next, false);
    }, 1100);
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
  setTimelineTimeout();
  timeline.style.transform = `translateX(${values}px)`;
}

module.exports = {
  timelineAnimation: timelineAnimation,
  setBtnState: setBtnState, 
  moveToID: moveToID
};