var canvas
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	get_img=backg.jpg
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '85') // add appropriate keycode
	{
		get_img=rr.jpg
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		get_img=gr.png
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		get_img=yr.png
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		get_img=pr.png
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	    get_img=br.png
	}
	
}

