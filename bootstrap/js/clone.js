$(function(){

	var CompCount = 0;
	var SchoolCount = 0;


	function checkCompCount() {
		if(CompCount >= 2){
			$('#addcompany').hide();
		} else {
			$('#addcompany').show();
		}
	}

	function checkSchoolCount() {
		if(SchoolCount >= 2){
			$('#addschool').hide();
		} else {
			$('#addschool').show();
		}
	}

	$('#addcompany a').click(function(event){
		event.preventDefault();//prevent form submission
		var formfields = $('.employform:first-child').clone();
		$('#employforms').append(formfields).slideDown(800);
		CompCount++;
		checkCompCount();
	});

	// $('#addcompany a').click(function(){
	// 	var formfields = $('.employform:first-child').clone();
	// 	$(formfields,{
	// 		'class':'hide'
	// 	}).appendTo('formfields').slideDown(1000);
	// });

	$('#employforms').on('click', '.removecompany a', function(event){
		event.preventDefault();//prevent form submission
		$(this).parents('.employform').slideUp(400, function(){
			$(this).remove();
		});
		CompCount--;
		checkCompCount();
	});

	$('#addschool a').click(function(event){
		event.preventDefault();//prevent form submission
		var formfields = $('.eduform:first-child').clone();
		$('#eduforms').append(formfields);
		SchoolCount++;
		checkSchoolCount();
	});


	$('#eduforms').on('click', '.removeschool a', function(event){
		event.preventDefault();//prevent form submission
		$(this).parents('.eduform').slideUp(400, function(){
			$(this).remove();
		});
		SchoolCount--;
		checkSchoolCount();
	});

	$('#questionbutton').popover();
	$('#gearbutton').popover();

});



