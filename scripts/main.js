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
