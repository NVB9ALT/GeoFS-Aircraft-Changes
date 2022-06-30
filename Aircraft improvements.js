function changeAircraft() {
//aircraft.json changes
function checkAndImplementChanges() { 
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
   if (geofs.aircraft.instance.id == 18){
	//Su-35 reverse thrust
	geofs.aircraft.instance.definition.reverse = true
        geofs.aircraft.instance.parts.rightEngine.reverseThrust = 50000
        geofs.aircraft.instance.parts.leftEngine.reverseThrust = 50000
   }
   if (geofs.aircraft.instance.id == 12){
	   //Aaaand the PC 7 gets PC 9 performance
      geofs.aircraft.instance.parts.engine.thrust = 12000
   }
   if (geofs.aircraft.instance.id == 7){
	   //F16 gets the most powerful Block 60 engine
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
