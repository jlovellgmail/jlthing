cout = console.log;
var $win = $(window)
$(document).ready(readyhandler);
$(document).scroll(scrollhandler);
var pagename = "project.html";
var keyname = "project";
var pi = undefined;
function readyhandler(){

	// make data list
	makeitems();
	
	// get project index from query string
	pi = getProjectIndex();
	
	// set keys
	setPageViewKeys();

	// build page layout
	populate();


}
function scrollhandler(){
	// do nothing
}



// blow up images
var scrollPos = 0;
function blowup(s){
	d3.select(".pageBody")
		.append("div").attr("class", "blowup")
		.append("div").attr("class", "blowupImage")
		.attr("data-src", s)
		.style("background-image", "url("+s+")")
		;
	setBlowupViewKeys();
	// click anywhere exits blowup
	$(".blowup").click(exitBlowup);
	// stop scroll behind blowup
	scrollPos = $('body').scrollTop();
	$('body').css({
	    overflow: 'hidden',
	    position: 'fixed',
	    top : -scrollPos,
	    width: "100%"
	});
}
function exitBlowup(){
	d3.select(".blowup").remove();
	setPageViewKeys();
	// reenable scroll
	$('body').css({
	    overflow: '',
	    position: '',
	    top: '',
	    width: ""
	}).scrollTop(scrollPos);
}






