$(document).ready(function() {

window.addEventListener('contextmenu', function (e) { 
    e.preventDefault(); 
    }, false);

$('body').mousedown(function(e) {

    if(document.getElementById("dialog")==null){

        var $div = $('<div />').appendTo('html');
        $div.attr('id', 'dialog');

        $('#dialog').dialog({
            autoOpen: false,
            maxWidth:600,
            maxHeight: 800,
            width: 400,
            height: 250,
            modal: true,
            draggable: true
        });
    }

    if($(event.target).parent()[0].title == 'Close'){
        $('#dialog').remove();
        return;
    }
    
    var pos = { my: "left top", at: "left bottom", of: e };

    if(document.getElementById("newList")==null){

        ulist = $('<ul></ul>');
        $('#dialog').append(ulist);
        ulist.attr('id','newList');

        var menu = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Add-ons', 'Help'];

        var cList = $('ul#newList')
        $.each(menu, function(i)
        {
            var li = $('<li/>')
                .attr('id', menu[i])
                .attr('role', 'menuitem')
                .appendTo(cList);

            var aaa = $('<a/>')
                .addClass('ui-all-'+menu[i])
                .text(menu[i])
                .appendTo(li);
        });
    }
    if($('#newList li#File ul.sublists').has('li').length==0){
        if(e.target.className == 'ui-all-File'){
            $("#newList li#File").append('<ul class="sublists"><li><a>Share</li></ul>');
            $('#newList li#File ul.sublists').append('<li><a>Make a copy</li>');
            $('#newList li#File ul.sublists').append('<li><a>New</li>');
            $('#newList li#File ul.sublists').append('<li><a>Open</li>');
            $('#newList li#File ul.sublists').append('<li><a>Download</li>');
        }
        }else{
            if(e.target.className == 'ui-all-File'){
                $('#newList li#File ul.sublists').remove()
            }
        }
    check_mouse_button(e, pos);

});

function check_mouse_button(e, pos){
    //The event.which is an inbuilt property in jQuery which 
    //is used to return which keyboard key or mouse button was pressed for the event
    switch (e.which) {
        //left click
        case 1:
            if(document.querySelector("#dialog > p")!=null){
                debugger;
                document.querySelector("#dialog > p").remove();
            }
            $('#dialog').append('<P>Left Mouse button pressed.' + "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
            if(!$('#dialog').dialog('isOpen')){
                $("#dialog").dialog("option", "position",pos);
            }
            fix_positions_based_on_coord(e);
            break;
        // middle click
        case 2:
            if(document.querySelector("#dialog > p")!=null){
                debugger;
                document.querySelector("#dialog > p").remove();
            }
            $('#dialog').append('<P>Middle Mouse button pressed.' + "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
            if(!$('#dialog').dialog('isOpen')){
                $("#dialog").dialog("option", "position",pos);
            }
            fix_positions_based_on_coord(e);
            break;
        // Right click
        case 3:
            if(document.querySelector("#dialog > p")!=null){
                debugger;
                document.querySelector("#dialog > p").remove();
            }
            $('#dialog').append('<P>Right Mouse button pressed.' + "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
            if(!$('#dialog').dialog('isOpen')){
                $("#dialog").dialog("option", "position",pos);
            }
            fix_positions_based_on_coord(e);
            break;
        default:
            console.log('You have a strange Mouse!'+ "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
    }
    $('#dialog').dialog("open");
}

$('body').dblclick(function(e) {
        if(document.getElementById("dialog")==null){

            var $div = $('<div />').appendTo('html');
            $div.attr('id', 'dialog');
    
            $('#dialog').dialog({
                autoOpen: false,
                maxWidth:600,
                maxHeight: 800,
                width: 400,
                height: 250,
                modal: true,
                draggable: true
            });
        }
        var pos = { my: "left top", at: "left bottom", of: e };

        if($(event.target).parent()[0].title == 'Close'){
            $('#dialog').remove();
            return;
        }
        

        if(document.getElementById("newList")==null){

            ulist = $('<ul></ul>');
            $('#dialog').append(ulist);
            ulist.attr('id','newList');
    
            var menu = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Add-ons', 'Help'];
    
            var cList = $('ul#newList')
            $.each(menu, function(i)
            {
                var li = $('<li/>')
                    .attr('id', menu[i])
                    .attr('role', 'menuitem')
                    .appendTo(cList);
    
                var aaa = $('<a/>')
                    .addClass('ui-all-'+menu[i])
                    .text(menu[i])
                    .appendTo(li);
            });
        }
    
        if($('#newList li#File ul.sublists').has('li').length==0){
            if(e.target.className == 'ui-all-File'){
                $("#newList li#File").append('<ul class="sublists"><li><a>Share</li></ul>');
                $('#newList li#File ul.sublists').append('<li><a>Make a copy</li>');
                $('#newList li#File ul.sublists').append('<li><a>New</li>');
                $('#newList li#File ul.sublists').append('<li><a>Open</li>');
                $('#newList li#File ul.sublists').append('<li><a>Download</li>');
    
            }
        }else{
            if(e.target.className == 'ui-all-File'){
                $('#newList li#File ul.sublists').remove()
            }
        }

        if(document.querySelector("#dialog > p")!=null){
            debugger;
            document.querySelector("#dialog > p").remove();
        }

        $('#dialog').append('<P>Double click pressed.' + "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
        if(!$('#dialog').dialog('isOpen')){
            $("#dialog").dialog("option", "position",pos);
        }

        fix_positions_based_on_coord(e);

        $('#dialog').dialog("open");
        console.log('Double click pressed.' + "\nX: " + e.clientX + "\nY: " + e.clientY + "\n Element: " + e.target.innerText);
    });

function fix_positions_based_on_coord(e){
    if(e.clientX > 1100 && e.clientY>375){
        $("#dialog").dialog("option", "height",150);
        $("#dialog").dialog("option", "width",250);

        if (e.clientX > 450){
            $("#dialog").dialog("option", "height",300);
            $("#dialog").dialog("option", "width",250);

        }
        // $("#dialog").dialog("option", "position", "left bottom");

    }else{
        if(e.clientX > 1100){
            $("#dialog").dialog("option", "height",500);
            $("#dialog").dialog("option", "width",250);
            $("#dialog").dialog("option", "position", "left bottom");
        }
        
        if(e.clientY > 500 ){
            $("#dialog").dialog("option", "height",150);
            $("#dialog").dialog("option", "width",400);
            
            $("#dialog").dialog("option", "position","left bottom");
            if(e.clientY>650){
                $("#dialog").dialog("option", "position","left top");
            }
        }
    }
}
});


