(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,a,t){e.exports=t(16)},16:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),i=t.n(l),c=(t(7),t(1)),o=t(2),s=t(4),u=t(3),d=t(5),m=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).setChar=function(){var a=e.props.character;e.setState(a)},e.state={name:"",abilities:{strength:0,dexterity:0,constitution:0,intelligence:0,wisdom:0,charisma:0},hp:0,itemSlots:0},e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){this.setChar()}},{key:"render",value:function(){var e=this.props.character.abilities;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Ability Scores"),r.a.createElement("div",{className:"abilities flex center section column"},r.a.createElement("table",{className:"table table-striped table-sm"},r.a.createElement("caption",null,"Abilities"),r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Defense"),r.a.createElement("th",null,"Ability"),r.a.createElement("th",null,"Bonus"))),r.a.createElement("tbody",null,e&&Object.keys(e).map(function(a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,e[a]+10),r.a.createElement("th",{className:"bold large"},a.slice(0,3).toUpperCase()),r.a.createElement("td",null,"+",e[a]))})))))}}]),a}(n.Component),h=["rope (50 ft.)","pulleys","candles (5)","chain (10 ft.)","chalk (10)"],p=["air bladder","bear trap","shovel","bellows","grease"],f=["incense","sponge","lens","perfume","horn"],g=[{name:"dagger",damage:"d6",slot:1,quality:3,hand:1},{name:"cudgel",damage:"d6",slot:1,quality:3,hand:1},{name:"sickle",damage:"d6",slot:1,quality:3,hand:1},{name:"staff",damage:"d6",slot:1,quality:3,hand:1},{name:"spear",damage:"d8",slot:2,quality:3,hand:1},{name:"sword",damage:"d8",slot:2,quality:3,hand:1},{name:"mace",damage:"d8",slot:2,quality:3,hand:1},{name:"axe",damage:"d8",slot:2,quality:3,hand:1},{name:"flail",damage:"d8",slot:2,quality:3,hand:1},{name:"halberd",damage:"d10",slot:3,quality:3,hand:2},{name:"warhammer",damage:"d10",slot:3,quality:3,hand:2},{name:"longsword",damage:"d10",slot:3,quality:3,hand:2},{name:"battleaxe",damage:"d10",slot:3,quality:3,hand:2},{name:"sling",damage:"d4",slot:1,quality:1,hand:1},{name:"bow",damage:"d6",slot:2,quality:3,hand:2},{name:"crossbow",damage:"d8",slot:3,quality:3,hand:2}],y=[{name:"gambeson armor",defense:12,slot:1,quality:3},{name:"brigandine armor",defense:13,slot:2,quality:4},{name:"chain armor",defense:14,slot:3,quality:5},{name:"shield",defense:1,slot:1,quality:1},{name:"helmet",defense:1,slot:1,quality:1},{name:"half plate armor",defense:15,slot:4,quality:6},{name:"full plate armor",defense:16,slot:5,quality:7}],b=t(9),E={physique:["athletic","brawny","corpulent","delicate","gaunt","hulking","lanky","ripped","rugged","scrawny","short","sinewy","slender","flabby","statuesque","stout","tiny","towering","willowy","wiry"],face:["bloated","blunt","bony","chiseled","delicate","elongated","patrician","pinched","hawkish","broken","impish","narrow","ratlike","round","sunken","sharp","soft","square","wide","wolfish"],skin:["battle scarred","birthmarked","burn scarred","dark","madeup","oily","pale","perfect","pierced","pockmarked","reeking","tattooed","rosy","sallow","sunburned","tanned","war painted","weathered","whip scarred"],hair:["bald","braided","cropped","curly","disheveled","dreadlocks","filthy","frizzy","greased","limp","long","luxurious","mohawk","oily","ponytail","silky","topknot","wavy","wispy"],clothing:["antique","bloody","ceremonial","decorated","eccentric","elegant","fashionable","filthy","flamboyant","stained","foreign","frayed","frumpy","livery","oversized","patched","perfumed","rancid","torn","undersized"],virtue:["ambitious","cautious","courageous","courteous","curious","disciplined","focused","generous","gregarious","honest","honorable","humble","idealistic","just","loyal","merciful","righteous","serene","stoic","tolerant"],vice:["aggressive","arrogant","bitter","cowardly","cruel","deceitful","flippant","gluttonous ","greedy","irascible","lazy","nervous","prejudiced","reckless","rude","suspicious","vain","vengeful","wasteful","whiny"],speech:["blunt","booming","breathy","cryptic","drawling","droning","flowery","formal","gravelly","hoarse","mumbling","precise","quaint","rambling","rapid-fire","dialect","slow","squeaky","stuttering","whispery"],background:["alchemist","beggar","butcher","burglar","charlatan","cleric","cook","cultist","gambler","herbalist","magician","mariner","mercenary","merchant","outlaw","performer","pickpocket","smuggler","student","tracker"],misfortunes:["abandoned","addicted","blackmailed","condemned","cursed","defrauded","demoted","discredited","disowned","exiled","framed","haunted","kidnapped","mutilated","poor","pursued","rejected","replaced","robbed","suspected"]},w=function(e){return Math.floor(Math.random()*e+1)},v=function(e){return Math.floor(Math.random()*e)},k=function(){for(var e=[],a=0;a<3;a++)e.push(Math.floor(6*Math.random())+1);return Math.min.apply(Math,e)},q=function(){for(var e=["rations (2)"];e.length<3;){var a=h[v(h.length)];e.includes(a)||e.push(a)}return e.push(p[v(p.length)]),e.push(f[v(f.length)]),e},S=function(){var e=w(20);return e<=3?"":e>=4&&e<=14?y[0]:e>=15&&e<=19?y[1]:20===e?y[2]:void alert("ERROR: ROLL OUT OF RANGE")},x=function(){var e=w(20);return e<=13?null:e>13&&e<=16?{name:"helmet",defense:1,slot:1,quality:1}:e>16&&e<=19?{name:"shield",defense:1,slot:1,quality:1}:20===e?{name:"helmet & shield",defense:2,slot:2,quality:1}:"error"},N=function(){var e=function(){for(var e=[],a=0;a<6;a++)e.push(k());return e}(),a=Object(b.a)(e,6);return{abilities:{strength:a[0],dexterity:a[1],constitution:a[2],intelligence:a[3],wisdom:a[4],charisma:a[5]},hp:w(8),sex:1===w(2)?"male":"female",traits:{physique:O("physique"),face:O("face"),skin:O("skin"),hair:O("hair"),clothing:O("clothing"),virtue:O("virtue"),vice:O("vice"),speech:O("speech"),background:O("background"),misfortunes:O("misfortunes")},gear:q(),armor:S(),helmetShield:x()}},O=function(e){return E[e][v(E[e].length)]},j=function(e){return e.slice(0,1).toUpperCase()+e.slice(1)},M=function(e){return 5+(e.armor?e.armor.slot:0)+(e.helmetShield?e.helmetShield.slot:0)+(e.weapon?e.weapon.slot:0)},C=function(e){return e.abilities.constitution+10},I=function(e,a,t){return function(e,a){return!!e.abilities&&C(e)-2<a.slot+M(e)}(t,e)?r.a.createElement("option",{key:e.name,value:a,disabled:!0}," ",j(e.name)," \u2022 Damage: ",e.damage," \u2022\xa0Slots:"," ",e.slot):r.a.createElement("option",{key:e.name,value:a}," ",j(e.name)," \u2022 Damage: ",e.damage," \u2022\xa0Slots:"," ",e.slot)},D=function(e){var a=e.character;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"flex column center section items"},r.a.createElement("h2",null,"Items"),r.a.createElement("p",null,"Item Slots Used: ",M(a)," /"," ",a.abilities&&C(a)),r.a.createElement("h3",null,"Weapon"),r.a.createElement("select",{onChange:function(a){e.weaponUpdate(a.target.value)},id:"weapon"},r.a.createElement("option",{value:"default"},"-- Choose a weapon --"),g.map(function(e,t){return I(e,t,a)})),a.gear?r.a.createElement("table",{className:"gear table table-striped table-sm"},r.a.createElement("caption",null,"Gear"),r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"Item"),r.a.createElement("th",null,"Defense / Damage"),r.a.createElement("th",null,"Slots"))),r.a.createElement("tbody",null,!!a.weapon&&r.a.createElement("tr",null,r.a.createElement("td",null,a.weapon.name),r.a.createElement("td",null,a.weapon.damage),r.a.createElement("td",null,a.weapon.slot)),!!a.armor&&r.a.createElement("tr",null,r.a.createElement("td",null,a.armor.name),r.a.createElement("td",null,"+",a.armor.defense||"-"," def"),r.a.createElement("td",null,a.armor.slot||1)),!!a.helmetShield&&r.a.createElement("tr",null,r.a.createElement("td",null,a.helmetShield.name),r.a.createElement("td",null,"-"),r.a.createElement("td",null,a.helmetShield.slot)),a.gear.map(function(e){return r.a.createElement("tr",{key:e},r.a.createElement("td",null,e),r.a.createElement("td",null,"-"),r.a.createElement("td",null,"1"))}))):r.a.createElement("p",null,"Loading ...")))},B=function(e){var a=e.character;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Traits"),!!a.traits&&r.a.createElement("div",{className:"inner-width section description"},r.a.createElement("p",null,"You are"," ",["a","e","i","o","u"].includes(a.traits.physique[0])?"an":"a"," ",a.traits.physique," ",a.sex," with a"," ",a.traits.face," face, ",a.traits.skin," skin,"," ",a.traits.hair," hair, and ",a.traits.clothing," ","clothes. Your biggest virtue is that you're"," ",a.traits.virtue,", but your largest vice is that you're"," ",a.traits.vice,". Your speech is ",a.traits.speech,"."),r.a.createElement("p",null,"You were formerly a ",a.traits.background,", and found yourself ",a.traits.misfortunes,"."),r.a.createElement("p",null,"You are a level ",r.a.createElement("span",{className:"bold"},"1")," character with"," ",r.a.createElement("span",{className:"bold"}," ",a.hp)," hitpoints.")))},R=function(){return r.a.createElement("div",{className:"footer flex row"},r.a.createElement("p",{className:"block"},"Based on the fantasic RPG"," ",r.a.createElement("a",{href:"https://www.drivethrurpg.com/product/250888/Knave"},"Knave")," by ",r.a.createElement("a",{href:"https://www.youtube.com/watch?v=hVL4coIiHsE"},"Ben Milton")),r.a.createElement("p",{className:"block"},"Made with ",r.a.createElement("span",{id:"heart"},"\u2665")," in Madison, WI"))},A=t(10),U=function(e){return e?"".concat(e.name,",").concat(e.quality,",").concat(e.defense||e.damage||"-",",").concat(e.slot,"\n"):""},W=function(e){var a=e.abilities,t=e.hp,n=e.sex,r=e.traits,l=e.gear,i=e.armor,c=e.helmetShield,o=e.weapon,s=e.usedSlots,u=e.totalSlots;return"Ability Scores\n  Ability,Defense,Bonus\n  STR,".concat(a.strength+10,",").concat(a.strength,"\n  DEX,").concat(a.dexterity+10,",").concat(a.dexterity,"\n  CON,").concat(a.constitution+10,",").concat(a.constitution,"\n  INT,").concat(a.intelligence+10,",").concat(a.intelligence,"\n  WIS,").concat(a.wisdom+10,",").concat(a.wisdom,"\n  CHA,").concat(a.charisma+10,",").concat(a.charisma,"\n\n  Status\n  HP,").concat(t,"\n  Experience,0\n  Level,1\n\n  Traits\n  Sex,").concat(n,"\n  Physique,").concat(r.physique,"\n  Face,").concat(r.face,"\n  Skin,").concat(r.skin,"\n  Hair,").concat(r.hair,"\n  Clothing,").concat(r.clothing,"\n  Virtue,").concat(r.virtue,"\n  Vice,").concat(r.vice,"\n  Speech,").concat(r.speech,"\n  Background,").concat(r.background,"\n  Misfortunes,").concat(r.misfortunes,"\n\n  Items\n  Item,Quality,Defense / Damage,Slots (").concat(s," / ").concat(u,")\n  ").concat(l.join(",-,-,1\n")+",-,-,1","\n  ").concat(U(i)+U(c)+U(o),"\n")},z=function(e){var a=e.character;return r.a.createElement("a",{className:"exportBox",href:"data:text/csv,".concat(encodeURI(W(Object(A.a)({},a,{usedSlots:M(a),totalSlots:C(a)})))),download:"character.csv"},r.a.createElement("strong",null,"Export as CSV"))},F=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(s.a)(this,Object(u.a)(a).call(this))).addWeapon=function(a){e.setState({weapon:g[a]})},e.state=N(),e}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container flex column"},r.a.createElement("div",{className:"main-padding flex column"},r.a.createElement("h1",{className:"box"},"Knave"),r.a.createElement(B,{character:this.state}),r.a.createElement(m,{character:this.state}),r.a.createElement(D,{weaponUpdate:this.addWeapon,character:this.state}),r.a.createElement(z,{character:this.state})),r.a.createElement(R,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},7:function(e,a,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.53af149e.chunk.js.map