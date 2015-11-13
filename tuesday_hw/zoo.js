$(document).ready(function(){
  animal = new zoo.Animal({
    name: "Zebra",
    legs: 4,
    wings: 0
  });

  animal2 = new zoo.Animal({
    name: "Eagle",
    legs: 2,
    wings: 2
  });

  animalList = new zoo.AnimalList([animal, animal2]);
  zooView = new zoo.ZooView(animalList);
  zooView.render();



});
