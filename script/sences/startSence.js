var Phaser = require('phaser');

//创建startScence场景
var startSence = new Phaser.Scene({
    key:'startSence'
});

startSence.preload = function(){
    this.load.image('backgroundImg','assets/img/startSence_01.jpg');
};

startSence.create = function(){
    var _this = this;
    //注册键盘事件,跳转到pickCharacter
    this.input.keyboard.on('keydown-SPACE',function(){
        _this.scene.start('pickCharacter');
    });

    //文字闪动
    this.time.addEvent({
        delay:800,
        loop:true,
        callback:function(){
            if(startText.visible == true){
                startText.visible = false;
            }else{
                startText.visible = true;
            }
        }
    });

    //背景图
    var backgroundImg = this.add.image(0,0,'backgroundImg');
    backgroundImg.setOrigin(0,0);
    backgroundImg.scale = 0.6;

    //标题
    var titleText = this.add.text(400,210,"Waaaaaaagh!",{fontSize:'80px'});
    titleText.setOrigin(0.5,0.5);

    //开始文字
    var startText = this.add.text(400,400,'空格开始游戏',{fontSize:'25px'});

    //设置文字对齐
    Phaser.Display.Align.To.BottomCenter(startText,titleText,0,100);
}

export { startSence };