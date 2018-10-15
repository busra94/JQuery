$(function() {
  // jQuery goes here...

  /*$(".blue-box").animate({
    "margin-left": "+=200px", // goes 200px right. same as setting to 200px
    },1000, 
  "linear",); 
  
  $(".blue-box").animate({
       "margin-left": "-=200px", // goes 200px left  we can use 0px here. because initial value(position) of margin is 0px    
        },1000, "linear",
        );
        
        $(".blue-box").animate({
          "margin-top": "50px",
          "padding" : "30px" 
        },1000, "linear",
        ); */

        $(function(){
          $(".blue-box").animate({
            marginLeft : "+=200px",
            opacity: "0",
            width: "50px",
            height: "50px",
            marginTop : "25px"
          }, 1000)
          // $("p").animate({
          //        fontSize : "20px" ,
                              
          // }, 1000)

        });

        // $(function(){
        //   $("p").animate({
        //     fontSize : "20px" 

        //   })

        // }, 1000);

        $(function(){
         
          $("#toggle").slideDown(2000);

        });

         //$("p").hide( );
 //$("p").slideDown(2000);

            
  // Uncomment this line to fade out the red box on page load
   //$(".red-box").fadeOut(2000); //  2s
   //$(".red-box").fadeIn(1000);
//   $(".red-box").fadeTo(1000,0.2);
  
   //$(".green-box").fadeOut(2000);
   //$(".green-box").fadeIn(1000);
   //$(".green-box").fadeTo(2000, 0.5); // 1 s 


  
   //$(".blue-box").fadeOut(2000);
   //$(".blue-box").fadeIn(1000);
  // $(".blue-box").fadeTo(3000,0.8);

   //$(".green-box").fadeToggle(); // 1 s 
  // $(".green-box").fadeToggle(); // 1 s 

   /*fade out function sets css property display to none. Like the elemtent wasn't there.
    fadeTo element sets css property opacity value. The element still there but 
    opacity value is 0(invisible) 1(visible).

    if we execute fadeout and then fadeto our element won't come back, because fadeto function only 
    changes opacity value, not display.

    fadeout and fadein functions change display property of the css 
    */


   // $(".green-box").hide();
    //$(".green-box").show();

 //$(".blue-box").slideUp(3000);
 //$(".blue-box").slideDown(3000);



 //$("p").slideToggle();
});