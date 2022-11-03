class Employee {
    constructor(Name, Id) {
        this._Name = Name;
        this._Id = Id;
    }

    get Name() {
        return this._Name;
    }

    set Name(newName) {
        this._Name = newName;
    }

    get Id() {
        return this._Id;
    }

    set Id(newId) {
        this._Id = newId;
    }
}

class ProductionWorker extends Employee {
    constructor(Name, Id, ShiftN, HourlyPr) {
        super(Name, Id);
        this._ShiftN = ShiftN;
        this._HourlyPr = HourlyPr;
    }

    get ShiftN() {
        return this._ShiftN;
    }

    set ShiftN(newShiftN) {
        this._ShiftN = newShiftN;
    }

    get HourlyPr() {
        return this._HourlyPr;
    }

    set HourlyPr(newHourlyPr) {
        this._HourlyPr = newHourlyPr;
    }
}


function doInputOutput() {

let Name = document.getElementById('Names').value;
let Id = document.getElementById('Ids').value;
let ShiftN = parseInt(document.getElementById('ShiftsN').value);
let HourlyPr = document.getElementById('HourlyPrs').value;
let person = new ProductionWorker(Name, Id, ShiftN, HourlyPr)
document.getElementById('Output').innerHTML = 'Name: ' + person.Name + '<br/><br/>' + 'Id: ' + person.Id + '<br/><br/>' + 'Shift Number: ' + person.ShiftN + '<br/><br/>' + 'Hourly Pay Rate: ' + person.HourlyPr;
}
