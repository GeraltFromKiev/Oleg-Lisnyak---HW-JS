/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
// Virtual Piano
// Create a simple piano simulator as shown in the demo below. Pressing on keys A, S, D, F, G, H, J, K triggers different piano sounds. Styles and animation are not very important. Piano sounds are here. Demo. For playing sounds you will need to use HTML Audio element and its methods. https://www.w3schools.com/tags/ref_av_dom.asp https://www.w3schools.com/jsref/met_audio_play.asp

const button = document.getElementById(`button`);

button.addEventListener("click", function() {
    console.log("add first events");
});

button.addEventListener("click", function() {
    console.log("add new events 1111");
}, {once:true});

button.addEventListener("click", () => {
    console.log("document click");
}, { capture: true } );