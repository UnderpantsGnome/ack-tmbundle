var foundFiles = 0;
var foundLines = 0;

function f() {
  foundFiles += 1;
  document.getElementById('filecount').innerText = ('' + foundFiles).concat(' file').concat( (foundFiles == 1 ) ? '' : 's' );
}

function l() {
  foundLines += 1;
  document.getElementById('linecount').innerText = ('' + foundLines).concat(' line').concat( (foundLines == 1 ) ? '' : 's' );
}

function searchStarted() {
  document.getElementById('teaser').style.display = 'none';

}

function searchCompleted() {
  document.getElementById('teaser').style.display = 'block';
}

function findPos(obj) {
  var curleft = curtop = 0;
  if (obj.offsetParent) {
    curleft = obj.offsetLeft
    curtop = obj.offsetTop
    while (obj = obj.offsetParent) {
      curleft += obj.offsetLeft
      curtop += obj.offsetTop
    }
  }
  return {left: curleft, top: curtop};
}

function resizeTableToFit() {
  var table = document.getElementsByTagName("table")[0];
  const minWidth = 450, minHeight = 250;

  var pos = findPos(table);
  var tableFitWidth = table.offsetWidth + pos.left * 2;
  var tableFitHeight = table.offsetHeight + pos.top + 50;
  var screenFitWidth = screen.width - 150;
  var screenFitHeight = screen.height - 150;

  var setWidth = tableFitWidth > screenFitWidth ? screenFitWidth : tableFitWidth;
  var setHeight = tableFitHeight > screenFitHeight ? screenFitHeight : tableFitHeight;
  setWidth = setWidth < minWidth ? minWidth : setWidth;
  setHeight = setHeight < minHeight ? minHeight : setHeight;

  window.resizeTo(setWidth, setHeight);
}
