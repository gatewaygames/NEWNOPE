        on("ready", function() {
            sendChat("api","!token-mod --config players-can-ids|on");
            on("chat:message",function(msg){
                if(msg.type=="api" && msg.content.indexOf("!Caution")==0){
                    var args = msg.content.split(" ");
                    var cautionType = args[1];
                    var toggle = args[2];
                    switch(cautionType){
                        case "ObsDet":
                            ObsDet(toggle);
                            break;
                        case "Scan":
                            Scan(toggle);
                            break;
                        case "IFF":
                            IFF(toggle);
                            break;
                        case "SenserLock":
                            SenserLock(toggle);
                            break;
                        case "Fuel":
                            Fuel(toggle);
                            break;
                        case "Antenna":
                            Antenna(toggle);
                            break;
                        case "Clear":
                            Clear(toggle);
                            break;
                    }
                }
            });            
                        
            function ObsDet(toggle){
                if(toggle === "on"){
                    sendChat("api","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|objects");
                    sendChat("api","!roll20AM --audio,play|OBJ DETECTED");
                    sendChat("api","!roll20AM --audio,play|Beeping");
                    sendChat("api","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkQufZE-vGhsfxOq --set layer|objects");
                }
                if(toggle == "off"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|gmlayer");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkQufZE-vGhsfxOq --set layer|gmlayer");
                }
            }
            
            function Scan(toggle){
                if(toggle === "on"){
                    sendChat("#SCAN");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|objects");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkTaqbIjgPdKGBQE --set layer|objects");
                    sendChat("API","!roll20AM --audio,play|Beeping");
                    sendChat("API","!roll20AM --audio,play|Scan");
                }
                if(toggle === "off"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|gmlayer");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkTaqbIjgPdKGBQE --set layer|gmlayer");
                }
            }
            
            function IFF(toggle){
                if(toggle === "on"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|objects");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkTNTvmWlTMtFj2H --set layer|objects");
                    sendChat("API","!roll20AM --api-as -NgLL39aMVMGSgYa69Tq --audio,play|Beeping");
                    sendChat("API","!roll20AM --audio,play|IFF");
                }
                if(toggle === "off"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|gmlayer");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkTNTvmWlTMtFj2H --set layer|gmlayer");
                }
            }
            
            function SenserLock(toggle){
                if(toggle === "on"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|objects");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkUYTs5qJZkYAVM_ --set layer|objects");
                 sendChat("API","!roll20AM --audio,play|Beeping");
                 sendChat("API","!roll20AM --audio,play|Lock");
                }
                if(toggle === "off"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|gmlayer");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkQufZE-vGhsfxOq --set layer|gmlayer");
                }
            }
            
            function Fuel(toggle){
                if(toggle === "on"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|objects");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkQo-VTBDocqDzxv --set layer|objects");
                    sendChat("API","!roll20AM --audio,play|Beeping");
                    sendChat("API","!roll20AM --audio,play|Low");
                }
                if(toggle === "off"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|gmlayer");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkQo-VTBDocqDzxv --set layer|gmlayer");
                }
            }
            
            function Antenna(toggle){
                if(toggle === "on"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|objects");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkUcXQcOMyZ5cZms --set layer|objects");
                    sendChat("API","!roll20AM --audio,play|Beeping");
                    sendChat("API","!roll20AM --audio,play|Antenna");
                }
                if(toggle === "off"){
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|gmlayer");
                    sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkUcXQcOMyZ5cZms --set layer|gmlayer");
                }
            }
            
            function Clear(toggle){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuLERR0k00TKbcBUo --set layer|gmlayer");
            }
        });
