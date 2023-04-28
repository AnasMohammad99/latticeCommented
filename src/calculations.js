function voltageCalculation(Z1, Z2, Z3, amplitude) {
    let Va = amplitude;
    let values = [Z1, Z2, Z3];
    let tauF = [];
    let tauR = [];
    let rhoF = [];
    let rhoR = [];
    let voltage = [[],[]];
    for (let i = 0; i < 2; i++) {
        if(values[i+1]===Infinity){
            tauF.push(2);
        }
        else if(values[i+1].length){
            tauF.push(2/(values[i]*((1/values[i])+(1/values[i+1][0])+((1/values[i+1][1])||0))));
        }
        else{
            tauF.push((2*values[i+1]/(values[i]+values[i+1])));
        }
        rhoF.push(tauF[i]-1);
        tauR.push(1-rhoF[i]);
        rhoR.push(tauR[i]-1);
    }
    voltage[0].push(Va*tauF[0])
    voltage[1].push(0)
    let i = 1;
    while (i<=6) {
        voltage[1].push(voltage[1][i-1]+voltage[0][0]*(rhoF[1]**(i-1))*((rhoR[0])**(i-1))*tauF[1])
        voltage[0].push((voltage[0][i-1])+(voltage[0][0]*(rhoF[1]**(i))*((rhoR[0])**(i-1))*(tauR[0])))
        i++;
    }
    return voltage
} 
function currentCalculation(Z1, Z2, Z3, amplitude) {
    let Va = amplitude;
    let values = [Z1, Z2, Z3];
    let Ia = Va/values[0];
    let tauF = [];
    let tauR = [];
    let rhoF = [];
    let rhoR = [];
    let current = [[],[]];
    for (let i = 0; i < 2; i++) {
        if(values[i+1]===Infinity){
            tauF.push(0);
        }
        else if(values[i+1].length){
            tauF.push(2-2/(values[i]*((1/values[i])+(1/values[i+1][0])+((1/values[i+1][1])||0))));
        }
        else{
            tauF.push((2*values[i]/(values[i]+values[i+1])));
        }
        rhoF.push(tauF[i]-1);
        tauR.push(1-rhoF[i]);
        rhoR.push(tauR[i]-1);
    }
    current[0].push(Ia*tauF[0])
    current[1].push(0)
    let i = 1;
    while (i<=6) {
        current[1].push(current[1][i-1]+current[0][0]*(rhoF[1]**(i-1))*((rhoR[0])**(i-1))*tauF[1])
        current[0].push((current[0][i-1])+(current[0][0]*(rhoF[1]**(i))*((rhoR[0])**(i-1))*(tauR[0])))
        i++;
    }
    return current
} 
function timeCalculation(l1, v1){
    let lineLength = l1;
    let velocity = v1;
    let travelTime = lineLength/velocity;
    let time = [[0],[travelTime]];
    let i = 1;
    while (i<=6) {
        time[0].push(time[0][i-1]+2*travelTime)
        time[1].push(time[1][i-1]+2*travelTime)
        i++;
    }
    return time
}
export {
    voltageCalculation,
    currentCalculation,
    timeCalculation
}