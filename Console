on("ready", function() {
    sendChat("api","!token-mod --config players-can-ids|on");
    on("chat:message",function(msg){
        if(msg.type=="api" && msg.content.indexOf("!Console")==0){
            var args = msg.content.split(" ");
            var tok = args[1];
            const skill = parseInt(args[2],10);
            const mod = parseInt(args[3],10);
            var testing = `Skill modifier: ${skill}   Other modifiers: ${mod}`;
            sendChat("INIT",testing);
            switch(tok){
                case "-NlzpdrL0o4yFlL2ybt8":
                    aboveandbeyond(skill,mod);
                    break;
                case "-NmakwtNtVVgqeY_4-vJ":
                    dealwithcrisis(skill,mod);
                    break;
                case "-Nm3hWpFAc_H1Ubimt4P":
                    doyourduty(mod);
                    break;
                case "-Nm3hbQ_xp33BApHg8Vb":
                    intothefire(skill,mod);
                    break;
                case "-Nm3hdwPUkoA8aUlerLc":
                    keepittogether();
                    break;
                case "-Nm3hgh66G1n52NA41FD":
                    supportdepartment(mod);
                    break;
                case "-Nm3hqSaKtlYx33CfnVs":
                    escapecombat(skill,mod);
                    break;
                case "-Nm3hvQ12T9O4n4uWqbC":
                    evasivemaneuvers(skill,mod);
                    break;
                case "-Nm3hvQ12T9O4n4uWqbC":
                    pursuetarget(skill,mod);
                    break;
                case "-Nm3i-kiLnPGPw8O3tyt":
                    crashsystems(skill,mod);
                    break;
                case "-Nm3i7PygkfIt4G28NZv":
                    defeatecm(skill,mod);
                    break;
                case "-Nm3i98jzS_O69B8Swuo":
                    sensorghost(skill,mod);
                    break;
                case "-Nm3iCtmPINOc8cg-Iau":
                    boostengines(skill,mod);
                    break;
                case "-Nm3iFOH8PAILR0dXr7-":
                    damagecontrol(skill,mod);
                    break;
                case "-Nm3iI0vKjDtZS2LrzD4":
                    emergencyrepairs(skill,mod);
                    break;
                case "-Nm3iMoPrLwLppWigMI7":
                    fireallguns(skill,mod);
                    break;
                case "-Nm3iQ3Nk6U6BasWFn20":
                    fireoneweapon(skill,mod);
                    break;
                case "-Nm3iVbLF1xNi69zcSj9":
                    targetsystems(skill,mod);
                    break;
            }
        }
    });            
    
//GENERAL ACTIONS SECTION        
    function aboveandbeyond(skill,mod){
        let points = getCommandCurrent();
        var bonus = skill + mod;
        var theRoll = randomInteger(2, 12)+bonus;
        var rollResult = `You rolled a ${theRoll}.`;
        sendChat("Ship Computer",rollResult);
                if(theRoll >=9){
                    let cmdadjust = skill + 1;
                    setCommand(cmdadjust);
                    var message = `Success! Command Points up by ${cmdadjust}.`;
                    sendChat("Ship Computer",message);
                }
                else{
                    setCommand(-1);
                    sendChat("Ship Computer","Failure! Command Points reduced by 1.");

                    }
    }

    function dealwithcrisis(skill,mod){
        let points = getCrisisCurrent();
        var bonus = skill + mod;
        var theRoll = randomInteger(2, 12)+bonus;
        var rollResult = `I rolled a ${theRoll}.`;
        sendChat("Engineer Officer: ",rollResult);
                if(theRoll >=10){
                    setCrisis(-1);
                    sendChat("Ship Computer","Success! Crisis Averted!");
                }
                else{
                    sendChat("Ship Computer","Failure! Crisis persists.");

                    }
    }
    
    function doyourduty(){
        setCommand(1);
        sendChat("Ship Computer","You have done your duty. Command Points up by 1.");
        var report = getCommandCurrent();
    }
    
//CAPTAIN ACTIONS SECTION
    function intothefire(skill,mod){
        sendChat("Ship Computer","A Crew Member is in danger!");
        setCrisis(1);
        var crsadjust = skill + 1;
        setCommand(crsadjust);
        var message = `Risking your crew raises Command Points by ${crsadjust}`;
        sendChat("Ship Computer",message);
    }
    
    function keepittogether() {
        setCrisis(1);
        sendChat("The Captain", "Hold on to something!");
    }
    
    function supportdepartment() {
        sendChat("Ship Computer","The Captain is supporting a department.");
    }
    
//BRIDGE ACTIONS
    function escapecombat(skill,mod){
        let cmd = getCommandCurrent();
        if(cmd >=4){
            setCommand(-4);
            let speed = getSpeedCurrent();
            let esc = getEscapeCurrent();
            let bonus = skill + mod + speed;
            var theRoll = randomInteger(2, 12)+bonus;
            var rollResult = `I rolled a ${theRoll}`;
            sendChat("the Pilot",rollResult);
            var theOpp = randomInteger(2, 12);
            var oppResult = `I rolled a ${theOpp}`;
            sendChat("Enemy",oppResult);
            var escValue = theRoll - theOpp;
            
            if(escValue >0){
                setEscape(1);
                sendChat("The Pilot","It's working! We're pullling away from them!");
            }
            else{
                sendChat("The Pilot","They're too fast! I can't seem to shake them!");
    
                }
            
            let escNew = getEscapeCurrent();
            if(escNew >= 3){
                sendChat("Ship Computer","Success! We have escaped combat with the pursuer.");
            }
            else{
                sendChat("Ship Computer","Warning! We are still in range of their weapons.");
            }
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to attempt to escape.");
            return;
        }

        
    }
    
    function evasivemaneuvers(skill,mod) {
        let cmd = getCommandCurrent();
        if(cmd >=2){
            setCommand(-2);
            let speed = getSpeedCurrent();
            let bonus = skill + mod + speed;
            var theRoll = randomInteger(2, 12)+bonus;
            var rollResult = `I rolled a ${theRoll}`;
            sendChat("The Pilot",rollResult);
            if(theRoll >9){
                sendChat("The Pilot","Oh Yeah? Lock on to this!");
                var mzz = `Ship AC temporarily increased by ${skill}`;
                sendChat("Ship Computer",mzz);
                //setTempAC(skill);
                setAC(skill);
            }
            else{
                sendChat("The Pilot","I can't shake 'em! They're right on our tail!");
                } 
            
        }
        else{
            sendChat("Ship Computer","You do not have enough command points for evasive maneuvers.");
            return;
        }
    }
    
    function pursuetarget(skill,mod) {
        let cmd = getCommandCurrent();
        if(cmd >=3){
            setCommand(-3);
            let speed = getSpeedCurrent();
            let esc = getEscapeCurrent();
            let bonus = skill + mod + speed;
            var theRoll = randomInteger(2, 12)+bonus;
            var rollResult = `I rolled a ${theRoll}`;
            sendChat("the Pilot",rollResult);
            var theOpp = randomInteger(2, 12);
            var oppResult = `I rolled a ${theOpp}`;
            sendChat("Enemy",oppResult);
            var escValue = theRoll - theOpp;
            
            if(escValue >0){
                setEscape(-1);
                sendChat("The Pilot","Closing in on them.");
            }
            else{
                sendChat("The Pilot","I'm having a hard time keeping up with them!");
    
                }
            
            let escNew = getEscapeCurrent();
            if(escNew <= 2){
                sendChat("Ship Computer","Enemy vessel is within combat range.");
            }
            else{
                sendChat("Ship Computer","Warning! Enemy vessel now outside combat range.");
            }
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to pursue the target.");
            return;
        }        
    }
    
    function crashsystems(skill,mod) {
        let cmd = getCommandCurrent();
        if(cmd >=2){
            setCommand(-2);
            let bonus = skill + mod;
            var theRoll = randomInteger(2, 12)+bonus;
            var rollResult = `I rolled a ${theRoll}`;
            sendChat("the Pilot",rollResult);
            var theOpp = randomInteger(2, 12);
            var oppResult = `I rolled a ${theOpp}`;
            sendChat("Enemy",oppResult);
            if(theRoll > theOpp){
                var mgg = `Success! Our hack has reduced their command points by ${skill}`;
                sendChat("Ship Computer",mgg);
            }
            else{
                sendChat("Ship Computer","Our hacking efforts have failed to penetrate their systems.");
            }
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to crash systems.");
            return;
        }        
    }
    
    function defeatecm(skill,mod) {
        let cmd = getCommandCurrent();
        if(cmd >=2){
            setCommand(-2);
            let bonus = skill + mod;
            var theRoll = randomInteger(2, 12)+bonus;
            var rollResult = `I rolled a ${theRoll}`;
            sendChat("Comms Officer",rollResult);
            var theOpp = randomInteger(2, 12);
            var oppResult = `I rolled a ${theOpp}`;
            sendChat("Enemy",oppResult);
            var ECM = 2 * skill;
            if(theRoll > theOpp){
                var mgs = `Success! All attacks get an additional +${ECM} mod to their rolls for this turn.`;
                sendChat("Ship Computer",mgs);
            }
            else{
                sendChat("Ship Computer","Our hacking efforts have failed to defeat their electronic countermeasures.");
            }
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to defeat electronic countermeasures.");
            return; 
        }       
    }
    
    function sensorghost(skill,mod) {
        let cmd = getCommandCurrent();
        if(cmd >=2){
            setCommand(-2);
            let bonus = skill + mod;
            var theRoll = randomInteger(2, 12)+bonus;
            var rollResult = `I rolled a ${theRoll}`;
            sendChat("Comms Officer",rollResult);
            var theOpp = randomInteger(2, 12);
            if(theRoll >= 9){
                var mgs = `Success! The Ship gets +${skill}AC for this turn.`;
                sendChat("Ship Computer",mgs);
                setTempAC(skill);
                setAC(skill);
            }
            else{
                sendChat("Ship Computer","Our hacking efforts have failed to defeat their electronic countermeasures.");
            }
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to become a sensor ghost.");
            return; 
        }       
    }
    
    function boostengines(skill,mod) {
        let cmd = getCommandCurrent();
        if(cmd >=2){
            setCommand(-2);
            let bonus = skill + mod;
            var theRoll = randomInteger(2, 12)+bonus;
            var rollResult = `I rolled a ${theRoll}`;
            sendChat("Engineering Officer",rollResult);
            if(theRoll >= 8){
                var mgs = `Success! The Ship gets +2 speed for this turn.`;
                sendChat("Ship Computer",mgs);
                setShipSpeed();
            }
            else{
                sendChat("Engineering Officer","I'm giving her all she's got, Captain!");
            }
        }
        else{
            sendChat("Ship Computer","You do not have enough command points tot boost engines.");
            return;  
        }      
    }
    
    function damagecontrol(skill,mod) {
        let cmd = getCommandCurrent();
        if(cmd >=3){
            setCommand(-3);   
            
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to perform damage control.");
            return;  
        }      
    }
    
    function emergencyrepairs() {
        let cmd = getCommandCurrent();
        if(cmd >=3){
            setCommand(-3);
            
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to perform emergency repairs.");
            return;
        }        
    }
    
    function fireallguns() {
        let cmd = getCommandCurrent();
        if(cmd >=3){
            setCommand(-3);
            
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to fire all guns.");
            return;
        }        
    }
    
    function fireoneweapon() {
        let cmd = getCommandCurrent();
        if(cmd >=2){
            setCommand(-2);
            
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to fire a weapon.");
            return;
        }        
    }
    
    function targetsystems() {
        let cmd = getCommandCurrent();
        if(cmd >=1){
            setCommand(-1);
            
        }
        else{
            sendChat("Ship Computer","You do not have enough command points to target a system.");
            return;
        }       
    }

    return;
//below "});" ends "main handler section" below are called functions
});


