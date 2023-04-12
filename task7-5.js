class ElectricalAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
  }

  turnOn() {
    if (!this.isOn) {
      console.log(`${this.name} is turned on`);
      this.isOn = true;
    }
  }

  turnOff() {
    if (this.isOn) {
      console.log(`${this.name} is turned off`);
      this.isOn = false;
    }
  }
}

class DeskLamp extends ElectricalAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }
}

class Computer extends ElectricalAppliance {
  constructor(name, power, os) {
    super(name, power);
    this.os = os;
  }
}

const deskLamp = new DeskLamp("Desk Lamp", 25);
const computer = new Computer("Computer", 300, "Windows 10");

deskLamp.turnOn();
computer.turnOn();

const totalPower = deskLamp.power + computer.power;
console.log(`Total power consumption: ${totalPower} W`);
