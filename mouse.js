  const darkBlue = new THREE.Color( 0x0D4F8B );
  const gray = new THREE.Color(0xD3D3D3);
  const blue = new THREE.Color(0x007FFF);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

  scene.background = blue;

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  const ambientLight = new THREE.AmbientLight( 0x000000 );
  const lights = [];
  lights[ 0 ] = new THREE.PointLight( 0xFFFFFF, 1, 0 );
  lights[ 1 ] = new THREE.PointLight( 0xFFFFFF, 1, 0 );
  lights[ 2 ] = new THREE.PointLight( 0xFFFFFF, 1, 0 );
  lights[ 3 ] = new THREE.PointLight( 0xFFFFFF, 1, 0 );
  lights[ 4 ] = new THREE.PointLight( 0xFFFFFF, 1, 0 );

  lights[ 0 ].position.set( 0, 150, 150 );
  lights[ 1 ].position.set( 100, 200, 150 );
  lights[ 2 ].position.set( 100, -200, 100 );
  lights[ 3 ].position.set( -100, 100, 200);
  lights[ 4 ].position.set( -100, 100, 100 );

  scene.add( ambientLight );
  scene.add( lights[ 0 ] );
  scene.add( lights[ 1 ] );
  scene.add( lights[ 2 ] );
  scene.add( lights[ 3 ] );
  scene.add( lights[ 4 ] );


  const geometry = new THREE.BoxGeometry( 50, 50, 50);

  const material1 = new THREE.MeshStandardMaterial({ wireframe: false, flatShading: true, metalness: 0.7, roughness: 0.01 });
  const material2 = new THREE.MeshStandardMaterial({ wireframe: true, flatShading: true });

  material1.color = gray;
  material2.color = blue;

  const cube1 = new THREE.Mesh( geometry, material1 );
  // const cube2 = new THREE.Mesh( geometry, material2 );

  scene.add( cube1 );

  camera.position.z = 100;

  // function animate() {
  //   requestAnimationFrame( animate );
    let isGray = true;

    const domEvents = new THREEx.DomEvents(camera, renderer.domElement);

    domEvents.addEventListener(cube1, 'mouseover', function(event) {

      const material = event.target.material;

      if (isGray) {
        material.color = blue;
        scene.background = gray;
        isGray = false;
      } else {
        material.color = gray;
        scene.background = blue;
        isGray = true;
      }

      // scene.add( cube2 );
      return renderer.render(scene, camera);
    });

  function animate() {
    requestAnimationFrame( animate );

    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;

    renderer.render( scene, camera );
  }


  animate();
