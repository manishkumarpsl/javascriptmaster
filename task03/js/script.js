
	$("document").ready(function() {
					buildBookmarks('h2', 'toc');
	});

	function buildBookmarks(strWhichTag, sBookMarkNode) {
		var i,
			cAnchorCount = 0,
			rowCount = 1;

		// create the list that will hold the bookmark links
		var oList = $("<table class = 'bookmarksList' id='bookmarksList'>");
		oList.append("<thead><tr><th>Sr.No.</th><th>Topic</th></tr></thead><tbody>");

		// for each one of the header tags, create a new named anchor and insert it into
		// the header tag. Then add a new link to the list that points to the named anchor
		$("div:not([id=header]) " + strWhichTag).each(function() {
			$(this).html("<a name='bookmark" + cAnchorCount + "'></a>" + $(this).html());
			oList.append($("<tr><td class='first-row'>"+ rowCount++ +"</td><td class='second-row'><a href='#bookmark" + cAnchorCount++ + "'> " + $(this).text() + "</a></td></tr>"));
		});
		
		oList.append("</tbody></table>");
		
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
	
	// Logic to highlight row on hover
	$(function() {
        $("#bookmarksList tr:even").addClass("stripe1");
        $("#bookmarksList tr:odd").addClass("stripe2");

        $("#bookmarksList tr").hover(
            function() {
                $(this).toggleClass("highlight");
            },
            function() {
                $(this).toggleClass("highlight");
            }
        );
    });

	
	
	