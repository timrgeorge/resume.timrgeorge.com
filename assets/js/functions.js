(function($){

	$(document).ready(function (){
	
		$("#work-toggle a").click(function(e){
			e.preventDefault();
			var txt = $("#additional-work").is(':visible') ? 'View Additional Work Experience &raquo;' : 'Hide Additional Work Experience';
			$(this).html(txt);
			$("#additional-work").slideToggle();
		});
	
	});

})(window.jQuery);