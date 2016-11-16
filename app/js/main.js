$(function() {
  $('.js-nav-list__item').on('click tap', function () {
    $(this).addClass('active');
    $(this).siblings('.js-nav-list__item').removeClass('active');
    if (document.documentElement.clientWidth < 800) {
      $(this).parent('.js-nav-list').toggleClass('open-menu');
    }
    return false;
  });

});


$(document).ready(function(){
  // cboxes list
  var myDiv = document.getElementById("cboxes");
  function showList(){
    var list = window.document.createElement('ul');
    for (i=1; i<=100; i++){
      li = document.createElement('li');
      li.className += "custom-checkbo-wr";
      var checkbox="<input class='custom-checkbox' type='checkbox' id="+'value'+i+" value="+'value'+i+" name="+'value'+i+"><label for="+'value'+i+">"+'Опция '+i+"</label>";
      li.innerHTML = checkbox;
      list.appendChild(li);
    }
    myDiv.appendChild(list);
  }
  showList();

  if (!sessionStorage.getItem('list')) {
    sessionStorage.setItem('list', JSON.stringify([]));
  }

  var check = function(id) {

    var list = JSON.parse(sessionStorage.getItem('list'));

    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function(obj, start) {
        for (var i = (start || 0), j = this.length; i < j; i++) {
          if (this[i] === obj) { return i; }
        }
        return -1;
      };
    }
    
    var idIndex = list.indexOf(id);

    if (idIndex === -1) {
      if (list.length >= 3) {
        var _id = list.splice(0, 1);
        document.getElementById(_id[0]).checked = false;
      }

      list.push(id);
    } else {
      list.splice(idIndex, 1);
    }

    sessionStorage.setItem('list', JSON.stringify(list));
  };

  $('.custom-checkbox').on('click tap', function () {
    check(this.id);
  });
});
