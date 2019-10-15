function Click(x,fun){var btn = document.getElementById(x);btn.onclick = fun;}
window.onload = function(){
var clear = function(){document.getElementById("map").innerHTML = "";Game.run();}//清除地图
Click("select1",function(){
	if(Game.stage == 0){alert("这是第一关");}else{
	Game.stage -= 1;
	clear();
	}
})
Click("select2",function(){
	if(Game.stage == 5){alert("最后一关了");}else{
	Game.stage += 1;
	clear();
	}
})
Click("select3",function(){
	clear();
})
var Game = {
	run : function(){this.dong = [];this.mapcreat(this.stage,this.goal);this.main();this.step = 0;this.score = 0;}, //这里运行
	map : document.getElementById("map"),
	score : 0,
	goal : 0,
	stage : 0,
	step : 0,
	dong : [],
	//主体
	main : function(){
		var person = document.getElementById("ren");
		var now_id = null;
		var now_div = null;
		var now_tongid = null;
		var now_tongdiv = null;
		var jugment = null;
		//未来人物创建
		var futurePerson = function(ndv,key){
			var creat_img = document.createElement("img");
			creat_img.id = "ren";
			switch(key){
				case 87:
				creat_img.src = "sucai/marisa_back.png";
				break;
				case 83:
				creat_img.src = "sucai/marisa_front.png";
				break;
				case 65:
				creat_img.src = "sucai/marisa_left.png";
				break;
				case 68:
				creat_img.src = "sucai/marisa_right.png";
				break;
			}
			person.parentNode.removeChild(person);
			ndv.appendChild(creat_img);
			person = document.getElementById("ren");
		}
		//未来箱子创建
		var futureTong = function(ntdv,ndv){
			var creat_tongimg = document.createElement("img");
			creat_tongimg.className = "tong";
			creat_tongimg.src = "sucai/tong.png";
			ntdv.insertBefore(creat_tongimg,ntdv.childNodes[0]);//未来箱子位置插入图层
			ndv.removeChild(ndv.childNodes[0]);//删除当前箱子图层
		}
		//分数判断
		var ScoreJug = function(){
			for(var i = 0 ; i < Game.dong.length ; i++){
				var VictoryDiv = document.getElementById(Game.dong[i])
				if(VictoryDiv.childNodes[0].className == "tong"){
					Game.score += 1;
				}
			}
		}
		//胜利判断
		var SuccessJug = function(){
			if(Game.score == Game.goal){
			var index = confirm("你赢了！成绩是"+ Game.step +"步，是否进入下一关？");  //成功提示
				if (index){
					if(Game.stage == 5){
						alert("OH SHIT,这已经是最后一关了，你太叼了");
					}else{
					Game.stage += 1;
					document.getElementById("map").innerHTML = "";
					Game.run();
					}
				}
			}
		}
		//箱子判断
		var BoxJug = function(ntdv){
			if(ntdv.childNodes[0].id == "zhuang"){
				jugment = false;
				return false;
			}//判断箱子未来位置是否是墙
			if(ntdv.childNodes[0].className == "tong"){
				jugment = false;
				return false;
			}//判断箱子未来位置是否是箱子
		}
		
		var BoxMainJug = function(ndv,ntdv,ni,nti,fun1,fun2){
			if(ndv.childNodes[0].className == "tong"){
				nti = ni - 20;
				ntdv = document.getElementById(nti);//定位未来箱子位置
				fun1(ntdv);
				if(jugment == false){jugment = null;return false;}
				fun2(ntdv,ntdv);
			}//推箱控制
		}
		//BoxMainJug(now_div,now_tongdiv,now_id,now_tongid,BoxJug,futureTong);
		
		document.onkeydown = function(event){
		event = event || window.event;
		console.log(event.keyCode);
			// w = 87
			// s = 83
			// a = 65
			// d = 68
			
			switch(event.keyCode){
					case 87:
					now_id = person.parentNode.id - 20;
					now_div = document.getElementById(now_id);  //未来位置
					if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
					if(now_div.childNodes[0].className == "tong"){
						now_tongid = now_id - 20;
						now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
						BoxJug(now_tongdiv);
						if(jugment == false){jugment = null;return false;}
						futureTong(now_tongdiv,now_div);
					}//推箱控制
					futurePerson(now_div,event.keyCode);
					ScoreJug();
					Game.step += 1;
					break;
					
					case 83:
					now_id = person.parentNode.id - (-20);
					now_div = document.getElementById(now_id);  //未来位置
					if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
					if(now_div.childNodes[0].className == "tong"){
						now_tongid = now_id + 20;
						now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
						BoxJug(now_tongdiv);
						if(jugment == false){jugment = null;return false;}
						futureTong(now_tongdiv,now_div);
					}//推箱控制
					futurePerson(now_div,event.keyCode);
					ScoreJug();
					Game.step += 1;
					break;
					
					case 65:
					now_id = person.parentNode.id - 1;
					now_div = document.getElementById(now_id);  //未来位置
					if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
					if(now_div.childNodes[0].className == "tong"){
						now_tongid = now_id - 1;
						now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
						BoxJug(now_tongdiv);
						if(jugment == false){jugment = null;return false;}
						futureTong(now_tongdiv,now_div);
					}//推箱控制
					futurePerson(now_div,event.keyCode);
					ScoreJug();
					Game.step += 1;
					break;
					
					case 68:
					now_id = person.parentNode.id - (-1);
					now_div = document.getElementById(now_id);  //未来位置
					if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
					if(now_div.childNodes[0].className == "tong"){
						now_tongid = now_id + 1;
						now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
						BoxJug(now_tongdiv);
						if(jugment == false){jugment = null;return false;}
						futureTong(now_tongdiv,now_div);
					}//推箱控制
					futurePerson(now_div,event.keyCode);
					ScoreJug();
					Game.step += 1;
					break;
			}
		}
		
		document.onkeyup = function(event){
			event = event || window.event;
			SuccessJug();
			Game.score = 0;
		}
		
	},
	//地图生成
	mapcreat : function(level,goal){
		var size = {x : 20 , y : 20 };
		this.map.style.cssText = "width:" + size.x*32 + "px;height:" + size.y*32 + "px;";
		this.goal = this.stageData[level][400];
		for(var i = 0;i < size.x*size.y;i++){
			var little_box = document.createElement("div");
			var creat_img = document.createElement("img");
			creat_img.id = "road";
			little_box.appendChild(creat_img);
			little_box.id = i+1;
			this.map.appendChild(little_box);
			
			var replace = new Image(); //创建图层
			if(this.stageData[level][i] == 1){
				replace.src = "sucai/zhuang.png";
				replace.id = "zhuang";
				little_box.appendChild(replace);
				little_box.insertBefore(replace,little_box.childNodes[0]);
			}else if(this.stageData[level][i] == 2){
				replace.src = "sucai/end.png";
				replace.id = "end";
				little_box.appendChild(replace);
				little_box.insertBefore(replace,little_box.childNodes[0]);
				Game.dong.push(little_box.id);
			}else if(this.stageData[level][i] == 3){
				replace.src = "sucai/tong.png";
				replace.className = "tong";
				little_box.insertBefore(replace,little_box.childNodes[0]);
			}else if(this.stageData[level][i] == 4){
				replace.src = "sucai/marisa_front.png";
				replace.id = "ren";
				little_box.appendChild(replace);
			}
			//视图叠加
		}
		//创建地图格子
	},
	stageData : [
		[
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,
			0,0,0,0,0,0,1,1,1,3,0,3,2,1,0,0,0,0,0,0,
			0,0,0,0,0,0,1,2,0,3,4,1,1,1,0,0,0,0,0,0,
			0,0,0,0,0,0,1,1,1,1,3,1,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4
		],
		[
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,0,4,0,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,3,2,3,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,1,2,1,3,1,2,1,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,3,2,0,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4
		],
		[
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,0,3,0,0,1,0,0,0,0,0,0,0,
			0,0,0,0,0,1,0,3,1,1,0,1,1,1,1,1,0,0,0,0,
			0,0,0,0,0,1,1,0,1,2,0,1,1,0,0,1,0,0,0,0,
			0,0,0,0,0,0,1,0,1,2,0,0,0,3,0,1,0,0,0,0,
			0,0,0,0,0,0,1,0,1,2,0,1,1,0,0,1,0,0,0,0,
			0,0,0,0,0,0,1,0,1,2,1,1,1,0,1,1,0,0,0,0,
			0,0,0,0,0,0,1,4,0,0,0,1,1,0,0,1,0,0,0,0,
			0,0,0,0,0,0,1,1,0,3,0,0,0,0,0,1,0,0,0,0,
			0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4
		],
		[
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,1,2,1,0,0,1,1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,1,2,2,2,0,0,1,1,0,0,0,0,0,0,
			0,0,0,0,0,0,1,0,1,3,0,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,0,1,0,3,4,1,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,0,1,1,0,3,0,3,0,1,0,0,0,0,0,0,
			0,0,0,0,0,0,0,1,3,0,3,0,1,1,0,0,0,0,0,0,
			0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4
		],
		[
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,1,1,0,2,1,1,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,1,0,0,3,2,1,0,0,0,0,0,0,0,0,
			0,0,0,0,0,1,1,0,3,0,0,1,1,0,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,1,3,3,0,1,0,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,4,0,0,0,1,0,0,0,0,0,0,0,
			0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4
		],
		[
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,2,3,0,3,2,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,3,2,3,2,3,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,1,0,3,4,3,0,1,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,3,2,3,2,3,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,2,3,0,3,2,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,
			0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
			0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8
		]
	]
};//主体

Game.run();
};

/* 
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0, */