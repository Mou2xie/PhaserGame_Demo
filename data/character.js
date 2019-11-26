//小子
var greenSkinBoy = {
    characterID:0,
    characterName:'绿皮小子',
    characterImg:'assets/img/orc_01.jpg',
    characterHP:50,//初始血量
    physicalPower:3,//初始体力值
    defenseValue:0,//初始防御值
    buffs:{
        attackBuff:0,//攻击buff（持续回合数）
        defenseBuff:0,//防御buff（持续回合数）
    },
    haveStuff:[],//持有遗物id
    initializeCard:[],//初始卡牌id
    characterDescription:'小子（Boy）是兽人里低阶的战斗单位。初生的他们虽然年轻力壮，充满战斗激情，但缺乏经验和作战技巧。'
}

var fatBoy = {
    characterID:0,
    characterName:'胖子',
    characterImg:'assets/img/orc_02.jpg',
    characterHP:50,//初始血量
    physicalPower:4,//初始体力值
    defenseValue:0,//初始防御值
    buffs:{
        attackBuff:0,//攻击buff（持续回合数）
        defenseBuff:0,//防御buff（持续回合数）
    },
    haveStuff:[],//持有遗物id
    initializeCard:[],//初始卡牌id
    characterDescription:'胖一点的绿皮小子，他们的身材赐予他们稍强的体力，但依然无法掩盖头脑简单、行动力低下的弱点。'
}

export { greenSkinBoy,fatBoy }
