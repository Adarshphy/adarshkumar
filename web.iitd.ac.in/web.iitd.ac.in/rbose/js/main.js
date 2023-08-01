
/*accordian*/
jQuery(document).ready(function() {
	function close_accordion_section() {
		jQuery('.accordion .accordion-section-title').removeClass('active');
		jQuery('.accordion .accordion-section-content').slideUp(300).removeClass('open');
	}

	jQuery('.accordion-section-title').click(function(e) {
		// Grab current anchor value
		var currentAttrValue = jQuery(this).attr('href');

		if(jQuery(e.target).is('.active')) {
			close_accordion_section();
		}else {
			close_accordion_section();

			// Add active class to section title
			jQuery(this).addClass('active');
			// Open up the hidden content panel
			jQuery('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
		}

		e.preventDefault();
	});
});

/*sidebar*/
window.onscroll = function() {setPosition()};
function setPosition(){
   // alert('hi');
   if(document.documentElement.scrollTop > 50){
	//alert('hjgd');
	$('nav').addClass('navbar-fixed-top');
	}else{
		$('nav').removeClass('navbar-fixed-top');
	}
    if(document.documentElement.scrollTop > 550){
        // alert('hjgd');
        $('.affix_design').addClass('affix_design_fixed');
    }else{
        $('.affix_design').removeClass('affix_design_fixed');
    }
}

$(document).ready(function(){
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});