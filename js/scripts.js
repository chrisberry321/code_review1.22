//Business Logic

var countUpTo =function(number) {
	return true;
};

var wrongInput = function(countUpTo) {
  if (countUpTo <= 0) {
		if(alert('HEY, try to get a little more posotive!')){}
		else window.location.reload();
	} else if (1<= countUpTo) {
		return indexOutput(countUpTo);
	} else {
		return "You screwed up";
	}
};

var indexOutput = function(countUpTo) {
	var multiples = [];
	for (var i = 1; i <= countUpTo; i += 1) {
	  if (i % 5 === 0 && i % 3 === 0) {
			multiples.push('pingpong');
		} else if (i % 5 === 0){
			multiples.push('pong');
		} else if (i % 3 === 0){
			multiples.push('ping');
		} else {
			multiples.push(i);
		}
	}
	return multiples;
};


//UI Logic

$(document).ready(function() {
  $("form#count").submit(function(event) {
     var countUpTo = parseInt($("input#UpTo").val());
		 var invalid = wrongInput(countUpTo);
		 var result = indexOutput(countUpTo);

		 	result.forEach(function(number) {
				$(".listofresults").append("<li>" + number + "</li>");
			});

			$("#result").show();
    event.preventDefault();
  });
});
