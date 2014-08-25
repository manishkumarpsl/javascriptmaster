var buildBookmarks;

buildBookmarks = function(strWhichTag, sBookMarkNode) {
  var cAnchorCount, i, oList, rowCount;
  i = void 0;
  cAnchorCount = 0;
  rowCount = 1;
  oList = $("<table class = 'bookmarksList' id='bookmarksList'>");
  oList.append("<thead><tr><th>Sr.No.</th><th>Topic</th></tr></thead><tbody>");
  $("div:not([id=header]) " + strWhichTag).each(function() {
    $(this).html("<a name='bookmark" + cAnchorCount + "'></a>" + $(this).html());
    return oList.append($("<tr><td class='first-row'>" + rowCount++ + "</td><td class='second-row'><a href='#bookmark" + cAnchorCount++ + "'> " + $(this).text() + "</a></td></tr>"));
  });
  oList.append("</tbody></table>");
  return $("#" + sBookMarkNode).append(oList);
};

$("document").ready(function() {
  return buildBookmarks("h2", "toc");
});

$("#togglelink").bind("click", function() {
  $("#bookmarksList").toggle();
  if ($("#bookmarksList").css("display") === "none") {
    return $("#togglelink").text("show");
  } else {
    return $("#togglelink").text("hide");
  }
});

$(function() {
  $("#bookmarksList tr:even").addClass("stripe1");
  $("#bookmarksList tr:odd").addClass("stripe2");
  return $("#bookmarksList tr").hover((function() {
    return $(this).toggleClass("highlight");
  }), function() {
    return $(this).toggleClass("highlight");
  });
});
