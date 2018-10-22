$(function() {

// var textInput = $("input:text"); 
// textInput.val("Busra Dogan")
// console.log(textInput.val()); // ex:val() reads all values of the form element
// // if we have multiple input elements and if we use val(), it only returns first input element's value.
// var rangeInput = $("input[type='range']");
// console.log(rangeInput.val());


// /* we should not attr() with checkbox because it's always returns checked not true, or not false. to make this we should use prop().
//  */
// var checkbox = $("input:checkbox");
// console.log(checkbox.prop("checked")); // returns true, if we want to get value of input element we can use this 
// console.log(checkbox.attr("checked")); // returns checked

//   var specialLink = $("#special-link");
//   console.log(specialLink.attr("href"));
//   console.log(specialLink.attr("title"));

//   specialLink.attr("href", "http://google.com.tr") // give href to new value 

//   $(".red-box,.blue-box,.green-box").empty();
// $("p:first").empty(); // clears p tag(text) and child elements, not remove p tag. 
// $("#content").remove(); // removed all child elements
//      // callback functions will wait until the previous function finish to execute.
//      /*https://www.w3.org/TR/WD-DOM/introduction.html :
//      The Document Object Model (DOM) is a programming API for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. 
//      the Document Object Model is a set of interfaces and objects designed for managing HTML and XML documents.     
//      */

//       $("li").remove();
//       $("form").children().not("input:text, textarea, br").remove();

//      var removedList = $("li").remove();

//       $("#content").append(removedList)

//       var detachedListItem = $("li").detach();
//       $("#content").append(detachedListItem);
     


//       $("li").replaceWith("<li>Replaced.</li>");    
//      $("li").replaceWith(function(){
//        return "<li>replaced with function</li>"
//      }); 

//     var firstListItem = $("li:first");
//     $("p").replaceWith(firstListItem);

    
//    var greenBox = $(".green-box");
//    $(".red-box, .blue-box").replaceWith($(".green-box"));
//     $(".red-box, .blue-box").replaceWith("<div class='green-box'>More green divs</div>");
//    $("<div class='green-box'>More green!</div>").replaceAll(".red-box, .blue-box");


//  $("ul ul:first").append("<li>I'm gonna be last sub-item</li>"); // put to element last, you wanna add - source-target

//  $("<li>I'm gonna be last 2 sub-item</li>").appendTo($("ul ul:first")); // put to element first you wanna add - target-source 

//  $("ul ul:first").prepend("<li>I'm gonna be first sub-item</li>");
     
// $("ul ul").prepend("<li>I'm gonna be first sub-item</li>");

//  $("ul ul:last").prepend("<li>I'm gonna be first sub-item</li>");

//  $("<li>I'm gonna be first sub-item</li>").prependTo("ul ul");

// $("<h4>Busra DDD</h4>").prependTo("#content"); //!!!!

// $(".red-box").after("<div class='red-box'>Another Red</div>")

// $(".blue-box").before("<div class='blue-box'>Blue friend</div");

// $(".blue-box").after("<div class='red-box'>red friend</div");

// $(".blue-box").before($(".red-box")) // !!!!!!

// $(".green-box").before(function(){
//   return "<div class='blue-box'>Blue g friend</div"

// });

// $("p").after($("#list"));

//    $(".lightbox").delay(1000).fadeIn(1000);

//  $(":header").next().css("background-color" ,"rgba(180,180,30,0.8)");
//   $("p").css("background-color" ,"rgba(180,180,30,0.8)")
//   $("#list").siblings().css("background-color", "rgba(180,180,30,0.8)");

  
//  $(".lightbox").add("p").css("background-color", "yellow");

//  $("#list").find("ul").css("background-color", "rgba(180,180,30,0.8)");
 
//  $("#list").find("li").css("background-color" ,"rgba(180,180,30,0.8)")

     

// $(".red-box").fadeOut(1000, function(){
//              $(".green-box").slideUp(2000, function(){
//               $(".blue-box").animate({
//                 marginRight : "+=50px",
//               }, 2000, linear);

//              });

//      });
  
//      $(".red-box").fadeTo(1000,0.2, function () {
//        alert("This is callback : animation finished.");
//        $(".green-box").fadeTo(1000,0.5, function(){ 
//          $(".blue-box").fadeTo(1000,0.7, function(){
           
//         });       
//       });
//     });

//     $(".blue-box").animate({
//       "margin-left": "+=200px", // goes 200px right. same as setting to 200px
//       },1000, 
//     "linear",); 
    
//     $(".blue-box").animate({
//          "margin-left": "-=200px", // goes 200px left  we can use 0px here. because initial value(position) of margin is 0px    
//           },1000, "linear",
//           );
          
//           $(".blue-box").animate({
//             "margin-top": "50px",
//             "padding" : "30px" 
//           },1000, "linear",
//           );
    
//         $(function(){
//             $(".blue-box").animate({
//              marginLeft : "+=200px",
//             opacity: "0",
//             width: "50px",
//               height: "50px",
//           marginTop : "25px"
//         }, 1000)
//           $("p").animate({
//                 fontSize : "20px" ,
                                
//           }, 1000)
    
//           });
    
//           $(function(){
//             $("p").animate({
//               fontSize : "20px" 
//        })
    
//            }, 1000);
    
//            $(function(){
           
//              $("#toggle").slideDown(2000);
    
//            });
    
//           $("p").hide( );
//     $("p").slideDown(2000);
    
              
//     // Uncomment this line to fade out the red box on page load
//      $(".red-box").fadeOut(2000); //  2s
//      $(".red-box").fadeIn(1000);
//        $(".red-box").fadeTo(1000,0.2);
    
//     $(".green-box").fadeOut(2000);
//     $(".green-box").fadeIn(1000);
//     $(".green-box").fadeTo(2000, 0.5); // 1 s 
    
    
    
//     $(".blue-box").fadeOut(2000);
//     $(".blue-box").fadeIn(1000);
//      $(".blue-box").fadeTo(3000,0.8);
    
//     $(".green-box").fadeToggle(); // 1 s 
//      $(".green-box").fadeToggle(); // 1 s 
    
//      /*fade out function sets css property display to none. Like the elemtent wasn't there.
//       fadeTo element sets css property opacity value. The element still there but 
//       opacity value is 0(invisible) 1(visible).
    
//       if we execute fadeout and then fadeto our element won't come back, because fadeto function only 
//       changes opacity value, not display.
    
//       fadeout and fadein functions change display property of the css 
//       */
    
    
//     $(function(){
//       $(".red-box").fadeTo(1000,0.2);
//       $(".green-box").delay(1000).fadeTo(1000,0.5);
//       $(".blue-box").delay(2000).fadeTo(1000,0.8).fadeOut().fadeIn().fadeTo(1000,0.7);
    
//     });
    
//      $(".green-box").hide();
//     $(".green-box").show();
    
//     $(".blue-box").slideUp(3000);
//     $(".blue-box").slideDown(3000);
    
    
    
//     $("p").slideToggle();

    
  });

