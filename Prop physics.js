let lastTorque = 0;
let engtorquemp = 0;
let elevtorquemp = 0;
let ailtorquemp = 0;
let rudtorquemp = 0;
function checkAircraft() {
if (geofs.aircraft.instance.id == 21 || geofs.aircraft.instance.id == 2 || geofs.aircraft.instance.id == 2808 || geofs.aircraft.instance.id == 1 || geofs.aircraft.instance.id == 8 || geofs.aircraft.instance.id == 12 || geofs.aircraft.instance.id == 13 || geofs.aircraft.instance.id == 40 || geofs.aircraft.instance.id == 1069 || geofs.aircraft.instance.id == 2750)  {
   if (geofs.pause == 0) {
//basic maths to figure out what the engine torque is, then apply it.
function tqmaths() {
  engtorquemp = -(lastTorque - geofs.animation.values.rpm) * 6;
    geofs.aircraft.instance.rigidBody.applyTorqueImpulse([(splitAxes(engtorquemp - ailtorquemp)[0] + splitAxesOffset(elevtorquemp)[0])/5,(splitAxes(engtorquemp - ailtorquemp)[1] + splitAxesOffset(elevtorquemp)[1])/5,(splitAxes(engtorquemp - ailtorquemp)[2] + splitAxesOffset(elevtorquemp)[2])/5])
};
//applying the torque force from propwash on the rudder
//plus p-factor
function sideWashAndPfactor() {
   if (geofs.animation.values.groundSpeedKnt > 10) {
geofs.aircraft.instance.rigidBody.applyTorqueImpulse([0,0,-(geofs.animation.values.rpm/100) / geofs.animation.values.kias / geofs.animation.values.aoa])
	}
}

function getEngineTorque() {
  lastTorque = geofs.animation.values.rpm
  setTimeout(tqmaths, 10)
};

//more complicated maths to resolve torque axes
  //𝐹𝑠=|𝐹⃗ |cos(𝜃𝑠,𝐹)
function splitAxes(force) {
  var angle = geofs.animation.values.heading360 * (Math.PI/180)
  if (geofs.animation.values.atilt <= 0) {
  var anglez = geofs.animation.values.atilt - 45
  }
  else {
    var anglez = Math.abs(Math.abs(geofs.animation.values.atilt + 45) - 360)
  }
  
  fx = force * (Math.sin(angle))
  fy = force * (Math.cos(angle))
  fz = force * Math.cos(anglez)
  return [fx, fy, fz];
}
  
function splitAxesOffset(force) {
  var angle = (geofs.animation.values.heading360 - 90 % 360) * (Math.PI/180)
  if (geofs.animation.values.atilt <= 0) {
  var anglez = geofs.animation.values.atilt - 45
  }
  else {
    var anglez = Math.abs(Math.abs(geofs.animation.values.atilt + 45) - 360)
  }
  
  fx = force * (Math.sin(angle))
  fy = force * (Math.cos(angle))
  fz = force * Math.cos(anglez)
  return [fx, fy, fz];
}
  
function doForces() {
  getEngineTorque()
}
//getting the effects applied
  doForces();
  sideWashAndPfactor();
}
  }
}
checkPropInterval = setInterval(function(){
   checkAircraft()
}, 10);
