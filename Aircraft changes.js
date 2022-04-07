//aircraft.json changes
function checkAndImplementChanges() { 
   if (geofs.aircraft.instance.id == 52){
	   //now you can fly the Hughes Osage higher
      geofs.aircraft.instance.definition.zeroRPMAltitude = 80000
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
