var modalBtn = document.querySelector('.question-mark');
var modal = document.querySelector('.modal');
var cancelBtn = document.querySelector('.form-cancel-button');


var firstSlide = document.querySelector('.team-image1');
var secondSlide = document.querySelector('.team-image2');
var thirdSlide = document.querySelector('.team-image3');

var slideImages = document.querySelectorAll('.slide-team');
var previewBtn = document.querySelector('.preview');
var nextBtn = document.querySelector('.next');

//Modal

modalBtn.addEventListener('click', function() {
  modal.classList.add('modal-active');
});

cancelBtn.addEventListener('click', function() {
  modal.classList.remove('modal-active');
});

//slider

var variable = 1;
nextBtn.addEventListener('click', function() {
    switch(variable) {
      case 1:
        firstSlide.classList.remove("team-image1");
        firstSlide.classList.add("team-image1-disactive");
        secondSlide.classList.remove("team-image2")
        secondSlide.classList.add("team-image2-active");
        console.log(variable);
        variable++;
        break;
      case 2:
        secondSlide.classList.remove("team-image2-active");
        secondSlide.classList.add("team-image2");
        thirdSlide.classList.remove("team-image3");
        thirdSlide.classList.add("team-image3-active");
        variable++;
        break;
    }
});

previewBtn.addEventListener('click', function() {
  switch(variable) {
    case 2:
      secondSlide.classList.remove("team-image2-active");
      secondSlide.classList.add("team-image2");
      firstSlide.classList.remove("team-image1-disactive");
      variable--;
      break;
    case 3:
      thirdSlide.classList.remove("team-image3-active");
      thirdSlide.classList.add("team-image3");
      secondSlide.classList.remove("team-image2")
      secondSlide.classList.add("team-image2-active");
      variable--;
      break;
  }
});