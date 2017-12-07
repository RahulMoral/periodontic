$(document).ready(function() {
  	//SVG
  	svg4everybody();


    //SELECT2
    $('.select').select2();
    $('.mb-select select').select2({
    	containerCssClass: "select-mb",
    	dropdownCssClass: "select-dropdown-mb",
        minimumResultsForSearch: Infinity
    })

    function iformat(icon) {
        var originalOption = icon.element;
        return $('<span><i class="fa ' + $(originalOption).data('icon') + '"></i> ' + icon.text + '</span>');
    }
    $('.select-icons').select2({
        width: "100%",
        templateSelection: iformat,
        templateResult: iformat,
        allowHtml: true,
        minimumResultsForSearch: Infinity
    });


    //ADD Doctor
    $('.suggestions li a').on('click', function(event) {
		event.preventDefault();
        $(this).closest('.suggestions').siblings('input').val($(this).text());
        $('.select-doctor').hide();
        $('.selected-doctor').show();
        $('#name').focus();
    });

    $('.remove-doctor').click(function(event){
		event.preventDefault();	
        $('.select-doctor').show();
        $('.selected-doctor').hide();
        $('#search-doctor').val('').focus();
    });

	//TABLE ACTION
	$('.table--action input:checkbox').change(function(){
		var row = $(this).parents('tr');
		var table = $(this).parents('table');

	    //row class
	    if($(this).is(":checked")) {
	        row.addClass("selected");
	    } else {
	        row.removeClass("selected");
	    }

	    //table class
	    if ($(".table--action input:checkbox:checked").length > 0) {
	        table.addClass("selection");
	    } else {
	        table.removeClass("selection");
	    }
	});


	//SIDENAV
	$('.sidenav-trigger').click(function() {
		$('body').toggleClass('sidenav-on');
	});

  	
  	//BADGES
  	$('.badge').click(function() {
  		$(this).siblings().removeClass('active');
  		$(this).addClass('active');
  	});
  	// DataTables
    $('#DataTablesDesign').DataTable({
        // responsive: true,
        // columns: [
        //     { responsivePriority: 2 },
        //     { responsivePriority: 3 },
        //     { responsivePriority: 4 },
        //     { responsivePriority: 5 },
        //     { responsivePriority: 6 },
        //     { responsivePriority: 7 },
        //     { responsivePriority: 1 }
        // ]
    });
});