var data = [];
var contentlist = {};
function makeitems(){
	// var data = [];
	function add(image, blurb, query, title, subtitle, content){
		var object = {
			image: image
			,blurb: blurb
			,query: query
			,title: title
			,subtitle: subtitle
			,content: content
		}
		data.push(object);
	}

	// html content for pages
	make_content_list();
	function make_content_list(){
		function img(s){
			
			//return "<img src='"+s+"'>";
			//return  "<a href='"+s+"'><img src='"+s+"'></a>";
			//return  "<img src='"+s+"' onclick='window.open(this.src)'>";
			return  "<img src='"+s+"' onclick='blowup(this.src)'>";

		}
		function text(s, classes){
			if(classes != undefined)
				return "<p class='"+classes+"''>"+s+"</p>";
			else
				return "<p>"+s+"</p>";
		}
		function caption(s){
			return text(s, "caption");
		}
		function div(classes, contents){
			if(!contents) return "<div class='"+classes+"'></div>";
			else return "<div class='"+classes+"'>"+contents+"</div>";
		}
		var spacer = div("spacer");
		contentlist.icons = ""
			+ img("images/page_images/icons.jpg")
			+ text("App icons for BaseSpace, Illumina's genomics cloud-computing platform.")
			;
		contentlist.titleist = ""
			+ img("images/page_images/titleist.jpg")
			;
		contentlist.flowers = ""
			+ img("images/page_images/flowers_1600.jpg")
			+ text("2017, colored pencil on paper")
			;
		contentlist.drawings = ""
			+ img("images/page_images/flowers_1600.jpg")
			+ caption("Colored pencil on paper")
			+ spacer
			+ img("images/page_images/smith.jpg")
			+ "<p class='caption'>Rendering executed for an artist.<br>Graphite on paper, 56 x 52.6 inches.</p>"
			+ spacer
			+ img("images/page_images/bentshape.jpg")
			+ caption("Charcoal on paper")
			+ spacer
			+ img("images/page_images/fallingwater.jpg")
			+ "<p class='caption'>Rendering executed for an artist.<br>Ballpoint pen on paper, 48.3 x 39.9 inches.</p>"
			+ spacer
			+ img("images/page_images/torso.jpg")
			+ caption("Ink and graphite on paper")
			+ spacer
			+ img("images/page_images/parabola.jpg")
			+ caption("Charcoal on paper, 24.7 x 40 inches")
			;
		contentlist.gp = ""
			+ '<div class="aspectratio horses"><iframe src="https://player.vimeo.com/video/231226964?autoplay=1&amp;loop=1&amp;autopause=0" width="640" height="480" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ img("images/page_images/gp_targethorse.jpg")
			+ img("images/page_images/gp_horse.jpg")
			// + spacer
			+ text("Stochastic process", "heading")
			+ text("Say we have a photo we want to render called the \"target image\". Genetic computer programs seek to replicate this target image through self-generated experimentation. The program process begins by casting random lines across the digital canvas. Most lines don't come even close to the target, but those that come closest are retained by the program and those which don't are discarded. Now we have a new \"generation\" of information and, based on that information, the program refines its aim to more and more accurately reproduce the target image.")
			+ text("Just as in nature, creating a rendering of a photograph with this process involves many generations where individuals, and in this case \"lines\", mate to see if they can create an improved offspring. Literally billions of organisms go extinct and only rarely does a beneficial mutation appear. But unlike nature, the computer can do this very quickly.")
			+ '<div class="aspectratio hand"><iframe src="https://player.vimeo.com/video/169456761?autoplay=1&amp;loop=1&amp;autopause=0" width="640" height="760" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			+ img("images/page_images/gp_hand.jpg")
			+ img("images/page_images/gp_woman.jpg")
			+ img("images/page_images/gp_camera.jpg")
			+ img("images/page_images/gp_triangles.png")
			//+ img("images/page_images/gp_1304121925.cumulative_best.21400.canvas.jpg")
			+ img("images/page_images/gp_1211080-230.best.1009.fullscreen_crop_945.jpg")
			+ img("images/page_images/gp_1211080-230.best.1009.fullscreen_target_945.jpg")
			;
		contentlist.ads = ""
			+ img("images/page_images/ad_set.jpg")
			+ img("images/page_images/ad_startsmart.jpg")
			+ img("images/page_images/ad_secondwind.jpg")
			+ img("images/page_images/ad_theonly.jpg")
			+ img("images/page_images/ad_onlysit.jpg")
			+ img("images/page_images/ad_earlycomp1.jpg")
			+ img("images/page_images/ad_headlines_1500.jpg")
			+ caption("Exploring different line breaks")
			;
		contentlist.bags = ""
			+ img("images/page_images/bags_SFclutch_1800.jpg")
			+ img("images/page_images/bags_SF-Overnight---2017-01-27-18.31.41---thumbnail_repositioned_1800.jpg")
			+ img("images/page_images/bags_SF-Satchel---2017-01-24-23.35.12---thumbnail_repositioned_1800.jpg")
			+ img("images/page_images/bags_grid.jpg")
			+ img("images/page_images/bags_IMG_8892_1200.jpg")
			+ img("images/page_images/bags_2016-12-08-13.04.20_rt2_50_q9_1200.jpg")
			+ img("images/page_images/bags_2016-11-28-13.21.43---drawstring-top-edge_1200.jpg")
			;
		contentlist.event = ""
			+ text("Hershey's Easter Event", "heading")
			+ text("Step and repeat, kiosks and stage backdrop.")
			+ img("images/page_images/hersheys_double.jpg")
			+ img("images/page_images/hersheys_stage.jpg")
			+ spacer
			+ spacer
			+ text("Hershey's BlogHer Conference Suites", "heading")
			+ text("Floor-to-ceiling environmental graphics.")
			+ img("images/page_images/event_perspectivethreewalls.png")
			+ img("images/page_images/event_rightwall.jpg")
			+ img("images/page_images/event_wallgraphic_door.jpg")
			+ img("images/page_images/event_wall_beach.jpg")
			+ img("images/page_images/event_blogher2012_wallD_2000.jpg")
			+ img("images/page_images/event_blogher2012_wallD_detail_1500.jpg")
			+ img("images/page_images/event_blogher2012_wallE_2000.jpg")
			+ img("images/page_images/event_forest.jpg")
			+ spacer
			+ spacer
			+ text("Aramark Guest Chef Event", "heading")
			+ text("Entrance and sponsor banners.")
			+ img("images/page_images/event_aramark.jpg")
			;
		contentlist.oysters = ""
			+ img("images/page_images/oysters_2.jpg")
			+ img("images/page_images/oysters_oysters - Screen shot 2012-09-10 at 3.53.03 AM.jpg")
			+ text("Collaboration with researchers at the University of Rhode Island Department of Oceanography.")
			+ text("The problem: ", "heading")
			+ text("Oyster farming, a large industry in Rhode Island, has been damaged by an infectious disease that is drastically reducing populations. But one strain of oyster is immune. Scientists are working to discover what makes these oysters different.")
			+ text("Challenges: ", "heading")
			+ text("When we project data into a readable form, it can look very different depending on how we view it.  For example, one might wish to look at the interrelatedness of specific genes and/or the timing of when certain genes express themselves in the developing oyster. We have to choose a good visual and conceptual projection in order to see features in the data that matter to us.")
			+ img("images/page_images/oysters_perspectives.jpg")
			+ div("caption credit", 'Credit: Emok via <a href="https://commons.wikimedia.org/wiki/File%3AFirst_angle_projection.svg">Wikimedia Commons</a>')
			+ spacer
			+ text("Solution:", "heading")
			+ text('Software that enabled the researchers to visualize genes as networks of "nodes and edges". The visualization allowed scientists to test their assumptions by "playing" with the networks, in order to reveal structure in the data. The software had to be flexible enough to accommodate yet-unknown forms of data, as the scientists continually restructured their material. As a major benefit, the programs have made it much easier to describe and share the progress of this research in educational settings, with colleagues, across disciplines, and in the scientific literature.')
			+ img("images/page_images/oysters_slider.gif")
			//+ '<iframe src="https://player.vimeo.com/video/170709062?autoplay=1&amp;loop=1&amp;autopause=0" width="640" height="88" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
			+ img("images/page_images/oysters_4.jpg")
			+ img("images/page_images/oysters1.jpg")
			+ img("images/page_images/oysters2.jpg")
			;
		contentlist.fayum = ""
			+ img("images/page_images/fayum.jpg")
			;
		contentlist.gpshapes = ""
			+ '<div class="aspectratio gpshapes"><iframe src="https://player.vimeo.com/video/104474094?autoplay=1&amp;loop=1&amp;title=0&amp;byline=0&amp;portrait=0" width="640" height="384" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div>'
			;
		contentlist.raytrace = ""
			+ img("images/page_images/raytrace.jpg")
			+ text("Capabilities include rendering of spheres and polygons, antialiasing, recursive reflections, refraction within transparent objects, texture mapping, antialiasing, and depth of field blurring.")
			;
		contentlist.developerstats = ""
			+ img("images/page_images/developerstats.jpg")
			;
		contentlist.rd = ""
			+ img("images/page_images/keyart_rd_1600.jpg")
			+ "<p class='caption'>Key art for the documentary <span style='font-style:italic;'>Racing Dreams</span></p>"
			+ img("images/page_images/keyart_skinnydip.jpg")
			+ "<p class='caption'>Key art for <span style='font-style:italic;'>Skinny Dip</span></p>"
			+ img("images/page_images/keyart_vegucated.jpg")
			+ "<p class='caption'>Key art for the documentary <span style='font-style:italic;'>Vegucated</span></p>"
			;
	}

	// create list of items
	make_items_list();
	function make_items_list(){
		//------------------------------------
		add(
			"flowers_th.jpg"
			,"Drawings"
			,"drawings"
			,"Drawings"
			,""
			,contentlist.drawings

		);
		add(
			"gp_th.jpg"
			,"Experimental Rendering"
			,"gp"
			,"Experimental Digital Rendering"
			,"Using simulations of evolution to draw pictures"
			,contentlist.gp

		);
		//------------------------------------
		add(
			"ad_th.jpg"
			,"Ad Campaign"
			,"ad"
			,"Ad Campaign"
			,"Spec ads for Health Warrior"
			,contentlist.ads
		);
		add(
			"rd_th.jpg"
			,"Key Art"
			,"rd"
			,"Key Art"
			,"Film branding"
			,contentlist.rd
		
		);
		//------------------------------------
		add(
			"icons_th.jpg"
			,"App Icons"
			,"icons"
			,"App Icons"
			,"Illumina BaseSpace"
			,contentlist.icons

		);
		add(
			"titleist_th.jpg"
			,"Brochure"
			,"titleist"
			,"Print Brochure"
			,"Titleist"
			,contentlist.titleist

		);
		//------------------------------------
		add(
			"bags_th.jpg"
			,"Product Photography"
			,"bags"
			,"Product Photography"
			,"Leather handbags"
			,contentlist.bags
		);
		add(
			"hersheys_th.jpg"
			,"Event Graphics"
			,"event"
			,"Event Graphics"
			,""
			,contentlist.event

		);
		//------------------------------------
		add(
			"oysters_th.jpg"
			,"Data Visualization"
			,"oysters"
			,"Data Visualization"
			,"Rhode Island School of Design / The University of Rhode Island"
			,contentlist.oysters

		);
		add(
			"fayum_th.jpg"
			,"Scientific Illustration"
			,"fayum"
			,"Scientific Illustration"
			,"The American Museum of Natural History, NYC"
			,contentlist.fayum

		);
		//------------------------------------
		add(
			"gpshapes_th.jpg"
			,"Evolving Shapes"
			,"gpshapes"
			,"Evolving Shapes"
			,"3D shapes generated with evolving code"
			,contentlist.gpshapes

		);
		add(
			"raytrace_th.jpg"
			,"Raytracer"
			,"raytrace"
			,"Raytracer"
			,"Written from scratch"
			,contentlist.raytrace

		);
		//------------------------------------
		add(
			"developerstats_th.jpg"
			,"Analytics Dashboard"
			,"developerstats"
			,"Analytics Dashboard UI"
			,"Illumina BaseSpace app store"
			,contentlist.developerstats

		);
	}

}





