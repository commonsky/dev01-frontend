$(function(){

	var CompCount = 0;
	var SchoolCount = 0;

	function checkCompCout() {
		if(CompCount >= 2){
			$('#addcompany').hide();
		} else {
			$('#addcompany').show();
		}
	}

	function checkSchoolCout() {
		if(SchoolCount >= 2){
			$('#addschool').hide();
		} else {
			$('#addschool').show();
		}
	}

	$('#addschool a').click(function(event){
		event.preventDefault();//prevent form submission
		var formfields = $('.eduform:first-child').clone();
		$('#eduforms').append(formfields);
		CompCount++;
		checkCompCount();
	});


	$('#eduforms').on('click', '.removeschool a', function(event){
		event.preventDefault();//prevent form submission
		$(this).parents('.eduform').slideUp(400, function(){
			$(this).remove();
		});
		SchoolCount--;
		checkSchoolCount();
	});

	$('#addcompany a').click(function(event){
		event.preventDefault();//prevent form submission
		var formfields = $('.employform:first-child').clone();
		$('#employforms').append(formfields);
		CompCount++;
		checkCompCout();
	});


	$('#eduforms').on('click', '.removeschool a', function(event){
		event.preventDefault();//prevent form submission
		$(this).parents('.eduform').slideUp(400, function(){
			$(this).remove();
		});
		SchoolCount--;
		checkSchoolCount();
	});



});