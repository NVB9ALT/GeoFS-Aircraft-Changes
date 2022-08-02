function realismify() {
var notifiedTrue = new Boolean(0)
var notifiedTrue1 = new Boolean(0)
function fixAircraft() {
//F16 automatic high-AOA slats deploy
if (geofs.aircraft.instance.id == 7) {
   geofs.aircraft.instance.definition.parts[13].animations[1] = {};
	geofs.aircraft.instance.definition.parts[13].animations[1].type = "rotate";
	geofs.aircraft.instance.definition.parts[13].animations[1].axis = "X";
	geofs.aircraft.instance.definition.parts[13].animations[1].value = "aoa";
	geofs.aircraft.instance.definition.parts[13].animations[1].min = 1;
	geofs.aircraft.instance.definition.parts[13].animations[1].max = 0;
	geofs.aircraft.instance.definition.parts[13].animations[1].ratio = 2;
	geofs.aircraft.instance.definition.parts[13].animations[1].currentValue = null;
	geofs.aircraft.instance.definition.parts[13].animations[1].rotationMethod = function(a) {
      this._rotation = M33.rotationX(this._rotation, a)
   };
	geofs.aircraft.instance.definition.parts[14].animations[1] = {};
	geofs.aircraft.instance.definition.parts[14].animations[1].type = "rotate";
	geofs.aircraft.instance.definition.parts[14].animations[1].axis = "X";
	geofs.aircraft.instance.definition.parts[14].animations[1].value = "aoa";
	geofs.aircraft.instance.definition.parts[14].animations[1].min = 1;
	geofs.aircraft.instance.definition.parts[14].animations[1].max = 0;
	geofs.aircraft.instance.definition.parts[14].animations[1].ratio = 2;
	geofs.aircraft.instance.definition.parts[14].animations[1].currentValue = null;
	geofs.aircraft.instance.definition.parts[14].animations[1].rotationMethod = function(a) {
      this._rotation = M33.rotationX(this._rotation, a)
   };
   geofs.aircraft.instance.definition.parts[14].animations[0].ratio = 0.069;
   geofs.aircraft.instance.definition.parts[14].animations[0].ratio = 0.069;
	
	geofs.aircraft.instance.definition.parts[12].animations[1] = {};
	geofs.aircraft.instance.definition.parts[12].animations[1].type = "rotate";
	geofs.aircraft.instance.definition.parts[12].animations[1].axis = "X";
	geofs.aircraft.instance.definition.parts[12].animations[1].value = "aoa";
	geofs.aircraft.instance.definition.parts[12].animations[1].ratio = -0.5;
	geofs.aircraft.instance.definition.parts[12].animations[1].currentValue = null;
	geofs.aircraft.instance.definition.parts[12].animations[1].rotationMethod = function(a) {
      this._rotation = M33.rotationX(this._rotation, a)
   };
};
//Su-35 gets thrust vectoring on the yaw axis
if (geofs.aircraft.instance.id == 18){
   geofs.aircraft.instance.definition.parts[46].animations[2] = {};
	geofs.aircraft.instance.definition.parts[46].animations[2].type = "rotate";
	geofs.aircraft.instance.definition.parts[46].animations[2].axis = "Z";
	geofs.aircraft.instance.definition.parts[46].animations[2].value = "roll";
	geofs.aircraft.instance.definition.parts[46].animations[2].ratio = -15;
	geofs.aircraft.instance.definition.parts[46].animations[2].currentValue = null;
	geofs.aircraft.instance.definition.parts[46].animations[2].rotationMethod = function(a) {
      this._rotation = M33.rotationZ(this._rotation, a)
   };
   geofs.aircraft.instance.definition.parts[51].animations[2] = {};
	geofs.aircraft.instance.definition.parts[51].animations[2].type = "rotate";
	geofs.aircraft.instance.definition.parts[51].animations[2].axis = "Z";
	geofs.aircraft.instance.definition.parts[51].animations[2].value = "roll";
	geofs.aircraft.instance.definition.parts[51].animations[2].ratio = -15;
	geofs.aircraft.instance.definition.parts[51].animations[2].currentValue = null;
	geofs.aircraft.instance.definition.parts[51].animations[2].rotationMethod = function(a) {
      this._rotation = M33.rotationZ(this._rotation, a)
   };
}
//fix Pitts S-1 airspeed indicator
if (geofs.aircraft.instance.id == 8) {
   geofs.aircraft.instance.definition.Vspeeds = {}
   geofs.aircraft.instance.definition.Vspeeds.VS = 53
   geofs.aircraft.instance.definition.Vspeeds.VNO = 120
   geofs.aircraft.instance.definition.Vspeeds.VNE = 182
}
if (geofs.aircraft.instance.id == 50) {
   if (geofs.animation.values.airbrakesTarget == 1) {
geofs.aircraft.instance.definition.parts[4].area = 5
geofs.aircraft.instance.definition.parts[3].area = 5
	} else {
geofs.aircraft.instance.definition.parts[4].area = 15
geofs.aircraft.instance.definition.parts[3].area = 15
	}
   if (notifiedTrue1 == 0) {
ui.notification.show("Use the spoilers key to descend more rapidly.");
   notifiedTrue1 = 1
	   }
};
//fix E190 COM
if (geofs.aircraft.instance.id == 236) {
   geofs.aircraft.instance.definition.com = [0, 0, 0]
}
//F-14 swing wing physics fix
if (geofs.aircraft.instance.id == 2581) {
   if (geofs.animation.values.optionalAnimatedPartPosition == 0) {
   geofs.aircraft.instance.definition.parts[2].area = 50
   geofs.aircraft.instance.definition.parts[3].area = 50
      }
	if (geofs.animation.values.optionalAnimatedPartPosition == 1) {
   geofs.aircraft.instance.definition.parts[2].area = 20
	geofs.aircraft.instance.definition.parts[3].area = 20
      }
	//Wings swing out when high AoA
   }
//Huey power fix
if (geofs.aircraft.instance.id == 2840) {
   geofs.aircraft.instance.definition.parts[17].thrust = 25000
   geofs.aircraft.instance.definition.zeroRPMAltitude = 100000
}
//Redo Falcon-9 sounds and increase effectiveness of flight controls
if (geofs.aircraft.instance.id == 2844) {
   geofs.aircraft.instance.definition.sounds[0].effects.volume.value = "flapsPosition";
	geofs.aircraft.instance.definition.sounds[1].file = "https://geo-fs.com/sounds/f16/rpm1.ogg";
	geofs.aircraft.instance.definition.sounds[2].file = "https://geo-fs.com/sounds/f16/rpm2.ogg";
	geofs.aircraft.instance.definition.parts[25].animations[0].ratio = 2.5;
	geofs.aircraft.instance.definition.parts[25].animations[1].ratio = -2.5;
	audio.init(geofs.aircraft.instance.definition.sounds);
}
//HAL Tejas rework
if (geofs.aircraft.instance.id == 4172) {
   //fix power scaling with altitude
   if (typeof geofs.aircraft.instance.definition.zeroRPMAltitude != undefined) {
      delete geofs.aircraft.instance.definition.zeroRPMAltitude;
	};
	geofs.aircraft.instance.definition.zeroThrustAltitude = 80000;
	//Adjusting lift
	geofs.aircraft.instance.definition.parts[3].area = 10;
	geofs.aircraft.instance.definition.parts[15].area = 10;
    geofs.aircraft.instance.definition.parts[1].liftFactor = 5;
	//Trying to make the speedbrakes less absurdly powerful
	geofs.aircraft.instance.definition.parts[13].dragFactor = 5;
	geofs.aircraft.instance.definition.parts[27].dragFactor = 5;
	//Power refinements, adding afterburners
	geofs.aircraft.instance.definition.parts[70].thrust = 50000;
	geofs.aircraft.instance.definition.parts[71].thrust = 50000;
	geofs.aircraft.instance.definition.parts[70].afterBurnerThrust = 80000;
	geofs.aircraft.instance.definition.parts[71].afterBurnerThrust = 80000;
	//Adjusting center of mass to prevent nose pitch-down with power
	geofs.aircraft.instance.definition.com = [0, 0, 1.5];
	//Making the elevons rotate the right way for roll
	geofs.aircraft.instance.definition.parts[6].animations[0].ratio = 23;
	geofs.aircraft.instance.definition.parts[7].animations[0].ratio = 23;
	geofs.aircraft.instance.definition.parts[18].animations[0].ratio = -23;
	geofs.aircraft.instance.definition.parts[19].animations[0].ratio = -23;
	//Fix cockpit HUD scale
	geofs.aircraft.instance.definition.instruments.hud.cockpit.scale = 0.5;
	//Envelope protection
	if (geofs.animation.values.mach >= 1.6) {
	   controls.throttle = 0.94
	};
	if (geofs.animation.values.accZ >= 90 || geofs.animation.values.aoa >= 20) {
	   
	};
}
//HUD machmeter fix
if (geofs.aircraft.instance.id == 2310 || geofs.aircraft.instance.id == 2581 || geofs.aircraft.instance.id == 2857 || geofs.aircraft.instance.id == 3591 || geofs.aircraft.instance.id == 3617 || geofs.aircraft.instance.id == 2953) {
   var machTenth = geofs.animation.values.machTenth
   geofs.animation.values.machTenth = Math.floor(10 * (geofs.animation.values.mach % 1).toPrecision(2))
   //geofs.aircraft.instance.definition.instruments.hud.overlay.overlays[6].animations[0].ratio = 23
   geofs.aircraft.instance.definition.instruments.hud.overlay.overlays[6].animations[0].value = machTenth
}
//Inaccurate physics alert
if (geofs.aircraft.instance.id == 3591) {
   if (notifiedTrue == 0) {
ui.notification.show("Note: this aircraft does not have realistic simulation. Do not expect IRL-accurate performance.");
   notifiedTrue = 1
	   }
   }
}
implementFixes = setInterval(function(){
fixAircraft()
}, 1000);


function controlsLimiters() {
   if (geofs.animation.values.groundContact == 0 && geofs.animation.values.airbrakesTarget == 1) {
controls.airbrakes.target = 0.25
	};
	if (geofs.animation.values.groundContact == 1 && controls.airbrakes.target == 0.25) {
controls.airbrakes.target = 1
	};
   if (geofs.animation.values.groundContact == 1 && controls.airbrakes.target == 0) {
      if (controls.airbrakes.target == 0.25) {
controls.airbrakes.target = 0
      };
	};
if (geofs.aircraft.instance.id != 4017 && geofs.aircraft.instance.id != 2976 && geofs.aircraft.instance.id != 2943 && geofs.aircraft.instance.id != 247 && geofs.aircraft.instance.id != 6 && geofs.aircraft.instance.id != 20) {
   if (geofs.animation.values.haglFeet > 25) {
//prevent thrust reverser deployment in flight
      };
   };
};
resetSplrInterval = setInterval(function(){controlsLimiters()},100);

//Better CC wingflex
geofs.animation.values.liftLeftWing = 1
geofs.animation.values.liftRightWing = 1
function runBetterWingflex() {
if (geofs.aircraft.instance.id == 3179 || geofs.aircraft.instance.id == 3180){
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.leftwing.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.rightwing.lift / 200000;
geofs.aircraft.instance.setup.parts[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[4].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[5].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[6].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[7].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[8].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[0].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[1].value = "liftLeftWing"
};
if (geofs.aircraft.instance.id == 2973){
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.leftwing.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.rightwing.lift / 200000;
geofs.aircraft.instance.setup.parts[2].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[4].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[16].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[17].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[18].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[0].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.lights[2].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[3].animations[1].value = "liftLeftWing"
};
if (geofs.aircraft.instance.id == 2386){
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.wingleft.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.wingright.lift / 200000;
geofs.aircraft.instance.setup.parts[3].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[4].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[5].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[6].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[7].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[8].animations[1].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[9].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[10].animations[0].value = "liftRightWing"
geofs.aircraft.instance.lights[6].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[2].value = "liftLeftWing"
geofs.aircraft.instance.lights[6].animations[2].value = "liftRightWing"
geofs.aircraft.instance.lights[1].animations[1].value = "liftLeftWing"
geofs.aircraft.instance.lights[5].animations[1].value = "liftleftWing"
geofs.aircraft.instance.lights[5].animations[2].value = "liftLeftWing"
geofs.aircraft.instance.lights[10].animations[1].value = "liftRightWing"
geofs.aircraft.instance.lights[10].animations[2].value = "liftRightWing"
};
if (geofs.aircraft.instance.id == 252) {
geofs.animation.values.liftLeftWing = -geofs.aircraft.instance.parts.wingleft.lift / 200000;
geofs.animation.values.liftRightWing = -geofs.aircraft.instance.parts.wingright.lift / 200000;
geofs.aircraft.instance.setup.parts[4].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[5].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[6].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[7].animations[0].value = "liftLeftWing"
geofs.aircraft.instance.setup.parts[8].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[9].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[10].animations[0].value = "liftRightWing"
geofs.aircraft.instance.setup.parts[11].animations[0].value = "liftRightWing"
};
};
wingflexInterval = setInterval(function(){
runBetterWingflex()
},1000);

/*
//Prop physics
function checkAircraft() {
if (geofs.aircraft.instance.id == 21 || geofs.aircraft.instance.id == 2 || geofs.aircraft.instance.id == 2808 || geofs.aircraft.instance.id == 1 || geofs.aircraft.instance.id == 8 || geofs.aircraft.instance.id == 12 || geofs.aircraft.instance.id == 13 || geofs.aircraft.instance.id == 40 || geofs.aircraft.instance.id == 1069 || geofs.aircraft.instance.id == 2750)  {
if (aircraftChecked == 0){
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
aircraftChecked = 1
   }
if (geofs.aircraft.instance.id != 21 || geofs.aircraft.instance.id != 2 || geofs.aircraft.instance.id != 2808 || geofs.aircraft.instance.id != 1 || geofs.aircraft.instance.id != 8 || geofs.aircraft.instance.id != 12 || geofs.aircraft.instance.id != 13 || geofs.aircraft.instance.id != 40 || geofs.aircraft.instance.id != 1069 || geofs.aircraft.instance.id != 2750) {
      aircraftChecked = 0
   }
}
checkPropInterval = setInterval(function(){
   checkAircraft()
}, 1000);
*/
   }
