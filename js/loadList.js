//displays all the orgs that have the tag described in the url
function displayTag(){
    var tag = window.location.hash.slice(1);
    if(tag!=""){
        $(".org").hide();
        $("."+tag).show();
        grey("."+tag+"1");
    }else {
        $(".org").show();
    }
}
//adds class active to the appropriate button
function grey(className){
    $(".orgBtn").removeClass('active')
    $(className).addClass('active')
}
/*works when a button is clicked, changes the url and calls display tag function*/
$(document).on('click', 'button', function() {
    window.location = $(this).parent().attr('href');
    $(this).attr('data-tag');
//    grey(this.className);
    displayTag();
});

(function() {
    console.log( "ready!" );
    $.getJSON( "data.json", function( data ) {
        var items = [];
        var sample = data;
        console.log(sample);
        $.each( data, function( key, val ) {
             var lin='&#x1F517;';  
             var twit='&#xF611;';
             var liIN='&#xF612;';
            //put placeholder 
            if(val.Logo==''){
                 //image
                 items.push("<div class='row'><div class='org "+val.Tags+" on'><div class='twelve columns'><li id='"+key+"'><img src='"+'http://up.2sw2r.com/upfiles2/ewg45788.png'+"'></li>");
            }else{
                 //image
                 items.push("<div class='row'><div class='org "+val.Tags+" on'><div class='twelve columns'><li id='"+key+"'><img src='"+val.Logo+"'></li>");  
            }
            //name and description
                var p="Cultural Diversity";
                var w="Women";
                var l="LGBTQ";
                //var a="All";
            var myTags = val.Tags;
            //if there is more than one tag it needs to loop through all the tags creating a new button for each
            if(myTags.indexOf(' ')>-1){
                var arrayTag = myTags.split(' ');
                items.push( "<li class='myText' id='" + key + "'><h5>"+val.Name+"</h5><p>"+ val.Description +"</p><div class='the-tags'>");
                for(var n in arrayTag){
                    if(arrayTag[n]==="women"){
                        items.push("<a href='#"+arrayTag[n]+"'><button class='active "+arrayTag[n]+"1' >"+w+"</button></a>");
                    }else if(arrayTag[n]==="lgbt"){
                        items.push("<a href='#"+arrayTag[n]+"'><button class='active "+arrayTag[n]+"1' >"+l+"</button></a>");
                    }else if(arrayTag[n]==="poc"){
                        items.push("<a href='#"+arrayTag[n]+"'><button class='active "+arrayTag[n]+"1' >"+p+"</button></a>");  
                    }
                }
            }else{
                    if(val.Tags==="women"){
                        items.push( "<li class='myText' id='" + key + "'><h5>"+val.Name+"</h5><p>"+ val.Description +"</p><div class='the-tags'><a href='#"+val.Tags+"'><button class='active "+val.Tags+"1'>"+w+"</button></a>");
                    }else if(val.Tags==="lgbt"){
                        items.push( "<li class='myText' id='" + key + "'><h5>"+val.Name+"</h5><p>"+ val.Description +"</p><div class='the-tags'><a href='#"+val.Tags+"'><button class='active "+val.Tags+"1'>"+l+"</button></a>");
                    }else if(val.Tags==="poc"){
                        items.push( "<li class='myText' id='" + key + "'><h5>"+val.Name+"</h5><p>"+ val.Description +"</p><div class='the-tags'><a href='#"+val.Tags+"'><button class='active "+val.Tags+"1'>"+p+"</button></a>");  
                    }
                 
            }             
            //links 
            items.push( "</div></li><li id='" + key + "'><ul class='links'><li class='link' id='website'><a href='" + val.Website + "' class='ss-icon' target='_blank'>"+lin+"</a></li><li class='link' id='twitter'><a href='" + val.Twitter+"' class='ss-icon' target='_blank'>"+'&#xF611;'+"</a></li><li class='link' id='linkedin'><a href='" + val.LinkedIn +"'class='ss-icon'  target='_blank'>"+'&#xF612;'+"</a></div></ul></li></div></div></div>" );
            
        });
            $( "<ul/>", {
                 "class": "my-new-list",
                 html: items.join( "" )
             }).appendTo( ".orgList" );
        //when the page loads it checks the url to sort based on the address
            displayTag();
    });
})();        