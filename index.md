---
layout: default
title: About
home: true
---

<span id="rcanvas" class="button inactive">2d canvas renderer</span>
			<span id="rwebgl" class="button">WebGL renderer</span>

Texas Aerial Robotics is an international intercollegiate competition team based out of the University of Texas at Austin. Currently, we are preparing for the 2017 International Aerial Robotics Competition in Atlanta, Georgia. The competition itself will be held in both Atlanta and Beijing, for the Asia/Pacific portion of the competition.

More information about the competition can be found [here](http://www.aerialroboticscompetition.org/index.php). Below is video preview of the competition composed of clips from previous years.

<div class='embed-container'><iframe src='https://player.vimeo.com/video/103487384?title=0&byline=0&portrait=0' frameborder='0' webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>

We are currently based out of the Aerospace Department in the Cockrell School of Engineering at UT, but have members in almost all engineering majors. Although we are mostly an engineering organization, we do have a few majors outside of the realm.

Here is short video recapping our progress for IARC 2017.

<div class='embed-container'><iframe src='https://www.youtube.com/embed/kKEPM2Dor_M?modestbranding=1&autohide=1&showinfo=0' frameborder='0' allowfullscreen></iframe></div>


<script src="{{site.baseurl}}/assets/js/three.min.js"></script>
<script src="{{site.baseurl}}/assets/js/Detector.js"></script>
<script src="{{site.baseurl}}/assets/js/stats.min.js"></script>

<script>
var container, stats;
var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
init();
animate();
function init() {
	container = document.getElementById( 'model' );
	camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
	camera.position.z = 4;
	// scene
	scene = new THREE.Scene();
	var ambient = new THREE.AmbientLight( 0x444444 );
	scene.add( ambient );
	var directionalLight = new THREE.DirectionalLight( 0xffeedd );
	directionalLight.position.set( 0, 0, 1 ).normalize();
	scene.add( directionalLight );
	// BEGIN Clara.io JSON loader code
	var objectLoader = new THREE.ObjectLoader();
	objectLoader.load("{{site.baseurl}}/assets/3dmodel.json", function ( obj ) {
	 	scene.add( obj );
	} );
	// END Clara.io JSON loader code
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	//
	window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
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
	camera.position.x += ( mouseX - camera.position.x ) * .15;
	camera.position.y += ( - mouseY - camera.position.y ) * .15;
	camera.lookAt( scene.position );
	renderer.render( scene, camera );
}
</script>
----

# Sponsors

![Solidworks]({{ site.baseurl}}/assets/img/solidworks.png)
![GDMS]({{ site.baseurl}}/assets/img/gdms.png)