//INTERNAL FUNCTION CALLS

//rolls the dice in the API
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


//GET ATTRIBUTES SECTION

//gets current command points from the Ship character
function getCommandCurrent() {
var Ship = findObjs({ type: 'character', name: 'Ship' })[0];
    var cmdPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'command_points' })[0];
    var shipCommandValue = cmdPoints.get('current');
    return shipCommandValue;
}
//gets current crisis points from the Ship character
function getCrisisCurrent() {
var Ship = findObjs({ type: 'character', name: 'Ship' })[0];
    var crsPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'crisis' })[0];
    var crisisValue = crsPoints.get('current');
    if(crisisValue < 0) {
        sendChat("api","!setattr --name Ship --crisis|0");
        sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJDSoQ73wS-n4HW9S --set currentside|0");
        var crisisValue = 0;
    }
    return crisisValue;
}

//gets current escape points from the Ship character
function getEscapeCurrent() {
var Ship = findObjs({ type: 'character', name: 'Ship' })[0];
    var escPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'escape' })[0];
    var escValue = escPoints.get('current');
    var mess = `character sheet escape point are now at ${escValue}`;
    sendChat("TEST",mess);
    return escValue;
}

//gets current ship_speed from the Ship character
function getSpeedCurrent() {
var Ship = findObjs({ type: 'character', name: 'Ship' })[0];
    var spdPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'ship_speed' })[0];
    var spdValue = parseInt(spdPoints.get('current'));
    return spdValue;
}

