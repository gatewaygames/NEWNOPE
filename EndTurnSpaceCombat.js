on("ready", function() {
    sendChat("api","!token-mod --config players-can-ids|on");
    on("chat:message",function(msg){
        if(msg.type=="api" && msg.content.indexOf("!EndTurnSpaceCombat")==0){
            //resets ship_speed and ac
            resetShipSpeed();
            resetShipAC();
            setTimeout(fixTemps,2000);
            sendChat("api","!setattr --name Ship --command_points|0");
            //sendChat("api","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlzpdrL0o4yFlL2ybt8 --set currentside|0");
            const buttons = [
            "-NmIZX7HjYqLZA1Rb7qG",
            "-Nm3hWpFAc_H1Ubimt4P",            
            "-NlqJVTJouPiQI66W-NC",
            "-NlzpdrL0o4yFlL2ybt8",
            "-Nm3hH4O1Y4efOz-EY3h",
            "-Nm3hbQ_xp33BApHg8Vb",
            "-Nm3hdwPUkoA8aUlerLc",
            "-Nm3hgh66G1n52NA41FD",
            "-Nm3hqSaKtlYx33CfnVs",
            "-Nm3hvQ12T9O4n4uWqbC",
            "-Nm3hvQ12T9O4n4uWqbC",
            "-Nm3i-kiLnPGPw8O3tyt",
            "-Nm3i7PygkfIt4G28NZv",
            "-Nm3i98jzS_O69B8Swuo",
            "-Nm3iCtmPINOc8cg-Iau",
            "-Nm3iFOH8PAILR0dXr7-",
            "-Nm3iI0vKjDtZS2LrzD4",
            "-Nm3iMoPrLwLppWigMI7",
            "-Nm3iQ3Nk6U6BasWFn20",
            "-Nm3iVbLF1xNi69zcSj9",
            "-NmakwtNtVVgqeY_4-vJ"
            ];
            let stepz = "";
            let but = buttons.length;
            for(let i = 0; i < but; i++) {
                let btn = buttons[i];
                let message = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids ${btn} --set currentside|0`; 
                sendChat("api", message);
            }
           /* 
            //resets ship_ac
            var temp = findObjs({ type: 'character', name: 'Ship' })[0];
            var tempPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'tempAC' })[0];
            var shiptempValue = tempPoints.get('current');
            var currentPoints = findObjs({ type: 'attribute', characterid: Ship.id, name: 'ship_ac' })[0];
            var currenttempValue = tempPoints.get('current');
            if(shiptempValue != currenttempValue){
                var mzg = `!setattr --name Ship --ship_ac|${shiptempValue}`;
                sendChat("api",mzg);               
            }
            */
            
        }
    });
});

//resets ship_Speed
function resetShipSpeed(){
    var conReset = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NlqJkYFNz1shiWhuk4p --set currentside|2`;
    sendChat("api", conReset);
    var hudReset = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NmI_5mwEeDKbi57Rdym --set currentside|2`;
    sendChat("api",hudReset);

}

function resetShipAC(){
    var conReset = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -Nmhzqfugs3h5NhqsRne --set currentside|15`;
    sendChat("api", conReset);
    var hudReset = `!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -Nmhm14Q3uJlNrDBx2Ok --set currentside|15`;
    sendChat("api",hudReset);

}

function fixTemps(){
    sendChat("api","!setattr --name Ship --tempAC|0");
}
