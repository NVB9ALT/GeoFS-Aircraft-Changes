function changeAircraft() {
//aircraft.json changes
function checkAndImplementChanges() { 
   if (geofs.aircraft.instance.id == 2865){
	   //fix the A320-214 cockpit camera position problem
	   //doesn't work rn
	   geofs.aircraft.instance.definition.cameras.cockpit.position = [-0.68, 14.5, 0.33]
   }
   if (geofs.aircraft.instance.id == 3307){
	   //decreasing the sensitivity of the CRJ 700
	if (geofs.animation.values.kias > 150){
	   geofs.aircraft.instance.parts.elevatorleft.animations[0].ratio = 10
	   geofs.aircraft.instance.parts.elevatorright.animations[0].ratio = 10
	   }
	}
   if (geofs.aircraft.instance.id == 52){
	   //now you can fly the Hughes Osage higher
      geofs.aircraft.instance.definition.zeroRPMAltitude = 80000
   }
   if (geofs.aircraft.instance.id == 26){
	   //An-140 gets some MOAH POWAH
      geofs.aircraft.instance.definition.mass = 10000
   }
   if (geofs.aircraft.instance.id == 21){
	   //This just turns the Zlin Z50 into something awesome
      geofs.aircraft.instance.parts.engine.thrust = 7000
   	geofs.aircraft.instance.definition.zeroRPMAltitude = 80000
      geofs.aircraft.instance.definition.reverse = true
   	geofs.aircraft.instance.definition.engineInertia = 0.75
      geofs.aircraft.instance.parts.engine.thrust = 7500
   	geofs.aircraft.instance.parts.engine.reverseThrust = 4000
   }
   if (geofs.aircraft.instance.id == 12){
	   //Aaaand the PC 7 gets PC 9 performance
      geofs.aircraft.instance.parts.engine.thrust = 12000
   }
   if (geofs.aircraft.instance.id == 7){
	   //F16 gets the most powerful Block 60 engine
		//AoA based flaps animations to improve realism and maneuverability
	   geofs.aircraft.instance.engine.afterBurnerThrust = 145000
      geofs.aircraft.instance.engine.thrust = 77500
   }
	if (geofs.aircraft.instance.id == 6){
	   //This makes sure the Twin Otter is one of the more powerful versions
      geofs.aircraft.instance.engines[0].thrust = 6250
		geofs.aircraft.instance.engines[1].thrust = 6250
   }
   if (geofs.aircraft.instance.id == 1){
	   //And this turns the Piper Cub into a Super Cub
		//Much better for the Colorado Rockies
      geofs.aircraft.instance.parts.engine.thrust = 2250
   	geofs.aircraft.instance.definition.zeroRPMAltitude = 50000
   	geofs.aircraft.instance.definition.Vspeeds.VNE = 133
   	geofs.aircraft.instance.definition.Vspeeds.VNO = 100
   }
};
var repeatChecks = setInterval(checkAndImplementChanges, 1000)
//Mach effects implementation
//subsonic aircraft only obviously
function checkAircraftTypeAndSpeedAndImplementMachFX() {
   if (geofs.aircraft.instance.id == 1 || geofs.aircraft.instance.id == 2 || geofs.aircraft.instance.id == 5 || geofs.aircraft.instance.id == 6 || geofs.aircraft.instance.id == 8 || geofs.aircraft.instance.id == 11 || geofs.aircraft.instance.id == 12 || geofs.aircraft.instance.id == 13 || geofs.aircraft.instance.id == 14 || geofs.aircraft.instance.id == 15 || geofs.aircraft.instance.id == 16 || geofs.aircraft.instance.id == 2310 || geofs.aircraft.instance.id == 2418 || geofs.aircraft.instance.id == 2420 || geofs.aircraft.instance.id == 2426 || geofs.aircraft.instance.id == 2461 || geofs.aircraft.instance.id == 2750 || geofs.aircraft.instance.id == 2752 || geofs.aircraft.instance.id == 2808 || geofs.aircraft.instance.id == 2864 || geofs.aircraft.instance.id == 2892 || geofs.aircraft.instance.id == 2943 || geofs.aircraft.instance.id == 2976 || geofs.aircraft.instance.id == 2989 || geofs.aircraft.instance.id == 3109 || geofs.aircraft.instance.id == 3289 || geofs.aircraft.instance.id == 3460 ){ //straight wing aircraft list
	   if (geofs.animation.values.mach > 0.675){
		   geofs.preferences.weather.advanced.turbulences = 7
		}
		if (geofs.animation.values.mach > 0.735){
		   geofs.preferences.weather.advanced.turbulences = 9 
		}
		else {
		   geofs.preferences.weather.advanced.turbulences = 0.2
		}
	}
	if (geofs.aircraft.instance.id == 3 || geofs.aircraft.instance.id == 4 || geofs.aircraft.instance.id == 10 || geofs.aircraft.instance.id == 236 || geofs.aircraft.instance.id == 237 || geofs.aircraft.instance.id == 238 || geofs.aircraft.instance.id == 239 || geofs.aircraft.instance.id == 2003 || geofs.aircraft.instance.id == 2395 || geofs.aircraft.instance.id == 2556 || geofs.aircraft.instance.id == 2700 || geofs.aircraft.instance.id == 2706 || geofs.aircraft.instance.id == 2769 || geofs.aircraft.instance.id == 2772 || geofs.aircraft.instance.id == 2788 || geofs.aircraft.instance.id == 2843 || geofs.aircraft.instance.id == 2865 || geofs.aircraft.instance.id == 2870 || geofs.aircraft.instance.id == 2871 || geofs.aircraft.instance.id == 2878 || geofs.aircraft.instance.id == 2879 || geofs.aircraft.instance.id == 2899 || geofs.aircraft.instance.id == 2951 || geofs.aircraft.instance.id == 2973 || geofs.aircraft.instance.id == 3011 || geofs.aircraft.instance.id == 3036 || geofs.aircraft.instance.id == 3054 || geofs.aircraft.instance.id == 3140 || geofs.aircraft.instance.id == 3179 || geofs.aircraft.instance.id == 3180 || geofs.aircraft.instance.id == 3292 || geofs.aircraft.instance.id == 3307 || geofs.aircraft.instance.id == 3341 || geofs.aircraft.instance.id == 3534 || geofs.aircraft.instance.id == 3575){ //swept wing aircraft list
		if (geofs.animation.values.mach > 0.8){
		   geofs.preferences.weather.advanced.turbulences = 7
		}
		if (geofs.animation.values.mach > 0.9){
		   geofs.preferences.weather.advanced.turbulences = 9
		}
		else {
		geofs.preferences.weather.advanced.turbulences = 0.2
	   }
   }
}
var repeatChecks = setInterval(checkAircraftTypeAndSpeedAndImplementMachFX, 500);

//AriakimTaiyo's prop physics
if (geofs.aircraft.instance.id === "21" || geofs.aircraft.instance.id === "2" || geofs.aircraft.instance.id === "2808")  {
let lastTorque = 0;
let engtorquemp = 0;
let elevtorquemp = 0;
let ailtorquemp = 0;
let rudtorquemp = 0;

//basic maths to figure out what the engine torque is, then apply it.
function tqmaths() {
  engtorquemp = -(lastTorque - geofs.animation.values.rpm) * 6;
    geofs.aircraft.instance.rigidBody.applyTorqueImpulse([splitAxes(engtorquemp - ailtorquemp)[0] + splitAxesOffset(elevtorquemp)[0],splitAxes(engtorquemp - ailtorquemp)[1] + splitAxesOffset(elevtorquemp)[1],splitAxes(engtorquemp - ailtorquemp)[2] + splitAxesOffset(elevtorquemp)[2]])
};

function getEngineTorque() {
  lastTorque = geofs.animation.values.rpm
  setTimeout(tqmaths, 100)
};

//propwash stuff
function getControlWash() {
  elevtorquemp = (geofs.animation.values.rpm / 10) * geofs.animation.values.pitch;
  ailtorquemp = (geofs.animation.values.rpm / 10) * geofs.animation.values.roll;
  rudtorquemp = (geofs.animation.values.rpm / 10) * geofs.animation.values.yaw;
}

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

//stall and ground effect stuff
function stallForces() {
  if (geofs.animation.values.aoa > 10) {
    geofs.aircraft.instance.rigidBody.applyTorqueImpulse([splitAxes(Math.random()*geofs.animation.values.aoa * 2)[0],splitAxes(Math.random()*geofs.animation.values.aoa * 2)[1],0])
  }
}

function groundEffect() {
  if (geofs.animation.values.haglFeet <= 10) {
    geofs.aircraft.instance.rigidBody.applyCentralImpulse([0,0,(-(geofs.animation.values.haglFeet) + 10) * geofs.animation.values.kias])
  }
}

interval = setInterval(function(){
  groundEffect();
  stallForces();
  getControlWash();
  doForces();
}, 100)
}
}