//gets current ship_ac from the Ship character
function getACCurrent() {
var Ship = findObjs({ type: 'character', name: 'Ship' })[0];
    var acPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'ship_ac' })[0];
    var acValue = parseInt(acPoints.get('current'));
    var msg = `!modattr --name Ship --tempAC|${acValue}`;
    sendChat("api",msg);
    var TEST = `Current AC is ${acValue}`;
    sendChat("TEST",TEST);
    return acValue;
}

//SET ATTRIBUTES SECTION
//sets command points and changes the dial
function setCommand(adjust) {
    let points = getCommandCurrent();
    let flip = points + adjust;
    if(adjust <= 0){
        if(flip <= 0){
            sendChat("api","!modattr --name Ship --command_points|0");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJVTJouPiQI66W-NC --set currentside|0");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmIZX7HjYqLZA1Rb7qG --set currentside|0");
        }
        else{
            var cmd = `!modattr --name Ship --command_points|${adjust}`;
            sendChat("api",cmd);
            var adjustDial = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJVTJouPiQI66W-NC --set currentside|${adjust}`;
            sendChat("api", adjustDial);
            var adjustHudDial = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmIZX7HjYqLZA1Rb7qG --set currentside|${adjust}`;
            sendChat("api", adjustHudDial);
        }
    }
    else{
        var cmd = `!modattr --name Ship --command_points|+${adjust}`;
        sendChat("api",cmd);
        var adjustDial = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJVTJouPiQI66W-NC --set currentside|+${adjust}`;
        sendChat("api", adjustDial);
        var adjustHudDial = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmIZX7HjYqLZA1Rb7qG --set currentside|+${adjust}`;
        sendChat("api", adjustHudDial);
    }
    
}

