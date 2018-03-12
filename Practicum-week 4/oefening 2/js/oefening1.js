(function() {
    
    var plusknop = document.getElementsByClassName("add-brick");
    plusknop[0].onclick = function() { addBrickToWall("yellow", 1); };
    plusknop[1].onclick = function() { addBrickToWall("black", 2); };
    plusknop[2].onclick = function() { addBrickToWall("orange", 3); };
    plusknop[3].onclick = function() { addBrickToWall("blue", 4); };

    var minknop = document.getElementsByClassName("remove-brick");
    minknop[0].onclick = function() { RemoveBrickFromWall("yellow", 1) ; };
    minknop[1].onclick = function() { RemoveBrickFromWall("black", 2) ; };
    minknop[2].onclick = function() { RemoveBrickFromWall("orange", 3) ; };
    minknop[3].onclick = function() { RemoveBrickFromWall("blue", 4) ; };


  var rekenknop = document.getElementById('btnCalculate');
  rekenknop.onclick = function() { Rekenen();};
  })();
  
  
  function addBrickToWall(kleur, nr) {
    var brick = document.createElement('div');
    brick.className = 'brick brick-' +kleur;
    var wall = document.getElementById('wall-'+nr);
    wall.appendChild(brick);
  };

  function RemoveBrickFromWall(kleur, nr) {
    var x = document.getElementById("wall-"+nr).childElementCount;
    if (x>0) {
      var wall = document.getElementsByClassName("brick-"+kleur);
      wall[0].remove();
    }
    else {
    alert("De muur is volledig gesloopt");
    }
  };

  function Rekenen() {
   // Stenen per muur
   for (var i = 1; i < 5; i++) { 
    var aantal = document.getElementById('wall-' + i).childElementCount;
   
    var string = document.getElementById("wall-" + i + "-amountstones");

    if(aantal != 1) {
      string.innerHTML = aantal + " stenen";
    }
    else {
      string.innerHTML = aantal + " steen";
    }



    if (typeof vorige!== 'undefined') { //kijken of vorige waarde bestaad
      if (vorige > aantal) {
    
        var grootste = vorige;
   
        break; // uit loop zodat 'vorige" niet kleiner wordt (want aantal is kleiner).
      }
      
      if (aantal > vorige) {
        var grootste = aantal;
    
      
      }
    }
    var vorige = aantal ;//hier wordt vorige waarde gemaakt

  };


  var zin = document.getElementById('wall-biggest');
  zin.innerHTML = "";

  var kleuren = ["yellow", "black", "orange", "blue"];
  var maal = ["2","7.5","9","0.3"];
  var prijzen = []; 

  for (var j = 1; j < 5; j++) { 
    var aantall = document.getElementById('wall-' +j).childElementCount;
    if(aantall === grootste) {
      zin.innerHTML += "muur " +j +" ";
    }
    
    prijzen[j] = aantall * maal[j-1];
    

    var zinprijs = document.getElementById("cost-"+kleuren[j-1]);
    zinprijs.innerHTML = "€ "+prijzen[j];


  };
  totaal = prijzen[1] +prijzen[2]+prijzen[3]+prijzen[4];
  document.getElementById("cost-total").innerHTML = "€ " + totaal;



  if (grootste == null) {
    zin.innerHTML = "Alle muren zijn gelijk";
  }
  





 
  };