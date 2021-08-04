class Player{
    constructor(){}

    getCount(){
        var playerCountReff=database.ref("playerCount");
        playerCountReff.on("value",(data)=>{
            playerCount=data.val();
        })
    }

    updateCount(count){
      database.ref("/").update({playerCount:count});
    }

    
}