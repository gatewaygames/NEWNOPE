    on("ready", function() {
        sendChat("api","!token-mod --config players-can-ids|on");
        on("chat:message",function(msg){
            if(msg.type=="api" && msg.content.indexOf("!Warning")==0){
                var args = msg.content.split(" ");
                var cautionType = args[1];
                var toggle = args[2];
                switch(cautionType){
                    case "Crew":
                        Crew(toggle);
                        break;
                    case "System":
                        System(toggle);
                        break;
                    case "Weapons":
                        Weapons(toggle);
                        break;
                    case "Life":
                        Life(toggle);
                        break;
                    case "Hull":
                        Hull(toggle);
                        break;
                    case "FuelBleed":
                        FuelBleed(toggle);
                        break;
                    case "Fire":
                        Fire(toggle);
                        break;
                    case "Engine":
                        Engine(toggle);
                        break;
                    case "Drive":
                        Drive(toggle);
                        break;
                    case "Clear":
                        Clear(toggle);
                        break;
                }
            }
        });
        
        function Crew(toggle){
            if(toggle === "on"){
                sendChat("api","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("api","!roll20AM --audio,play|Beeping");
            }
            if(toggle == "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
            }
        }
        
        function System(toggle){
            if(toggle === "on"){
                sendChat("api","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("api","!roll20AM --audio,play|Sysfail");
                sendChat("api","!roll20AM --audio,play|Beeping");
                sendChat("api","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkRoSlM5KOrNKuDw --set layer|objects");
            }
            if(toggle == "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkRoSlM5KOrNKuDw --set layer|gmlayer");
            }
        }
        
        function Weapons(toggle){
            if(toggle === "on"){
                sendChat("#SCAN");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkUgdTsr6Z9mfRAP --set layer|objects");
                sendChat("API","!roll20AM --audio,play|Beeping");
                sendChat("API","!roll20AM --audio,play|Weapons");
            }
            if(toggle === "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkUgdTsr6Z9mfRAP --set layer|gmlayer");
            }
        }
        
        function Life(toggle){
            if(toggle === "on"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkSTCLytwoupfdy_ --set layer|objects");
                sendChat("API","!roll20AM --api-as -NgLL39aMVMGSgYa69Tq --audio,play|Beeping");
                sendChat("API","!roll20AM --audio,play|LifeSup");
            }
            if(toggle === "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkSTCLytwoupfdy_ --set layer|gmlayer");
            }
        }
        
        function Hull(toggle){
            if(toggle === "on"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkQmTzM9TUmL-DDj --set layer|objects");
             sendChat("API","!roll20AM --audio,play|Beeping");
             sendChat("API","!roll20AM --audio,play|Hull");
            }
            if(toggle === "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkQmTzM9TUmL-DDj --set layer|gmlayer");
            }
        }
        
        function FuelBleed(toggle){
            if(toggle === "on"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkRl9q_JkA77x6dL --set layer|objects");
                sendChat("API","!roll20AM --audio,play|Beeping");
                sendChat("API","!roll20AM --audio,play|Fuel");
            }
            if(toggle === "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkRl9q_JkA77x6dL --set layer|gmlayer");
            }
        }
        
        function Fire(toggle){
            if(toggle === "on"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkPphoONgVB_ESOy --set layer|objects");
                sendChat("API","!roll20AM --audio,play|Beeping");
                sendChat("API","!roll20AM --audio,play|Fire");
            }
            if(toggle === "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkPphoONgVB_ESOy --set layer|gmlayer");
            }
        }
        function Engine(toggle){
            if(toggle === "on"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkTRxC4TsGYJk4kI --set layer|objects");
                sendChat("API","!roll20AM --audio,play|Beeping");
                sendChat("API","!roll20AM --audio,play|Engine");
            }
            if(toggle === "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkTRxC4TsGYJk4kI --set layer|gmlayer");
            }
        }
        function Drive(toggle){
            if(toggle === "on"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|objects");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkRXiloQmioqXi91 --set layer|objects");
                sendChat("API","!roll20AM --audio,play|Beeping");
                sendChat("API","!roll20AM --audio,play|Drive");
            }
            if(toggle === "off"){
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
                sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiyJkRXiloQmioqXi91 --set layer|gmlayer");
            }
        }
        
        function Clear(toggle){
            sendChat("API","!token-mod --api-as -NgLL39aMVMGSgYa69Tq --ids -NiUuDyXlQqKHPplpLuo --set layer|gmlayer");
        }
    });
