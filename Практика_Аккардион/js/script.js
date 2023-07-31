const main__akkardion = document.querySelectorAll("main__akkardion");
const tabs__header = document.querySelectorAll(".tabs__header");
const tabs__elements = document.querySelectorAll(".tabs__elements");

const tabs__arrow = document.querySelectorAll(".tabs__arrow_down")
const main__button_gray = document.querySelectorAll(".main__button_gray");
const tabs = document.querySelectorAll(".tabs");


let a = 0;

tabs__arrow.forEach(function(tabs__arrow, index1){
   tabs__arrow.addEventListener("click", function()
   { 

      if ((index1 >= 0) && (tabs__arrow.className.indexOf("up") == -1))
      {
         tabs__header.forEach(function(tabs__header, index2)
         {
            if (index1 == index2) 
            {
               tabs__header.classList.add("active_tabs");
            }
         })

         tabs__elements.forEach(function(tabs__elements, index)
         {
            if (index == index1) 
            {
               tabs__elements.classList.add("active"); 
               tabs__elements.classList.add("active_tabs") 
               tabs__arrow.classList.add("up");
               tabs__arrow.classList.add("click");
            }
         })
            } else if ((index1 >= 0) && (tabs__arrow.className.indexOf("up") >= 0))
               {
                  tabs__elements.forEach(function(tabs__elements, index)
                  {
                     if (index == index1) 
                     {
                        tabs__elements.classList.remove("active");  
                        tabs__elements.classList.remove("active_tabs");
                        tabs__arrow.classList.remove("up");
                     }
                  })


                  tabs__header.forEach(function(tabs__header, index2)
                  {
                     if ( index1 == index2){
                        tabs__header.classList.remove("active_tabs");
                     }
                  })
               }
      



            
      




      /*--------------------------------------------------------------- */

      if (tabs__arrow.className.indexOf("up click") >= 0) 
      {
         a += 1;
      }


      if (a == 3) 
      {
         main__button_gray.forEach(function(item)
         {
             item.classList.remove("disabled");
         })
      }

   })



})


