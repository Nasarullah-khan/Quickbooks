let hmenu = document.querySelector('.fa-bars');
let content = document.querySelector('.content');
let sidebar = document.querySelector('.sidebar');
hmenu.addEventListener('click', function(){
    content.classList.toggle('sm')
    sidebar.classList.toggle('sm')
});


// Tabs
var btns = document.getElementsByClassName("tab-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}