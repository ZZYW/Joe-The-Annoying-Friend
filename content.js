var postContent = new Array();
postContent[0] = "Sometimes my day is fucked up, and yours too.";
postContent[1] = "Getting like on your selfie doesn't make you are pretty."
postContent[2] = "Stop liking my food post, you don't care about what I eat."
postContent[3] = "Just say you hate your job, it is ok."

$(document).ready(function () {
	
	var postButton = document.getElementsByClassName('_42ft _4jy0 _11b _4jy3 _4jy1 selected _51sy');
	$(postButton).click(function () {
		alert("This won't make you look any smarter.")
	});

	$('a.UFILikeLink').click(function () {
		var randtext = new Array();
		randtext[0] = "This is not real life, not real, not real, not real";
		randtext[1] = "Nobody is special";
		randtext[2] = "πø∆ˆ˙¶•∞®∞∞∞§§§§£™ß∂Ω≈Ω¡∑´†≈≈ç";
		randtext[3] = "There life is not better than yours"
		var i = Math.floor(4 * Math.random());
		alert(randtext[i]);
	});

	$('.comment_link').click(function(){
		alert("Isn't it tiring?");
	});
	
	setTimeout(function(){ 
		var i = Math.floor(4 * Math.random());
		$('#pagelet_composer').after(apost_a + postContent[i] + apost_b);
	}, Math.random() * 10000 + 5000);
})



var apost_a = "<div class=\"_4-u2 mbm _5jmm _5pat _5v3q _4-u8\" data-ft=\"{&quot;fbfeed_location&quot;:1}\" id=\"u_s_0\" data-insertion-position=\"0\" style=\"opacity: 1;\"><div class=\"_3ccb\" data-gt=\"{&quot;type&quot;:&quot;click2canvas&quot;,&quot;fbsource&quot;:703,&quot;ref&quot;:&quot;nf_generic&quot;}\"><div></div><div class=\"userContentWrapper _5pcr\" role=\"article\" aria-label=\"Story\"><div class=\"_1dwg\"><div class=\"_4r_y\"><div class=\"_6a uiPopover _5pbi _5puc _5v56 _b1e\" data-ft=\"{&quot;tn&quot;:&quot;V&quot;}\" id=\"u_s_1\"><a class=\"_5pbj _p\" aria-label=\"Story options\" href=\"#\" aria-haspopup=\"true\" aria-expanded=\"false\" rel=\"toggle\" role=\"button\" id=\"u_s_2\"></a></div></div><div class=\"clearfix _5x46\"><a class=\"_5pb8 _5v9u _29h _303\" href=\"https://www.facebook.com/nycucumber?fref=nf\" aria-hidden=\"true\" tabindex=\"0\" data-ft=\"{&quot;tn&quot;:&quot;m&quot;}\" data-hovercard=\"/ajax/hovercard/user.php?id=1838065912\" aria-owns=\"js_a\" aria-haspopup=\"true\" id=\"js_b\"><img class=\"_s0 _5xib _5sq7 _rw img\" src=\"http://itp.nyu.edu/~yw1080/Huoxini/wp-content/uploads/2015/09/icon_big.png\" alt=\"\"></a><div class=\"_3dp _29k\"><div><div class=\"_6a\"><div class=\"_6a _6b\" style=\"height:40px\"></div><div class=\"_6a _6b\"><h5 class=\"_5pbw\" data-ft=\"{&quot;tn&quot;:&quot;C&quot;}\"><span class=\"fwn fcg\"><span class=\"fwb fcg\" data-ft=\"{&quot;tn&quot;:&quot;;&quot;}\"><a href=\"https://www.facebook.com/nycucumber?fref=nf\" data-hovercard=\"/ajax/hovercard/user.php?id=1838065912&amp;extragetparams=%7B%22fref%22%3A%22nf%22%7D\">Just Another Facebook Friend</a></span></span></h5><div class=\"_5pcp\"><span><span class=\"fsm fwn fcg\"><a class=\"_5pcq\" href=\"/nycucumber/posts/10203505462317361\" target=\"\"><abbr title=\"Saturday, September 12, 2015 at 2:08am\" data-utime=\"1442038102\" data-shorten=\"1\" class=\"_5ptz timestamp livetimestamp\">Just now</abbr></a><span role=\"presentation\" aria-hidden=\"true\"> · </span><a class=\"_5pcq\" href=\"https://www.facebook.com/pages/New-York-New-York/108424279189115\" data-hovercard=\"/ajax/hovercard/page.php?id=108424279189115\">New York, NY</a></span></span><span role=\"presentation\" aria-hidden=\"true\"> · </span><div class=\"_6a _43_1 _4f-9 _nws\" id=\"u_s_3\"><div class=\"_6a uiPopover\" id=\"u_s_4\"><a data-hover=\"tooltip\" aria-label=\"Your friends\" data-tooltip-alignh=\"right\" class=\"_42ft _4jy0 _55pi _5vto _55_p _2agf _p _1zg8 _4jy3 _517h _51sy _59pe\" role=\"button\" href=\"#\" style=\"max-width:25px;\" aria-haspopup=\"true\" aria-expanded=\"false\" rel=\"toggle\" id=\"u_s_5\" aria-owns=\"u_14_0\"><span class=\"_55pe\" style=\"max-width:11px;\"><i class=\"mrs img sp_s-Sn94PQ-ou sx_cae91f\"></i></span><i class=\"_3-99 img sp_OshtrUy2CC5 sx_5494cc\"></i></a></div><input type=\"hidden\" autocomplete=\"off\" name=\"privacyx\" value=\"291667064279714\" id=\"u_s_6\"></div></div></div></div></div></div></div><div class=\"_5pbx userContent\" data-ft=\"{&quot;tn&quot;:&quot;K&quot;}\"><p>";
	
