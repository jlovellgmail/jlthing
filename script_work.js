cout = console.log;
var $win = $(window)
$(document).ready(readyhandler);
$(document).scroll(scrollhandler);
var pagename = "project.html";
var keyname = "project";
function readyhandler(){
	makeitems();
}
function scrollhandler(){
	// do nothing
}
function makeitems(){
	var data = [];
	function add(image, blurb, query, title, subtitle){
		var object = {
			image: image
			,blurb: blurb
			,query: query
			,title: title
			,subtitle: subtitle
		}
		data.push(object);
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

		);
		add(
			"gp_th.jpg"
			,"Experimental Rendering"
			,"gp"
			,"Experimental Rendering"
			,"Using simulations of evolution to draw pictures"

		);
		//------------------------------------
		add(
			"ads_th.jpg"
			,"Ad Campaign"
			,"ads"
			,"Ad Campaign"
			,"Spec ads for Health Warrior"

		);
		add(
			"rd_th.jpg"
			,"Key Art"
			,"rd"
			,"Key Art"
			,"Film branding"
		
		);
		//------------------------------------
		add(
			"icons_th.jpg"
			,"App Icons"
			,"icons"
			,"App Icons"
			,"Illumina BaseSpace"

		);
		add(
			"titleist_th.jpg"
			,"Brochure"
			,"titleist"
			,"Print Brochure"
			,"Titlelist"

		);
		//------------------------------------
		add(
			"bags_th.jpg"
			,"Product Photography"
			,"bags"
			,"Product Photography and Retouching"
			,"Leather Handbags"

		);
		add(
			"hersheys_th.jpg"
			,"Event Graphics"
			,"event"
			,"Event Graphics"
			,"The Hershey's Company"

		);
		//------------------------------------
		add(
			"oysters_th.jpg"
			,"Data Visualization"
			,"oysters"
			,"Data Visualization"
			,"Rhode Island School of Design / The University of Rhode Island"

		);
		add(
			"fayum_th.jpg"
			,"Scientific Illustration"
			,"fayum"
			,"Scientific Illustration"
			,"The American Museum of Natural History, NYC"

		);
		//------------------------------------
		add(
			"gpshapes_th.jpg"
			,"Evolving Shapes"
			,"gpshapes"
			,"Evolving Shapes"
			,"3D shapes generated with evolving code"

		);
		add(
			"raytrace_th.jpg"
			,"Raytracer"
			,"raytrace"
			,"Raytracer"
			,"Written from scratch"

		);
		//------------------------------------
		add(
			"developerstats_th.jpg"
			,"Analytics dashboard"
			,"developerstats"
			,"Analytics dashboard UI design"
			,"Illumina BaseSpace app store"

		);
	}


	// create thumbnails
	var items = 
		d3.select(".workbody .content")
		.selectAll(".item")
		.data(data)
		;
	var insideitems = 
		items.enter()
		.append("div").attr("class", "item small")
		.append("div").attr("class", "insideitem")
		;
	var links = insideitems
		.append("a").attr("href", function(d){ return pagename+"?"+keyname+"="+d.query; })
		;
	links
		.append("div").attr("class", "thumbnail")
		.append("img").attr("src", function(d){ return "images/"+d.image; })
		;
	links
		.append("div").attr("class", "blurb")
		.append("div").attr("class", "container")
		.text(function(d){ return d.blurb; })
		;


	// align odd item
	function isOdd(num) { return num % 2;}
	if(isOdd(data.length)){
		// create dummy item
		var item = 
			d3.select(".workbody .content")
			.append("div").attr("class", "item small dummy")
			;
	}



}











