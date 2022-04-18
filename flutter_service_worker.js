'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f92ccca7727c81fdfc5b02487db6eb17",
"index.html": "f929ac9fb8f08a2c40555c586946c3f8",
"/": "f929ac9fb8f08a2c40555c586946c3f8",
"main.dart.js": "86ad9051430855e8cca60145874030c6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0ab86e662515757b8662854d61988602",
".git/config": "437017c38374f334313c8a01fbc8c56f",
".git/objects/61/e53beb8c9957dea0b8ff10c8622a08f9f805d1": "939da9a1a82e794503826271bc94d5eb",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/f7adad03b89e0842eaa76ed74ebc930de1fc15": "79206d4e7dfdafc47d323aab996c3a47",
".git/objects/59/70bade40d0b42e207f5e90e029434234f98222": "141b56f23884650bd2e68fa9c68ed8ff",
".git/objects/92/8559abbe6aeb918bf1dfda16c1df82cb1cdf14": "89ea65293f48b39afc714d2d4b7b8ff8",
".git/objects/92/2d1ff7ccd7c7d7020d67b6f8287a576e89b633": "3cddc2dc302daaa614cf257915386b9f",
".git/objects/0c/d774b80ee8ba410065aa55e6bc0c3dcf69e06a": "f9314e6c01341f7819b2ad0536523e5d",
".git/objects/68/2301006d0b6219ce4a20ebcbf655c1c596bdac": "0366fe8ede982d197002ce7f32b63a9a",
".git/objects/57/48dd46191ff400fd6114817a067722e06ca272": "37774ed3a8d7e32c890862e79e7725b9",
".git/objects/3b/5b2e13c501044dd73cc82249585d4cfd350e39": "b9c10eaedeeeb3ac984e97c1de3daa53",
".git/objects/6f/0f6e28148ddb18c8d3e15688e784b99101e55b": "f4f2af278091ce64f87497ff696f2a02",
".git/objects/6f/fc4a23a897fdda5c105366224f35ebd3a57cd7": "38bd119f4387b76d398c82eefdd6abe1",
".git/objects/9b/4a211ec6ea46a0c586e5742bea37203cbff3c1": "0e6a33ed4ef0f60242e76201a3059631",
".git/objects/9e/c8ee2555d9df6a858366f9a02d0f98d5db0013": "a679b03132b267dfd847542fce208dec",
".git/objects/6a/319cba9971f50270af7f08a4ad9b7a49e727e2": "106114eb4d10ea5f38c3a1129b801f50",
".git/objects/35/284cc531b1c11a1a52a4f663ac261717bfeac1": "f3fc763007dadc4f60ff9db56ef12e6e",
".git/objects/35/51beff808a6eddab4ba55ab52efa2901f499ba": "04c524b93db55fa3d4b5ce2ceb47dbd5",
".git/objects/69/c9e4601e48fe5bfc99aa650c64396607e136e5": "c6d016faa623da0a1d83bea5ee72f606",
".git/objects/3c/d1a3d375ee3a4fd4864402bf999c8cf157689e": "5afe53cb7fa1bab1b8a359b83c6b7f3c",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/56/3f203a391ff36a7996f5b17eb49fab6a49fdfd": "041680e9dbfd6dd9aa9e69372ea3bafb",
".git/objects/56/3829074c1e8ee4e108aedd6299e862e5683bb4": "3527da18394324529a9da4e56c708872",
".git/objects/51/1a7cca83aa1122e86e20544d5f141c6a590775": "b1eede598d6fcfbfe74fe76f9caa5ea1",
".git/objects/93/305725314d9e1aec7244b32cbf7261d602fda1": "688b38c73d6b6e8b76673aa4626492c2",
".git/objects/05/64507d9dd8401d546291a6e214183ad09c6359": "444255a171e261baf0838a2a677005af",
".git/objects/9c/9263a624ef26fe6473b872a4e68295ef5959ce": "2e05a66aac0e2d646befed515c7e2c23",
".git/objects/b5/294c3125e6806ba12f865bf06025aeda976a09": "5497d252de27bb8ef24f4903612982da",
".git/objects/b2/27a7c169d89d40013c183acb5a855d9710c177": "b0ae18390f5d537c47853bd7637c3a15",
".git/objects/ac/4c2200092e28accd37d84e7f464e46978ca789": "7165874074d0e068c5db506968a99c28",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/bac7fe15a1f93fa80df7966f34adce28e38f38": "8df235bbdef11f2699abd9cffe3b14fd",
".git/objects/be/50ca73713cf3e621c717c1e4b11946dfbd9548": "2f2f8e25486457a2032165fefa2e6561",
".git/objects/b3/7999f68c4291276d1cf6fbd37192d44a8e8173": "d5d9b462f68bcd75cea1ff2307055a98",
".git/objects/df/f5fc3244258d33d81abc4f375af033b70a13ac": "a037b63443b7d0695f53c7d6a9344d33",
".git/objects/df/d4c447c86e1311eef9ab6e52a9e8fcdeadac14": "eaef6c6379f3522ac8f0a607f66dee81",
".git/objects/da/42762a9ffee56f730b88a90c19ccca34813a07": "28987bc354ea77dd847e75986772434b",
".git/objects/d6/0e0bc56ab4fd16a40a12889331315080a29e41": "30710732db9f473130a1d1cc31734a8e",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/5fed36c0cd98bca4224447b6d6b5069b0e2816": "c25ae750a501796ecd5e530764c29f02",
".git/objects/ab/4808b09a3006ee9b5ce1657accd61371050df9": "af782791b9cdaff9b0dda5a10a266129",
".git/objects/ab/0e1e14221fce643d1c9f6570dbabc844b53ca1": "48c40d2a0900338eac40d7fa91aa9c70",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b538d16825f4e93b5c9ae89195fb405a5e3c63": "72e95c2e51510d99f53feb5a23339e70",
".git/objects/f4/a2ca017b9be30cdad9f1c7dda0ef3c5dd62c4d": "bf0b6d08a92b608ad5a7a2f8b5100b67",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/983d79c60bcaacec1be74b7e467016ccb0c96d": "880a4c1440845a8f99428ed26e49a2f2",
".git/objects/ee/72732103009a7bdcd9219a027344c04331283e": "8bf164fac8c0ee6348295c52591e16f8",
".git/objects/f2/b3623f146584dfe591400cfc4bd9b10e069312": "473bf094a5081947a4f67c0a103c79e3",
".git/objects/ca/ca7e1abe80a2e51261b2c2e0f37e7fc4020f07": "32ae4c5f74c9a384efd0910aa6def58d",
".git/objects/ca/6ec1868e1dc2aef595423578d988b9989035be": "68bea6b6507a4d364e9f2684f6273083",
".git/objects/fe/35771b85dc0d97a4a3887350ffa731c4a8f0ac": "16ee8a63b1b77cdcc388bf0954c7fead",
".git/objects/c8/902bd40a7ab6fba7c048124df9fb9f1742bf9d": "d37f9133ab1f3064e69249272d9972a1",
".git/objects/ed/3ab2a12da0c8fbd02a94ed05652b01de63cb1b": "ddc80f064f8e72f6e8fecddbb47f0d56",
".git/objects/c6/71a60e11e82a745868c46c48f2cde2e5c5cd86": "da3263914be8d78eef9268bdcd0cf310",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/20/cd08e579edc1a34ef8975a135289a1984cb1b5": "1effd6465480f19c020f7e1225405e93",
".git/objects/27/dcc4f3bcda6fd523c583f8d1e36e6a1243a00e": "cb5ff065109efd63e70975b77939c479",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/7c/1536284a6acfc4c212ec89f25f0a53e8f2b75a": "63b78cd496c815747934dec254fbbd35",
".git/objects/16/01d8a45ac5367d45260d2c2f1b5f1df0ade984": "bf6873c50ec9f11e4181026d4f338f23",
".git/objects/16/88ab83aa823c4593b70f57e538c8e4c72be275": "9852cd5608a25cdeeb87b7ded16f5a0f",
".git/objects/42/3017d5d7086f88553bbdf8cb33786538740f0c": "89522ed599aeda17b2cfd982059eb1d7",
".git/objects/45/5e66e687ffd6ac74347b982b1aef35ac58af79": "c7935ebdfe9265ab5fb89f5e8ba26a3c",
".git/objects/45/3596415f543f2619af75a9f986e9fed2db5d84": "78a44d981632804478d82dfc4dd8e209",
".git/objects/80/52e142f194147356e82db2f78a2f0312948325": "545c2a6fca72b4c3db310f1982e19a56",
".git/objects/1a/8b6c963fb54c300598687162a6d315c4a00b92": "f5211ac8cd8eede8cdfda67d3bf855f5",
".git/objects/1a/47e2d5139f80aebabb89eda93c0e276995503e": "6ebc32feeccbc313297d23648c5e3f77",
".git/objects/8f/45919b3a3a5ff4e3979022191446eddf324b2b": "6b3a20d18603fd9bcc91e9eb1ea94729",
".git/objects/8a/d561c901e9a9262bccf61564d83ab81f54dfc7": "2c1c9a273897bd00eb32c529d226734c",
".git/objects/8a/8f69cc7e8e1e19d9d031d04d013049b553da58": "c050cb09a1acf634fd42dce3915e08ac",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/b48a82390eb80524c284b6bfee4c50fcfd2590": "5f7bd9b0f50d43367ae1d9ab57ae51ba",
".git/objects/26/985217a6bdbbbb40bf91138136fcf922ca8aa8": "76d3973410adc516ab6a1f8e1c11b9a7",
".git/objects/81/32a9921f096f052ad4738f49d102a37a55dc8e": "2de05e4c984e443e823d64bb005bae2a",
".git/objects/2f/2a7950aa4e8f96c448ffe91c20ce2fe9dbe170": "be752655fa421ac621bab6e87d77a02d",
".git/objects/2f/97d6113c52b74ae2b91c013dfdaa79f2f45a24": "8226eb9f21cad1c8ff9187df2438b428",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/caf5be19ccc5340431c9f9632f93b54530c8ce": "84413708ef3ae9665a319c0510318c44",
".git/objects/00/9cc0448b5f89ba17286ee016ae92d2c479f57a": "ec7c2fd723e2a76dcbf5ce3ef6c9f73e",
".git/objects/6e/a08ed3f0fc1235ec5f99e7f04f30107e4c19f2": "96373ed1494480f14f2321c54965fb4d",
".git/objects/09/1da4799c6623bc7cb9fbd918ecdd6e9dc72e15": "7cd9ed78fcbec81029b460c8ac767b2a",
".git/objects/5d/a21730e56a0cd36db4031c6135db918a8e02f8": "a2d76fc5420147c7805517a97d36554c",
".git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
".git/objects/62/c3ca55b1c1df69f5c8cabbba5e386d95a572e4": "08a5a213e7df7f812b7890775c9b18e3",
".git/objects/3f/2e5aa765613f48af5496f2ef5ef557c916ddc7": "9f9d2a2189c016773c867abaedbca50f",
".git/objects/3f/6ef5797ff4240f3e377c9fd3e424812eeee603": "6ad9ab4a8b20582356f749ac307833b8",
".git/objects/30/8148918fc49e7cca3f752155df88d4539319c7": "63a9e313ba97e3aa4a259504ca644bad",
".git/objects/37/e15ee45b11a78ecad36ca62c8185b423dfe502": "329a6ff6ea94a4a9171c67bbd6abc7e5",
".git/objects/6d/77823f82c654a628d0b30cd1dc00c82b155216": "912dcb7d475d80913b48ba3ca3ddde72",
".git/objects/06/a74fc396ac9b324ea078c7aa6a9197ff3f90be": "7b93c5f981ed5afd5ee721abf139842f",
".git/objects/52/346196b864c6ea8f168e212563011d7eb8610c": "4df75bc3e86d8f87e1d0eb807663ea67",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/e105a932c4fec9a36278157a3aaa8e4b5d98b5": "bd2588eb058b5f93e6c532017dc9e791",
".git/objects/97/ec2159e86ed6dab5efa0121545b541b3c4d458": "20f9154552fe0f0021f1069925820cb3",
".git/objects/97/fbdad51211a69d9fc09ed59380cb5a9e71a846": "bccc7b5a6e96bf6bbf69708386439ee2",
".git/objects/97/63b1708fbfd5924b6f91e3a0de23bdd7dc770a": "fdda584fe68ab9bb4c4fdca2623fb461",
".git/objects/0f/75a35fc49ce87218fd169f31cb46342cd4301f": "dd5293a7be2fefe00c33dcabb071af96",
".git/objects/64/1bea35afd14ad2a529528e4494935c6b9d6d57": "624f0d7f57f36406d0e44dc88eba1d80",
".git/objects/64/f0045694a49812ba973084a81ef8987324668a": "56f43d8c403dc94c107a9279679eb19c",
".git/objects/ba/2c07bf2d5c5cbc68240a2a25a0b6ebf249e122": "bcccc3b8163bb0d599834ba7cba3667c",
".git/objects/a0/f284a895cddb82070a6a23db2d3869997d5313": "ed3cd6031ed937ab9371100690738ac8",
".git/objects/a7/09eda5beebc4d2cb64c9c59fd7b1cdac9186a4": "a17eecb9efcb794f2d9443bd2e52546a",
".git/objects/b1/42edeb2151ecf2e066fa64413ed8cf50246bad": "666aa60cde5c2bac419775651cc58b14",
".git/objects/b6/1714389ff4d9a321b80e2157cad9b64aec3687": "e8d424d76ca1c4e24709b3dfe41e997c",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/aa/0764d132c74835edc45f70f443ce89267cac66": "79030118f42eed6bec0a494f39fffd2f",
".git/objects/aa/9039a599c3bba73fc9c551c7c1eb403d846d82": "6720e0dfb1ff5a154db69cf5944908b5",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/df45c60eb2799e13058619e42221ac89552720": "229aff2632d97e2220b2c552ef734a26",
".git/objects/de/26bb7f706b686167f3c58dff2aae7c4abab140": "5aa12b4dafd03908d92b99890df886f7",
".git/objects/b0/7365a461323e8af22fb1ee3b2a99adfdb19573": "a7e8e03b3e618f20331b993d9efe54c9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5561df23f3fd9eec3649b20bf419e13e8b0a7d": "c4384ab147ca047684e72de7f0f38169",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/f9070fad0b41aa27fa0549f3f2e4e40956cc25": "be5029eaf1719efc4e750025227db5c4",
".git/objects/cd/3eac14608e4bfde51e5c1878ddbb40dd952494": "6a536b3ac68797d6a61fe91bcaa29e3e",
".git/objects/cd/7cfd5863011f0cf38d32ef551aa2102a48a9ba": "d4d62e9f9edd4421d6b076ab3e6ecee5",
".git/objects/f9/20e04c611048bc73f6ed590a8e8e1eaa084710": "4ee103f58d75873907bb28797fac3052",
".git/objects/f0/e8d520cbbba2a448a483805a75ebe1e4bf2bbd": "6a9fa5ccfc213c13a0a44d85a241eea4",
".git/objects/f0/c6fbed0ece3861face5da32878e2f51c639c28": "52089fd96ced79de078747607e5ea99f",
".git/objects/fa/8a0f3651be843941ed24ce0969ec96d782156d": "c09a77f7a9bafec4763ccd8d5ab06178",
".git/objects/fa/148202d14082e0c61753b3db67c2e133061cc0": "120e1a2ae4c7dc9050355f4e36a4436f",
".git/objects/ff/59937dc59f43deca68a530f845d8ffd8cb6e6f": "d84191eea634ce3eedbbf19a53efbb7c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/ce/5721452973958ccc10d454f3de844f6a5157e3": "4f729c20502515e784a5818b519ec220",
".git/objects/ce/d3ad4973d03d0f57f73752faae5e836b8d34dc": "33ac428916950261c4042a1aa95da8aa",
".git/objects/e0/d47671299b5f18e4bf0563144655889d51a53b": "35e7628b7a8fdd28a0dfb4c3ee23218d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/77/6427dcb93eb3572f9407965784c89de92dded5": "6704ec4a48bdd374ee6634d227a02875",
".git/objects/70/7658ec4c39bc6445cea55624c572dabe3b28c3": "fa5a0432a598bcb86f20ecb06b1ccefc",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/b8c7d1e0c1ad1fa37d0b7d9695a05f608fd132": "34b96008a9b6dbe91802f3bdd4840055",
".git/objects/23/5b71f6ddbdab73d3f672b1372e7692d6922066": "934c10fcb1edfc42ecdac6b54be7e6e1",
".git/objects/4f/8fb16a50639c19c523324426d49e090e8c4001": "e74d15ba9911e15e479b828eb09ce37d",
".git/objects/8c/9899e7391d602ddb0ecee3d03ad9ea9266ba6c": "12d7412b777940de653bb644de37b200",
".git/objects/8c/c195f4e0b0107407f3586d8fd65159e96bead0": "e8fc38790cfb6f9c0c87c5b2c8879a0d",
".git/objects/8c/05757eae19ac980342e93e22a1a8d4ac44a7cf": "923df3b93c8e6e89a2e20d07f51fceef",
".git/objects/85/218370c20157dc900212afc838ac33bb38a612": "91f240cebf811acc401217346ab6afdf",
".git/objects/1d/a4650dda2ab72f72951630cf9e5423eca1b328": "af28797e058b6cb152eda72d036421ed",
".git/objects/76/a232b425a35a5aca2f04c04872f30a23b398cc": "381db22ccd1a97de4adaf74b4ac03dae",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/49/7805259f69e466f2c94fbcdd3ef0aaef7c2b9b": "3ebf1dd4d35e5f54cb8f7848f2655280",
".git/objects/2e/5a8e1913355aa272d108bde113f168587f30de": "2ad75f2079fd4c91e67a5e19dc5f41b4",
".git/objects/2e/c8674dc3804f7313d26974f3672a2cb05ef892": "4a0d8faccab2147af8e66bd65564c819",
".git/objects/8b/92e8b2680d36342aff30f38706137239013ff1": "dbb224b34e3fa360cae7e86ddbdf7faa",
".git/objects/7f/82b2484ec85e9a097b1cacc81846a2b6794593": "7d2ac438f2f662528f720730ab85b431",
".git/objects/14/61c36fb8492527268a9903cfce8c2b66a76438": "23538e68c6d78bfad4e13e3347472440",
".git/objects/8e/645d4092eb04b78ae613046dcc0f9d7f1eda13": "97fc9978d34c41743ad3971e91057f0e",
".git/objects/8e/707cf59e641f7e2401f08d6cbf21e919dd815b": "e14baddcf7ff4819897b8d23e0234a03",
".git/objects/8e/0166b0b08f86cae2b9702f9ade38437e7aab9b": "c7a2500da9f1279cc2f187e92bc88f5b",
".git/objects/25/a9a2010a71fe620dfbf71a4b78515c0bd72ba4": "701b920605c40dee6cc1b5597fea5965",
".git/objects/25/0f44ba637a93902298d60b17ca971b3265cc95": "73c7823e428a1186ebf7fb328f36e835",
".git/HEAD": "552adf5a330d79aa3f92fd419e5901ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c6b9cee650491be1db4e6e7bda6ca1b",
".git/logs/refs/heads/test": "d3c107eec9317038327b1184aa72be7b",
".git/logs/refs/heads/main": "a7dca91c41e15f202822c4ac8d7e307a",
".git/logs/refs/heads/stg": "f564d5d26677a166a7cc946ac3749f0a",
".git/logs/refs/remotes/origin/test": "6edbd3dd81712e0a18ffb356c2d194a5",
".git/logs/refs/remotes/origin/main": "fe4de54cee57789915d4ff23647ecbaf",
".git/logs/refs/remotes/origin/stg": "0225a5b5733f92478040055bd9de21f5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/test": "6582678f770bc43e91fe91ed3c736a5f",
".git/refs/heads/main": "bd1226885b3d129c31c67a8b629b8451",
".git/refs/heads/stg": "614fe9411709ba67994f61630eae1c3e",
".git/refs/remotes/origin/test": "6582678f770bc43e91fe91ed3c736a5f",
".git/refs/remotes/origin/main": "bd1226885b3d129c31c67a8b629b8451",
".git/refs/remotes/origin/stg": "614fe9411709ba67994f61630eae1c3e",
".git/index": "d1dc13a81858b1519a42a881ae4baaaa",
".git/COMMIT_EDITMSG": "311606980f6aaf5d8830ed5b6e3c0486",
"assets/AssetManifest.json": "d34bad25dacdcee02b13b35d9c6dda87",
"assets/NOTICES": "7def2a3c391edf46e7fb0391b653a241",
"assets/FontManifest.json": "9eeff45f69933f7f74e981ab0dfdb240",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/NotoSansJP-Regular.otf": "ecfed48e463db4e31d1691c8af367730",
"assets/fonts/NotoSansJP-Medium.otf": "d6c74d39a44c519ff736ac55e5d28a46",
"assets/fonts/NotoSansJP-Light.otf": "137761c9e4b05edc375b06c256e9b65a",
"assets/fonts/NotoSansJP-Thin.otf": "e2b92248795c0cd02d9858aaf2a12ec2",
"assets/fonts/NotoSansJP-Bold.otf": "e463c4b3a2d7fbfb917831767da8c24f",
"assets/fonts/HiraginoKakuGothicProNW3.otf": "719c951edf9b150f5c0d36453400952a",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/NotoSansJP-Black.otf": "5ce4631ec833cd0011936d5653fbd144",
"assets/assets/images/img_empty.svg": "d1cfd30745685f465c959ce9a68656f5",
"assets/assets/images/img_lock.png": "1a19d8ae0d81c7bb63a7008c430b3f1d",
"assets/assets/images/img_loading.png": "c996fb3205155c8f0c9043cd523e1c92",
"assets/assets/images/img_un_lock.png": "ed9cc7b14805b756b7e40acd18afc191",
"assets/assets/icons/ic_trash_web.svg": "02d45a79d4e7e2f526cb0fac43c317f6",
"assets/assets/icons/ic_nav_card_manage.svg": "3f9e4a0b45055a7a97049b77d5a96066",
"assets/assets/icons/ic_if.svg": "02d7cc3e37cf581ccc289d0004247e73",
"assets/assets/icons/ic_orange_tag.svg": "7180010025c9346a21f2db90890f46b1",
"assets/assets/icons/ic_nfc_mobile.svg": "cc06d8bb1f6cb145e9b61337e8877ac9",
"assets/assets/icons/ic_menu_list_white.svg": "142ff9691d4a94ab1aaf9669b05095ee",
"assets/assets/icons/ic_white_delete_warning.svg": "d95677807b7b07974554e0ef557843ca",
"assets/assets/icons/ic_nav_notification.svg": "8a5c83107f138e2cb4ad8aa95495393a",
"assets/assets/icons/ic_profile.svg": "59e0b8c56d549fd564ff04b7d037e374",
"assets/assets/icons/ic_sms.svg": "d034f8e43e4811c6ce9b64fcb7d35bd4",
"assets/assets/icons/ic_app.svg": "69d9824ee6d9481897743f0606296f67",
"assets/assets/icons/ic_lock.svg": "c2d596a73d5b1e51edd831bf5cf6cb63",
"assets/assets/icons/ic_nav_key_download.svg": "473f932196f6b73a442de284926df28f",
"assets/assets/icons/ic_info.svg": "3da4d8ab388988abcd4d2ed58ae9420c",
"assets/assets/icons/ic_union_menu.svg": "83ad7ce3b3d02dcc08a53030de0b621f",
"assets/assets/icons/ic_wifi.svg": "4e081753efa7ec617d3715ca2d54f7cb",
"assets/assets/icons/ic_line_button.svg": "15822226f15db514e64219ad259df640",
"assets/assets/icons/ic_white_log_web.svg": "29e6adf376c5a9c185937c4ae4d342e8",
"assets/assets/icons/ic_plus.svg": "6716cac4ed4028142eaba06b0d0e7414",
"assets/assets/icons/ic_white_key.svg": "68f1440c4b4b1e5fdd87949b7196974d",
"assets/assets/icons/ic_white_pass.svg": "3325ec874484b9804d8720beb14ca33a",
"assets/assets/icons/ic_avatar.svg": "c87d82090df9e3bb47df0fe88862e265",
"assets/assets/icons/ic_nav_history.svg": "92fa4727816c634725f8612c1117ce00",
"assets/assets/icons/ic_battery_off.svg": "07e1c59d1579e6978659ac5cf4e48459",
"assets/assets/icons/ic_add.svg": "011f668d314f452b245db6bd433310b7",
"assets/assets/icons/ic_orange_user.svg": "6741a6515a94ae4e569d0e776186bda9",
"assets/assets/icons/ic_finger_print.svg": "14a2141aba91344abfae0873d5485fcc",
"assets/assets/icons/ic_home.svg": "9e3b00aaf51c1623f9e3d45ffdb676dc",
"assets/assets/icons/ic_felica3.svg": "78a9d5ae8a3fb655db23f5e753f4e893",
"assets/assets/icons/ic_close.svg": "24d417093f20f978c60b4109b4070fbc",
"assets/assets/icons/ic_gray_trash.svg": "b2f9dced91908225031de77e1d70b57d",
"assets/assets/icons/ic_dropdown.svg": "19282f37944273d3ad2b8631f99fc16b",
"assets/assets/icons/ic_user.svg": "b23cc823c303adb2f83b939077406e84",
"assets/assets/icons/ic_right.svg": "f9ab7b4f40254bd4e426f8ec2d1b2a7f",
"assets/assets/icons/ic_keyboard_detail.svg": "487711aa699f0147196e7d20be8d1485",
"assets/assets/icons/ic_felica2.svg": "06c0b1d77564271891b01f7fd433cbb8",
"assets/assets/icons/ic_horizontal_ticket.svg": "2908c6886e0c8f1a124fbc14613de44c",
"assets/assets/icons/ic_orange_warning.svg": "402cbe800c8118c1a55b91ade0937fc4",
"assets/assets/icons/ic_x_blue.svg": "632f79d4e46876536c689b7043798d19",
"assets/assets/icons/ic_white_menu.svg": "7faab3af06d771272f2dd636784e8529",
"assets/assets/icons/ic_nfc3.svg": "fd0c4fd3d38aaaaf8d70c812d7bfed77",
"assets/assets/icons/ic_reload.svg": "48bdcd142b72a28c10e145d7862a350d",
"assets/assets/icons/ic_export_csv.svg": "9f0ac43e1bc880ad7d5d948fdf7242d2",
"assets/assets/icons/ic_nfc2.svg": "1ff566ff4e772415b88fdaa383860d6f",
"assets/assets/icons/ic_people.svg": "8050e5fcf737e7ff7ec744ff86bb484a",
"assets/assets/icons/ic_nfc.svg": "ef9a8e21868e796de8a816bd6134eda5",
"assets/assets/icons/ic_pencil.svg": "53ae850465b61e23e33e94d224aabcc2",
"assets/assets/icons/ic_tag.svg": "3b0634841686faafa52a56e429112877",
"assets/assets/icons/ic_unlock.svg": "20dd958f8c76c947238f598a3234e2ff",
"assets/assets/icons/ic_union.svg": "81cbdc8af35466af0ac2090b28769f06",
"assets/assets/icons/ic_arrow_left.svg": "60aa35879fff56bd3d943442f2899745",
"assets/assets/icons/ic_white_lock_user.svg": "35e289bfb586a594d8626f781f79ea90",
"assets/assets/icons/ic_auto_lock.svg": "574dbb82aa845da4c64813c10d80e211",
"assets/assets/icons/ic_import_csv.svg": "0e5771189cda49d20cde7e881dc1b9fc",
"assets/assets/icons/ic_trash.svg": "ebc322f453ff65643e91d3d9f6bab10e",
"assets/assets/icons/ic_write.svg": "1e1dca42ed5194146776f90b919e00c6",
"assets/assets/icons/ic_wifi_home.svg": "e52614ee67355d7191c59858e2d8fdde",
"assets/assets/icons/ic_arrow_right.svg": "2feac84c3910885dc9354524bc06b076",
"assets/assets/icons/ic_tag_introduction.svg": "a858413006e295eef2a23d3a47467b14",
"assets/assets/icons/ic_down.svg": "9bc64ba3aed8b2aced02308585911735",
"assets/assets/icons/ic_white_setting.svg": "5db6b20849a34cd97b4ed22ef63b48c3",
"assets/assets/icons/ic_locked_user.svg": "b0511b944a0a2b0391a9631671ca567a",
"assets/assets/icons/ic_menu_list.svg": "a73f659a48fe7dd523d0b6848fd84d3c",
"assets/assets/icons/ic_red_user.svg": "eca37e1ea42c35b90842c551194192ad",
"assets/assets/icons/ic_touch.svg": "0399f3e4ce4af1441a8c347fa6d0b1b4",
"assets/assets/icons/ic_disable_user.svg": "4f2d2ff285c1d84e649369a03bcda112",
"assets/assets/icons/ic_white_warning.svg": "b72e7209d2ef0c7d28b524e074589b28",
"assets/assets/icons/ic_nav_all_history_download.svg": "87474b1ec1dcef3b7c92565ba47ead91",
"assets/assets/icons/ic_shared.svg": "6df808e12e46939c72e600c66577a846",
"assets/assets/icons/ic_nav_key_setting.svg": "8b53707332d8008e1af2f8b27234d0e3",
"assets/assets/icons/ic_white_list.svg": "57c747ae83a8a95f586346a2447edec8",
"assets/assets/icons/ic_nav_download.svg": "d80db8106ada538d927d06358fd59986",
"assets/assets/icons/ic_rectangle.svg": "7e43ae900cd1040b1fd182630c43813f",
"assets/assets/icons/ic_felica.svg": "1e2838466294c011a09515d60b44d2c1",
"assets/assets/icons/ic_battery.svg": "cb24d5e0195bb78bd713c43821bcf853",
"assets/assets/icons/ic_orange_back.svg": "6f4734d0b6f003ffe4afd984baa9caff",
"assets/assets/icons/ic_battery_web.svg": "c63b52d6315852c76c11379acb8a7df6",
"assets/assets/icons/ic_menu.svg": "f9461f1ca0b6b2c8666a9795cfc6d986",
"assets/assets/icons/ic_nav_list_work.svg": "82b6b69a3f76655c179a0b9f7287c385",
"assets/assets/icons/ic_email.svg": "a446d7944b1ed69cb9c4913eb85859e1",
"assets/assets/icons/ic_logo.svg": "2f5338915ed51b859158cb1a9267f811",
"assets/assets/icons/ic_circle.svg": "6179a73e172b6b79e85a3b516420cfd6",
"assets/assets/icons/ic_face_id.svg": "89ad41f81777ac41e037fe0e1b547c93",
"assets/assets/icons/ic_keyboard.svg": "4169f502f7a8564452dbc7ce17c4cfdd",
"assets/assets/icons/ic_white_tick.svg": "64ab033badcdbf72d7fa43cb8e34f346",
"assets/assets/icons/ic_back.svg": "6f4734d0b6f003ffe4afd984baa9caff",
"assets/assets/icons/ic_nav_user_manage.svg": "06d1a5cd0992446f596eb18fe64abf23",
"assets/assets/icons/ic_orange_menu.svg": "2f0a52ccc4d5fa88faa79ff6d60060ad",
"assets/assets/icons/ic_nav_notification_setting_push.svg": "c97255889208d2eca102cbe733302dda",
"assets/assets/icons/ic_nav_key_card_manage.svg": "04a8640b6a26d2d52e7115dfad10a447",
"assets/assets/icons/ic_white_plus.svg": "2cd7dfb3e968f4e34169712f9c40dc8a",
"assets/assets/icons/ic_ticked.svg": "5e775a5606a4b56402d5b51bc29069d4",
"assets/assets/icons/ic_white_lock.svg": "020b4f5e63a0cdedc9081c8d0dd9bf0e",
"assets/assets/icons/ic_next.svg": "38c4697b8e1f10ce6b2927abb1ad5295",
"assets/assets/icons/ic_log.svg": "2d4fa45e7c1e8414861b537dbd294052",
"assets/assets/icons/ic_star.svg": "d4922b7fa9ff2e9541aa05fea15935e4",
"assets/assets/icons/ic_white_lock_web.svg": "6935f0560112a848a4bcacf5e9ff6ec7",
"assets/assets/icons/ic_white_tag_web.svg": "9e829712e744785c6bf1cd6b66c2e3e4",
"assets/assets/icons/ic_line.svg": "7e2178f1488d8158324544b1e4058b61",
"assets/assets/icons/ic_chain.svg": "acb1db69ecae12bf0aa57ed8e4c69d31",
"assets/assets/icons/ic_gray_search.svg": "211ac3ca5a64423153c3f879f028b0d1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