//sets crisis points and changes the dial
function setCrisis(adjust) {
    var points = getCrisisCurrent();
    var limiter = points + adjust;
    if(adjust > 0){
        sendChat("api","!modattr --name Ship --crisis|+1");
        sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJDSoQ73wS-n4HW9S --set currentside|+1");
        sendChat("Ship Computer","New Ship Crisis logged.");
    }
    else if(adjust < 0){
        if(limiter <= 0){
            sendChat("api","!setattr --name Ship --crisis|0");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJDSoQ73wS-n4HW9S --set currentside|0");
        }
        else{
            sendChat("api","!modattr --name Ship --crisis|-1");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJDSoQ73wS-n4HW9S --set currentside|?-1");
        }
    }
}

//sets escape points and changes the dial
function setEscape(adjust) {
    let points = getEscapeCurrent();
    let adj = points + adjust;
    if(adjust == 0){
        return;
    }
    else if(adjust < 0){
        if(adj <= 0){
            sendChat("api","!setattr --name Ship --escape|0");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmRfM5i8PtnMssllJx5 --set currentside|0");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJtdmrxl6e-46ZyP- --set currentside|0");
            
        }
        else{
            sendChat("api","!modattr --name Ship --escape|-1");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmRfM5i8PtnMssllJx5 --set currentside|?-1");
            sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJtdmrxl6e-46ZyP- --set currentside|?-1");
        }
    }
    else {
        var esc = `!modattr --name Ship --escape|+${adjust}`;
        sendChat("api",esc);
        var adjustResult = getEscapeCurrent() + adjust -1;
        var adjustDial = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmRfM5i8PtnMssllJx5 --set currentside|+${adjustResult}`;
        sendChat("api", adjustDial);
        var adjustDial2 = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJtdmrxl6e-46ZyP- --set currentside|+${adjustResult}`;
        sendChat("api", adjustDial2);
    }
}

//sets tempSpeed
function tempSpeed(skill){
    var temp = `!modattr --name Ship --tempSpeed|+${skill}`;
    sendChat("api",temp);
}

//sets ship_Speed
function setShipSpeed(adjust){
    sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJkYFNz1shiWhuk4p --set currentside|+2");
    sendChat("api", "!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmI_5mwEeDKbi57Rdym --set currentside|+2");
}

function reportSpeed(){
    var Ship = findObjs({ type: 'character', name: 'Ship' })[0];
    var spdPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'ship_speed' })[0];
    var spdValue = parseInt(spdPoints.get('current'));
    var msg = `Current Speed is ${spdValue}`;
}
//sets AC
function setAC(skill){
    let pop = skill;
    var hudAC = `!tokenmod --api-as -NgLL39aMVMGSgYa69Tq --ids -Nmhzqfugs3h5NhqsRne --set currentside|+${pop}`;
    sendChat("api",hudAC);
    var conAC = `!tokenmod --api-as -NgLL39aMVMGSgYa69Tq --ids -Nmhm14Q3uJlNrDBx2Ok --set currentside|+${pop}`;
    sendChat("api",conAC);
}

/*//sets tempAC
function setTempAC(skill){
    var bump = skill;
    var temp = `!modattr --name Ship --ship_ac|+${bump}`;
    sendChat("api",temp);
}
*/
