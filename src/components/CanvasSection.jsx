import { Canvas, extend, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { Html, TransformControls, Center, useTexture, useGLTF, OrbitControls } from '@react-three/drei';
import { OrthographicCamera} from 'three';

extend({ OrthographicCamera }); // Make OrthographicCamera available as a JSX component





function Model() {

  const { nodes } = useGLTF('./itemParts/Scene.glb');

  const wallFloorTexture = useTexture('./itemParts/floorWallBake.jpg');
  const cartTexture = useTexture('./itemParts/carttBake.jpg');
  const boardAndCalTexture = useTexture('./itemParts/boardAndCalBake.jpg');
  const doorTexture = useTexture('./itemParts/doorBake.jpg');
  const lockerTexture = useTexture('./itemParts/lockerrBake.jpg');

  const backPackTexture = useTexture('./itemParts/backpackBake.jpg');
  const calculatorTexture = useTexture('./itemParts/calculatorBake.jpg');
  const crayonTexture = useTexture('./itemParts/crayonBake.jpg');
  const joypadTexture = useTexture('./itemParts/joyPadBake.jpg');
  const lunchbagTexture = useTexture('./itemParts/lunchbagBake.jpg');
  const pencilPackTexture = useTexture('./itemParts/pencilPackBake.jpg');

  wallFloorTexture.flipY = false;
  cartTexture.flipY = false;
  boardAndCalTexture.flipY = false;
  doorTexture.flipY = false;
  lockerTexture.flipY = false;

  backPackTexture.flipY = false;
  calculatorTexture.flipY = false;
  crayonTexture.flipY = false;
  joypadTexture.flipY = false;
  lunchbagTexture.flipY = false;
  pencilPackTexture.flipY = false;



  return (
    <Center>
      {/* Walls */}
      <mesh geometry={nodes.floorWall.geometry}>
        <meshBasicMaterial map={wallFloorTexture} />
      </mesh>

      {/* Cart */}
      <mesh geometry={nodes.cart.geometry} 
            position={[-1.11, -1.56, -2.07] }
            rotation={[0, 0.75, 0]}>
        <meshBasicMaterial map={cartTexture} />
      </mesh>

      {/* Board and Calendar */}
      <mesh geometry={nodes.boardAndCal.geometry} 
            position={[-0.2, 0.9, -1.8] }
            rotation={[0, 0, -1.72]}>
        <meshBasicMaterial map={boardAndCalTexture} />
      </mesh>

      {/* Door */}
      <mesh geometry={nodes.door.geometry} 
            position={[-0.43, 0.72, -0.06] }
            rotation={[1.02, 0, 1.56]}>
        <meshBasicMaterial map={doorTexture} />
      </mesh>

      {/* Lockers */}
      <mesh geometry={nodes.lockers.geometry} 
            position={[-1.55, -0.55, 2.28] }
            rotation={[0, 0, 0]}>
        <meshBasicMaterial map={lockerTexture} />
      </mesh>

      {/* JoyPad */}
      <mesh
        geometry={nodes.joyPad.geometry} 
        position={[-1.06, -0.52, -2.315] }
        rotation={[0, -2.23, 0]}>
        <meshBasicMaterial map={joypadTexture} />
        <Html 
          position={[0, 0.3, 0]}
          wrapperClass="label"
          center
          distanceFactor={ 1 }
        >
          JoyPad
        </Html>
      </mesh>

      {/* calculator */}
      <mesh
        geometry={nodes.calculator.geometry} 
        position={[-1.13, -0.566, -1.8] }
        rotation={[0, -1.55, 0]}>
        <meshBasicMaterial map={calculatorTexture} />
        <Html 
          position={[0.2, 0.05, 0]}
          wrapperClass="label"
          distanceFactor={ 1 }
        >
          Calculator
        </Html>
      </mesh>

      {/* crayons */}
      <mesh
        geometry={nodes.crayons.geometry} 
        position={[-0.912, -0.37, -1.71] }
        rotation={[-3, 0.01, -4.75]}>
        <meshBasicMaterial map={crayonTexture} />
        <Html 
          position={[-0.2, 0, -0.1]}
          wrapperClass="label"
          distanceFactor={ 1 }
        >
          Crayons
        </Html>
      </mesh>

      {/* backpack */}
      <mesh
        geometry={nodes.backpack.geometry} 
        position={[-0.8, -1.23, 1.77] }
        rotation={[0, 2.97, 0]}>
        <meshBasicMaterial map={backPackTexture} />
        <Html 
          position={[0, 0.3, 0.3]}
          wrapperClass="label"
          center
          distanceFactor={ 1 }
        >
          Backpack
        </Html>
      </mesh>

      {/* lunchbag */}
      <mesh
        geometry={nodes.lunchbag.geometry} 
        position={[-0.91, 1.3, 1.72] }
        rotation={[0, 2.77, 0]}>
        <meshBasicMaterial map={lunchbagTexture} />
        <Html 
          position={[0, 0.2, 0.5]}
          wrapperClass="label"
          distanceFactor={ 1 }
        >
          Lunch bag
        </Html>
      </mesh>

      {/* pencilpack */}
      <mesh
        geometry={nodes.pencilPack.geometry} 
        position={[-1.18, 0.51, 1.69] }
        rotation={[2.1, -3.4, 0.3]}>
        <meshBasicMaterial map={pencilPackTexture} />
        <Html 
          position={[0, -0.5, 0]}
          wrapperClass="label"
          distanceFactor={ 1 }
        >
          Pencil Pack
        </Html>
      </mesh>
    </Center>
  );
}










function SetupCamera() {
  const cameraRef = useRef();
  const { set, scene } = useThree();

  useEffect(() => {
    const aspectRatio = window.innerWidth / window.innerHeight;
    const frustumSize = 3.3;
    const halfFrustum = frustumSize / 2;

    set({ camera: cameraRef.current });

    cameraRef.current.left = -halfFrustum * aspectRatio;
    cameraRef.current.right = halfFrustum * aspectRatio;
    cameraRef.current.top = halfFrustum;
    cameraRef.current.bottom = -halfFrustum;
    cameraRef.current.near = -0.3;
    cameraRef.current.far = 105;
    cameraRef.current.updateProjectionMatrix();

    // Rotate the camera to look at the origin
    cameraRef.current.lookAt(0, 0, 0);

  }, [set, scene]);

  return (
    <orthographicCamera
      ref={cameraRef}
      position={[-100, 0, 0]}
    />
  );
}


export default function CanvasSection() {
  const cameraRef = useRef();

  return (
    <Canvas>
      <color args={['#ffe94d']} attach="background" />
      <SetupCamera />
      <OrbitControls
        ref={cameraRef}
        enableZoom={false}
        minAzimuthAngle = {-Math.PI / -1}
        maxAzimuthAngle = {Math.PI / 100}
        maxPolarAngle = { 1.6 }
        minPolarAngle={ 1.5 }
      />
      <Model />
      <Html 
        wrapperClass='helperLabel'
        position={[0, 1.55, -3.2]}
        distanceFactor={ 1 }
        >
          Click & Drag to move around!
      </Html>
    </Canvas>
  );
}