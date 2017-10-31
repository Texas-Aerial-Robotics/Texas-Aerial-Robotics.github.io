---
---
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
