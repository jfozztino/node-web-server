function changeSpeedAndSize(elem, speed1, size1, speed2, size2) {
  elem.style.width = size1;
  elem.style.height = size1;
  elem.style.animationDuration = speed1;
  elem.onclick = function() {
    elem.style.width = size2;
    elem.style.height = size2;
    elem.style.animationDuration = speed2;
  }
}
