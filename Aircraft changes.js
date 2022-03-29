//aircraft.json changes
function checkAndImplementChanges() { 
   if (geofs.aircraft.instance.id == 52){
	   //now you can fly the Hughes Osage higher
      geofs.aircraft.instance.definition.zeroRPMAltitude = 80000
   }
   if (geofs.aircraft.instance.id == 21){
	   //This just turns the Zlin Z 50 into something awesome
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
   if (geofs.aircraft.instance.id == 1 || geofs.aircraft.instance.id == 2 || geofs.aircraft.instance.id == 5 || geofs.aircraft.instance.id == 6 || geofs.aircraft.instance.id == 8 || geofs.aircraft.instance.id == 11 || geofs.aircraft.instance.id == 12 || geofs.aircraft.instance.id == 13 || geofs.aircraft.instance.id == 14 || geofs.aircraft.instance.id == 15 || geofs.aircraft.instance.id == 16){ //straight wing aircraft list
	   if (geofs.animation.values.mach > 0.675){
		   geofs.preferences.weather.advanced.turbulences = 5
		}
		if (geofs.animation.values.mach > 0.735){
		   geofs.preferences.weather.advanced.turbulences = 9 
		}
		else {
		   geofs.preferences.weather.advanced.turbulences = 0.2
		}
	}
	if (geofs.aircraft.instance.id == 3 || geofs.aircraft.instance.id == 4 || geofs.aircraft.instance.id == 10){ //swept wing aircraft list
		if (geofs.animation.values.mach > 0.8){
		   geofs.preferences.weather.advanced.turbulences = 5
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
