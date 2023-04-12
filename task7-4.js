function ElectricDevice(name, power) {
  this.name = name;
  this.power = power;
  this.isPluggedIn = false;
}

ElectricDevice.prototype.plugIn = function () {
  this.isPluggedIn = true;
  console.log(`${this.name} is now plugged in.`);
};

ElectricDevice.prototype.unplug = function () {
  this.isPluggedIn = false;
  console.log(`${this.name} is now unplugged.`);
};
function Lamp(name, power, brightness) {
  ElectricDevice.call(this, name, power);
  this.brightness = brightness;
}

Lamp.prototype = Object.create(ElectricDevice.prototype);
Lamp.prototype.constructor = Lamp;

Lamp.prototype.adjustBrightness = function (brightness) {
  this.brightness = brightness;
  console.log(`${this.name} brightness set to ${this.brightness}.`);
};

function Computer(name, power, cpu) {
  ElectricDevice.call(this, name, power);
  this.cpu = cpu;
}

Computer.prototype = Object.create(ElectricDevice.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.runProgram = function (program) {
  console.log(`${this.cpu} is running ${program}.`);
};
const lamp = new Lamp("Desk Lamp", 25, 50);
const computer = new Computer("Desktop Computer", 300, "Intel Core i7");

lamp.plugIn();
computer.plugIn();

console.log(`Total power consumption: ${lamp.power + computer.power} watts.`);