var apost_b = "</p><div class=\"\"></div></div><div><div data-ft=\"{&quot;tn&quot;:&quot;H&quot;}\"></div></div></div><div><form rel=\"async\" class=\"live_10203505462317361_316526391751760 commentable_item\" method=\"post\" data-ft=\"{&quot;tn&quot;:&quot;]&quot;}\" action=\"/ajax/ufi/modify.php\" data-live=\"{&quot;seq&quot;:0}\" id=\"u_s_7\" onsubmit=\"return window.Event &amp;&amp; Event.__inlineSubmit &amp;&amp; Event.__inlineSubmit(this,event)\"><input type=\"hidden\" name=\"charset_test\" value=\"€,´,€,´,水,Д,Є\"><input type=\"hidden\" name=\"fb_dtsg\" value=\"AQFyyIMoVF41\" autocomplete=\"off\"><input type=\"hidden\" autocomplete=\"off\" name=\"feedback_params\" value=\"{&quot;actor&quot;:&quot;1838065912&quot;,&quot;target_fbid&quot;:&quot;10203505462317361&quot;,&quot;target_profile_id&quot;:&quot;1838065912&quot;,&quot;type_id&quot;:&quot;22&quot;,&quot;assoc_obj_id&quot;:&quot;&quot;,&quot;source_app_id&quot;:&quot;0&quot;,&quot;extra_story_params&quot;:[],&quot;content_timestamp&quot;:&quot;1442038102&quot;,&quot;check_hash&quot;:&quot;AQDEhivco1rwnxJI&quot;,&quot;source&quot;:&quot;13&quot;}\"><input type=\"hidden\" autocomplete=\"off\" name=\"data_only_response\" value=\"1\"><div class=\"_5pcp _5vsi _52i6 _4l4\"><div class=\"_18--\"></div><div class=\"_4l5\"><span><a class=\"UFILikeLink\" href=\"#\" role=\"button\" aria-label=\"Like this\" aria-live=\"polite\" data-ft=\"{&quot;tn&quot;:&quot;>&quot;}\" data-reactid=\".41\"><i class=\"UFILikeLinkIcon img sp_i8jK9knJ3KS sx_e4ff5b\" data-reactid=\".41.0\"></i><span data-reactid=\".41.1\">Like</span></a></span> &nbsp; <span><a class=\"comment_link\" role=\"button\" href=\"#\" title=\"Leave a comment\" data-ft=\"{ &quot;tn&quot;: &quot;S&quot;, &quot;type&quot;: 24 }\" data-reactid=\".42\"><i class=\"UFICommentLinkIcon img sp_i8jK9knJ3KS sx_d8977f\" data-reactid=\".42.0\"></i><span data-reactid=\".42.1\">Comment</span></a></span> &nbsp; <span class=\"share_root\"><div class=\"uiPopover _6a\" data-reactid=\".47\"><a href=\"#\" class=\"_p share_action_link\" data-ft=\"{ &quot;tn&quot;: &quot;J&quot;, &quot;type&quot;: 25 }\" title=\"Send this to friends or post it on your timeline.\" data-reactid=\".47.$=10/=10\" role=\"button\"><i class=\"UFIShareLinkIcon img sp_i8jK9knJ3KS sx_41f5ba\" data-reactid=\".47.$=10/=10.0\"></i><span data-reactid=\".47.$=10/=10.1\">Share</span><span class=\"UFIShareLinkSpinner img _55ym _55yn _55yo _5tqs\" aria-label=\"Loading...\" aria-busy=\"true\" data-reactid=\".47.$=10/=10.2\"></span></a></div></span></div></div><div class=\"uiUfi UFIContainer _5pc9 _5vsj _5v9k _2-5k\" id=\"u_s_9\"></div></form></div></div></div></div>";