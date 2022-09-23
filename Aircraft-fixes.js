function realismify() {
var notifiedTrue1 = new Boolean(0)
function fixAircraft() {
//Fixing the XB-70's canards
if (geofs.aircraft.instance.id == 2948) {
geofs.aircraft.instance.definition.parts[69].animations[0].ratio = 25
geofs.aircraft.instance.definition.parts[70].animations[0].ratio = 25
};
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
//Su-35 gets thrust vectoring on the yaw axis and better physics
if (geofs.aircraft.instance.id == 18){
geofs.aircraft.instance.definition.parts[3].area = 15
geofs.aircraft.instance.definition.parts[4].area = 15
geofs.aircraft.instance.definition.parts[2].area = 17
geofs.aircraft.instance.definition.parts[11].area = 0.069

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
	//Wings swing out when high AoA
	if (geofs.animation.values.aoa >= 7.5 && geofs.animation.values.aoa <= 20 && geofs.animation.values.kias >= 300) {
	   controls.optionalAnimatedPart.target = geofs.animation.values.aoa / 20
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
//Redo Falcon-9 sounds and increase effectiveness of flight controls
if (geofs.aircraft.instance.id == 2844) {
   geofs.aircraft.instance.definition.sounds[0].effects.volume.value = "flapsPosition";
	geofs.aircraft.instance.definition.sounds[1].file = "https://geo-fs.com/sounds/f16/rpm1.ogg";
	geofs.aircraft.instance.definition.sounds[2].file = "https://geo-fs.com/sounds/f16/rpm2.ogg";
	geofs.aircraft.instance.definition.parts[25].animations[0].ratio = 2.5;
	geofs.aircraft.instance.definition.parts[25].animations[1].ratio = -2.5;
	audio.init(geofs.aircraft.instance.definition.sounds);
}
//F22 fixes
if (geofs.aircraft.instance.id == 2857) {
geofs.aircraft.instance.definition.parts[7].area = 10
geofs.aircraft.instance.definition.parts[8].area = 10
geofs.aircraft.instance.definition.parts[14].liftFactor = 10
geofs.aircraft.instance.definition.parts[15].liftFactor = 10
}
if (geofs.aircraft.instance.id == 2988) {
   geofs.aircraft.instance.definition.parts[27].area = 5
}
//Fixing the realism of the F-15
if (geofs.aircraft.instance.id == 3591) {
geofs.aircraft.instance.definition.autopilot.maxBankAngle = 45;
geofs.aircraft.instance.definition.parts[8].area = 20;
geofs.aircraft.instance.definition.parts[8].stallIncidence = 17;
geofs.aircraft.instance.definition.parts[10].area = 20;
geofs.aircraft.instance.definition.parts[10].stallIncidence = 17;
geofs.aircraft.instance.definition.parts[28].area = 10;
geofs.aircraft.instance.definition.parts[29].area = 10;
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
	   controls.throttle = 0.97
	};
   }
//Minor Corsair improvement - tricky startup
if (geofs.aircraft.instance.id == 4251) {
   geofs.aircraft.instance.definition.parts[20].area = 5
   if (geofs.animation.values.rpm < 900 && geofs.animation.values.throttle < 0.08) {
geofs.aircraft.instance.stopEngine()
	}
}
}
implementFixes = setInterval(function(){
fixAircraft()
}, 1000);


//Experimental multiplayer aircraft sounds
function fetchAircraftSoundsLow(aircraft1) {
try {
if (aircraft1 == 1) {
   return "https://geo-fs.com/sounds/rotax/rpm1.ogg"
}
if (aircraft1 == 2) {
   return "https://geo-fs.com/sounds/o235/rpm1.ogg"
}
if (aircraft1 == 3) {
   return "https://geo-fs.com/sounds/jet/rpm1.ogg"
}
if (aircraft1 == 4) {
   return "https://geo-fs.com/sounds/737/rpm0.ogg"
}
if (aircraft1 == 5) {
   return "https://geo-fs.com/sounds/phenom/rpm0.ogg"
}
if (aircraft1 == 6) {
   return "https://geo-fs.com/sounds/737/rpm0.ogg" //this is the Twin Otter but the sounds are not 6 sec long
}
if (aircraft1 == 7) {
   return "https://geo-fs.com/sounds/f16/rpm0.ogg"
}
if (aircraft1 == 8) {
   return "https://geo-fs.com/sounds/pitts/rpm1.ogg"
}
if (aircraft1 == 9) {
   return "https://geo-fs.com/sounds/ec135/rpm2.ogg"
}
if (aircraft1 == 10) {
   return "https://geo-fs.com/sounds/a380/rpm1.ogg"
}
if (aircraft1 == 12) {
   return "https://geo-fs.com/sounds/pc7/turbine.ogg"
}
if (aircraft1 == 13) {
   return "https://geo-fs.com/models/aircraft/premium/dhc2/sounds/rpm0.ogg"
}
if (aircraft1 == 14) {
   return "https://geo-fs.com/models/aircraft/premium/cricri/sounds/rpm1.ogg"
}
if (aircraft1 == 15) {
   return "https://geo-fs.com/sounds/p38/rpm0.ogg"
}
if (aircraft1 == 16) {
   return "https://geo-fs.com/sounds/dc3/rpm1.ogg"
}
if (aircraft1 == 18) {
   return "https://geo-fs.com/sounds/su35/rpm1.ogg"
}
} catch(error) {
throw("Error: sound loading failed 1. " + error)
}
}
function fetchAircraftSoundsHigh(aircraft2) {
try {
if (aircraft2 == 1) {
   return "https://geo-fs.com/sounds/rotax/rpm4.ogg"
}
if (aircraft2 == 2) {
   return "https://geo-fs.com/sounds/o235/rpm4.ogg"
}
if (aircraft2 == 3) {
   return "https://geo-fs.com/sounds/jet/rpm3.ogg"
}
if (aircraft2 == 4) {
   return "https://geo-fs.com/sounds/737/rpm2.ogg"
}
if (aircraft2 == 5) {
   return "https://geo-fs.com/sounds/737/rpm2.ogg"
}
if (aircraft2 == 6) {
   return "https://geo-fs.com/sounds/737/rpm2.ogg"
}
if (aircraft2 == 7) {
   return "https://geo-fs.com/sounds/f16/rpm2.ogg"
}
if (aircraft2 == 8) {
   return "https://geo-fs.com/sounds/pitts/rpm3.ogg"
}
if (aircraft2 == 9) {
   return "https://geo-fs.com/sounds/ec135/rpm2.ogg"
}
if (aircraft2 == 10) {
   return "https://geo-fs.com/sounds/a380/rpm4.ogg"
}
if (aircraft2 == 12) {
   return "https://geo-fs.com/sounds/pc7/prop.ogg"
}
if (aircraft2 == 13) {
   return "https://geo-fs.com/models/aircraft/premium/dhc2/sounds/rpm1.ogg"
}
if (aircraft2 == 14) {
   return "https://geo-fs.com/models/aircraft/premium/cricri/sounds/rpm2.ogg"
}
if (aircraft2 == 15) {
   return "https://geo-fs.com/sounds/p38/rpm2.ogg"
}
if (aircraft2 == 16) {
   return "https://geo-fs.com/sounds/dc3/rpm4.ogg"
}
if (aircraft2 == 18) {
   return "https://geo-fs.com/sounds/su35/rpm4.ogg"
}
} catch(error) {
throw("Error: sound loading failed 2. " + error)
}
}
//some method of correcting for wind is needed (i think)
var lastAirspeed = null;
function computeSounds() {
Object.values(multiplayer.visibleUsers).forEach(function(e){
lastAirspeed = e.lastUpdate.st.as
setTimeout(() => {
	if (e.referencePoint.lla[2] - geofs.aircraft.instance.llaLocation[2] <= 1000 && geofs.aircraft.instance.llaLocation[2] - e.referencePoint.lla[2] <= 1000 && e.distance < 500 && e.lastUpdate.st.as >= 50 && (e.lastUpdate.st.as - lastAirspeed) >= -1) {
audio.impl.html5.playFile(fetchAircraftSoundsHigh(e.aircraft))
	} else if (e.referencePoint.lla[2] - geofs.aircraft.instance.llaLocation[2] <= 1000 && geofs.aircraft.instance.llaLocation[2] - e.referencePoint.lla[2] <= 1000 && e.distance < 500 && e.lastUpdate.st.as <= 49 && (e.lastUpdate.st.as - lastAirspeed) >= 5) {
audio.impl.html5.playFile(fetchAircraftSoundsHigh(e.aircraft))
	} else if (e.referencePoint.lla[2] - geofs.aircraft.instance.llaLocation[2] <= 1000 && geofs.aircraft.instance.llaLocation[2] - e.referencePoint.lla[2] <= 1000 && e.distance < 500) {
audio.impl.html5.playFile(fetchAircraftSoundsLow(e.aircraft))
	}
	},5750)
})
};
multiplayerSoundInterval = setInterval(function(){computeSounds()},6000)


function runFBW() {
if (geofs.animation.values.kias > 100 && geofs.aircraft.instance.id == 7) {
flight.setAnimationValues = function (a, b) {
    var c = geofs.aircraft.instance,
        d = geofs.animation.values,
        e = c.llaLocation[2] * METERS_TO_FEET,
        g = (60 * (e - c.oldAltitude * METERS_TO_FEET)) / a;
    c.oldAltitude = c.llaLocation[2];
    var f = fixAngle(weather.currentWindDirection - c.htr[0]),
        k = c.engine.rpm * c.definition.RPM2PropAS * a;
    d.acceleration = M33.transform(M33.transpose(c.object3d._rotation), c.rigidBody.v_acceleration);
    d.accX = d.acceleration[0];
    d.accY = d.acceleration[1];
    d.accZ = d.acceleration[2];
    d.loadFactor = d.acceleration[2] / GRAVITY;
    d.slipball = exponentialSmoothing("slipball", d.acceleration[0], 0.02);
    d.ktas = c.trueAirSpeed * MS_TO_KNOTS;
    d.kiasChangeRate = (d.kias - d.ktas) * a;
    d.kias = d.ktas;
    d.kiasUnits = d.ktas % 10;
    d.kiasTens = d.ktas % 100;
    d.kiasHundreds = d.ktas % 1e3;
    d.kiasThousands = d.ktas % 1e4;
    d.groundSpeed = c.groundSpeed;
    d.groundSpeedKnt = c.groundSpeed * MS_TO_KNOTS;
    d.altitudeMeters = c.llaLocation[2];
    d.altitude = e;
    d.haglMeters = geofs.relativeAltitude;
    d.haglFeet = geofs.relativeAltitude * METERS_TO_FEET;
    d.groundElevationFeet = geofs.groundElevation * METERS_TO_FEET;
    d.verticalSpeed = g;
    d.climbrate = g;
    d.aoa = c.angleOfAttackDeg;
    d.turnrate = (60 * fixAngle(c.htr[0] - d.heading)) / a;
    d.heading = c.htr[0];
    d.heading360 = fixAngle360(c.htr[0]);
    d.atilt = c.htr[1];
    d.aroll = c.htr[2];
    d.enginesOn = c.engine.on;
    d.engineVibration = 100 < c.engine.rpm ? Math.random() * clamp(1e3 / c.engine.rpm, 0, 1) : 0;
    d.prop = fixAngle360(d.prop + k);
    d.thrust = c.totalThrust;
    d.rpm = c.engine.rpm;
    d.throttle = controls.throttle;
	 //controls.pitch max is 1
    d.pitch = controls.pitch / (geofs.animation.values.kias/150);
    d.rawPitch = controls.rawPitch;
	 //roll stabilization?
    d.roll = controls.roll;
    d.yaw = controls.yaw;
    d.rawYaw = controls.rawYaw;
    d.trim = controls.elevatorTrim;
    d.brakes = controls.brakes;
    d.gearPosition = controls.gear.position;
    d.invGearPosition = 1 - controls.gear.position;
    d.gearTarget = controls.gear.target;
    d.flapsValue = controls.flaps.position / controls.flaps.maxPosition;
    d.accessoriesPosition = controls.accessories.position;
    d.flapsPosition = controls.flaps.position;
    d.flapsTarget = controls.flaps.target;
    d.flapsPositionTarget = controls.flaps.positionTarget;
    d.flapsMaxPosition = controls.flaps.maxPosition;
    d.airbrakesPosition = controls.airbrakes.position;
    d.optionalAnimatedPartPosition = controls.optionalAnimatedPart.position;
    d.airbrakesTarget = controls.airbrakes.target;
    d.parkingBrake = c.brakesOn;
    d.groundContact = c.groundContact ? 1 : 0;
    d.arrestingHookTension = c.arrestingCableContact ? V3.length(c.arrestingCableContact.force) : 0;
    d.airTemp = weather.atmosphere.airTempAtAltitude;
    d.mach = c.trueAirSpeed / (331.3 + 0.606 * weather.atmosphere.airTempAtAltitude);
    d.machUnits = Math.floor(d.mach);
    d.machTenth = Math.floor(10 * (d.mach % 1).toPrecision(2));
    d.machHundredth = Math.floor(100 * (d.mach % 0.1).toPrecision(2));
    d.altTenThousands = e % 1e5;
    d.altThousands = e % 1e4;
    d.altHundreds = e % 1e3;
    d.altTens = e % 100;
    d.altTensShift = Math.floor((e % 1e5) / 1e4);
    d.altUnits = e % 10;
    d.relativeWind = f;
    d.windSpeed = weather.currentWindSpeed;
    d.windSpeedLabel = parseInt(weather.currentWindSpeed) + " kts";
    d.view = geofs.camera.currentView;
    d.envelopeTemp = c.envelopeTemp;
    d["aircraft.maxAngularVRatio"] = c.maxAngularVRatio;
    d.rollingSpeed = c.groundContact ? c.velocityScalar : 0;
    "free" == geofs.camera.currentModeName || "chase" == geofs.camera.currentModeName
        ? ((c = geofs.utils.llaDistanceInMeters(geofs.camera.lla, c.llaLocation)), (d.cameraAircraftSpeed = (d.cameraAircraftDistance - c) / a), (d.cameraAircraftDistance = c))
        : ((d.cameraAircraftSpeed = 0), (d.cameraAircraftDistance = 0));
    d.geofsTime = b;
    geofs.api.postMessage({ animationValues: d });
}
   } else if (geofs.animation.values.kias < 99 && geofs.aircraft.instance.id == 7) {
flight.setAnimationValues = function (a, b) {
    var c = geofs.aircraft.instance,
        d = geofs.animation.values,
        e = c.llaLocation[2] * METERS_TO_FEET,
        g = (60 * (e - c.oldAltitude * METERS_TO_FEET)) / a;
    c.oldAltitude = c.llaLocation[2];
    var f = fixAngle(weather.currentWindDirection - c.htr[0]),
        k = c.engine.rpm * c.definition.RPM2PropAS * a;
    d.acceleration = M33.transform(M33.transpose(c.object3d._rotation), c.rigidBody.v_acceleration);
    d.accX = d.acceleration[0];
    d.accY = d.acceleration[1];
    d.accZ = d.acceleration[2];
    d.loadFactor = d.acceleration[2] / GRAVITY;
    d.slipball = exponentialSmoothing("slipball", d.acceleration[0], 0.02);
    d.ktas = c.trueAirSpeed * MS_TO_KNOTS;
    d.kiasChangeRate = (d.kias - d.ktas) * a;
    d.kias = d.ktas;
    d.kiasUnits = d.ktas % 10;
    d.kiasTens = d.ktas % 100;
    d.kiasHundreds = d.ktas % 1e3;
    d.kiasThousands = d.ktas % 1e4;
    d.groundSpeed = c.groundSpeed;
    d.groundSpeedKnt = c.groundSpeed * MS_TO_KNOTS;
    d.altitudeMeters = c.llaLocation[2];
    d.altitude = e;
    d.haglMeters = geofs.relativeAltitude;
    d.haglFeet = geofs.relativeAltitude * METERS_TO_FEET;
    d.groundElevationFeet = geofs.groundElevation * METERS_TO_FEET;
    d.verticalSpeed = g;
    d.climbrate = g;
    d.aoa = c.angleOfAttackDeg;
    d.turnrate = (60 * fixAngle(c.htr[0] - d.heading)) / a;
    d.heading = c.htr[0];
    d.heading360 = fixAngle360(c.htr[0]);
    d.atilt = c.htr[1];
    d.aroll = c.htr[2];
    d.enginesOn = c.engine.on;
    d.engineVibration = 100 < c.engine.rpm ? Math.random() * clamp(1e3 / c.engine.rpm, 0, 1) : 0;
    d.prop = fixAngle360(d.prop + k);
    d.thrust = c.totalThrust;
    d.rpm = c.engine.rpm;
    d.throttle = controls.throttle;
    d.pitch = controls.pitch;
    d.rawPitch = controls.rawPitch;
    d.roll = controls.roll;
    d.yaw = controls.yaw;
    d.rawYaw = controls.rawYaw;
    d.trim = controls.elevatorTrim;
    d.brakes = controls.brakes;
    d.gearPosition = controls.gear.position;
    d.invGearPosition = 1 - controls.gear.position;
    d.gearTarget = controls.gear.target;
    d.flapsValue = controls.flaps.position / controls.flaps.maxPosition;
    d.accessoriesPosition = controls.accessories.position;
    d.flapsPosition = controls.flaps.position;
    d.flapsTarget = controls.flaps.target;
    d.flapsPositionTarget = controls.flaps.positionTarget;
    d.flapsMaxPosition = controls.flaps.maxPosition;
    d.airbrakesPosition = controls.airbrakes.position;
    d.optionalAnimatedPartPosition = controls.optionalAnimatedPart.position;
    d.airbrakesTarget = controls.airbrakes.target;
    d.parkingBrake = c.brakesOn;
    d.groundContact = c.groundContact ? 1 : 0;
    d.arrestingHookTension = c.arrestingCableContact ? V3.length(c.arrestingCableContact.force) : 0;
    d.airTemp = weather.atmosphere.airTempAtAltitude;
    d.mach = c.trueAirSpeed / (331.3 + 0.606 * weather.atmosphere.airTempAtAltitude);
    d.machUnits = Math.floor(d.mach);
    d.machTenth = Math.floor(10 * (d.mach % 1).toPrecision(2));
    d.machHundredth = Math.floor(100 * (d.mach % 0.1).toPrecision(2));
    d.altTenThousands = e % 1e5;
    d.altThousands = e % 1e4;
    d.altHundreds = e % 1e3;
    d.altTens = e % 100;
    d.altTensShift = Math.floor((e % 1e5) / 1e4);
    d.altUnits = e % 10;
    d.relativeWind = f;
    d.windSpeed = weather.currentWindSpeed;
    d.windSpeedLabel = parseInt(weather.currentWindSpeed) + " kts";
    d.view = geofs.camera.currentView;
    d.envelopeTemp = c.envelopeTemp;
    d["aircraft.maxAngularVRatio"] = c.maxAngularVRatio;
    d.rollingSpeed = c.groundContact ? c.velocityScalar : 0;
    "free" == geofs.camera.currentModeName || "chase" == geofs.camera.currentModeName
        ? ((c = geofs.utils.llaDistanceInMeters(geofs.camera.lla, c.llaLocation)), (d.cameraAircraftSpeed = (d.cameraAircraftDistance - c) / a), (d.cameraAircraftDistance = c))
        : ((d.cameraAircraftSpeed = 0), (d.cameraAircraftDistance = 0));
    d.geofsTime = b;
    geofs.api.postMessage({ animationValues: d });
   };
} else {
flight.setAnimationValues = function (a, b) {
    var c = geofs.aircraft.instance,
        d = geofs.animation.values,
        e = c.llaLocation[2] * METERS_TO_FEET,
        g = (60 * (e - c.oldAltitude * METERS_TO_FEET)) / a;
    c.oldAltitude = c.llaLocation[2];
    var f = fixAngle(weather.currentWindDirection - c.htr[0]),
        k = c.engine.rpm * c.definition.RPM2PropAS * a;
    d.acceleration = M33.transform(M33.transpose(c.object3d._rotation), c.rigidBody.v_acceleration);
    d.accX = d.acceleration[0];
    d.accY = d.acceleration[1];
    d.accZ = d.acceleration[2];
    d.loadFactor = d.acceleration[2] / GRAVITY;
    d.slipball = exponentialSmoothing("slipball", d.acceleration[0], 0.02);
    d.ktas = c.trueAirSpeed * MS_TO_KNOTS;
    d.kiasChangeRate = (d.kias - d.ktas) * a;
    d.kias = d.ktas;
    d.kiasUnits = d.ktas % 10;
    d.kiasTens = d.ktas % 100;
    d.kiasHundreds = d.ktas % 1e3;
    d.kiasThousands = d.ktas % 1e4;
    d.groundSpeed = c.groundSpeed;
    d.groundSpeedKnt = c.groundSpeed * MS_TO_KNOTS;
    d.altitudeMeters = c.llaLocation[2];
    d.altitude = e;
    d.haglMeters = geofs.relativeAltitude;
    d.haglFeet = geofs.relativeAltitude * METERS_TO_FEET;
    d.groundElevationFeet = geofs.groundElevation * METERS_TO_FEET;
    d.verticalSpeed = g;
    d.climbrate = g;
    d.aoa = c.angleOfAttackDeg;
    d.turnrate = (60 * fixAngle(c.htr[0] - d.heading)) / a;
    d.heading = c.htr[0];
    d.heading360 = fixAngle360(c.htr[0]);
    d.atilt = c.htr[1];
    d.aroll = c.htr[2];
    d.enginesOn = c.engine.on;
    d.engineVibration = 100 < c.engine.rpm ? Math.random() * clamp(1e3 / c.engine.rpm, 0, 1) : 0;
    d.prop = fixAngle360(d.prop + k);
    d.thrust = c.totalThrust;
    d.rpm = c.engine.rpm;
    d.throttle = controls.throttle;
    d.pitch = controls.pitch;
    d.rawPitch = controls.rawPitch;
    d.roll = controls.roll;
    d.yaw = controls.yaw;
    d.rawYaw = controls.rawYaw;
    d.trim = controls.elevatorTrim;
    d.brakes = controls.brakes;
    d.gearPosition = controls.gear.position;
    d.invGearPosition = 1 - controls.gear.position;
    d.gearTarget = controls.gear.target;
    d.flapsValue = controls.flaps.position / controls.flaps.maxPosition;
    d.accessoriesPosition = controls.accessories.position;
    d.flapsPosition = controls.flaps.position;
    d.flapsTarget = controls.flaps.target;
    d.flapsPositionTarget = controls.flaps.positionTarget;
    d.flapsMaxPosition = controls.flaps.maxPosition;
    d.airbrakesPosition = controls.airbrakes.position;
    d.optionalAnimatedPartPosition = controls.optionalAnimatedPart.position;
    d.airbrakesTarget = controls.airbrakes.target;
    d.parkingBrake = c.brakesOn;
    d.groundContact = c.groundContact ? 1 : 0;
    d.arrestingHookTension = c.arrestingCableContact ? V3.length(c.arrestingCableContact.force) : 0;
    d.airTemp = weather.atmosphere.airTempAtAltitude;
    d.mach = c.trueAirSpeed / (331.3 + 0.606 * weather.atmosphere.airTempAtAltitude);
    d.machUnits = Math.floor(d.mach);
    d.machTenth = Math.floor(10 * (d.mach % 1).toPrecision(2));
    d.machHundredth = Math.floor(100 * (d.mach % 0.1).toPrecision(2));
    d.altTenThousands = e % 1e5;
    d.altThousands = e % 1e4;
    d.altHundreds = e % 1e3;
    d.altTens = e % 100;
    d.altTensShift = Math.floor((e % 1e5) / 1e4);
    d.altUnits = e % 10;
    d.relativeWind = f;
    d.windSpeed = weather.currentWindSpeed;
    d.windSpeedLabel = parseInt(weather.currentWindSpeed) + " kts";
    d.view = geofs.camera.currentView;
    d.envelopeTemp = c.envelopeTemp;
    d["aircraft.maxAngularVRatio"] = c.maxAngularVRatio;
    d.rollingSpeed = c.groundContact ? c.velocityScalar : 0;
    "free" == geofs.camera.currentModeName || "chase" == geofs.camera.currentModeName
        ? ((c = geofs.utils.llaDistanceInMeters(geofs.camera.lla, c.llaLocation)), (d.cameraAircraftSpeed = (d.cameraAircraftDistance - c) / a), (d.cameraAircraftDistance = c))
        : ((d.cameraAircraftSpeed = 0), (d.cameraAircraftDistance = 0));
    d.geofsTime = b;
    geofs.api.postMessage({ animationValues: d });
   };
}
}
fbwInt = setInterval(function(){runFBW()},1000)


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
