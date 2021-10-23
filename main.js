var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

var block_img_Object="";


    function new_image()
    {
        fabric.Image.fromURL("BirthdayImage.jpg", function(Img){
            block_img_Object = Img;
    
            block_img_Object.scaleToWidth(700);
            block_img_Object.scaleToHeight(510);
            block_img_Object.set({
                top:0,
                left:0
            });
            canvas.add(block_img_Object);
        });
    }	
	

function playSound(){
	x.play();
}
