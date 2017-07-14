function myPokemonRoster(name, type, hp, def, atk, legend){this.name = name; this.type = type; this.hp = hp; this.def = def; this.atk = atk; this.legend = legend;
}

var zapdos = new myPokemonRoster("Zapdos",["Electric", "Flying"],90,90,85,true);
var garchomp = new myPokemonRoster("Garchomp",['Dragon','Ground'],108,130,95,false);
var tangrowth = new myPokemonRoster("Tangrowth","Grass",100,100,125,false);
var skarmory = new myPokemonRoster("Skarmory",["Steel","Flying"],65,80,140,false);
var gengar = new myPokemonRoster("Gengar",["Ghost","Poison"],60,65,60,false);
var manaphy = new myPokemonRoster("Manaphy","Water",100,100,100,true);

console.log(zapdos);
console.log(garchomp);
console.log(tangrowth);
console.log(skarmory);
console.log(gengar);
console.log(manaphy);




