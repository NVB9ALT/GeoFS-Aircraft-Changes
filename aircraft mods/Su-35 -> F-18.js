//NOTE: This only works for the flight model. It does NOT change the 3d model. I'm working on this in my Addon Aircraft and Parts repo.

//naming the thing
document.querySelectorAll('[data-aircraft]').forEach(function(e){
   var elemName = e.outerText;
    if (elemName.includes("Su-35")) {
       e.innerHTML = e.innerHTML + " (HoHoHo is HARV)"
    }
});
//the actual implementation lol:
function runHARV() {
   if (geofs.aircraft.instance.id == 18 && geofs.aircraft.instance.liveryId == 4) {
//removing the thrust vectoring
geofs.aircraft.instance.definition.parts[46].animations[0].ratio = 0.069;
geofs.aircraft.instance.definition.parts[46].animations[1].ratio = 0.069;
geofs.aircraft.instance.definition.parts[51].animations[0].ratio = 0.069;
geofs.aircraft.instance.definition.parts[51].animations[1].ratio = 0.069;
//increasing the LERX area
geofs.aircraft.instance.definition.parts[2].area = 25
//making the LERX stall like a delta wing (bc it kinda is)
geofs.aircraft.instance.definition.parts[2].stallIncidence = 25
geofs.aircraft.instance.definition.parts[2].zeroLiftIncidence = 70
//The actual wings have delayed lift loss, because the leading edge vortex streaming off the LERX
//sticks to the wing and maintains the pressure differential
geofs.aircraft.instance.definition.parts[3].stallIncidence = 25
geofs.aircraft.instance.definition.parts[3].zeroLiftIncidence = 50
geofs.aircraft.instance.definition.parts[4].stallIncidence = 25
geofs.aircraft.instance.definition.parts[4].zeroLiftIncidence = 50
//Tuning the stabilizer area
geofs.aircraft.instance.definition.parts[11].area = 3
//FBW G-prot
geofs.aircraft.instance.definition.parts[12].animations[2] = {};
	geofs.aircraft.instance.definition.parts[12].animations[2].type = "rotate";
	geofs.aircraft.instance.definition.parts[12].animations[2].axis = "X";
	geofs.aircraft.instance.definition.parts[12].animations[2].value = "accZ";
	geofs.aircraft.instance.definition.parts[12].animations[2].ratio = -5;
	geofs.aircraft.instance.definition.parts[12].animations[2].gt = 90;
	geofs.aircraft.instance.definition.parts[12].animations[2].currentValue = null;
	geofs.aircraft.instance.definition.parts[12].animations[2].rotationMethod = function(a) {
      this._rotation = M33.rotationX(this._rotation, a)
   };
geofs.aircraft.instance.definition.parts[13].animations[2] = {}
	geofs.aircraft.instance.definition.parts[13].animations[2].type = "rotate";
	geofs.aircraft.instance.definition.parts[13].animations[2].axis = "X";
	geofs.aircraft.instance.definition.parts[13].animations[2].value = "accZ";
	geofs.aircraft.instance.definition.parts[13].animations[2].ratio = -5;
	geofs.aircraft.instance.definition.parts[13].animations[2].gt = 90;
	geofs.aircraft.instance.definition.parts[13].animations[2].currentValue = null;
	geofs.aircraft.instance.definition.parts[13].animations[2].rotationMethod = function(a) {
      this._rotation = M33.rotationX(this._rotation, a)
   };
//Adjusting engine power
geofs.aircraft.instance.engines[0].thrust = 50000
geofs.aircraft.instance.engines[0].afterBurnerThrust = 87000
geofs.aircraft.instance.engines[1].thrust = 50000
geofs.aircraft.instance.engines[1].afterBurnerThrust = 87000
//Maintaining 1:1 TWR
geofs.aircraft.instance.definition.mass = 17000
//Adjusting drag to keep a top speed of Mach 1.7
geofs.aircraft.instance.definition.dragFactor = 0.9
   }
}
HARVINTERVAL = setInterval(function(){runHARV()},100)
