---
layout: default
title: Gallery
permalink: /gallery/
---

<link href="//cdn.rawgit.com/noelboss/featherlight/1.7.9/release/featherlight.min.css" type="text/css" rel="stylesheet" />
<script src="//code.jquery.com/jquery-latest.js"></script>
<script src="//cdn.rawgit.com/noelboss/featherlight/1.7.9/release/featherlight.min.js" type="text/javascript" charset="utf-8"></script>

<a href="#" data-featherlight="{{site.baseurl}}/assets/img/gallery/IMG_1.JPG"><img src="{{site.baseurl}}/assets/img/gallery/IMG_1.JPG"></a>
<a href="#" data-featherlight="{{site.baseurl}}/assets/img/gallery/IMG_2.JPG"><img src="{{site.baseurl}}/assets/img/gallery/IMG_2.JPG"></a>
<a href="#" data-featherlight="{{site.baseurl}}/assets/img/gallery/IMG_3.JPG"><img src="{{site.baseurl}}/assets/img/gallery/IMG_3.JPG"></a>

<script type="text/javascript">
var dir = "{{site.baseurl}}/assets/img/gallery/";
var fileextension = ".jpg";
$.ajax({
    //This will retrieve the contents of the folder if the folder is configured as 'browsable'
    url: dir,
    success: function (data) {
        //List all .png file names in the page
        $(data).find("a:contains(" + fileextension + ")").each(function () {
            var filename = this.href.replace(window.location.host, "").replace("http://", "");
            $("body").append("<img src='" + dir + filename + "'>");
        });
    }
});
</script>