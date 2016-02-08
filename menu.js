
var mm = {menu: [
	{"url":"index.html", "lnk":"Style Guide"},
	{"url":"jacksonville.html", "lnk":"Documentation"},
	{"url":"contact.html", "lnk":"Contact"},
	
]};

	
$(document).ready(function(e) {
	
	var strMenu = "";
	
	mm.menu.forEach(function(entry) {
		strMenu = strMenu + "<li><a href=\"" + entry.url + "\">" + entry.lnk + "</a></li>";
		});
	
	$(".MainMenu").html(strMenu);	
	$(".MainMenu").find(".glyphicon").parent("a").attr("target", "_blank");	
});	