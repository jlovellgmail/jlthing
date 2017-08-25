cout = console.log;
var $win = $(window)
$(document).ready(readyhandler);
$(document).scroll(scrollhandler);
function readyhandler(){
	makeitems();
}
function scrollhandler(){
	// do nothing
}
function makeitems(){
	var data = [];
	function add(image, blurb, link, title, subtitle, classarg){
		var object = {
			image: image
			,blurb: blurb
			,link: link
			,title: title
			,subtitle: subtitle
			// ,content: content
			,class: classarg
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
			//,"https://www.behance.net/gallery/55239291/Drawing"
			,"drawings.html"
			,"Drawings"
			,""

		);


		add(
			"gp_th.jpg"
			,"Experimental Rendering"
			//,"https://www.behance.net/gallery/55239429/Experimental-rendering-software"
			,"gp.html"
			,"Experimental Rendering"
			,"Using simulations of evolution to draw pictures"

		);
		//------------------------------------
		add(
			"ads_th.jpg"
			,"Ad Campaign"
			//,"https://www.behance.net/gallery/55195359/Ad-Campaign"
			,"ads.html"
			,"Ad Campaign"
			,"Spec ads for Health Warrior"

		);
		add(
			"rd_th.jpg"
			,"Key Art"
			//,"https://www.behance.net/gallery/55239891/Drawing"
			,"rd.html"
			,"Key Art"
			,"Film branding"
		
		);
		//------------------------------------
		add(
			"icons_th.jpg"
			,"App Icons"
			//,"https://www.behance.net/gallery/55584281/App-icons"
			,"icons.html"
			,"App Icons"
			,"Illumina BaseSpace"

		);
		add(
			"titleist_th.jpg"
			,"Brochure"
			//,"https://www.behance.net/gallery/55239511/Print-brochure-Titleist"
			,"titleist.html"
			,"Print Brochure"
			,"Titlelist"

		);
		/*
		add(
			"torso_th.jpg"
			,"Drawing"
			//,"https://www.behance.net/gallery/55239481/Drawing"
			,"torso.html"
			,"Drawing"
			,""

		);
		*/
		//------------------------------------
		add(
			"bags_th.jpg"
			,"Photography"
			//,"https://www.behance.net/gallery/55467151/Retouching-Product-photography"
			,"bags.html"
			,"Product Photography and Retouching"
			,"Leather Handbags"

		);
		/*
		add(
			"smith_th.jpg"
			,"Drawing"
			//,"https://www.behance.net/gallery/55239543/Drawing-rendered-for-an-artist"
			,"smith.html"
			,"Drawing"
			,"Rendering executed for an artist"

		);
		*/
		/*
		add(
			"resist_th.jpg"
			,"Logo"
			//,"https://www.behance.net/gallery/55459351/Logo"
			,"resist.html"
			,"Logo"
			,"Apparel company"

		);
		*/
		add(
			"hersheys_th.jpg"
			,"Event Graphics"
			//,"https://www.behance.net/gallery/55239589/Signage-for-an-event"
			,"event.html"
			,"Event Graphics"
			,"The Hershey's Company"

		);
		/*
		add(
			"bentshape_th.jpg"
			,"Drawing"
			//,"https://www.behance.net/gallery/55239743/Drawing"
			,"bentshape.html"
			,"Drawing"
			,""

		);
		*/
		add(
			"oysters_th.jpg"
			,"Data Visualization"
			//,"https://www.behance.net/gallery/55239711/Genomics-data-visualization-software"
			,"oysters.html"
			,"Data Visualization"
			,"Rhode Island School of Design / The University of Rhode Island"

		);
		add(
			"fayum_th.jpg"
			,"Scientific Illustration"
			//,"https://www.behance.net/gallery/55240013/Scientific-Illustration-for-a-museum-publication"
			,"fayum.html"
			,"Scientific Illustration"
			,"The American Museum of Natural History, NYC"

		);
		add(
			"gpshapes_th.jpg"
			,"Evolving Shapes"
			//,"https://www.behance.net/gallery/55239871/3D-forms-created-with-genetic-programs"
			,"gpshapes.html"
			,"Evolving Shapes"
			,"3D shapes generated with evolving code"

		);
		/*
		add(
			"fallingwater_th.jpg"
			,"Drawing"
			//,"https://www.behance.net/gallery/55239823/Drawing-rendered-for-an-artist"
			,"fallingwater.html"
			,"Drawing"
			,"Rendering executed for an artist"

		);
		*/
		add(
			"raytrace_th.jpg"
			,"Raytracer"
			//,"https://www.behance.net/gallery/55239777/3D-renderer-written-from-scratch"
			,"raytrace.html"
			,"Raytracer"
			,"Written from scratch"

		);
		add(
			"developerstats_th.jpg"
			,"Analytics dashboard"
			//,"https://www.behance.net/gallery/55239949/Web-app-store-metrics"
			,"developerstats.html"
			,"Analytics dashboard UI design"
			,"Illumina BaseSpace app store"

		);

		// reomve for centering
		/*
		add(
			"asymptote_th.jpg"
			,"Drawing"
			//,"https://www.behance.net/gallery/55239891/Drawing"
			,"drawing2.html"
			,"Drawing"
			,""
		
		);
		*/
		// hidden item for centering
		/*
		add(
			"rd_th.jpg"
			,"hidden"
			,""
			,""
			,""
			,"hide"

		);
		*/


		/*
		add(
			"evolvingcode_th.jpg"
			,"Evolving Code"
			,"https://www.behance.net/gallery/55240077/Experiments-with-evolving-code"
		);
		add(
			"np_th.jpg"
			,"Network Programs"
			,"https://www.behance.net/gallery/55240185/Genetic-programs-with-a-network-structure"
		);
		*/
		

	}


	// create thumbnails
	var items = 
		d3.select(".workbody .content")
		//.append("div").attr("class", "wrap")
		.selectAll(".item")
		.data(data)
		;
	var insideitems = 
		items.enter()
		.append("div").attr("class", "item small")
		.append("div").attr("class", "insideitem")
		;
	var links = insideitems
		.append("a").attr("href", function(d){ return d.link; })
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
		var item = 
			d3.select(".workbody .content")
			.append("div").attr("class", "item small dummy")
			;
	}


}











