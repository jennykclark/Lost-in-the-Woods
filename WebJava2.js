//JavaScript for "Lost in the Woods"


//JavaScript for "Lost in the Woods"


$(document).ready(function(){
	$(".hide1").click(function(){
		$(".StoryLineW").hide();
	});
	  $(".hide2").click(function(){
		$(".StoryLineW2").hide();
		
	    $(".RightButton2").show();
		$(".LeftButton2").show();
	});
	  $(".hide3").click(function(){
		$(".StoryLineW3").hide();
		
	     $(".RightButton").show();
		 $(".LeftButton").show();
	});
});


$(document).ready(function(){
	$(".RightButton").hide();
	$(".LeftButton").hide();
	$(".RightButton2").hide();
	$(".LeftButton2").hide();
	$("#StartScreen").hide();
	$("#darkness").hide();
	$("#movemntPage").hide();
    $("#car").hide();
	$("#Random").hide();
	$("#music").hide();
	$("#house").hide();
	$("#muiscLounder").hide();
	$("#light").hide();
	$("#singleRoad").hide();
	$("#clothes").hide();
	$("#campers").hide();
	$("#EndScreen").hide();
	
		
	audio1.muted = true;
	audio3.muted = true;
	audio4.muted = true; 
	audio5.muted = true;
});


function showStartScreen(){
	$("#StartScreen").show();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
	$(".RightButton").hide();
    $(".LeftButton").hide();
	
}
function showDarkness(){
	$("#darkness").show();
	$("#StartScreen").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
	$(".RightButton").hide();
    $(".LeftButton").hide();
}
function turnBackDarkness(){
	$("#movemntPage").hide();
	$("#darkness").show();
	audio3.muted = true;
	audio2.volume = 1.0; 
}
function showMovement(){
	$("#movemntPage").show();
	$("#darkness").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
	$(".RightButton").hide();
    $(".LeftButton").hide();
	audio3.muted = false; 
	audio3.volume = 0.5;
	audio2.volume = 0.2;
}
function showCar(){
	$("#car").show();
	$("#darkness").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
	$(".RightButton").hide();
    $(".LeftButton").hide();
	audio4.muted = false; 
	audio4.volume = 0.1;
	audio2.volume = 0.2;
}
function showRandomMan(){
	$("#Random").show();
	$("#car").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".RightButton").hide();
    $(".LeftButton").hide();
	audio4.muted = false;
	audio4.volume = 0.5;
	audio2.volume = 0.1;
}
function RestartRandom(){
	$("#Random").hide();
	$("#StartStory").show();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
	audio4.muted = true; 
	audio2.volume = 1.0;
}
function showMusic(){
	$("#music").show();
	$("#StartScreen").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".RightButton2").hide();
    $(".LeftButton2").hide();
	audio5.muted = false;
	audio5.volume = 0.1;
}
function showHouse(){
	$("#house").show();
	$("#music").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
	audio5.muted = true; 
}
function RestartHouse(){
	$("#house").hide();
	$("#StartStory").show();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
}
function showMusicLounder(){
	$("#muiscLounder").show();
	$("#music").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	audio5.muted = false; 
	audio2.volume = 0.3;
	audio5.volume = 0.7;
}
function turnBackMusicLounder(){
	$("#muiscLounder").hide();
	$("#music").show();
	audio5.volume = 0.1;
	audio5.muted = false;
}
function showLight(){
	$("#light").show();
	$("#StartScreen").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
	$(".RightButton").hide();
    $(".LeftButton").hide();
}
function showSingleRoad(){
	$("#singleRoad").show();
	$("#light").hide();
	$("#StartScreen").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
}
function RestartRoad(){
    $("#singleRoad").hide();
	$("#StartStory").show();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
}
function showClothes(){
	$("#clothes").show();
	$("#light").hide();
	$(".StoryLineW").show();
}
function turnBackClothes(){
	$("#light").show();
	$("#clothes").hide();
}
function showCampers(){
	$("#campers").show();
	$("#light").hide();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	audio1.muted = false; 
	audio1.volume = 1.0;
	audio2.volume = 0.2;
}
function showEndScreen(){
	$("#EndScreen").show();
	$("#campers").hide();
	audio1.muted = true;
	audio2.volume = 1.0;
}
function RestartGame(){
	$("#EndScreen").hide();
	$("#StartStory").show();
	$(".StoryLineW").show();
	$(".StoryLineW2").show();
	$(".StoryLineW3").show();
}

// Get the modal

$(document).ready(function(){
  $(".close").click(function(){
    $(".modal").hide();
  });
});

$(document).ready(function(){
  $("#crying").click(function(){
    $(".modal").show();
  });
});

$(document).ready(function(){
  $(".modal").click(function(){
    $("#myModal").hide();
  });
});

function playAudio(){
	//audio1 is campfire
    var audio1 = document.getElementById('audio1');
	//audio2 is footSteps
    var audio2 = document.getElementById('audio2');
	//audio3 is hiking
	var audio3 = document.getElementById('audio3');
	//audio4 is carHorn
	var audio4 = document.getElementById('audio4');
	//audio5 is queen
	var audio5 = document.getElementById('audio5');
}


function playAudio() { 
    audio1.play();
    audio2.play();
	audio3.play();
	audio4.play();
	audio5.play();
} 

function pauseAudio() { 
    audio1.pause();
    audio2.pause();
	audio3.pause();
    audio4.pause();
	audio5.pause();
}
