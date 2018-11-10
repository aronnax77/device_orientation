/*                Author: Richard Myatt
                  Date: 10 November 2018

                  Testing compatibility with Device Orientation api.
*/

// cache the dom
var resultEl = document.querySelector(".result");
var alphaEl = document.querySelector(".alpha");
var betaEl = document.querySelector(".beta");
var gammaEl = document.querySelector(".gamma");

// declare variables
var alpha, beta, gamma;



if (window.DeviceOrientationEvent) {
  //console.log(window.DeviceOrientationEvent);
  window.addEventListener("deviceorientation", function(evt) {
    alpha = evt.alpha;
    beta  = evt.beta;
    gamma = evt.gamma;

    if(alpha && beta && gamma) {
      resultEl.innerHTML = "Great, your browser/app supports Device Orientation";
      resultEl.style.backgroundColor = "#90ee90";

      alphaEl.innerHTML = "alpha: " + alpha;
      betaEl.innerHTML  = "beta:  " + beta;
      gammaEl.innerHTML = "gamma: " + gamma;
    } else {
      resultEl.innerHTML = "Sorry, your browser/app doesn't support Device Orientation";
      resultEl.style.backgroundColor = "#ff00004d";
    }
  });
} else {
  console.log("Sorry, your browser/app doesn't support Device Orientation");
}



window.dispatchEvent(new Event('deviceorientation'));
