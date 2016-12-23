var greeting = function(){
  document.getElementById('info_field').innerHTML = 'Hello and Welcome to our game! </br>' +
  'You need to attack the enemy and get gold and experience. </br>'+
  'Click on "punch" to attack an enemy, click on "block" when you see threatening phrases in the chat. ' +
  'When you attacks enemy, block is not used. </br>'+
  'Good Luck!';
}
greeting();

//Описание параметров персонажей
var timerId = setInterval(function() {
  document.getElementById('hero_desc').innerHTML = hero.name + ', LVL ' + hero.lvl;
  document.getElementById('hero_damage').innerHTML = 'D: ' + hero.damage; //заменить на изображение
  document.getElementById('hero_luck').innerHTML = 'L: ' + hero.luck; //заменить на изображение
  document.getElementById('hero_hp').innerHTML = hero.hp;
  document.getElementById('enemy_hp').innerHTML = enemy.hp;

  document.getElementById('block').onmouseup = function(){
    document.getElementById('info_field').innerHTML = hero.name + ' blocked';
  }

}, 1);

var hpPercentHero;
var hpPercentEnemy;
var xpPercent;
var hpBarSizeEnemy = 100;
var hpBarSizeHero = 100;
var xpBarSizeHero = 100; //ширина xp бара

/*window.interest = hpBarSizeEnemy;
window.interest = hpBarSizeHero;
window.interest = xpBarSizeHero;*/ //Наверное бесполезный кусок кода. Потом удалить
    function hpBar(){
      if(enemy.hp < enemy.defHp){
        hpPercentEnemy = enemy.hp / enemy.defHp * 100;
        hpBarSizeEnemy = hpPercentEnemy;
          document.getElementById('enemy_hp').style.width = hpBarSizeEnemy + '%';
        }

        if(hero.hp < hero.defHp){
          hpPercentHero = hero.hp / hero.defHp * 100;
          hpBarSizeHero = hpPercentHero;
          document.getElementById('hero_hp').style.width = hpBarSizeHero + '%';
        }

        //Где-то тут есть баг, после присвоения переменной значения 100 - hp бар вылазит на несколько пикселей за пределы
        //Можно чуть поправить если добавить к css overflow: hide; но тогда индикатор hp будет не совсем в центре
        if(enemy.hp == enemy.defHp){
          hpBarSizeEnemy = 98;
          document.getElementById('enemy_hp').style.width = hpBarSizeEnemy + '%';
        }
        if(hero.hp == hero.defHp){
          hpBarSizeHero = 98;
          document.getElementById('hero_hp').style.width = hpBarSizeHero + '%';
        }

    }

    function xpBar(){
      xpPercent = hero.xp / hero.xpMax * 100;

      xpBarSizeHero = xpPercent;
      document.getElementById('hero_xp').style.width = xpBarSizeHero + '%';

      //Increase to lvl 2
      if(hero.lvl == 0 && hero.xp >= hero.xpMax){
        hero.xp = 0;
        hero.lvl += 1;
        hero.xpMax *= 2.5;
        hero.defHp *= 1.5;
        hero.hp = hero.defHp;
        enemy.defHp *= 1.5;
        enemy.hp = Math.round(enemy.defHp);
        document.getElementById('enemy_desc').innerHTML = 'Orc';
        var enIcon = document.getElementById('enemy_icon');
        enIcon.src = 'images/Enemy_Orc_lvl_2.png';
        console.log(hero.xpMax + ' ' + hero.lvl);
      } else if (hero.lvl == 1 && hero.xp >= hero.xpMax){ //LVL 3
        hero.xp = 0;
        hero.lvl += 1;
        hero.xpMax *= 2.5;
        hero.defHp *= 1.5;
        hero.hp = Math.round(hero.defHp);
        enemy.defHp *= 1.5;
        enemy.hp = Math.round(enemy.defHp);
        document.getElementById('enemy_desc').innerHTML = 'Orc Necromancer';
        var enIcon = document.getElementById('enemy_icon');
        enIcon.src = 'images/Enemy_OrcNecro_lvl_3.png';
        console.log(hero.xpMax + ' ' + hero.lvl);
      } else if (hero.lvl == 2 && hero.xp >= hero.xpMax){ //LVL 4
        hero.xp = 0;
        hero.lvl += 1;
        hero.xpMax *= 2.5;
        hero.defHp *= 1.5;
        hero.hp = Math.round(hero.defHp);
        enemy.defHp *= 1.5;
        enemy.hp = Math.round(enemy.defHp);
        document.getElementById('enemy_desc').innerHTML = 'Warlock';
        var enIcon = document.getElementById('enemy_icon');
        enIcon.src = 'images/Enemy_Warlock_lvl_4.png';
        console.log(hero.xpMax + ' ' + hero.lvl);
      } else if (hero.lvl == 3 && hero.xp >= hero.xpMax){ //LVL 5
        hero.xp = 0;
        hero.lvl += 1;
        hero.xpMax *= 2.5;
        hero.defHp *= 1.5;
        hero.hp = Math.round(hero.defHp);
        enemy.defHp *= 1.5;
        enemy.hp = Math.round(enemy.defHp);
        document.getElementById('enemy_desc').innerHTML = 'Orc Warlord';
        var enIcon = document.getElementById('enemy_icon');
        enIcon.src = 'images/Enemy_OrcWarlord_lvl_5.png';
        console.log(hero.xpMax + ' ' + hero.lvl);
      } else if (hero.lvl == 4 && hero.xp >= hero.xpMax){
        hero.xp = 0;
        hero.lvl += 1;
        hero.xpMax *= 2.5;
        hero.defHp *= 1.5;
        hero.hp = Math.round(hero.defHp);
        console.log(hero.xpMax + ' ' + hero.lvl);
      } else if (hero.lvl == 5 && hero.xp >= hero.xpMax){
        hero.xp = 0;
        hero.lvl += 1;
        hero.xpMax *= 2.5;
        hero.defHp *= 1.5;
        hero.hp = Math.round(hero.defHp);
        console.log(hero.xpMax + ' ' + hero.lvl);
      }
    }

//игровые события
var gameEvents = setInterval(function(){
  if(isEnemyAttack == true & isBlock == false){
    document.getElementById('info_field').innerHTML = enemy.name + ' attacks! Use your block';
    hero.hp = hero.hp - enemy.damage;
  }
  if(isDefeat == true){
    document.getElementById('info_field').innerHTML = enemy.name + ' has defeated!';
  }
}, 1000);

setInterval(function(){

  if(hero.hp <= 0){document.getElementById('hero_hp').style.visibility = 'hidden';}
  else {document.getElementById('hero_hp').style.visibility = 'visible';}
  if(enemy.hp <= 0){document.getElementById('enemy_hp').style.visibility = 'hidden';}
  else{document.getElementById('enemy_hp').style.visibility = 'visible';}

}, 100);

setInterval(hpBar,100);
setInterval(xpBar,100);
