$(function(){ /* focus and blur, when clicked an item focus and then jump next element then it's blurred. */

var inputFields = $("input:text, input:password, textarea ");  

inputFields.focus(function(){
    // console.log("focused");
    $(this).css("box-shadow", "0 0 4px #b2b200");
});

inputFields.blur(function(){
    $(this).css("box-shadow", "none"); /* when jump to next element then make box-shadow none */
});

$("input:text").blur(function(){
    // console.log("focused");
    var textInput = $(this).val(); /* .attr('value'), val() */
  
    if (textInput.length == 0 || textInput.length < 3){
    $("input:text").css("box-shadow", "0 0 4px #811");
    $(".warning").css(
        {
            "display": "block",
            "color" : "#811"

        }
    );
    
    $(".warning").text("Please enter a name or enter longer name");
}
    else{
        $(".warning").css("display" , "none");
        $("input:text").css("box-shadow", "0 0 4px #181");
}
});

/*
https://stackoverflow.com/questions/4088467/get-the-value-in-an-input-text-box :
//Get
var bla = $('#txt_name').val();

//Set
$('#txt_name').val(bla);
--------------------------------

There is one important thing to mention:

$("#txt_name").val();
will return the current real value of a text field, for example if the user typed something there after a page load.

But:

$("#txt_name").attr('value')
will return value from DOM/HTML.
--------------------------------
https://stackoverflow.com/questions/9004095/jquery-count-characters :
 var count = $('h1').length;

$("h1") returns a jQuery object (in which the length property is the number of elements returned), 
and since you are calling it before the page is completely loaded it is actually retuning 0 elements.

 var count = $("h1").text().length;
 */
});

$(function(){ /* change event especially useful for checkboxes radio buttons and select elements */
    $("#checkbox").change(function(){
        var isChecked =  $(this).is(":checked");// .prop("checked");/* !!!! */
        if(isChecked){
            $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181") /* in here 'this' is checkbox, 4 is for blur, color is green when it's checked */
        }
        else{
            $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811") /* in here 'this' is checkbox, 4 is for blur, color is red when it's not checked, 'this' only refers to checkbox and we add label element with add() */
        }
    });

    $("#selection").change(function(){
        var selectedOption = $(this).find(":selected").text(); /* !!!!! */
        alert("value: " + selectedOption);
       
    });
});

$(function(){ /* submit */
    $("#form").submit(function(){
        var textarea = $("#message");
        if(textarea.val().trim() == ""){
            textarea.css("box-shadow", "0 0 4px #811");
            event.preventDefault(); /* prevent form from submiting because there is something wrong and we should not data to the server and we must give info to user and prevent the page reload. so we can use this function if we want some default event to stop from execution.   */


        }else{ 
            /* form wil be submitted.*/

        }
    });
});

$(function(){
    $("#form").submit(function(event){
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var ckecked = $("#checkbox").is(":checked");  /* is(:checked) returns boolean value.  */

        validateNameField(name, event); 
    });
});

function validateNameField(name, event){   /* event for preventdefault() */
    if(!isValidName(name)){
        $("#name-feedback").text("Please enter at least three characters");
        event.preventDefault();        
    }
    else{
        $("#name-feedback").text("");
    }            
}

function isValidName(name){
    return name.length >=3;
}

function validateCheckboxField(checkbox,event){
    if(!isValidCheckBox(checkbox)){
        $("#checkbox-feedback").text("Please check the checkbox");
        event.preventDefault();        
    }
    else{
        $("#checkbox-feedback").text("");
    }
}

function isValidCheckBox(checkbox){
    return checkbox.is(":checked");
}