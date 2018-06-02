document.querySelector('.grid').addEventListener('click', function(e) {
  //console.log(e);
  var removeTarget = e.target.parentNode;
  removeTarget.parentNode.removeChild(removeTarget);
}, false);