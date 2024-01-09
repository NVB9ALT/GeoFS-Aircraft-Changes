function realismify() {
var notifiedTrue1 = new Boolean(0)
geofs.addonAircraft = {}
geofs.addonAircraft.isMiG21 = 0
fixAircraft = function () {
//Fixing the XB-70's canards
if (geofs.aircraft.instance.id == 2948) {
geofs.aircraft.instance.definition.parts[69].animations[0].ratio = 25
geofs.aircraft.instance.definition.parts[70].animations[0].ratio = 25
};
//F16 automatic high-AOA slats deploy and adjusted flight model
if (geofs.aircraft.instance.id == 7 && geofs.addonAircraft.isMiG21 == 0) {
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
   geofs.aircraft.instance.definition.parts[13].animations[0].ratio = 0.069;
	
	geofs.aircraft.instance.definition.parts[12].animations[1] = {};
	geofs.aircraft.instance.definition.parts[12].animations[1].type = "rotate";
	geofs.aircraft.instance.definition.parts[12].animations[1].axis = "X";
	geofs.aircraft.instance.definition.parts[12].animations[1].value = "aoa";
	geofs.aircraft.instance.definition.parts[12].animations[1].min = 1;
	geofs.aircraft.instance.definition.parts[12].animations[1].max = 0;
	geofs.aircraft.instance.definition.parts[12].animations[1].ratio = -2;
	geofs.aircraft.instance.definition.parts[12].animations[1].currentValue = null;
	geofs.aircraft.instance.definition.parts[12].animations[1].rotationMethod = function(a) {
      this._rotation = M33.rotationX(this._rotation, a)
   };
geofs.aircraft.instance.definition.parts[6].area = 0.069
geofs.aircraft.instance.definition.parts[7].area = 4
geofs.aircraft.instance.definition.parts[8].area = 4
};
//Su-35 gets thrust vectoring on the yaw axis and better physics
if (geofs.aircraft.instance.id == 18 && geofs.aircraft.instance.liveryId != 4 && geofs.aircraft.instance.liveryId != 1 && geofs.aircraft.instance.liveryId != 6){
geofs.aircraft.instance.definition.parts[3].area = 15
geofs.aircraft.instance.definition.parts[4].area = 15
geofs.aircraft.instance.definition.parts[2].area = 17
geofs.aircraft.instance.definition.parts[11].area = 0.069
if (geofs.animation.values.accZ >= 40) {
   geofs.aircraft.instance.definition.dragFactor = 5
} else {
   geofs.aircraft.instance.definition.dragFactor = 1.5
}
   geofs.aircraft.instance.definition.parts[46].animations[2] = {};
	geofs.aircraft.instance.definition.parts[46].animations[2].type = "rotate";
	geofs.aircraft.instance.definition.parts[46].animations[2].axis = "Z";
	geofs.aircraft.instance.definition.parts[46].animations[2].value = "roll";
	geofs.aircraft.instance.definition.parts[46].animations[2].ratio = -10;
	geofs.aircraft.instance.definition.parts[46].animations[2].currentValue = null;
	geofs.aircraft.instance.definition.parts[46].animations[2].rotationMethod = function(a) {
      this._rotation = M33.rotationZ(this._rotation, a)
   };
   geofs.aircraft.instance.definition.parts[51].animations[2] = {};
	geofs.aircraft.instance.definition.parts[51].animations[2].type = "rotate";
	geofs.aircraft.instance.definition.parts[51].animations[2].axis = "Z";
	geofs.aircraft.instance.definition.parts[51].animations[2].value = "roll";
	geofs.aircraft.instance.definition.parts[51].animations[2].ratio = -10;
	geofs.aircraft.instance.definition.parts[51].animations[2].currentValue = null;
	geofs.aircraft.instance.definition.parts[51].animations[2].rotationMethod = function(a) {
      this._rotation = M33.rotationZ(this._rotation, a)
   };
	geofs.aircraft.instance.definition.parts[48].animations[0].gt = 9100
	geofs.aircraft.instance.definition.parts[53].animations[0].gt = 9100
}
//fix Pitts S-1 airspeed indicator
if (geofs.aircraft.instance.id == 8) {
   geofs.aircraft.instance.definition.Vspeeds = {}
   geofs.aircraft.instance.definition.Vspeeds.VS = 53
   geofs.aircraft.instance.definition.Vspeeds.VNO = 120
   geofs.aircraft.instance.definition.Vspeeds.VNE = 182
}
if (geofs.aircraft.instance.id == 50) {
   if (geofs.animation.values.airbrakesTarget == 1 || geofs.animation.values.airbrakesTarget == 0.25) {
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
}
//Spitfire zeroThrustAltitude instead of zeroRPMAltitude, keeping the RPMs from dropping obscenely low
if (geofs.aircraft.instance.id == 2808) {
   if (typeof geofs.aircraft.instance.definition.zeroRPMAltitude != undefined) {
      delete geofs.aircraft.instance.definition.zeroRPMAltitude;
	};
	geofs.aircraft.instance.definition.zeroThrustAltitude = 60000;
}
//Huey power fix
if (geofs.aircraft.instance.id == 2840) {
   geofs.aircraft.instance.definition.parts[17].thrust = 25000
   geofs.aircraft.instance.definition.zeroRPMAltitude = 100000
}
//F22 fixes
if (geofs.aircraft.instance.id == 2857) {
//wings
geofs.aircraft.instance.definition.parts[7].area = 15
geofs.aircraft.instance.definition.parts[8].area = 15
geofs.aircraft.instance.definition.parts[7].zeroLiftIncidence = 70
geofs.aircraft.instance.definition.parts[8].zeroLiftIncidence = 70
//elevators
geofs.aircraft.instance.definition.parts[14].liftFactor = 3.5
geofs.aircraft.instance.definition.parts[15].liftFactor = 3.5
//stabilizer
geofs.aircraft.instance.definition.parts[11].area = 0.1
//TVC adj
geofs.aircraft.instance.definition.parts[55].animations[0].ratio = 30
geofs.aircraft.instance.definition.parts[56].animations[0].ratio = 30
}
if (geofs.aircraft.instance.id == 2988) {
   geofs.aircraft.instance.definition.parts[27].area = 5
}
//Fixing the realism of the F-15
if (geofs.aircraft.instance.id == 3591) {
geofs.aircraft.instance.definition.autopilot.maxBankAngle = 45;
geofs.aircraft.instance.definition.parts[8].area = 15;
geofs.aircraft.instance.definition.parts[8].stallIncidence = 17;
geofs.aircraft.instance.definition.parts[10].area = 15;
geofs.aircraft.instance.definition.parts[10].stallIncidence = 17;
geofs.aircraft.instance.definition.parts[28].area = 1.75;
geofs.aircraft.instance.definition.parts[29].area = 1.75;
geofs.aircraft.instance.definition.parts[30].area = 0.1;
geofs.aircraft.instance.definition.parts[31].area = 0.1;
if (geofs.animation.values.kias >= 200 && geofs.animation.values.accZ >= 50) {
   //controls.setters.setFlapsDown.set()
   geofs.aircraft.instance.definition.dragFactor = 6

} else if (geofs.animation.values.kias >= 200 && geofs.animation.values.accZ <= 50) {
   //controls.setters.setFlapsUp.set()
   geofs.aircraft.instance.definition.dragFactor = 0.85
}
   if (geofs.animation.values.mach >= 1.5) {
geofs.aircraft.instance.engines[0].thrust = 150000;
geofs.aircraft.instance.engines[0].afterBurnerThrust = 200000;
geofs.aircraft.instance.engines[1].thrust = 150000;
geofs.aircraft.instance.engines[1].afterBurnerThrust = 200000;
   } else {
geofs.aircraft.instance.engines[0].thrust = 100000;
geofs.aircraft.instance.engines[0].afterBurnerThrust = 125000;
geofs.aircraft.instance.engines[1].thrust = 100000;
geofs.aircraft.instance.engines[1].afterBurnerThrust = 125000;
   }
};
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
	//Envelope protection
	if (geofs.animation.values.mach >= 1.6) {
	   controls.throttle = 0.98
	};
   }
//Minor Corsair improvement - tricky startup
if (geofs.aircraft.instance.id == 4251) {
   geofs.aircraft.instance.definition.parts[20].area = 5
   if (geofs.animation.values.rpm < 900 && geofs.animation.values.throttle < 0.08) {
geofs.aircraft.instance.stopEngine()
	}
}
//Saab 340 physics adjust
if (geofs.aircraft.instance.id == 2892) {
   geofs.aircraft.instance.definition.mass = 8000
   geofs.aircraft.instance.definition.parts[30].area = 5
   geofs.aircraft.instance.definition.parts[33].area = 5
   geofs.aircraft.instance.definition.parts[28].area = 5
}

if (geofs.aircraft.instance.id == 4390) {
	geofs.aircraft.instance.definition.parts[6].animations[0].axis = "Z"
	geofs.aircraft.instance.definition.parts[7].animations[0].axis = "Z"
	geofs.aircraft.instance.definition.parts[6].animations[0].rotationMethod = function(a) {
      this._rotation = M33.rotationZ(this._rotation, a)
   };
	geofs.aircraft.instance.definition.parts[7].animations[0].rotationMethod = function(a) {
      this._rotation = M33.rotationZ(this._rotation, a)
   };
}
}
implementFixes = setInterval(function(){
fixAircraft()
}, 1000);


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
   }