$(function(){
  // var galleryImage = $(".gallery").find("img").first();
  // var images = [
  //   "images/activity-adult-adventure-medium.jpeg",
  //   "images/arrangement-bloom-blossom-medium.jpeg",
  //   "images/beautiful-blossom-blur-medium.jpeg",
  //   "images/boat-daylight-golden-sunset-medium.jpeg",
  //   "images/botanic-botanical-bright-medium.jpeg"
  // ];

  //  var index = 0; // images index.
  // setInterval(function(){ // pure javascript code(not jquery)
  //   index = (index + 1) % images.length; // 0, 1, 2, 3, 4, 0, 1, 2, 3 4, 0, 1...  show image in index 0 1...   
  //   galleryImage.fadeOut(function(){
  //     $(this).attr("src", images[index]); // 'this' means object that calling the function(galleryImage)
  //     $(this).fadeIn(300); // fade in the image 0.3 s  later.  $(this).slideDown(300); 
  //   });
  //   console.log(galleryImage.attr("src"));
  // },2000); // show images 2 seconds interval  

}); /* end of function */

$(function(){
  // $(".gallery").css("display", "none");
  // // $(".gallery").hide();

  // var redBox = $(".red-box");
  // console.log(redBox.css("width")); //returns a(unit) (a is a numeric value, unit eg: px em...)
  // console.log(redBox.width()); // returns a (width, a is a numeric value.)
  
  // redBox.css("background-color", "#aa7700");
  // $("p").css("font-size", "23px");
  // redBox.css("width","+=20px");
  // // redBox.css("height","+=20px");

  // //store p tag's properties in array.
  // var properties = $("p").css(["font-size", "line-height", "color"])
  // console.log(properties); // console.log(properties["font-size"]);

  // // redBox.css("user-select","none"); // text in box is not selectable now. [-webkit- , -moz- -->> vendor prefixes]
  // redBox.css("user-select",function(){
  //   return "none";
  // });

}); /* end of function */

