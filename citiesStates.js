
var h =  function(city) {
          count = 0;
          count = db.zips.distinct("state", {"city" : city}).length;
          db.zips.update({"city" : city},{ $set:{"amtStates": count}});
      } 
      


db.zips.ensureIndex({"city":1});

db.zips.distinct("city").forEach(h);

db.zips.find({amtStates:{$gt:10}}, {"city":1,"amtStates" : 1}).sort({"amtStates" : -1});