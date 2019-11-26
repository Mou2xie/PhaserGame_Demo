var Phaser = require('phaser');
import { startSence } from './script/sences/startSence.js';
import { pickCharacter } from './script/sences/pickCharacter.js';


var gameconfig = {
    width:800,
    height:600,
    parent:'gameCanvas',//页面中id为gameCanvas的元素
    title:'Waaagh'
}

var game = new Phaser.Game(gameconfig);

// game.scene.add('startSence',startSence,true);
game.scene.add('pickCharacter',pickCharacter,true);
