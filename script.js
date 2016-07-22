//function that sorts all elements of table alphabetically
        function sortUnorderedList(ul) {
          if(typeof ul == "string")
            ul = document.getElementById(ul);

          var lis = ul.getElementsByTagName("LI");
          var vals = [];

          for(var i = 0, l = lis.length; i < l; i++)
            vals.push(lis[i].innerHTML);

          vals.sort();
        }

function showAll(){
    $(".women").show()
    $(".lgbt").show()
    $(".poc").show()
    //$(".usa").show()
    //$(".global").show()
}
function hideAll(){
    $(".women").hide()
    $(".lgbt").hide()
    $(".poc").hide()
    //$(".usa").hide()
    //$(".global").hide()
}

 function myFunction(){
    /*if(window.location.search.substring(1)=="women"){
        document.getElementById("organizations").value="fem";
    }else if(window.location.search.substring(1)=="poc"){
        document.getElementById("organizations").value="eth";
    }else if(window.location.search.substring(1)=="lgbt"){
        document.getElementById("organizations").value="lgb";
    }*/
     location.href = "#top";
 }
//when the page loads
     //sortUnorderedList(".my-new-list");

window.onload = function() {
    /*if(window.location.search.substring(1)=="women"){
        console.log("clicked on women");
        document.getElementById("organizations").value='fem';
    }else if(window.location.search.substring(1)=="poc"){
        console.log("clicked on poc");
        document.getElementById("organizations").value='eth';
    }else if(window.location.search.substring(1)=="lgbt"){
        console.log("clicked on lgbt");
        document.getElementById("organizations").value='lgb';
    }*/
    $('.organizations').change(function(){
        hideAll();
        if($(this).find("option:selected").attr('value')=='fem'){
            $(".women").show()
        }else if($(this).find("option:selected").attr('value')=='eth'){
            $(".poc").show()
        }else if($(this).find("option:selected").attr('value')=='lgb'){
            $(".lgbt").show()
        }else if($(this).find("option:selected").attr('value')=='all'){
            showAll()
        }
    });
}    