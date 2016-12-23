//Объект: Главный герой
hero = {
name: 'Alex',
lvl: 0,
xp: 0,
xpMax: 100,
xpPerEnemy: 20,
defHp: 10,
hp: 10,
damage: 3,
luck: 2
}

//Объект: враг
enemy = {
name: 'enemy_parent',
defHp: 5,
hp: 5,
damage: 1,
luck: Math.random(3),

trol:{
  name: 'Trol', defHp: 5, hp: 5, damage: 1, luck: Math.random(3)
}
}
var isBlock = false;
var isEnemyAttack = false;
var isDefeat = false;
var audioPunch = new Audio('sounds/punch.mp3');

//Переписать код тут
window.onload = function(){

 //Обработка удара + некоторые функции, которые будут обновляться по нажатию на punch
 document.getElementById('punch').onclick = function(){
   enemy.hp = enemy.hp - hero.damage;
   document.getElementById('info_field').innerHTML = hero.name + ' attacks ' + enemy.trol.name + '! </br>' + enemy.name + ' HP is ' + enemy.hp;
   document.getElementById('enemy_hp').innerHTML = enemy.hp;
   isBlock = false;
   if(enemy.hp < enemy.defHp ){
   isEnemyAttack = true;
   isDefeat = false;
 }
 audioPunch.play();
 if(enemy.hp<= 0){
   isEnemyAttack = false;
   isDefeat = true;
   hero.xp += hero.xpPerEnemy;
   enemy.hp = enemy.defHp;
   console.log('LOG: ' + 'Hero XP is' + hero.xp);
 }

 }

//Обработка блоков
 document.getElementById('block').onmousedown = function(){
   isBlock = true;
 }

 document.getElementById('restart').onclick = function(){
   greeting();
   isDefeat = false;
   isBlock = true;
   hero.defHp = 10;
   enemy.defHp = 5;
   hero.hp = hero.defHp;
   enemy.hp = enemy.defHp;
   hero.lvl = 0;
   hero.xpMax = 100;
   hero.xp = 0;
   var enIconM = document.getElementById('enemy_icon');
   enIconM.src = 'images/Enemy_Troll_lvl_1.png';
 }
}

//Закомментить после переписки кода
/*window.onload = function(){
//  hero.name = prompt('Input your name', 'Alex'); Раскомментить потом
  //Описание параметров
  document.getElementById('hero_desc').innerHTML = hero.name +', LVL ' + hero.lvl;
  document.getElementById('hero_damage').innerHTML = 'D: ' + hero.damage;
  document.getElementById('hero_luck').innerHTML = 'L: ' + hero.luck;
  document.getElementById('hero_hp').innerHTML = hero.hp;
  document.getElementById('enemy_hp').innerHTML = enemy.hp;

  document.getElementById('punch').onclick = function(){
    enemy.hp = enemy.hp - hero.damage;

    document.getElementById('d_field_string_2').value = hero.xp;
    document.getElementById('d_field_string_3').value = hero.lvl;
    document.getElementById('enemy_hp').innerHTML = enemy.hp;

    if(hero.xp >= 100){
      hero.lvl = 1;
      var img = document.getElementById('hero_icon');
      img.src = 'images/Enemy_1.png';
      document.getElementById('d_field_string_1').value;
    }

    if(enemy.hp <= 0){
      document.getElementById('enemy_hp').innerHTML = 'Enemy defeated';
      hero.xp = hero.xp + 20;
    }
  }

  //Передалать
  document.getElementById('restart').onclick = function(){
    hero.hp = 10;
    enemy.hp = 5;
    document.getElementById('enemy_hp').innerHTML = enemy.hp;
  }

}*/
