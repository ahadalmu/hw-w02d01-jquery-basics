// turn on stop function 
function turnOnStopLight() {
    // change background color of stop light to red
    // changes background color of green and yellow to black
var on = $('.bulb').css('background-color')
   $('#stopLight').css('background-color','red');
   $('#slowLight').css('background-color','black');
   $('#goLight').css('background-color','black');

   //  turnOffLights();
}

$('#stopButton').on('click', turnOnStopLight);

// turn on slow function
function turnOnSlowLight() { 
  // change background color of slow light to yellow
  // changes background color of red and green to black
  var on = $('.bulb').css('background-color')
  $('#stopLight').css('background-color','black');
  $('#slowLight').css('background-color','yellow');
  $('#goLight').css('background-color','black');  

  // turnOffLights();

}

$('#slowButton').on('click', turnOnSlowLight);



// turn on go function
function turnOnGoLight() {
    // change background color of go light to green
    // changes background color of red and yellow to black
    var on = $('.bulb').css('background-color')
   $('#stopLight').css('background-color','black');
   $('#slowLight').css('background-color','black');
   $('#goLight').css('background-color','green');
   
   // turnOffLights();

  }
  
  $('#goButton').on('click', turnOnGoLight);
  



// function turnOffLights(){

//   if (this === turnOnStopLight){
//   $('#stopLight').css('background-color','black');
//   $('#slowLight','#goLight').attr('background-color','black');
// }
// else if(this === turnOnSlowLight){
//   $('#stopLight').css('background-color','black');
//   $('#slowLight').css('background-color','black');
//   $('#goLight').css('background-color','black');
// }
// else (this === turnOnGoLight)
//   $('#stopLight').css('background-color','black');
//   $('#slowLight').css('background-color','black');
//   $('#goLight').css('background-color','black');
// }


// set stop light click event

// set slow light click event

// set go light click event

