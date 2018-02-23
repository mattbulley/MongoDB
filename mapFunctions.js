
                   
var f =  function(state) {
        print(state + " has " + db.zips.distinct("city", {"state" : state}).length + " cities");
    } 

db.zips.distinct("state").forEach(f);



    
              