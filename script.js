function addToTable(data) {
  var rank=0;
  var lastPoints = -1;
    data.forEach(contributor => {
      name=contributor.username;
      points= contributor.total_points;
      fullname= contributor.name;
      college= contributor.college;
      if(points!=lastPoints){
        rank++;
        lastPoints= points;
      }
      var markup = "<tr><td>"+ rank + "</td><td> " + "&nbsp;" + name + "</td><td> " + "&nbsp;" + fullname + "</td><td> " + "&nbsp;" + college + "</td><td> " + "&nbsp;" + points + "</td></tr>";
      $("table tbody").append(markup);
    });
  }
  async function getData(){
      const res = await fetch('https://opencode-hook.onrender.com/get-all-data/?page=-1')
      .then(res=>res.json())
      .then(data =>{
        console.log(data)
        document.querySelector(".loading").style.display = "none" //stop the load
        document.querySelector(".hang-on").style.display = "none" 
        addToTable(data)
        return
      });
    }
  
  setTimeout( function() { document.querySelector(".hang-on").style.display = "block" }, 10000);
  getData();