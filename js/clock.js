$(document).ready(function(){
	$('dd').addClass('hidden');
		$('dt').click(function(){
			$next=$(this).next();
			if($next.hasClass('hidden'))
				$next.removeClass('hidden').siblings('dd').removeClass('hidden');
			else
				$next.addClass('hidden').siblings('dd').addClass('hidden');
		});
		$('dt').hover(function(){
			$next=$(this).next();
			$next.removeClass('hidden').siblings('dd').removeClass('hidden');
		},function(){});
		$('dd').hover(function(){},function(){
			$(this).addClass('hidden').siblings('dd').addClass('hidden');
		});


		function drawPic(){
			var c=document.getElementById("myCanvas");
			var ctx=c.getContext("2d");
			ctx.beginPath();
			ctx.strokeStyle="#9a0000";
			ctx.lineWidth=10;
			ctx.lineCap="round";
			ctx.moveTo(10,200);ctx.lineTo(10,50);
			ctx.moveTo(50,200);ctx.lineTo(50,70);
			ctx.moveTo(90,200);ctx.lineTo(90,100);
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle="#009a00";
			ctx.moveTo(130,200);ctx.lineTo(130,50);
			ctx.moveTo(170,200);ctx.lineTo(170,70);
			ctx.moveTo(210,200);ctx.lineTo(210,100);
			ctx.stroke();

			ctx.beginPath();
			ctx.strokeStyle="#00009a";
			ctx.moveTo(250,200);ctx.lineTo(250,50);
			ctx.moveTo(290,200);ctx.lineTo(290,70);
			ctx.moveTo(330,200);ctx.lineTo(330,100);
			ctx.stroke();

			ctx.beginPath();
			ctx.lineWidth=0.5;
			ctx.strokeStyle="#000000";
			ctx.moveTo(0,30);ctx.lineTo(400,30);
			ctx.moveTo(0,60);ctx.lineTo(400,60);
			ctx.moveTo(0,90);ctx.lineTo(400,90);
			ctx.moveTo(0,120);ctx.lineTo(400,120);
			ctx.moveTo(0,150);ctx.lineTo(400,150);
			ctx.moveTo(0,180);ctx.lineTo(400,180);
			ctx.stroke();
		}
		drawPic();

		$('.glyphicon.glyphicon-plus').click(function(){
			$par=$(this).parent();
			$par.siblings('.panel-body').append('<img src="img/computer.jpg" width="20%" height="20%" alt="...">');
		});

		
});
