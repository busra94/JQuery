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
    // $(".feedback").css(
    //     {
    //         "display": "block",
    //         "color" : "#811"

    //     }
    // );
    
    // $(".feedback").text("Please enter a name or enter longer name");
}
    else{
        // $(".feedback").css("display" , "none");
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

// $(function(){ /* submit textarea*/
//     $("#form").submit(function(){
//         var textarea = $("#message");
//         if(textarea.val().trim() == ""){
//             textarea.css("box-shadow", "0 0 4px #811");
//             event.preventDefault(); /* prevent form from submiting because there is something wrong and we should not data to the server and we must give info to user and prevent the page reload. so we can use this function if we want some default event to stop from execution.   */


//         }else{ 
//             /* form wil be submitted.*/

//         }
//     });
// });

$(function(){ /* submit form */

    var form = $("#form");
    enableFastFeedback(form);

    form.submit(function(event){
        var name = $("#name").val();
        var password = $("#password").val();
        var message = $("#message").val();
        var checked = $("#checkbox").is(":checked")  /* is(:checked) returns boolean value.  */
    
        validateNameField(name, event); 
        validateCheckboxField(checked, event);
        validatePasswordField(password,event);
        validateMessageField( message,event);
    });
});

function enableFastFeedback(formElement){
    var nameInput = formElement.find("#name");
    var passwordInput = formElement.find("#password");
    var messageInput = formElement.find("#message");
    var checkboxInput = formElement.find("#checkbox");
    
    nameInput.blur(function(event){
        var name = $(this).val();
        validateNameField(name, event);

        if(!isValidName(name)){
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"});
        }
        else{
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #181"});
        }
    });

    passwordInput.blur(function(event){
        var password = $(this).val();
        validatePasswordField(password, event);

        if(!isValidPassword(password)){
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"});
        }
        else{
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #181"});
        }
    });

    messageInput.blur(function(event){
        var message = $(this).val();
        validateMessageField(message, event);

        if(!isValidMessage(message)){
            $(this).css({
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"});
        }
        else{
            $(this).css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #060"});
        }
    });
    checkboxInput.change(function(event){  /* change triggered checkbox changed!!! */
        var isChecked = $(this).is(":checked"); // .prop("checked")
       validateCheckboxField(isChecked, event);

        if(!isChecked){
            $(this).add("label[for='checkbox']").css({  /* do not forget add label element for checkbox! */
                "box-shadow": "0 0 4px #811",
                "border": "1px solid #600"});
        }
        else{
            $(this).add("label[for='checkbox']").css({
                "box-shadow": "0 0 4px #181",
                "border": "1px solid #181"});
        }
    });
}

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

function validatePasswordField(password,event){
    if(!isValidPassword(password)){
        $("#password-feedback").text("The password should have at least 8 characters and contain number!");
        event.preventDefault();
    }
    else{
    $("#password-feedback").text("");
    }      
}
function isValidPassword(password){
    return password.length >=8  && /. *[0-9]. */.test(password);  /* password must contain number, The test() method tests for a match in a string.

    This method returns true if it finds a match, otherwise it returns false. */
}

function validateMessageField(message,event){
    if(!isValidMessage(message)){
        $("#message-feedback").text("Please enter a message");
        event.preventDefault();
    }
    else{
    $("#message-feedback").text("");
    }      
}
function isValidMessage(message){
    return message.trim() != "";

}

function validateCheckboxField(isChecked,event){
    if(!isChecked){
        $("#checkbox-feedback").text("Please check the checkbox");
        event.preventDefault();        
    }
    else{
        $("#checkbox-feedback").text("");
    }
}

/* !! in $(function): 
var checked = $("#checkbox");
---------------------
function isValidCheckBox(checkbox){
     return checkbox.is(":checked");   
---------------------     
function validateCheckboxField(checkbox,event){
    if(!isValidCheckBox(checkbox)){
        $("#checkbox-feedback").text("Please check the checkbox");
        event.preventDefault();        
    }
    else{
        $("#checkbox-feedback").text("");
    }
}
}
 */

 /* AJAX SECTION */
 
 /*when we perform a get request generally we must follow origin policy, which essentially means we can only get request to our server, but public servers apis allow to access their data. otherwise we get an error like: request doesn't come same domain
 with ajax calls we do not have to reload the page to be able to change it's content. */
/* $.get(). $.post(), $.ajax(), $.getJSON() ... */
 $(function(){
     /*$.load() : The load() method loads data from a server and puts the returned data into the selected element.
     If no element is matched by the selector — in this case, if the document does not contain an element with id="result" — the Ajax request will not be sent.*/
     // we retrive js_form file (itself)
    //  var code = $("#code").load("js/js_form.js"); // where we wanna retrieve data --> path
    //  console.log(code);

    //  $("#code").load("js/js_form.js", function(response,status){
    //      if(status == "error")
    //      alert("Could not find file")
    //      console.log(response);
    //  });

 }); 

 $(function(){ /* images from flicr.com */
    // /* JSON, $.getJSON() */
    // var  flickrApiUrl = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?" /* ?jsoncallback=? when we add that we send jsonp request not json request and this necessary for retrieve data from another server  */
    // /* this is also an event */
    // $.getJSON(flickrApiUrl, { /* this call is asynchronous. Request was handled by flickr.com  and it returns data and when request finished,  data handled by the event    */
    //     //options
    //     tags:"children , babies",
    //     tagmode: "any",  /* any: sun or beach, all: sun and beach. */
    //     format: "json"
    // }).done(function(data){
    //     //success
    //     console.log(data);
    //     $.each(data.items, function(index, item){ /* iterate over arrays, objects, if we set parameter to object then first parameter should be object(key) second is value */
    //         console.log(item); 
    //         $("<img>").attr( "src", item.media.m).appendTo("#flickr");

    //         if(index == 4)
    //         return false;

    //     })   
    // }).fail(function(){
    //     //failure
    //     alert("Ajax call failed."); 
    // }) 

 });

 $(function(){ /* star wars api (or poke api) */
    var swapiUrl = "https://swapi.co/api/people/"; 

    $.getJSON(swapiUrl)
    .done(function(people){ /* request success */
        console.log(people);
        $.each(people.results, function(index,people){ /* iterate over people */
            var name = people.name.charAt(0).toUpperCase() + people.name.slice(1); // capitalize first letter of name and get the name except first letter and merge them.
            var link = $("<a>").attr("id", people.name).attr("href" , "#").append($("<strong>").text(name));
            // var paragraph = $("<p>").html("People name no: " + (index + 1) + " is " + name + "</p>")  ;
            var paragraph = $("<p>").html("People name no: " + (index + 1) + " is ").append(link);
            paragraph.appendTo("#people");

            link.click(function(event){
                var detailPeople = people;
                console.log(detailPeople);
                var detailDiv = $("#detail-people");
                detailDiv.empty();
                detailDiv.append("<h3>" + name + "</h3>")
                $.each( detailPeople.films, function(index){
                    detailDiv.append("<p>" + detailPeople.films[index] + "</p>");  /* appendTo can only be applied on jQuery objects. */
                })
            //      $.each( detailPeople.films, function(index,film){
            //     var link = $("<a>").attr("href" , "#").text(film);
            //     var p = $("<p>").append(link);  /* appendTo can only be applied on jQuery objects. */
            //     detailDiv.append(p);
            // })
                event.preventDefault(); /* it does not take us to default (href => #) */ /* if we do not add this line, because we assign # to href to all, it seems like all links visited    */                      
             });    
                
        }); 
    }).fail(function(){ /* request fail */
        console.log("fetching data is failed.");
    }).always(function(){ /* in both of two case will executed */
        console.log("StarWars people are interesting.");
    });
 }); 

