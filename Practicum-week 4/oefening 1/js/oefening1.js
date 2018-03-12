(function() {
  var link = document.getElementsByTagName("a");
  link[0].addEventListener("mouseover",Hover,false);
  link[0].addEventListener("mouseout",HoverOut,false);
})();


function Hover() {
  var vet=document.getElementsByTagName("strong");
  for (var i=0; i < vet.length; i++) { 
    vet[i].style.color = "orange";
  };

  var span=document.getElementsByTagName("span");
  for (var i=0; i < span.length; i++) { 
    span[i].style.color = "purple";
  };

  var link=document.getElementsByTagName("a");
    link[0].style.backgroundColor = "pink";


};


function HoverOut() {
  var alles=document.querySelectorAll('strong,span');
  for (var i=0; i < alles.length; i++) { 
    alles[i].style.color = "inherit";
  };

  var link=document.getElementsByTagName("a");
    link[0].style.backgroundColor = "beige";
};