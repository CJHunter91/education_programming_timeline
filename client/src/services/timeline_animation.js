
var TimelineAnimation = function(){
  this.timeline = document.querySelector("#timeline ol");
  this.arrows = document.querySelectorAll('.arrows .arrow, #forward, #back');
  this.prev = document.querySelector('.arrows .prev-arrow');
  this.next = document.querySelector('.arrows .next-arrow');
  this.forward = document.querySelector('#forward');
  this.back = document.querySelector('#back');
  this.firstItem = document.querySelector("#timeline-list li:first-child")
  this.lastItem = document.querySelector("#timeline-list li:last-child")
  this.scrolling = 640;
  
}

TimelineAnimation.prototype.runTimeline = function() {

  let counter = 0;
  this.prev.disabled = true;
  this.back.disabled = true;

  for (var i = 0; i < this.arrows.length; i++) {
    this.arrows[i].addEventListener('click', function(event){
      //determines whether to remove or add scrolling
      const sign = (event.path[1].classList.contains("prev-arrow")) ? "" : "-";
      var modifier = 0;
      if(document.querySelector('#language-id')){
        if(event.path[0].id  == 'back'){
         modifier = -1;
       }
       else if(event.path[0].id  == 'forward'){
         modifier = 1;
       }
       currentID = parseInt(document.querySelector('#language-id').textContent);
       nextID = currentID + modifier
       //stop forward and back buttons if there is an indiv language 
       this.back.disabled = true;
       this.forward.disabled = true;
     }
     //if first click on forward set back to disabled and reset timeline
     else if(!document.querySelector('#language-id') && event.id === 'forward'){
      this.timeline.style.transform = `translateX(0px)`;
      this.back.disabled = true;
      return;
    }
        //disable both while waiting for animation
        this.prev.disabled = true;
        this.next.disabled = true;
        const timelineStyle = getComputedStyle(this.timeline);
        const timelineTransform = timelineStyle.getPropertyValue("-webkit-transform") || this.timeline.getPropertyValue("transform");
        //sets the timeline to move depending on the button clicked
        if(event.path[0].id === 'forward' || event.path[0].id === 'back'){
            this.moveToID(nextID - 1);
          }
          else if(counter === 0){
            this.timeline.style.transform = `translateX(-${this.scrolling}px)`;
          }
          else{
            const values = parseInt(timelineTransform.split(',')[4]) + parseInt(`${sign}${this.scrolling}`);
            this.timeline.style.transform = `translateX(${values}px)`;
        }
        counter++;
        //set timeout for animation to finish
        this.setTimelineTimeout();

      }.bind(this));
  }
};

TimelineAnimation.prototype.setTimelineTimeout = function(){
  setTimeout(() => {
      //only changes disabled if language in view
      if(document.querySelector('#language-id')){
        nextID - 1  === 0 ? this.setBtnState(this.back) : this.setBtnState(this.back, false);
        nextID + 1 === 13 ? this.setBtnState(this.forward) : this.setBtnState(this.forward, false);
      }
      this.isElementInViewport(this.firstItem) ? this.setBtnState(this.prev) : this.setBtnState(this.prev, false);
      this.isElementInViewport(this.lastItem) ? this.setBtnState(this.next) : this.setBtnState(this.next, false);
    }, 1100);
}

TimelineAnimation.prototype.isElementInViewport = function(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

TimelineAnimation.prototype.setBtnState = function(element, flag = true) {
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

TimelineAnimation.prototype.moveToID =  function(id){
  this.timeline = document.querySelector("#timeline ol");
  var values = (id * 160) * -1;
  console.log(values)
  this.timeline.style.transform = `translateX(${values}px)`;
}

module.exports = TimelineAnimation;