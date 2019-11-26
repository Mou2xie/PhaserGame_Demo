var Phaser = require('phaser');
import { greenSkinBoy,fatBoy } from '../../data/character'

var pickCharacter = new Phaser.Scene({
    key:'pickCharacter'
});

pickCharacter.preload = function(){
    this.load.image('greenSkinBoy_img',greenSkinBoy.characterImg);
    this.load.image('fatBoy_img',fatBoy.characterImg);
};

pickCharacter.create = function(){
    var centerZone = this.add.rectangle(400,250,500,300,0xff0000);
    var container_greenSkinBoy = this.add.container(10,20);
    var container_fatBoy = this.add.container(15,25);
    Phaser.Display.Align.In.LeftCenter(container_greenSkinBoy,centerZone);
    Phaser.Display.Align.In.RightCenter(container_fatBoy,centerZone);

    var greenSkinBoy_img = this.add.image(0,0,'greenSkinBoy_img');
    greenSkinBoy_img.setOrigin(0,0.5);
    container_greenSkinBoy.add(greenSkinBoy_img);

    var fatBoy_img = this.add.image(0,0,'fatBoy_img');
    fatBoy_img.setOrigin(1,0.5);
    container_fatBoy.add(fatBoy_img);
};

//心碎写不下去了，再见Phaser

export { pickCharacter }