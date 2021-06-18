var canvas = new fabric.Canvas('myCanvas');
var block_image_width=30;
var block_image_height=30;
var player_x = 10;
var player_y = 10;
var player_object ="";
var block_image="";

function player_update() {
    fabric.Image.fromURL("player.png",function(Img) {
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
    }
    );
    function new_image(get_image) {
        fabric.Image.fromURL(get_image,function(Img) {
            blog_image_object=Img;
            blog_image_object.scaleToWidth(blog_image_width);
            blog_image_object.scaleToHeight(blog_image_height);
            blog_image_object.set({
                top:player_x,
                left:player_y
            }
            );
            canvas.add(blog_image_object);
        });
    }

	if(keyPressed == '70')
	{
		new_image('ironman_face(1).png'); 
		console.log("t");
	}
	if(keyPressed == '66')
	{
		new_image('spiderman_body.png'); 
		console.log("b");
	}
	if(keyPressed == '76')
	{
		new_image('hulk_legs.png'); 
		console.log("I");
	}
	if(keyPressed == '82')
	{
		new_image('thor_right_hand.png'); 
		console.log("r");
	}
	if(keyPressed == '72')
	{
		new_image('captain_america_left_hand.png'); 
		console.log("h");
	}
	if(keyPressed =='38'){
		up();
		console.log("up")
	}
	if(keyPressed =='38'){
		up();
		console.log("down")
	}
	if(keyPressed =='40'){
		up();
		console.log("right")
	}
	if(keyPressed =='37'){
		up();
		console.log("left")
	}
	function up() {
		if(player_y >=0){
			player_y
		}
	}
	
			}
		}function up(){
if (player_y>=0) {
	player_y=player_y-block_image_height;
	console.log("block image height=" +block_image_height);
	console.log("when up arrow key is pressed,x=" +player_x+"y=" +player_y);
	canvas.remove(player_object);
	player_update();
}

}
function down() {
	if (player_y<=500) {
		player_y=player_y+block_image_height;
		console.log("block image height=" + block_image_height);
		console.log("when down  arrow key is pressed,x=" + player_x + "y=" +player_y);
		canavas.remove(player_object);
		player_update();
	}
}
function left() {
	if (player_x>=0) {
		player_x=player_x-block_image_width;
		console.log("block image width=" + block_image_width);
		console.log("when left arrowkey is pressed,x=" +player_x + "y=" +player_y);
		canavas.remove(player_object);
		player_update();
	}
}
function right() {
	if (player_x<=800) {
		player_x=player_x+block_image_width;
		console.log("block image width=" + block_image_width);
		console.log("when right arrowkey is pressed,x=" +player_x +"y=" + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
