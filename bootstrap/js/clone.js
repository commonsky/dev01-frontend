$(function(){

	var CompCount = 0;

	function checkCompCout() {
		if(CompCount >= 2){
			$('#addcompany').hide();
		} else {
			$('#addcompany').show();
		}
	}

	$('#addcompany a').click(function(event){
		event.preventDefault();//prevent form submission
		var formfields = $('.employform:first-child').clone();
		$('#employforms').append(formfields);
		CompCount++;
		checkCompCout();
	});


	$('#employforms').on('click', '.removecompany a', function(event){
		event.preventDefault();//prevent form submission
		$(this).parents('.employform').slideUp(400, function(){
			$(this).remove();
		});
		CompCount--;
		checkCompCout();
	});



});