// ...
function getProjectIndex(){

	// get query string
	var queries = {};
	$.each(document.location.search.substr(1).split('&'),function(c,q){
	  var i = q.split('=');
	  queries[i[0].toString()] = i[1].toString();
	});

	// get index of query string in data
	var i = data.findIndex(function(d){
		return d.query == queries.project;
	});
	return i;	
}
function goleft(){
	var newindex = pi - 1;
	if(newindex < 0) newindex = data.length - 1;
	else newindex %= data.length;
	window.location = pagename+"?"+keyname+"="+data[newindex].query;
}
function goright(){
	var newindex = (pi+1) % data.length;
	window.location = pagename+"?"+keyname+"="+data[newindex].query;
}
function setPageViewKeys(){
	$("body").off("keydown");
	$("body").keydown(function(e) {
		if(e.keyCode == 37) { // left
			goleft();
		}
		else if(e.keyCode == 39) { // right
			goright();
		}
		else if (e.keyCode == 27) { // escape
		    window.location = "work.html";
		}
	});
}
function setBlowupViewKeys(){
	$("body").off("keydown");
	$("body").keydown(function(e) {
		if(e.keyCode == 37) { // left
			var list = $(".pageContent img")
				.map(function() {
					return this.src;
				})
			.get();
			var i = list.findIndex(function(d){
				return d == $(".blowupImage").attr("data-src");
			});
			i -= 1;
			if(i < 0) i = list.length - 1;
			$(".blowupImage")
			.css("background-image", "url("+list[i]+")")
				.attr("data-src", list[i])
				;
		}
		else if(e.keyCode == 39) { // right
			var list = $(".pageContent img")
				.map(function() {
					return this.src;
				})
			.get();
			var i = list.findIndex(function(d){
				return d == $(".blowupImage").attr("data-src");
			});
			i = (i+1) % list.length;
			$(".blowupImage")
			.css("background-image", "url("+list[i]+")")
				.attr("data-src", list[i])
				;
		}
		else if (e.keyCode == 27) { // escape
		    exitBlowup();
		}
	});
}




