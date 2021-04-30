class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    getEnergyConsumption = function (hours, power) {
        let energyConsumption = hours * power
        console.log(`Энергопотребление этого прибора за ${hours} часов работы = ${energyConsumption}`)
    }

    plugIn = function () {
        this.isPlugged = true;
        console.log(`${this.name} включен в розетку`)
    }

    plugOff = function () {
        this.isPlugged = false;
        console.log(`${this.name} выключен из розетки`)
    }
}

class Computer extends ElectricalAppliance {
    constructor(name, motherboard, processor, memory, ozy, powerblock, size, power) {
        super();
        this.name = name;
        this.motherboard = motherboard;
        this.processor = processor;
        this.memory = memory;
        this.ozy = ozy;
        this.powerblock = powerblock;
        this.size = size;
        this.power = power;
    }
}

class Lampa extends ElectricalAppliance {
    constructor(name, size, color, shineColor, power) {
        super();
        this.name = name;
        this.size = size;
        this.color = color;
        this.shineColor = shineColor;
        this.power = power;
    }
}

const computer = new Computer('hp','Asus', 'Intel', 'WD', 'kingston', 'BQ', 'miniATX', 1000)
const lampa = new Lampa('xiaomi','small', 'red', 'cold', 7)