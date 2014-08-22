
	$("document").ready(function() {
		buildBookmarks('h2', 'toc');
	});
	
	// Method to create list of heading items.
	function buildBookmarks(strWhichTag, sBookMarkNode) {
		var i,
		    cAnchorCount = 0,
			listCount = 1;
		
		// create the list that will hold the bookmark links
		var oList = $("<table id='bookmarksList'>");

		// for each one of the header tags, create a new named anchor and insert it into
		// the header tag. Then add a new link to the list that points to the named anchor
		$("div:not([id=header]) " + strWhichTag).each(function() {
			$(this).html("<a name='bookmark" + cAnchorCount + "'></a>" + $(this).html());
			oList.append($("<tr class='row-element'><td> " + listCount + " </td><td><a href='#bookmark" + cAnchorCount++ + "'> " + $(this).text() + "</a></td></tr>"));
			listCount++
		});
		
		// now find the ID of the bookmark container and append it
		$("#" + sBookMarkNode).append(oList);
	}
	
	
	// Logic to toggle heading list view.
	$( "#togglelink" ).bind( "click", function() {
		$("#bookmarksList").toggle();
		if($("#bookmarksList").css('display') === 'none') {
			$('#togglelink').text('show');
		} else {
			$('#togglelink').text('hide');
		}
	});
	
	
	$( ".row-element" ).blur(function() {
	  $(this).css({'background-color' : '#DFD8D1'});
	});
	
	
	
	