$(function(){

//   $("a").addClass("fancy-link"); // equals class="..."  adding class which is defined in style.css, notice: we don't put front of class name. 
//   $("p:first").addClass("large emphasize"); // multiple classes 

//   $("li li").addClass(function(index){
//     $(this).addClass("item-" + index); // ("item")
//   })

//   $("div").addClass(function(index, currentClass){
//     if(currentClass === "dummy")
//     return "red-box";

//   });
 
// //  $(".red-box").removeClass("red-box").addClass("blue-box");  // we normally use this switch between classes or replace existing class.
  

//   $(".dummy").removeClass("dummy").addClass("green-box");

}); /* end of function */

$(function(){
  // /*  if we store an element into a variable that we access continuosly, jquery does not have to look through dom each time we want to use that element  */
  // var gallery = $(".gallery");
  // var images = [
  //     "images/activity-adult-adventure-medium.jpeg",
  //     "images/arrangement-bloom-blossom-medium.jpeg",
  //     "images/beautiful-blossom-blur-medium.jpeg",
  //     "images/boat-daylight-golden-sunset-medium.jpeg",
  //     "images/botanic-botanical-bright-medium.jpeg"
  //   ];
  //   /*   associate the images array with variable(gallery)*/
  //   gallery.data("availableImages", images); /*   availableImages(key which we want to retrieve the value.) we can choose that parameter name*/
  //   console.log(gallery.data("availableImages"));  /*we can call functions with the gallery object like css attr.. , one parameter to get the value, two parameters the set the value.  */ 
  //   gallery.data("name", "The Awesome Gallery"); /* name --> key. */ 
  //   console.log(gallery.data()); /* if we want to access all associated data with the gallery object we do not specify any key. */ 
  //   /* if we want to remove data from object we access it with the key. */ 
  //    gallery.removeData("availableImages");
  //    console.log(gallery.data("availableImages")); /*if we want to access all associated data with the gallery object we do not specify any key.  */ 

  //    var firsth2 = $("h2:first");
  //    console.log(firsth2.data("myh2data"))


}); /* end of function */

$(function(){
  // /* text(), html() */
  // var firstParagraph = $("p:first");
  // console.log(firstParagraph.text());  /* writes to console only text which is inside p tag. */
  // console.log(firstParagraph.html()); /*writes to console with tags which is inside p tag. */
  // // console.log($("p").html());/* if we have multiple selected paragraph(ex), html only prints first element in that page. both internally calls the first element if we have multiple eleements on the page.   */
  // /* to avoid confusion good idea to work with selectors and only one single element   */

  // // firstParagraph.text("<strong>Hello</strong> World");  /*if we do not need to parse strong to html tag element we can use it this way.  */
  // // firstParagraph.html("<strong>Hello</strong> World"); // this function parse html tag 
  // // firstParagraph.append("this is appended text.").text();
  //   // firstParagraph.html(firstParagraph.html()).append("this is appended text.");
  //   firstParagraph.html(firstParagraph.html() + "<strong>this is appended text</strong> "); // we are not adding a child element we only add text so no need to use append().
  //   firstParagraph.html(function(){
  //     return firstParagraph.html() + "<em>this is appended text by function</em>"
  //   });
}); /* end of function */

