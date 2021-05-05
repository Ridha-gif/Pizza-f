menulistarray=["chicken tandoori pizza","veg supreme pizza","panner tikka","delex veggie pizza" ,"onion tomato pizza"];
function getmenu(){
    var htmldata;
    htmldata="<ol class='menulist'>"
    menulistarray.sort()
    for (var i=0;i<menulistarray.length;i++){

        htmldata=htmldata+'<li>'+menulistarray[i]+'</li>'

    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML= htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menulistarray.push(item);

    menulistarray.sort();
  htmldata="<section class='cards'>"
  for(var i=0;i<menulistarray.length;i++){
      htmldata=htmldata+'<div class="card">'+'<img src="images/pizza.png">'+menulistarray[i]+"</div>";

  }
  htmldata=htmldata+"</section>"
  document.getElementById("display_addmenu").innerHTML= htmldata;
}