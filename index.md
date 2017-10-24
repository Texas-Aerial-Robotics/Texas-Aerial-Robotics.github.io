---
layout: default
title: About
home: true
---


<div id="model"></div>

Texas Aerial Robotics is an international intercollegiate competition team based out of the University of Texas at Austin. Currently, we are preparing for the 2017 International Aerial Robotics Competition in Atlanta, Georgia. The competition itself will be held in both Atlanta and Beijing, for the Asia/Pacific portion of the competition.

More information about the competition can be found [here](http://www.aerialroboticscompetition.org/index.php). Below is video preview of the competition composed of clips from previous years.

<div class='embed-container'><iframe src='https://player.vimeo.com/video/103487384?title=0&byline=0&portrait=0' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

We are currently based out of the Aerospace Department in the Cockrell School of Engineering at UT, but have members in almost all engineering majors. Although we are mostly an engineering organization, we do have a few majors outside of the realm.

![TAR Squad]({{site.baseurl}}/assets/img/team.jpg)

Here is short video recapping our progress for IARC 2017.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/kKEPM2Dor_M?modestbranding=1&autohide=1&showinfo=0' frameborder='0' allowfullscreen></iframe></div>


<script src="{{site.baseurl}}/assets/js/three.min.js"></script>
<script src="{{site.baseurl}}/assets/js/Detector.js"></script>
<script src="{{site.baseurl}}/assets/js/stats.min.js"></script>

<script>
var container = document.getElementById( 'model' ), stats;
var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
var windowHalfX = 400;
var windowHalfY = 400;
init();
animate();
function init() {
	camera = new THREE.PerspectiveCamera( 15, 1, 1, 2000 );
	camera.position.z = 4;
	// scene
	scene = new THREE.Scene();
	var ambient = new THREE.AmbientLight( 0x444444 );
	scene.add( ambient );
	var directionalLight = new THREE.DirectionalLight( 0xf2f2f2 );
	directionalLight.position.set( 0, 0, 1 ).normalize();
	scene.add( directionalLight );
	// BEGIN Clara.io JSON loader code
	var objectLoader = new THREE.ObjectLoader();
	objectLoader.load("{{site.baseurl}}/assets/3dmodel.json", function ( obj ) {
	 	scene.add( obj );
	} );
	// END Clara.io JSON loader code
	renderer = new THREE.WebGLRenderer({ alpha: true });
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setClearColor( 0x000000, 0 );
	renderer.setSize( 400, 400 );
	container.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	//
	window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
	windowHalfX = $("#model").width()/2;
	windowHalfY = 200;
	camera.aspect = 1;
	camera.updateProjectionMatrix();
	renderer.setSize( 400, 400 );
}
function onDocumentMouseMove( event ) {
	mouseX = ( event.clientX - windowHalfX ) / 2;
	mouseY = ( event.clientY - windowHalfY ) / 2;
}
//
function animate() {
	requestAnimationFrame( animate );
	render();
}
function render() {
	camera.position.x =  -( mouseX - camera.position.y ) * .008;
	camera.position.y = 2 + -( mouseY - camera.position.y ) * .03;
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}
</script>
----

# Sponsors

![Solidworks]({{ site.baseurl}}/assets/img/solidworks.png#fifty)
![GDMS]({{ site.baseurl}}/assets/img/gdms.png#fifty)