function populate() {


	// populate page based on query string
	var item = data[pi];
	d3.select(".pageContent")
		.append("div").attr("class", "title museo")
		.text(item.title)
		;
	d3.select(".pageContent")
		.append("div").attr("class", "subtitle")
		.text(item.subtitle)
		;
	d3.select(".pageContent")
		.append("div").attr("class", "itemContent")
		.html(item.content)
		;


	// previous, next, escape
	d3.selectAll(".goleft .cell, .goright .cell")
		.append("svg")
		.attr("class", "arrow")
		.attr("xmlns", "http://www.w3.org/2000/svg")
		.attr("x", "0px")
		.attr("y", "0px")
		.attr("viewBox", "0 0 7.6 12")
		;
	d3.select(".goleft svg")
		.append("polygon")
		.attr("points", "7.5,10.5 3.1,6 7.6,1.6 6,0 0,6 6,12 ")
		;
	d3.select(".goright svg")
		.append("polygon")
		.attr("points", "0,1.5 4.5,6 0,10.4 1.6,12 7.6,6 1.6,0 ")
		;
	$(".goleft").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goright").mouseover(function(){
		$(this).addClass("rollover");
	});
	$(".goleft, .goright").mouseout(function(){
		$(this).removeClass("rollover");
	});
	$(".goleft").click(goleft);
	$(".goright").click(goright);


}

















