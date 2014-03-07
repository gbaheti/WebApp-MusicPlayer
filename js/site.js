$(document).ready(function(){

	var cp = 1;

	var pslide = $("#progressslide");
	var vslide = $("#volumecontrol");
	var player = $("#player");
	var playlist = $("#playlist");
	var play = $("#play");
	var pause = $("#pause");
	var prev = $("#prev");
	var next = $("#next");
	var loop = $("#loop");
	var vinyl = $("#vinyl");
	var eject = $("#eject");
	var shadow = $("#playershadow");
	var request = $("#request");

	var cpn = $("#playlist li").eq(--cp).data('link');
	var audio = new Audio( cpn );
	// audio.addEventListener('canplay', function(){
	// 	var duration = audio.duration;
	// });
	audio.volume = 0.5;

	pslide.slider({  
		animate: true,
	    range: "min",
	    value: 0,
	    min: 0,
	    max: 300, //audio.duration
	    step: 0.1,
	    slide: function(event, ui){
	    	audio.currentTime = ui.value;
	    }
	});

	vslide.slider({  
		animate: true,
	    range: "min",
	    value: audio.volume,
	    min: 0,
	    max: 1,
	    step: 0.1,
	    slide: function(event, ui){
			audio.volume = ui.value;
	    }
	});

	play.click(function(){

		audio.addEventListener('timeupdate', function(){
				pslide.slider('option', 'value', audio.currentTime);
				$("#timer").html(time(audio.currentTime));
			});
		audio.play();
		play.hide();
		pause.show();
		vinyl.addClass('rotate');
	});
	pause.click(function(){
		audio.pause();
		pause.hide();
		play.show();
		vinyl.removeClass('rotate');
	});
	prev.click(function(){
		pausesong();
		cpn = $("#playlist li").eq(--cp).data('link');
		//console.log(--cp + '\n' + cpn);
		if(cp<0){
			playsong(++cp, cpn);
		}else{
		 	playsong(cp, cpn);
		}
	});
	next.click(function(){
		pausesong();
		cpn = $("#playlist li").eq(cp++).data('link');
		//console.log(--cp + '\n' + cpn);
		if(cp>songs.length){
			playsong(--cp, cpn);
		}else{
		 	playsong(cp, cpn);
		}
	});

	$("#volume").click(function(){
		$("#volume").toggleClass('activeleft').toggleClass('icon-volume-mute2');
		vslide.slider('option', 'value', 0);
		audio.volume = 0;
	});
	loop.click(function(){
		$("#loop").toggleClass('activeleft');
		audio.loop = true;
	});

	$("#playlist ul li").click(function(){
		pausesong();
		cpn = $(this).data('link');
		cp = this.id;
		playsong(cp, cpn);
	});

	$(audio).on("ended", function(){
		cpn = $("#playlist li").eq(cp).data('link');
		playsong(cp, cpn);
		vinyl.removeClass('rotate');
	});

	function playsong(id, cpn){
		audio = new Audio( cpn );
		$("#songtitle p").text($(".playsongtitle p").eq(--id).text());
		$("#songtitle span").text($(".playsongtitle span").eq(id).text());
		$("#timer").text($(".playsongtime").eq(id).text());
		$("#mainsimg img").attr('src', $(".mainsimg").eq(id).text());
		$("#mainbg").css('background', 'url('+ $(".mainscover").eq(id).text() +')');
		audio.play();
		play.hide();
		pause.show();
		vinyl.addClass('rotate');

			audio.addEventListener('timeupdate', function(){
				pslide.slider('option', 'value', audio.currentTime);
				$("#timer").html(time(audio.currentTime));
			});
	}
	function pausesong(){
		audio.pause();
		pause.hide();
		play.show();
		vinyl.removeClass('rotate');
	}

	function time(msec){
		val = Number(msec);
		var sec = Math.floor(msec%60);
		var min = Math.floor(msec/60);
		if(sec < 10){sec = '0'+sec;}
		if(min < 10){min = '0'+min;}
		return min+':'+sec;
	}

	var comp = 0;	
	eject.click(function(){
		if(comp === 0){
			vinyl.animate({
				left: -15
			}, function(){
				vinyl.hide();
				shadow.hide();
				request.css({
					opacity: 0,
					display: 'none'
				});
				playlist.slideUp();
				player.animate({
					height: 230
				});
				eject.css({
						left: 34
					})
					.animate({
						top: -10
					});
			});
		}
		comp = 1;
		if (comp === 1) {
			eject.click(function(){
				player.animate({
					height: 500
				}, function(){
					playlist.fadeIn();
					request.css({
						opacity: 1,
						display: 'block'
					});
					eject.css({
						left: 0,
						top: -50
					});
					shadow.show();
					vinyl.show();
					vinyl.animate({
						left: 200
					});
				});
			});
		}
	});
});