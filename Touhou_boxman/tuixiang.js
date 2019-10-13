		function Click(x,fun){
			var btn = document.getElementById(x);
			btn.onclick = fun;
		}
			window.onload = function(){
				
				Click("select1",function(){
					if(Game.stage == 0){alert("这是第一关");}else{
					Game.stage -= 1;
					document.getElementById("map").innerHTML = "";
					Game.run();
					}
				})
				
				Click("select2",function(){
					if(Game.stage == 4){alert("最后一关了");}else{
					Game.stage += 1;
					document.getElementById("map").innerHTML = "";
					Game.run();
					}
				})
				
				Click("select3",function(){
					document.getElementById("map").innerHTML = "";
					Game.run();
				})
		
		
				var Game = {
					run : function(){Game.mapcreat(Game.stage,Game.goal);this.main();Game.step = 0;Game.score = 0;}, //这里运行
					map : document.getElementById("map"),
					score : 0,
					goal : 0,
					stage : 0,
					step : 0,
					//方向、移动、判断、推箱等
					main : function(){
						var person = document.getElementById("ren");
						var now_id = null;
						var now_div = null;
						var now_tongid = null;
						var now_tongdiv = null;
						
						document.onkeydown = function(event){
								event = event || window.event;
									console.log(event.keyCode);
							
							// w = 87
							// s = 83
							// a = 65
							// d = 68
							Game.step += 1;
							switch(event.keyCode){
									case 87:
									now_id = person.parentNode.id - 20;
									now_div = document.getElementById(now_id);  //未来位置
									if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
									if(now_div.childNodes[0].className == "tong"){
										now_tongid = now_id - 20;
										now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
										if(now_tongdiv.childNodes[0].id == "zhuang"){
											return false;
										}//判断箱子未来位置是否是墙
										if(now_tongdiv.childNodes[0].className == "tong"){
											return false;
										}//判断箱子未来位置是否是箱子
										var creat_tongimg = document.createElement("img");
										creat_tongimg.className = "tong";
										creat_tongimg.src = "sucai/tong.png";
										now_tongdiv.insertBefore(creat_tongimg,now_tongdiv.childNodes[0]);//未来箱子位置插入图层
										now_div.removeChild(now_div.childNodes[0]);//删除当前箱子图层
										if(now_tongdiv.childNodes[2]){
											Game.score += 1;
											if(Game.score == Game.goal){
												var index = confirm("你赢了！成绩是"+ Game.step +"步，是否进入下一关？");  //成功提示
												if (index){
													Game.stage += 1;
													document.getElementById("map").innerHTML = "";
													Game.run();
												}
											}
										}
									}//推箱控制
									var creat_img = document.createElement("img");
									creat_img.id = "ren";
									creat_img.src = "sucai/marisa_back.png"; //未来人物图层
									person.parentNode.removeChild(person);
									now_div.appendChild(creat_img);
									person = document.getElementById("ren");
									break;
									
									case 83:
									now_id = person.parentNode.id - (-20);
									now_div = document.getElementById(now_id);  //未来位置
									if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
									if(now_div.childNodes[0].className == "tong"){
										now_tongid = now_id + 20;
										now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
										if(now_tongdiv.childNodes[0].id == "zhuang"){
											return false;
										}//判断箱子未来位置是否是墙
										if(now_tongdiv.childNodes[0].className == "tong"){
											return false;
										}//判断箱子未来位置是否是箱子
										var creat_tongimg = document.createElement("img");
										creat_tongimg.className = "tong";
										creat_tongimg.src = "sucai/tong.png";
										now_tongdiv.insertBefore(creat_tongimg,now_tongdiv.childNodes[0]);//未来箱子位置插入图层
										now_div.removeChild(now_div.childNodes[0]);//删除当前箱子图层
										if(now_tongdiv.childNodes[2]){
											Game.score += 1;
											if(Game.score == Game.goal){
												var index = confirm("你赢了！成绩是"+ Game.step +"步，是否进入下一关？");  //成功提示
												if (index){
													Game.stage += 1;
													document.getElementById("map").innerHTML = "";
													Game.run();
												}
											}
										}
									}//推箱控制
									
									var creat_img = document.createElement("img");
									creat_img.id = "ren";
									creat_img.src = "sucai/marisa_front.png"; //未来人物图层
									person.parentNode.removeChild(person);
									now_div.appendChild(creat_img);
									person = document.getElementById("ren");
									
									break;
									
									case 65:
									now_id = person.parentNode.id - 1;
									now_div = document.getElementById(now_id);  //未来位置
									if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
									if(now_div.childNodes[0].className == "tong"){
										now_tongid = now_id - 1;
										now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
										if(now_tongdiv.childNodes[0].id == "zhuang"){
											return false;
										}//判断箱子未来位置是否是墙
										if(now_tongdiv.childNodes[0].className == "tong"){
											return false;
										}//判断箱子未来位置是否是箱子
										var creat_tongimg = document.createElement("img");
										creat_tongimg.className = "tong";
										creat_tongimg.src = "sucai/tong.png";
										now_tongdiv.insertBefore(creat_tongimg,now_tongdiv.childNodes[0]);//未来箱子位置插入图层
										now_div.removeChild(now_div.childNodes[0]);//删除当前箱子图层
										if(now_tongdiv.childNodes[2]){
											Game.score += 1;
											if(Game.score == Game.goal){
												var index = confirm("你赢了！成绩是"+ Game.step +"步，是否进入下一关？");  //成功提示
												if (index){
													Game.stage += 1;
													document.getElementById("map").innerHTML = "";
													Game.run();
												}
											}
										}
									}//推箱控制
									
									var creat_img = document.createElement("img");
									creat_img.id = "ren";
									creat_img.src = "sucai/marisa_left.png"; //未来人物图层
									person.parentNode.removeChild(person);
									now_div.appendChild(creat_img);
									person = document.getElementById("ren");//防止人物定义丢失
									break;
									
									case 68:
									now_id = person.parentNode.id - (-1);
									now_div = document.getElementById(now_id);  //未来位置
									if(now_div.childNodes[0].id == "zhuang"){now_id += 1;return false;} //撞墙判断
									if(now_div.childNodes[0].className == "tong"){
										now_tongid = now_id + 1;
										now_tongdiv = document.getElementById(now_tongid);//定位未来箱子位置
										if(now_tongdiv.childNodes[0].id == "zhuang"){
											return false;
										}//判断箱子未来位置是否是墙
										if(now_tongdiv.childNodes[0].className == "tong"){
											return false;
										}//判断箱子未来位置是否是箱子
										var creat_tongimg = document.createElement("img");
										creat_tongimg.className = "tong";
										creat_tongimg.src = "sucai/tong.png";
										now_tongdiv.insertBefore(creat_tongimg,now_tongdiv.childNodes[0]);//未来箱子位置插入图层
										now_div.removeChild(now_div.childNodes[0]);//删除当前箱子图层
										if(now_tongdiv.childNodes[2]){
											Game.score += 1;
											if(Game.score == Game.goal){
												var index = confirm("你赢了！成绩是"+ Game.step +"步，是否进入下一关？");  //成功提示
												if (index){
													Game.stage += 1;
													document.getElementById("map").innerHTML = "";
													Game.run();
												}
											}
										}
									}//推箱控制
									var creat_img = document.createElement("img");
									creat_img.id = "ren";
									creat_img.src = "sucai/marisa_right.png"; //未来人物图层
									person.parentNode.removeChild(person);
									now_div.appendChild(creat_img);
									person = document.getElementById("ren");
									break;
							}
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