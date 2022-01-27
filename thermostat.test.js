const { expect, it } = require('@jest/globals');
const Thermostat = require('./thermostat');


describe('Thermostat', () => {
    it('initializes a new thermostat', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemp()).toEqual(20);
    });

    it('puts the temperature up by 2', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemp()).toEqual(22);
    });

    it('puts the temperature down by 1', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.down();
        expect(thermostat.getTemp()).toEqual(21);
    });

    it('checks the PSM is on by returning True', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(true);
        expect(thermostat.psm).toBe(true);
    });

    it('checks the maximum temperature of 25', () => {
        const thermostat = new Thermostat();
        for (let i = 0 ; i < 10 ; i++) { thermostat.up(); }
        expect(thermostat.getTemp()).toEqual(25);
    });

    it('checks the PSM is off by returning False', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        expect(thermostat.psm).toBe(false);
    });

    it('checks the max temp when PSM is on', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0 ; i < 6 ; i++) { thermostat.up(); }
        expect(thermostat.getTemp()).toEqual(26);
    });

    it('checks the thermostat can be reset to 20', () => {
        const thermostat = new Thermostat();
        thermostat.reset();
        expect(thermostat.getTemp()).toEqual(20);
    });
});