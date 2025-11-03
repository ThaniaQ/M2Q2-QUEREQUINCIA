const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(8, 4.2, 10);
camera.lookAt(0, 1.2, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const texture = new THREE.TextureLoader().load('textures/Woodenplanks.jpg');
const cText = new THREE.TextureLoader().load('textures/Countertops.jpg');
const carp = new THREE.TextureLoader().load('textures/Carpet.jpg');
const marb = new THREE.TextureLoader().load('textures/marble.jpg');

// Floor
const fGeo = new THREE.BoxGeometry(4, 0.15, 4);
const fMat = new THREE.MeshStandardMaterial({ map: marb, metalness: 0.2, roughness: 0.7 });
const floor = new THREE.Mesh(fGeo, fMat);
floor.position.set(0, -0.075, 0);
scene.add(floor);

// Floor 2 (Wooden)
const fWood = new THREE.BoxGeometry(3.85, 0.15, 3.80);
const fM = new THREE.MeshStandardMaterial({ map: texture, metalness: 0.2, roughness: 0.7 });
const Woodentiles = new THREE.Mesh(fWood, fM);
Woodentiles.position.set(0.1, 0.075, 0.2);
scene.add(Woodentiles);

// Back wall
const wGeo = new THREE.BoxGeometry(4, 3.5, 0.3);
const wMat = new THREE.MeshStandardMaterial({ map: marb, metalness: 0.2, roughness: 0.7 });
const bWall = new THREE.Mesh(wGeo, wMat);
bWall.position.set(0, 1.60, -1.9);
scene.add(bWall);

// Counter top wooden
const cGeo = new THREE.BoxGeometry(1.15, 0.1, 2.30);
const cMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7});
const countertop = new THREE.Mesh(cGeo, cMat);
countertop.position.set(-1.5, 0.65, 0.70);
scene.add(countertop);

// Counter below
const bGeo = new THREE.BoxGeometry(1, 0.5, 2.2);
const bMat = new THREE.MeshStandardMaterial({ map: marb, metalness: 0.2, roughness: 0.7});
const counter = new THREE.Mesh(bGeo, bMat);
counter.position.set(-1.5, 0.4, 0.70);
scene.add(counter);

// Counter 2 (top)
const cntGeo = new THREE.BoxGeometry(1, 0.5, 2.2);
const cntMat = new THREE.MeshStandardMaterial({ map: marb, metalness: 0.2, roughness: 0.7});
const counter2 = new THREE.Mesh(cntGeo, cntMat);
counter2.position.set(-1.5, 2.3, 0.70);
scene.add(counter2);

// Light under the counter
const cLight = new THREE.PointLight(0xbbeeff, 0.6, 6, 1);
cLight.position.set(-1.5, 1.8, 0.70);
scene.add(cLight);

// Counter door 2 (top)
const ctdGeo = new THREE.BoxGeometry(0.9, 0.32, 0.9);
const ctdMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7});
const counterd1 = new THREE.Mesh(ctdGeo, ctdMat);
counterd1.position.set(-1.43, 2.3, 0.24);
scene.add(counterd1);

// Counter door 2 (top)
const cddDoor = new THREE.BoxGeometry(0.9, 0.32, 0.9);
const cddMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7});
const counterd2 = new THREE.Mesh(cddDoor, cddMat);
counterd2.position.set(-1.43, 2.3, 1.2);
scene.add(counterd2);

// Counter door below
const cDoor = new THREE.BoxGeometry(0.9, 0.32, 0.9);
const ctMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7});
const counterdoor1 = new THREE.Mesh(cDoor, ctMat);
counterdoor1.position.set(-1.43, 0.37, 0.24);
scene.add(counterdoor1);

// Sink
const sGin = new THREE.BoxGeometry(0.7, 0.20, 0.9);
const stMat = new THREE.MeshStandardMaterial({ color: 0x696969});
const sink = new THREE.Mesh(sGin, stMat);
sink.position.set(-1.43, 0.65, 0.75);
scene.add(sink);

// Carpet
const flGeo = new THREE.BoxGeometry(0.6, 0.1, 0.8);
const flMat = new THREE.MeshStandardMaterial({ map: carp, metalness: 0.2, roughness: 0.7});
const carpet = new THREE.Mesh(flGeo, flMat);
carpet.position.set(-0.56, 0.13, 0.65);
scene.add(carpet);

// Counter door 2 below
const ctDoor = new THREE.BoxGeometry(0.9, 0.32, 0.9);
const cTMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7});
const counterdoor2 = new THREE.Mesh(ctDoor, cTMat);
counterdoor2.position.set(-1.43, 0.37, 1.2);
scene.add(counterdoor2);

// Fridge
const frGeo = new THREE.BoxGeometry(0.65, 3.2, 1.10);
const frMat = new THREE.MeshStandardMaterial({ color: 0x8EA5BD});
const fridge = new THREE.Mesh(frGeo, frMat);
fridge.position.set(-1.5, 0.4, -1.1);
scene.add(fridge);

// Fridge (door)
const drGeo = new THREE.BoxGeometry(0.18, 3.2, 1.4);
const drMat = new THREE.MeshStandardMaterial({ color: 0x98AFC7});
const fridgedoor = new THREE.Mesh(drGeo, drMat);
fridgedoor.position.set(-1.18, 0.4, -1.15);
scene.add(fridgedoor);

// Window wooden block
const winGeo = new THREE.BoxGeometry(1.7, 0.25, 0.4);
const winMat = new THREE.MeshStandardMaterial({ map: cText, metalness: 0.2, roughness: 0.7});
const windowblock = new THREE.Mesh(winGeo, winMat);
windowblock.position.set(1.0, 1.2, -1.7);
scene.add(windowblock);

// Window - Glass
const gGeo = new THREE.BoxGeometry(1.6, 1.2, 0.2);
const gMat = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.6, flatShading: true, metalness: 0.3, roughness: 0.2 });
const gFrame = new THREE.Mesh(gGeo, gMat);
gFrame.position.set(1.0, 1.9, -1.8);
scene.add(gFrame);

// Window light
const windowGlow = new THREE.PointLight(0xffff00, 2, 1, 1);
windowGlow.position.set(1.0, 1.8, -1.8);
scene.add(windowGlow);

const windowLight = new THREE.SpotLight(0xffffaa, 10, 8, Math.PI / 4, 0.1, 1);
windowLight.position.set(1.0, 1.8, -1.8);
windowLight.target.position.set(1.0, 0.0, -1.0);
scene.add(windowLight);
scene.add(windowLight.target);

// Side wall
const sGeo = new THREE.BoxGeometry(4, 3.5, 0.3);
const sWall = new THREE.Mesh(wGeo, wMat);
sWall.rotation.y = Math.PI / 2;
sWall.position.set(-2, 1.60, 0);
scene.add(sWall);

// Light directed to make room visible
const dirLight = new THREE.DirectionalLight(0xffffff, 1.7);
dirLight.position.set(5, 10, 7);
scene.add(dirLight);

function animate() {
requestAnimationFrame(animate);
renderer.render(scene, camera);
}

animate();