$(function(){ /* event handlers */
//   /* click */
// $("#btn-click").click(function(event){
//   console.log(event);
//   alert("Button was clicked!")
// }); 
 
// $(".red-box").click(function(){
//   $(this).css({'cursor' : 'pointer'});
//   $(this).fadeTo(500, 0.5);
//   })
//   /* to trigger an event we can simply call that function e.g: click, press, hover  */
//     $(".red-box").click();

//   /* hover */
// $("#btn-hover").hover(function(){ /* this is gonna be fired when mouse enters the element and mouse leaves the element */
//   alert("Button was hovered!"); 
// });

// $(".green-box").hover(function(){
//  $(this).css("cursor" , "pointer");
//  $(this).text("I was hovered!");
// });

// // /* mouse enter, mouse leaves */
// var blueBox = $(".blue-box");
// // blueBox.mouseenter(function(){
// //   $(this).css("cursor" , "pointer");
// //   $(this).stop().fadeTo(500,0.7); // stop function when leaves
// // });

// // blueBox.mouseleave(function(){
// //   $(this).css("cursor" , "pointer");
// //   $(this).stop().fadeTo(500, 1);
 
// // });

// /*  hover(handlerIn , handlerOut) , mouse enter, mouse leaves */
// blueBox.hover(function(){
//   $(this).stop().fadeTo(500,0.7); // stop function when leaves
  
// }, function(){
//   $(this).stop().fadeTo(500, 1);

// }); 


}); /* end of function */

$(function(){ /* multiple events in one function 'on()' */
//   /* .on("click"("event"), function(){})  */
//   $("html").on("click keydown", function(){ /* anonymous inner function */ 
//     console.log("mouse was clicked or key was presssed");
//   }); 

// var galleryImage = $(".gallery").find("img").first();
//   var images = [
//     "images/activity-adult-adventure-medium.jpeg",
//     "images/arrangement-bloom-blossom-medium.jpeg",
//     "images/beautiful-blossom-blur-medium.jpeg",
//     "images/boat-daylight-golden-sunset-medium.jpeg",
//     "images/botanic-botanical-bright-medium.jpeg"
//   ];

//    var index = 0; // images index.

//    galleryImage.hover(function(){
//     $(this).css("cursor", "pointer");
//    });
   
//   //  galleryImage.on("mouseenter mouseleave",function(){  /* Deprecated in jQuery 1.8, removed in 1.9: The name "hover" used as a shorthand for the string "mouseenter mouseleave" */
//   //   $(this).css("cursor", "pointer");
//   //  });
//    galleryImage.on("click", function(){
   
//     index = (index + 1) % images.length; // 0, 1, 2, 3, 4, 0, 1, 2, 3 4, 0, 1...  show image in index 0 1...        
    
//     $(this).fadeOut(function(){   // 'this'  is galleryImage 
//       $(this).attr("src", images[index]).fadeIn(); 
//      // $(this).fadeIn(200); 
//     });

//   });
  
  }); /* end of function */

