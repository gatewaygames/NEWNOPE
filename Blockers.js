//Macro that calls the script
//!Blockers ?{Vertical mod|0} ?{Horizontal|0}

on("ready",function(){
    on("chat:message",function(msg){
        if(msg.type=="api" && msg.content.indexOf("!Blockers")==0){
            let args = msg.content.split(" ");
            var top = parseInt(args[1],10);
            var left = parseInt(args[2],10);
            var toks = findObjs({type:'graphic', represents: HUD_BLOCKER.id});
            for(let i = 0; i < toks.length; i++){
                let instance = toks[i]._id;
                let hori = `!modattr --ids ${instance} --left|${left}`;
                sendChat("api",hori);
                let vert = `!modattr --ids ${instance} --top|${top}`;
                sendChat("api",vert);
            }
        }
    });
});   
