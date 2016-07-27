function showAll(){
    $(".women").show()
    $(".lgbt").show()
    $(".poc").show()
}
function hideAll(){
    $(".women").hide()
    $(".lgbt").hide()
    $(".poc").hide()
}
//function sets the color of the button to grey
function greyOut(i, len,elements){
     for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.color = '#737373';
                elements[i].style.background = '#fafafa';
            }
}
//counters for clicks on each of the classes of buttons
var clickW=0, clickP=0, clickL=0;
//function that changes the colors of the buttons
function setColor(btn) {
    var elements, i, len;
    if(btn=='women1'){
        if(clickP==1){
            elements = document.getElementsByClassName('poc1');
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.color = 'white';
                elements[i].style.background = '#33c3f0';
            }clickP=0;
        }else if(clickL==1){
            elements = document.getElementsByClassName('lgbt1');
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.color = 'white';
                elements[i].style.background = '#57e257';
            }clickL=0;
        }
        elements = document.getElementsByClassName(btn);
        greyOut(i, len,elements);
    }else if(btn=='poc1'){
        if(clickW==1){
            elements = document.getElementsByClassName('women1');
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.color = 'white';
                elements[i].style.background = '#ff6a2f';
            }clickW=0;
            
        }else if(clickL==1){
            elements = document.getElementsByClassName('lgbt1');
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.color = 'white';
                elements[i].style.background = '#57e257';
            }clickL=0;
        }
        elements = document.getElementsByClassName(btn), i, len;
        greyOut(i, len,elements);
    }else if(btn=='lgbt1'){
        if(clickW==1){
            elements = document.getElementsByClassName('women1');
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.color = 'white';
                elements[i].style.background = '#ff6a2f';
            }clickW=0;
        }else if(clickP==1){
            elements = document.getElementsByClassName('poc1');
            for (i = 0, len = elements.length; i < len; i++) {
                elements[i].style.color = 'white';
                elements[i].style.background = '#33c3f0';
            }clickP=0;
        }
        elements = document.getElementsByClassName(btn);
        greyOut(i, len,elements);
    }
}

//function that sorts organizations by tag when tag is clicked
 function myFunction(className){
    hideAll();
    if(className=='women1'){
        clickW=1;
         $(".women").show()
        document.getElementById("organizations").value='fem';
        //$('#organizations').val('fem').change();
        //document.getElementById("fem").selected = "true";
        console.log("clicked on women");
    }else if(className=='poc1'){
        clickP=1;
         $(".poc").show()
        console.log("clicked on poc");
        document.getElementById("organizations").value='eth';
        //document.getElementById("eth").selected = "true";
    }else if(className=='lgbt1'){
        clickL=1;
        $(".lgbt").show()
        console.log("clicked on lgbt");
        document.getElementById("organizations").value='lgb';
        //document.getElementById("lgb").selected = "true";
    }
      setColor(className);
 }


window.onload = function() {
//when selector is changed sorts orgs by tag
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