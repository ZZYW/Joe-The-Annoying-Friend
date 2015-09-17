var on = true;


chrome.runtime.onMessage.addListener(
	function (request, sender, sendResponse) {
		if (request.state == true)
			on = true;
		if (request.state == false)
			on = false;
	});

var postContent = new Array();
postContent[0] = "Sometimes my day is fucked up, and yours too.";
postContent[1] = "Getting like on your selfie doesn't make you pretty.";
postContent[2] = "Stop liking my food post, you don't care about what I eat.";
postContent[3] = "Just say you hate your job, it is ok.";
postContent[4] = "When I buy a new book, I read the last page first. That way, in case I die before I finish, I know how it ends.";


var postButton = document.getElementsByClassName('_42ft _4jy0 _11b _4jy3 _4jy1 selected _51sy');
$(postButton).click(function () {
	if (on) {
		var randtext = new Array();
		randtext[0] = "Everybody eventually dies.";
		randtext[1] = "This won't make you look any smarter.";
		randtext[2] = "You know, I heard that Facebook is making a \"dislink\" button."
		var i = Math.floor((randtext.length-1) * Math.random());
		alert("                        " + randtext[i] + "                        ");
	}

});

$('a.UFILikeLink').click(function () {
	if (on) {
		var luckynumber = Math.random();
		if (luckynumber > 0.5) {
			var randtext = new Array();
			randtext[0] = "This is not real life, not real, not real, not real";
			randtext[1] = "Nobody is special";
			randtext[2] = "πø∆ˆ˙¶•∞®∞∞∞§§§§£™ß∂Ω≈Ω¡∑´†≈≈ç";
			randtext[3] = "There life is not better than yours"
			var i = Math.floor((randtext.length-1) * Math.random());
			alert("                        " + randtext[i] + "                        ");
		}
	}
});

$('.comment_link, .UFICommentLinkIcon').click(function () {
	if (on) {
		var luckynumber = Math.random();
		if (luckynumber > 0.5) {
			var randtext = new Array();
			randtext[0] = "Actually, what you say doesn's really matter.";
			randtext[1] = "You know, nobody will ever care what you say.";
			randtext[2] = "REALLY?";
			var i = Math.floor((randtext.length-1) * Math.random());
			alert("                        " + randtext[i] + "                        ");
		}
	}
});

setTimeout(function () {
	if (on) {
		var i = Math.floor((postContent.length-1) * Math.random());
		var all4ikz = [];
		all4ikz = $('._4ikz');
		$(all4ikz[0]).before(apost_a + postContent[i] + apost_b);
	}
}, Math.random() * 10000 + 100000);

setTimeout(function () {
	if (on) {
		alert("You have been starting at your timeline for 5 minutes.")
	}
}, 300000);

var apost_a = "<div class=\"_4-u2 mbm _5jmm _5pat _5v3q _4-u8\"  id=\"u_s_0\" style=\"opacity: 1;\"><div class=\"_3ccb\"><div></div><div class=\"userContentWrapper _5pcr\" role=\"article\" aria-label=\"Story\"><div style=\"padding-bottom:12px\" class=\"_1dwg\"><div class=\"_4r_y\"><div class=\"_6a uiPopover _5pbi _5puc _5v56 _b1e\"  id=\"u_s_1\"><a class=\"_5pbj _p\" aria-label=\"Story options\" href=\"#\" id=\"u_s_2\"></a></div></div><div class=\"clearfix _5x46\"><a class=\"_5pb8 _5v9u _29h _303\" href=\"https://www.facebook.com/nycucumber?fref=nf\"  id=\"js_b\"><img class=\"_s0 _5xib _5sq7 _rw img\" src=\"http://itp.nyu.edu/~yw1080/Huoxini/wp-content/uploads/2015/09/icon_big.png\" alt=\"\"></a><div class=\"_3dp _29k\"><div><div class=\"_6a\"><div class=\"_6a _6b\" style=\"height:40px\"></div><div class=\"_6a _6b\"><h5 class=\"_5pbw\"><span class=\"fwn fcg\"><span class=\"fwb fcg\" ><a href=\"https://www.facebook.com/nycucumber?fref=nf\">Just Another Facebook Friend</a></span></span></h5><div class=\"_5pcp\"><span><span class=\"fsm fwn fcg\"><span role=\"presentation\" aria-hidden=\"true\"> · </span></span></span><span role=\"presentation\"> · </span><div class=\"_6a _43_1 _4f-9 _nws\" id=\"u_s_3\"><div class=\"_6a uiPopover\" id=\"u_s_4\"><span class=\"_55pe\" style=\"max-width:11px;\"><i class=\"mrs img sp_s-Sn94PQ-ou sx_cae91f\"></i></span><i class=\"_3-99 img sp_OshtrUy2CC5 sx_5494cc\"></i></a></div><input type=\"hidden\" autocomplete=\"off\" name=\"privacyx\" value=\"291667064279714\" id=\"u_s_6\"></div></div></div></div></div></div></div><div class=\"_5pbx userContent\"><p>";

var apost_b = "</p><div class=\"\"></div></div><div><div data-ft=\"{&quot;tn&quot;:&quot;H&quot;}\"></div></div></div><div><form rel=\"async\" class=\"live_10203505462317361_316526391751760 commentable_item\" method=\"post\" data-ft=\"{&quot;tn&quot;:&quot;]&quot;}\" action=\"/ajax/ufi/modify.php\" data-live=\"{&quot;seq&quot;:0}\" id=\"u_s_7\" onsubmit=\"return window.Event &amp;&amp; Event.__inlineSubmit &amp;&amp; Event.__inlineSubmit(this,event)\"><input type=\"hidden\" name=\"charset_test\" value=\"€,´,€,´,水,Д,Є\"><input type=\"hidden\" name=\"fb_dtsg\" value=\"AQFyyIMoVF41\" autocomplete=\"off\"><input type=\"hidden\" autocomplete=\"off\" name=\"feedback_params\" value=\"{&quot;actor&quot;:&quot;1838065912&quot;,&quot;target_fbid&quot;:&quot;10203505462317361&quot;,&quot;target_profile_id&quot;:&quot;1838065912&quot;,&quot;type_id&quot;:&quot;22&quot;,&quot;assoc_obj_id&quot;:&quot;&quot;,&quot;source_app_id&quot;:&quot;0&quot;,&quot;extra_story_params&quot;:[],&quot;content_timestamp&quot;:&quot;1442038102&quot;,&quot;check_hash&quot;:&quot;AQDEhivco1rwnxJI&quot;,&quot;source&quot;:&quot;13&quot;}\"><input type=\"hidden\" autocomplete=\"off\" name=\"data_only_response\" value=\"1\"><div class=\"uiUfi UFIContainer _5pc9 _5vsj _5v9k _2-5k\" id=\"u_s_9\"></div></form></div></div></div></div>";
