---
layout: default
title: Gallery
permalink: /gallery/
---


<link href="//cdn.rawgit.com/noelboss/featherlight/1.7.9/release/featherlight.min.css" type="text/css" rel="stylesheet" />
<script src="//code.jquery.com/jquery-latest.js"></script>
<script src="//cdn.rawgit.com/noelboss/featherlight/1.7.9/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>


<div id="images">
<a href="#" data-featherlight="{{site.baseurl}}/assets/img/gallery/IMG_1.JPG"><img src="{{site.baseurl}}/assets/img/gallery/IMG_1.JPG"></a>
<a href="#" data-featherlight="{{site.baseurl}}/assets/img/gallery/IMG_2.JPG"><img src="{{site.baseurl}}/assets/img/gallery/IMG_2.JPG"></a>
<a href="#" data-featherlight="{{site.baseurl}}/assets/img/gallery/IMG_3.JPG"><img src="{{site.baseurl}}/assets/img/gallery/IMG_3.JPG"></a>
</div>

<script type="text/javascript">
var folder = "/assets/img/gallery/";
var node = document.getElementById('images');
var html = "";
$.ajax({
    url : folder,
    success: function (data) {
    	console.log(data);
    	$("body").append("<section class='content'>");
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
            	//console.log("<img src='"+ folder + val +"'>");
                //$("body").append( "<img src='"+ folder + val +"'>" );
                html = html + "<img src='"+ folder + val +"'>";
            } 

        });
        node.innerHTML = html;
    }

});
</script>
