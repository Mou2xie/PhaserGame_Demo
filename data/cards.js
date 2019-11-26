import { reducePhysical,reduceHP,addShield } from 'util/actions.js'

var cards = [
    {
        cardID:0,
        cardName:'choppa',
        cardType:'attack',
        cardImg:'',
        cardDepiction:'喂！你丫瞅谁呢！',
        actions:[reducePhysical,reduceHP],
        cardLevel:[
            {
                cardInfo:'造成'+this.value+'伤害',
                value:6,
                target:null,
                physicalCost:1,
                remove:false
            },
            {
                cardInfo:'造成8伤害',
                value:8,
                target:null,
                physicalCost:1,
                remove:false
            }
        ]
        
    }
]