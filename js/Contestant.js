class Contestant {
    constructor(){
      this.index=null;
      this.name=null;
  
  
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "players/player"+this.index;
      
      database.ref(contestantIndex).set({
        name:this.name,
        //distance:this.distance
  
      });
    }
  
    static getplayerInfo(){
      var contestantInforef=database.ref('players');
      contestantInforef.on("value",(data)=>{
        allContestants=data.val();
      })
    }
  }