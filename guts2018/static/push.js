var id=1;
function myFunction() {
    var btn = document.createElement("SPAN");
    var t = document.createTextNode("hi");
    btn.appendChild(t);
    btn.className+="square";
    btn.id+=id;
    id++;
    document.body.appendChild(btn);
}

function del(){
    console.log("pls help");
    console.log(id-1);
    $('#'+(id-1)).remove();
    id--;
}

function word(){
    var word=['h','a','c','k']
    var i,b,te;
    for (i = 0; i < word.length; i++){
      console.log(word[i]);
      b = document.createElement("SPAN");
      b.id+=id;
      id++;
      b.className+="square";
      console.log(b);
      te = document.createTextNode(""+word[i]);
      console.log(te);
      b.appendChild(te);
      document.body.appendChild(b);
    }
}