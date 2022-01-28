class Thermostat {
    constructor(temperature = 20, psm = true, maxTemp = 25) {
        this.temperature = temperature;
        this.psm = psm;
        this.maxTemp = maxTemp

    }

    getTemp() {
        return this.temperature;
    }

    up() {
        if (this.temperature < this.maxTemp) {
            this.temperature += 1;
          }
        return this.temperature;
    }

    down() {
        if (this.temperature > 10) {
            this.temperature -= 1;
          }
        return this.temperature;
    }

    setPowerSavingMode(mode) {
        this.psm = mode; 
            if (this.psm) {
                this.maxTemp = 25;
            } else {
                this.maxTemp = 32;
            }
        
    }

    reset() {
        this.temperature = 20;
    }

    energyUsage(number) {
        if (number <= 18) {
            return 'Your energy usage is low!';
        } else if (number >= 19 && number <= 25) {
            return 'Your energy usage is medium!';
        } else {
            return 'Your energy usage is high!';
        }
    }

}

module.exports = Thermostat;    