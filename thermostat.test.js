const Thermostat = require('./thermostat');


describe('Thermostat', () => {
    const thermostat = new Thermostat();

    it('initializes a new thermostat', () => {
        expect(thermostat.getTemp()).toEqual(20);
    });

    it('puts the temperature up by 2', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemp()).toEqual(22);
    });

    it('puts the temperature down by 1', () => {
        thermostat.down();
        expect(thermostat.getTemp()).toEqual(21);
    });

    it('checks the PSM is on by returning True', () => {
        thermostat.setPowerSavingMode(true);
        expect(thermostat.psm).toBe(true);
    });

    it('checks the maximum temperature of 25', () => {
        for (let i = 0 ; i < 10 ; i++) { thermostat.up(); }
        expect(thermostat.getTemp()).toEqual(25);
    });

    it('checks the PSM is off by returning False', () => {
        thermostat.setPowerSavingMode(false);
        expect(thermostat.psm).toBe(false);
    });

    it('checks the max temp when PSM is on', () => {
        thermostat.setPowerSavingMode(false);
        for (let i = 0 ; i < 1 ; i++) { thermostat.up(); }
        expect(thermostat.getTemp()).toEqual(26);
    });

    it('checks the thermostat can be reset to 20', () => {
        thermostat.reset();
        expect(thermostat.getTemp()).toEqual(20);
    });

    it('checks the energy usage is low', () => {
        expect(thermostat.energyUsage(18)).toBe('Your energy usage is low!');
    });

    it('checks the energy usage is medium', () => {
        expect(thermostat.energyUsage(24)).toBe('Your energy usage is medium!');
    });

    it('checks the energy usage is high', () => {
        expect(thermostat.energyUsage(28)).toBe('Your energy usage is high!');
    });
});