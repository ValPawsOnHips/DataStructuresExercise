const jedi = [];
jedi[0] = "Luke";
jedi.push("Obi-Wan Kenobi");
jedi.unshift("Yoda");
console.log(jedi[jedi.indexOf("Luke")]);
jedi.pop();
jedi.shift();

const sithLords = ["Darth Vader", "Darth Sidious", "Darth Maul"];
const imperialOfficers = ["Grand Moff Tarkin", "Orson Krennic"];
const starWarsVillains = sithLords.concat(imperialOfficers);
console.log(starWarsVillains);
console.log(starWarsVillains.splice(2, 2));

const droids = {
  astromech: "R2-D2",
  protocol: "C-3PO",
  assassin: "IG-88",
};
console.log(droids["astromech"]);
console.log(droids.protocol);
droids.assassin = "IG-11";
