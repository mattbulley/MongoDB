/*
var f =  function(state) {
        var count = db.zips.find({"state" : state}, {"city" : 1}).count();
        if(count < 80)
            print(state + " has " + count + " cities");
    }*/ 
    
    
   /*
var g = function(city){
        count = 0;
        count = db.zips.find({"city" : city}, {"city" : 1}).count();
       // db.zips.update({"city" : city},{ $set:{"copies": count}});
        db.zips.find({"city" : city}, {"city" : 1, "copies" : 1});
        print(city + " " + count);
    }
*/
//db.zips.distinct("state").forEach(f);


db.zips.ensureIndex({"city":1});

//db.zips.distinct("city").forEach(g);

db.zips.find({"city":1,"copies":1}).limit(10).sort({"copies" : -1})




