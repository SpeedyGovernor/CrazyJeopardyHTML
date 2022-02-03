	var tot_score = 0.0;
	
	function addscore()
					{
					var score = document.getElementById("score1").value;
					tot_score = tot_score + parseFloat(score);
					document.getElementById("total_score").innerHTML = tot_score;
					}
	
