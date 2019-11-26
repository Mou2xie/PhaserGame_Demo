//减体力
function reducePhysical(player,number){
    player.physicalPower = player.physicalPower-number
};

//减血
function reduceHP(person,number){
    person.characterHP = person.characterHP-number
}

//加防御值
function addShield(person,number){
    person.defenseValue = person.defenseValue+number
}

export { reducePhysical,reduceHP,addShield }