$(function(){  /* create function (not anonymous) */

// function switchToNextImage(){
    
//       index = (index + 1) % images.length; // 0, 1, 2, 3, 4, 0, 1, 2, 3 4, 0, 1...  show image in index 0 1...        
//       galleryImage.fadeOut(
//       galleryImage.attr("src", images[index])
//       .fadeIn()
//       );    
//   }
//   function hoverToGallery(){
//       galleryImage.css("cursor", "pointer");     
//   }
//   function logEvent(){ 
//     console.log("mouse was clicked or key was presssed");
//   } /* function definition can be written to outside the '$(function)(jquery readu function) ' block (above or below) */
//   $("html").on("click keydown", logEvent); 

// var galleryImage = $(".gallery").find("img").first();
//   var images = [
//     "images/activity-adult-adventure-medium.jpeg",
//     "images/arrangement-bloom-blossom-medium.jpeg",
//     "images/beautiful-blossom-blur-medium.jpeg",
//     "images/boat-daylight-golden-sunset-medium.jpeg",
//     "images/botanic-botanical-bright-medium.jpeg"
//   ];

//    var index = 0; // images index.

//    galleryImage.hover(hoverToGallery); 
 
//    galleryImage.on("click", switchToNextImage);

  });

  $(function(){ /* Delegated functions*/
  //  /* Event delegation allows us to attach a single 
  //  event listener, to a parent element, that will 
  //  fire for all descendants matching a selector, 
  //  whether those descendants exist now or are added 
  //  in the future. 
  //  (If we add an element dynamically it has not an event handler, delegate events solve that problem.)*/  

  // //  $("p").click(function(){
  // //    $(this).slideUp();
  // //  });

  // //  $("#content").append("<p>This is a dynamically created paragraph. </p>"); /* this has not an event handler */

  //  $("#content").on("click", "p", function(){ /* all descendant p tags, children's children... */ /* parent element(content div) waiting for events and it's gonna delegate them to the paragraph tags */
  //   $(this).slideUp(300); /* and here 'this' refers to p tags. !!! */
  // });

  // $("#content").append("<p>This is a dynamically created paragraph. </p>"); 

  // $("body").on("mouseenter" , "li" , function(){    
  //   //$(this).css("cursor", "pointer");
  //   $(this).css("color","#008800");

  // }).on("mouseleave","li" , function(){
  //   $(this).css("color","#000");
  // });

  }); /* end of function */

  $(function(){ /* passing additional data to events */
    // /* imagine: a user logs in and you wanna welcoming her/him by their names and here for user name we should get the additional data(user name) */
    // $("#btn-click").click({
    //   user: "Busra",
    //   domain: "xxx.com"
    // }, function(event){ /* all the data("Busra") we pass bound to event.data, so need specify 'event' parameter here. */
    //   greetUser(event.data)
    // });

    // function greetUser(userdata){ /* userdata refers to event.data */
    //   username = userdata.user || "Anonymous";
    //   domain = userdata.domain || "yyy.com"

    //   alert("Welcome back " + username + "! " + "from " + domain );
    // }
  });

  $(function(){ /* creating image gallery */
    // var galleryItems = $(".gallery").find("img");
    // galleryItems.css("width","33%").css("opacity", "0.7");

    // galleryItems.mouseenter(function (){
    //   $(this).css("cursor","pointer");
    //   $(this).stop().fadeTo("500", "1") // jquery add handlers to queue so to stop this we run stop() method. 
    // });

    // // function enterOnImage(){
    // //   galleryItems.fadeTo("100", "1") // jquery add handlers to queue so to stop this we run stop() method. 
    // // }

    // galleryItems.mouseleave(function (){
    //   $(this).stop().fadeTo("500", "0.7") // jquery add handlers to queue so to stop this we run stop() method. 
    // });

    // galleryItems.click(function(){
    //   var source = $(this).attr("src"); /* get the clicked image source */
    //   var image = $("<img>").attr("src", source).css("width","150%"); /* we create a new image and we assign it's source attribute to clicked image. */ 
     
    //   $(".lightbox").empty().append(image).fadeIn(500); 
    // });

    //  $(".lightbox").click(function(){
    //    $(this).css("cursor","pointer");
    //    $(this).stop().fadeOut(); /* stop all animations and then fadeOut (if i click before fadeIn completely it will stop the fadeIn and will start fade out  ) */ 

    //  });
  });

  $(function(){ /* handling keydown-keyup */

    $(".gallery").css("display","none");
    /* do not use keypress event */

    var ARROW_LEFT = 37; /* arrow right key  */
    var ARROW_RIGHT = 39; /* arrow left key  */
    // $("html").keydown(function(event){
    // console.log(event.keyCode); /* 'which' field is crossbrowser compatible and tells us which key is pressed. (keycode) */
            
    //   if(event.keyCode == ARROW_LEFT) /* or '39' */
    
    //  $(".blue-box").css("margin-left", "+=10px");
    // });

      /* another way */
      $("html").keydown(function(event){
           console.log(event.keyCode); 
        if(event.keyCode == ARROW_RIGHT)
        $(".blue-box").stop().animate({
          marginLeft : "+=10px"
        },50);

        else if(event.keyCode == ARROW_LEFT)
        $(".blue-box").stop().animate({
          marginLeft : "-=10px"
        },50);

        
      });
 

  });
/* 

$(function(){              
  $('a').click(function() {
      $('#slide-div').fadeOut();
      $(this).css({'cursor': 'auto'});  
  });
  
  $('#slide-div').click(function(){
      $(this).fadeOut(500);
  }).css({'cursor': 'pointer'});
});

css:
#slide-div{
  width:200px;
  height:200px;
  background:#CCC;
  border:1px solid #000;   
  margin: 20px;
 }
 
 a {
     display:inline-block;
     padding:5px 5px 10px 5px;
     background:#5D87A1;
     color:#FFF;
     margin:10px;
      border:1px solid #000;  
 }
html:
<a href="#">click me</a>
<div id="slide-div"> I WAS A DIV </div>  */