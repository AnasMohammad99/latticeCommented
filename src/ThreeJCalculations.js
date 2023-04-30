    function VoltageAndTimeCalculation(amplitude, Z1, Z2, Z3, Z4, len1, len2, v1, v2) {
        let Vi = amplitude*1000;
        let values = [Z1,Z2,Z3,Z4];
        let t1 = len1/v1;
        let t2 = len2/v2;
        let tauF = [];
        let tauR = [];
        let rhoF = [];
        let rhoR = [];
        let voltage = [[],[],[]];
        let voltageLR = [[],[]];
        let time = [[],[],[]]
        let current = [[],[],[]];
        let currentLR = [[],[]];
        //this for loop to create tau and rho
        for (let i = 0; i < 3; i++) {
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
        time[1].push(t1)
        voltageLR[0].push(Vi*tauF[0]*rhoF[1])
        voltageLR[1].push(Vi*tauF[0]*tauF[1])
        voltage[1].push(voltageLR[1][0])
        let i = 1
        while (i<=8) {
            time[1].push(time[1][i-1]+2*t1);
            voltageLR[0].push((voltageLR[0][i-1])*rhoR[0]*rhoF[1]);
            voltageLR[1].push((voltageLR[0][i-1])*rhoR[0]*tauF[1]);
            voltage[1].push((voltage[1][2*i-2])+voltageLR[1][2*i-1]);
            if(time[1][2*i-1]===time[1][2*i-2]){
                voltage[1][2*i-2]=voltage[1][2*i-1]
            }
            time[1].push(time[1][i-1]+2*t2);
            voltageLR[0].push((voltageLR[1][i-1])*rhoF[2]*tauR[1]);
            voltageLR[1].push((voltageLR[1][i-1])*rhoF[2]*rhoR[1]);
            voltage[1].push((voltage[1][2*i-1])+voltageLR[0][2*i]);
            if(time[1][2*i]===time[1][2*i-1]){
                voltage[1][2*i-1]=voltage[1][2*i];
            }
            i++
        }
        //-----------------------------------------------------------
        i=1
        time[0].push(0)
        time[2].push(0)
        voltage[0].push(Vi*tauF[0])
        voltage[2].push(0)
        while(i<=8){
                time[0].push(time[1][i-1]+t1)
                voltage[0].push(voltage[0][i-1]+(voltageLR[0][i-1])*tauR[0])
                if(time[0][i]===time[0][i-1]){
                    voltage[0][i-1]=voltage[0][i]
                }

                time[2].push(time[1][i-1]+t2)
                voltage[2].push(voltage[2][i-1]+(voltageLR[1][i-1])*tauF[2])
                if(time[2][i]===time[2][i-1]){
                    voltage[2][i-1]=voltage[2][i]
                }
                i++
            }
        //------------------------current calc-----------------------------
        let tauiF = tauR;
        let tauiR = tauF;
        let rhoiF = rhoR;
        let rhoiR = rhoR;
        let Ii = (Vi/Z1)
        currentLR[0].push(Ii*tauiF[0]*rhoiF[1])
        currentLR[1].push(Ii*tauiF[0]*tauiF[1])
        current[1].push(currentLR[1][0])
        i = 1
        while (i<=8) {
            currentLR[0].push((currentLR[0][i-1])*rhoiR[0]*rhoiF[1]);
            currentLR[1].push((currentLR[0][i-1])*rhoiR[0]*tauiF[1]);
            current[1].push((current[1][2*i-2])+currentLR[1][2*i-1]);
            if(time[1][2*i-1]===time[1][2*i-2]){
                current[1][2*i-2]=current[1][2*i-1]
            }
            currentLR[0].push((currentLR[1][i-1])*rhoiF[2]*tauiR[1]);
            currentLR[1].push((currentLR[1][i-1])*rhoiF[2]*rhoiR[1]);
            current[1].push((current[1][2*i-1])+currentLR[0][2*i]);
            if(time[1][2*i]===time[1][2*i-1]){
                current[1][2*i-1]=current[1][2*i];
            }
            i++
        }
        i=1
        current[0].push(Ii*tauiF[0])
        current[2].push(0)
        while(i<=8){
                current[0].push(current[0][i-1]+(currentLR[0][i-1])*tauiR[0])
                if(time[0][i]===time[0][i-1]){
                    current[0][i-1]=current[0][i]
                }
                current[2].push(current[2][i-1]+(currentLR[1][i-1])*tauiF[2])
                if(time[2][i]===time[2][i-1]){
                    current[2][i-1]=current[2][i]
                }
                i++
            }
        let newVoltage = [[],[],[]]
        let newCurrent = [[],[],[]]
        let newTime = [[],[],[]]
        for (let i = 0; i < voltage.length; i++) {
            for (let j = 0; j < voltage[i].length; j++) {
                if (time[i][j]!==time[i][j+1]){
                        newTime[i].push(time[i][j])
                        newVoltage[i].push(voltage[i][j])
                        newCurrent[i].push(current[i][j])
                    }
                }
                
            }
            return[newVoltage, newCurrent, newTime]
    }
// console.log(VoltageAndTimeCalculation(.5, 0, 400, 40, Infinity, 450, 300, 300, 150));

export {
    VoltageAndTimeCalculation
}