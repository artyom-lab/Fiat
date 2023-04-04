$(document).ready(function () {

	$(document).on('click.bs.dropdown.data-api', '.dropdown-menu', function (e) { 
		e.stopPropagation();
	});

    $(".sandwich").on("click", function() {
    $(this).toggleClass("active");
    $("body").toggleClass("menubar-in");
  });

	function navbar() {
		if ($(this).scrollTop() >= $(window).height()/2) {
			$('.page-navbar').addClass("fixed-top");
		} else {
			$('.page-navbar').removeClass("fixed-top");
		};
	};
	navbar();
	$(window).on("scroll", navbar);

		$('.filter-close').on('click', function() {
			$(this).closest('.filters-box').hide();
	});

});