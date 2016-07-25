function getLocation(tag){
    return window.location.hostname + "?"+tag;
}
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
                 items.push("<div class='row'><div class='org "+val.Tags+"'><div class='eight columns'><li id='"+key+"'><img src='"+'http://up.2sw2r.com/upfiles2/ewg45788.png'+"'></li>");
             }else{
                 //image
                 items.push("<div class='row'><div class='org "+val.Tags+"'><div class='eight columns'><li id='"+key+"'><img src='"+val.Logo+"'></li>");
            }
            //name and description

            var myTags = val.Tags;
            if(myTags.indexOf(' ')>-1){
                var arrayTag = myTags.split(' ');
                items.push( "<li class='myText' id='" + key + "'><h5>"+val.Name+"</h5><p>"+ val.Description +"</p>");
                for(var n in arrayTag){
                    items.push("<a href='"+getLocation(arrayTag[n])+"' class='button' onclick='myFunction()' >"+arrayTag[n]+"</a>");
                }
            }else{
                 items.push( "<li class='myText' id='" + key + "'><h5>"+val.Name+"</h5><p>"+ val.Description +"</p><a href='"+getLocation(val.Tags)+"' class='button' onclick='myFunction()' >"+val.Tags+"</a>");
            }


            //links
            items.push( "</li></div><li id='" + key + "'><div class='four columns'><ul class='linkss'><a href='" + val.Website + "' class='ss-icon' target='_blank'>"+lin+"</a></li><li class='link' id='" + key + "'><a href='" + val.Twitter+"' class='ss-icon' target='_blank'>"+'&#xF611;'+"</a></li><li class='link' id='" + key + "'><a href='" + val.LinkedIn +"'class='ss-icon'  target='_blank'>"+'&#xF612;'+"</a></div></ul></div></li></div></div>" );

        });
            $( "<ul/>", {
                 "class": "my-new-list",
                 html: items.join( "" )
             }).appendTo( ".myListt" );
    });
})();
