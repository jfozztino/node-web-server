function spin(elem) {
  elem.style.animationIterationCount = 1;
  elem.style.animationDuration = '1s';
  elem.style.animationName = 'spin';
  setTimeout(() => {
    elem.style.animationIterationCount = 'infinite';
    elem.style.animationDuration = '2s';
    elem.style.animationName = 'throb';
  }, 1000);
}
