/* eslint-disable no-console */

    // -----------------------------------------------------------------------------------------
                        // DOM,BOM

(function () {
    let elems = document.getElementsByTagName("div");
   console.log(elems);
   let  = document.getElementsByClassName ("qwerty");
   let  = document.getElementById ("first");
   let lemSelector = document.querySelectorAll("p> span > [type=password]");
   console.log(lemSelector);
   for (let index = 0, length = lemSelector.length; index < lemSelector.length; index++) {
       console.log(lemSelector[index].tagName); 
   }
   console.log(document .getElementsById("first").childNodes);
   console.log(document .getElementsById("first").children);
   console.log(document .getElementsById("first").firstChild);
   console.log(document .getElementsById("first").lastChild);
   console.log(document .getElementsById("first").innerText);
   console.log(document .getElementsById("first").innerHTML);

   let element = document.createElement("p");
   let content = document.createTextNode("Some text");
   let script = document.getElementsByTagName("script")[0];
   document.getElementsByTagName("body")[0].insertBefore(element, script);

   //add id
   let paragraph = document.getElementsByTagName("p")[0];
   paragraph.id = "someId";
   console.log(paragraph);
   // get id
   paragraph.getAttribute("id");
   // add new tags 
   paragraph.innerHTML = "<span>some text some text</span>";
   // add class for tags
   paragraph.className = "class1 class2 class3";
   // add class for tags + replace
   paragraph.className.replace("class", "class4"); - // но это не точно.
   // We`ve got delete, add, add token for tags
   paragraph.classList.add("someId");
   // delete 
   paragraph.classList.remove("class1");

   //add style
   paragraph.style.borderWidth = "4px";
   paragraph.style.borderStyle  = "solid";
   paragraph.style.borderColor = "#000";
   paragraph.style.display = "inline-block";
})();


   // at click hide or show new class for tags .
   // in this case for tags p.
   (() => {
         paragraph.onclick = () => {
       paragraph.classList.toggle("newClass");
   }
   })();
  
   navigator.geolocationget.getCurrentPosition(
       function(position){
           console.log("latitude", position.coords.latitude);
           console.log("longitude", position.coords.longitude);
              }
       )


    // -----------------------------------------------------------------------------------------
                        // Events



const button = document.getElementById(`button`);

// button.addEventListener("click", function() {
//     console.log("add event1");
// }, {once: true} );

// button.addEventListener("click", function() {
//     console.log("add event2");
// });


// document.addEventListener("click", () => {
//     console.log("document click");
// });

function onClick() {
    console.log("add event listener click");
}

button.addEventListener("click", onClick);
setTimeout(() => {
    // deleted events after 3 sec
    button.removeEventListener("click", onClick);
}, 3000);

//

//look on event which the we are have.
button.addEventListener("click", (event)=> {
    console.log("event", event);
});

//stop events and don`t move up on DOM-tree
button.addEventListener("click", (event)=> {
    console.log("button click");
    event.stopPropagation();
}, true);

// default don`t go to google.com!!!!
const link = document.querySelector("a");
link.addEventListener("click", (event)=> {
    console.log("button click");
   event.stopPropagation();
   event.stopImmediatePropagation();
    event.preventDefault(); // if comment this is line, we are going to google
}, true);

 // imitation event
 const clickEvent = new Event("click");
 button.dispatchEvent(clickEvent);
 //default js new event => bubbles = false. We turned ON bubbles.
 const clickNewEvent = new Event("click", {bubbles: true});


 input.addEventListener('click', ()=> {
    console.log("change", event);
    console.log("input.value: ", input.value);
}, true);

// focus on input
input.addEventListener('blur', () => {
    console.log('blur');
});
   
// keydown keyup keypress (!!property: keyCode)
document.addEventListener("keydown", (event)=> {
    console.log("keydown", event);
});
