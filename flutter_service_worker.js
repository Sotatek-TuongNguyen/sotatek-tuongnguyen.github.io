'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "fdac969cde194d81ce06377586b2f468",
"splash/img/light-background.png": "cbe22d05da6b28396bd8b2496d602c82",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "fddc00e57405f56955f20d715a539673",
"favicon.ico": "827d16cfc64a716563aba7f9d21439bb",
"index.html": "56fd5e2926bfed29861b8e5489ebc1f4",
"/": "56fd5e2926bfed29861b8e5489ebc1f4",
"main.dart.js": "38324f983846d90aa7b5e02790b76846",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"test.png": "63ba7947e55b053145d9af0b659208a2",
"icons/Icon-192.png": "941da41635b27496fed24af9a682966c",
"icons/Icon-maskable-192.png": "941da41635b27496fed24af9a682966c",
"icons/Icon-maskable-512.png": "b5eb248bd9971de9f0f0951c7d0824ea",
"icons/Icon-512.png": "b5eb248bd9971de9f0f0951c7d0824ea",
"manifest.json": "0ab86e662515757b8662854d61988602",
"assets/AssetManifest.json": "aa4db84edd6af79ed6755ee01e01a5d6",
"assets/NOTICES": "ec52b258b1096edd71ed791f7a854a75",
"assets/FontManifest.json": "f36d3dc04b8eb03009288af59065ae8d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "669aa0b54b55ae64cdc9ad10cac40b41",
"assets/fonts/NotoSansJP-Regular.otf": "ecfed48e463db4e31d1691c8af367730",
"assets/fonts/NotoSansJP-Medium.otf": "d6c74d39a44c519ff736ac55e5d28a46",
"assets/fonts/NotoSansJP-Light.otf": "137761c9e4b05edc375b06c256e9b65a",
"assets/fonts/NotoSansJP-Thin.otf": "e2b92248795c0cd02d9858aaf2a12ec2",
"assets/fonts/HiraginoKakuGothicProW3.otf": "9235878c979f8fa583e3686441e351ae",
"assets/fonts/NotoSansJP-Bold.otf": "e463c4b3a2d7fbfb917831767da8c24f",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/NotoSansJP-Black.otf": "5ce4631ec833cd0011936d5653fbd144",
"assets/assets/images/img_empty.svg": "d1cfd30745685f465c959ce9a68656f5",
"assets/assets/images/img_lock.png": "1a19d8ae0d81c7bb63a7008c430b3f1d",
"assets/assets/images/img_loading.png": "c996fb3205155c8f0c9043cd523e1c92",
"assets/assets/images/img_un_lock.png": "ed9cc7b14805b756b7e40acd18afc191",
"assets/assets/icons/ic_grey_felica.svg": "60ca6fd68b8d2ba34921ec6e5f7a1015",
"assets/assets/icons/ic_keyboard_orange.svg": "fd312c71e165d68a02d6f195134ba1b5",
"assets/assets/icons/ic_trash_web.svg": "02d45a79d4e7e2f526cb0fac43c317f6",
"assets/assets/icons/ic_nav_card_manage.svg": "3f9e4a0b45055a7a97049b77d5a96066",
"assets/assets/icons/ic_if.svg": "02d7cc3e37cf581ccc289d0004247e73",
"assets/assets/icons/ic_orange_tag.svg": "7180010025c9346a21f2db90890f46b1",
"assets/assets/icons/ic_nfc_mobile.svg": "cc06d8bb1f6cb145e9b61337e8877ac9",
"assets/assets/icons/ic_menu_list_white.svg": "142ff9691d4a94ab1aaf9669b05095ee",
"assets/assets/icons/ic_wifi_home_40.svg": "135b85a4d8bde53a18ccb57e69a8d3f7",
"assets/assets/icons/ic_white_delete_warning.svg": "d95677807b7b07974554e0ef557843ca",
"assets/assets/icons/ic_nav_notification.svg": "8a5c83107f138e2cb4ad8aa95495393a",
"assets/assets/icons/ic_grey_felica_in.svg": "36040c41a922ff7a9a70bff995001048",
"assets/assets/icons/ic_profile.svg": "94bdc4769e54eea383a8a78cefc51a7d",
"assets/assets/icons/ic_sms.svg": "d034f8e43e4811c6ce9b64fcb7d35bd4",
"assets/assets/icons/ic_app.svg": "69d9824ee6d9481897743f0606296f67",
"assets/assets/icons/icon.png": "61dddb4e725f987ba5f9c66e77c8576b",
"assets/assets/icons/ic_nfc_out.svg": "7232537a80b9974a4a1ff964b3c4696e",
"assets/assets/icons/ic_padcode_in.svg": "b0e69c27c1ca33135b5ce7cdd0cbd967",
"assets/assets/icons/ic_nav_option_selected.svg": "ec36de55de85338f461d68b6fe0b9f46",
"assets/assets/icons/ic_grey_mobile_nfc_in.svg": "32415199656d73b2d065d9e85ea66247",
"assets/assets/icons/ic_lock.svg": "c2d596a73d5b1e51edd831bf5cf6cb63",
"assets/assets/icons/ic_nav_key_download.svg": "473f932196f6b73a442de284926df28f",
"assets/assets/icons/ic_info.svg": "3da4d8ab388988abcd4d2ed58ae9420c",
"assets/assets/icons/ic_union_menu.svg": "83ad7ce3b3d02dcc08a53030de0b621f",
"assets/assets/icons/ic_wifi.svg": "4e081753efa7ec617d3715ca2d54f7cb",
"assets/assets/icons/ic_un_chain.svg": "8a36bc15d1b736d33fedaf378b707fda",
"assets/assets/icons/ic_line_button.svg": "15822226f15db514e64219ad259df640",
"assets/assets/icons/ic_white_log_web.svg": "29e6adf376c5a9c185937c4ae4d342e8",
"assets/assets/icons/ic_plus.svg": "6716cac4ed4028142eaba06b0d0e7414",
"assets/assets/icons/ic_white_key.svg": "68f1440c4b4b1e5fdd87949b7196974d",
"assets/assets/icons/ic_white_pass.svg": "3325ec874484b9804d8720beb14ca33a",
"assets/assets/icons/ic_avatar.svg": "c87d82090df9e3bb47df0fe88862e265",
"assets/assets/icons/ic_grey_mobile_nfc.svg": "278024ac96920513d9d096b98a6a8516",
"assets/assets/icons/ic_grey_user.svg": "6f7cd517434b2ee9981ed434e6074216",
"assets/assets/icons/ic_nfc_mobile_out.svg": "2116f3e43ed622d002fc854651992eaf",
"assets/assets/icons/ic_nav_history.svg": "92fa4727816c634725f8612c1117ce00",
"assets/assets/icons/ic_battery_off.svg": "07e1c59d1579e6978659ac5cf4e48459",
"assets/assets/icons/ic_oragre_felica_out.svg": "90780f24de0c5260409cfac7fb5fc34d",
"assets/assets/icons/ic_operation_large_lock.svg": "8a166180183b3141cd55ce91d1b9474f",
"assets/assets/icons/ic_add.svg": "fac5babe9f8d0b285fd86c0b71c58491",
"assets/assets/icons/ic_grey_app.svg": "81dcdf90399272c455219254a933b2c6",
"assets/assets/icons/ic_grey_padcode.svg": "bb72978b63205939bea2af0ada1fd28f",
"assets/assets/icons/ic_orange_user.svg": "6741a6515a94ae4e569d0e776186bda9",
"assets/assets/icons/ic_finger_print.svg": "14a2141aba91344abfae0873d5485fcc",
"assets/assets/icons/ic_home.svg": "9e3b00aaf51c1623f9e3d45ffdb676dc",
"assets/assets/icons/ic_nfc__mobile_in.svg": "a461eca18c93fd9119f4033fa55b11e8",
"assets/assets/icons/ic_felica3.svg": "78a9d5ae8a3fb655db23f5e753f4e893",
"assets/assets/icons/ic_close.svg": "24d417093f20f978c60b4109b4070fbc",
"assets/assets/icons/ic_gray_trash.svg": "6dae75aee05d1e0c75b948bec121b617",
"assets/assets/icons/ic_dropdown.svg": "19282f37944273d3ad2b8631f99fc16b",
"assets/assets/icons/ic_user.svg": "b23cc823c303adb2f83b939077406e84",
"assets/assets/icons/ic_right.svg": "f9ab7b4f40254bd4e426f8ec2d1b2a7f",
"assets/assets/icons/ic_keyboard_detail.svg": "487711aa699f0147196e7d20be8d1485",
"assets/assets/icons/ic_felica2.svg": "06c0b1d77564271891b01f7fd433cbb8",
"assets/assets/icons/ic_horizontal_ticket.svg": "7180010025c9346a21f2db90890f46b1",
"assets/assets/icons/ic_orange_warning.svg": "8f1eb1d3fad0beda22d396635eb48ac9",
"assets/assets/icons/ic_grey_nfc_in.svg": "3ab9b7199eddeb21fff71dda65596ce2",
"assets/assets/icons/ic_x_blue.svg": "632f79d4e46876536c689b7043798d19",
"assets/assets/icons/ic_grey_nfc.svg": "f337ad14e1dd5e341c696e6bb414c3b5",
"assets/assets/icons/ic_white_menu.svg": "7faab3af06d771272f2dd636784e8529",
"assets/assets/icons/ic_grey_mobile_nfc_out.svg": "ebc2c40e9d1ecc04b0e80d0d241702de",
"assets/assets/icons/ic_padcode_out.svg": "8c8dc7fc9ff1a30db5832b040a657b9a",
"assets/assets/icons/ic_nfc3.svg": "fd0c4fd3d38aaaaf8d70c812d7bfed77",
"assets/assets/icons/ic_reload.svg": "48bdcd142b72a28c10e145d7862a350d",
"assets/assets/icons/ic_oragre_felica_in.svg": "e29c23e0c9122543c6742e6714b0abff",
"assets/assets/icons/ic_export_csv.svg": "9f0ac43e1bc880ad7d5d948fdf7242d2",
"assets/assets/icons/ic_nfc2.svg": "1ff566ff4e772415b88fdaa383860d6f",
"assets/assets/icons/ic_grey_nfc_out.svg": "6b26c36283377bd19370d923f8670bf1",
"assets/assets/icons/ic_people.svg": "8050e5fcf737e7ff7ec744ff86bb484a",
"assets/assets/icons/ic_seen_notify.svg": "1e1dca42ed5194146776f90b919e00c6",
"assets/assets/icons/ic_nfc.svg": "ef9a8e21868e796de8a816bd6134eda5",
"assets/assets/icons/ic_pencil.svg": "53ae850465b61e23e33e94d224aabcc2",
"assets/assets/icons/ic_tag.svg": "3b0634841686faafa52a56e429112877",
"assets/assets/icons/ic_unlock.svg": "20dd958f8c76c947238f598a3234e2ff",
"assets/assets/icons/ic_union.svg": "81cbdc8af35466af0ac2090b28769f06",
"assets/assets/icons/ic_arrow_left.svg": "60aa35879fff56bd3d943442f2899745",
"assets/assets/icons/ic_felica2_disable.svg": "3521eb07fc6fd754c35ab7a56a4d72b7",
"assets/assets/icons/ic_white_lock_user.svg": "35e289bfb586a594d8626f781f79ea90",
"assets/assets/icons/ic_grey_lock.svg": "ed263026d57007fe2ce6ae378f166673",
"assets/assets/icons/ic_change_tag.svg": "1ba0c45a4fdb9b525e11f973fbc8a150",
"assets/assets/icons/ic_auto_lock.svg": "574dbb82aa845da4c64813c10d80e211",
"assets/assets/icons/ic_import_csv.svg": "0e5771189cda49d20cde7e881dc1b9fc",
"assets/assets/icons/ic_trash.svg": "ebc322f453ff65643e91d3d9f6bab10e",
"assets/assets/icons/ic_write.svg": "1e1dca42ed5194146776f90b919e00c6",
"assets/assets/icons/ic_nfc2_disable.svg": "ec1d093221ff0aa475e4cf5290f2a6bd",
"assets/assets/icons/ic_wifi_home.svg": "e52614ee67355d7191c59858e2d8fdde",
"assets/assets/icons/ic_arrow_right.svg": "2feac84c3910885dc9354524bc06b076",
"assets/assets/icons/ic_tag_introduction.svg": "a858413006e295eef2a23d3a47467b14",
"assets/assets/icons/ic_down.svg": "9bc64ba3aed8b2aced02308585911735",
"assets/assets/icons/ic_un_arrow_right.svg": "37046872c2c07424b5e77d9bf472cafb",
"assets/assets/icons/ic_white_setting.svg": "5db6b20849a34cd97b4ed22ef63b48c3",
"assets/assets/icons/splash_android_12.png": "1d78536a134ae07540a29e321cef04b3",
"assets/assets/icons/ic_locked_user.svg": "b0511b944a0a2b0391a9631671ca567a",
"assets/assets/icons/ic_menu_list.svg": "a73f659a48fe7dd523d0b6848fd84d3c",
"assets/assets/icons/ic_grey_padcode_in.svg": "9b64865b8950a1fff730c13701ec295d",
"assets/assets/icons/ic_red_user.svg": "eca37e1ea42c35b90842c551194192ad",
"assets/assets/icons/ic_touch.svg": "0399f3e4ce4af1441a8c347fa6d0b1b4",
"assets/assets/icons/splash.png": "cbe22d05da6b28396bd8b2496d602c82",
"assets/assets/icons/ic_disable_user.svg": "4f2d2ff285c1d84e649369a03bcda112",
"assets/assets/icons/ic_white_warning.svg": "b72e7209d2ef0c7d28b524e074589b28",
"assets/assets/icons/ic_nav_all_history_download.svg": "87474b1ec1dcef3b7c92565ba47ead91",
"assets/assets/icons/ic_orange_nfc_in.svg": "47dbe7aa02f31e1f1868ff828cd22c08",
"assets/assets/icons/ic_lock_warning.svg": "915772e15ef3d60e30e5635e140e0ab2",
"assets/assets/icons/ic_shared.svg": "6df808e12e46939c72e600c66577a846",
"assets/assets/icons/ic_nav_key_setting.svg": "8b53707332d8008e1af2f8b27234d0e3",
"assets/assets/icons/ic_white_list.svg": "57c747ae83a8a95f586346a2447edec8",
"assets/assets/icons/ic_nav_download.svg": "d80db8106ada538d927d06358fd59986",
"assets/assets/icons/ic_rectangle.svg": "7e43ae900cd1040b1fd182630c43813f",
"assets/assets/icons/ic_yellow_warning.svg": "dc40f86a3602221042d91b6769c7f050",
"assets/assets/icons/ic_warning.svg": "d95677807b7b07974554e0ef557843ca",
"assets/assets/icons/ic_felica.svg": "1e2838466294c011a09515d60b44d2c1",
"assets/assets/icons/ic_battery.svg": "048a0e221c19c5385547c325ffd49bdc",
"assets/assets/icons/ic_orange_back.svg": "6f4734d0b6f003ffe4afd984baa9caff",
"assets/assets/icons/ic_battery_web.svg": "20ce708940252e46c581294d8c5ca15c",
"assets/assets/icons/ic_menu.svg": "f9461f1ca0b6b2c8666a9795cfc6d986",
"assets/assets/icons/ic_nav_list_work.svg": "82b6b69a3f76655c179a0b9f7287c385",
"assets/assets/icons/ic_red_warning.svg": "613d55756c5adae246e9a05d795fe005",
"assets/assets/icons/ic_email.svg": "a446d7944b1ed69cb9c4913eb85859e1",
"assets/assets/icons/ic_logo.svg": "e88a653e7323514a5d01be2c321d209b",
"assets/assets/icons/ic_wifi_home_60.svg": "bfad9b26303a2fb5dace5cc973598ebf",
"assets/assets/icons/ic_circle.svg": "6179a73e172b6b79e85a3b516420cfd6",
"assets/assets/icons/ic_face_id.svg": "89ad41f81777ac41e037fe0e1b547c93",
"assets/assets/icons/ic_keyboard.svg": "4169f502f7a8564452dbc7ce17c4cfdd",
"assets/assets/icons/ic_white_tick.svg": "64ab033badcdbf72d7fa43cb8e34f346",
"assets/assets/icons/ic_back.svg": "6f4734d0b6f003ffe4afd984baa9caff",
"assets/assets/icons/ic_nav_user_manage.svg": "b86730aaf863ad6a7d43ddf0b3860b01",
"assets/assets/icons/ic_orange_menu.svg": "2f0a52ccc4d5fa88faa79ff6d60060ad",
"assets/assets/icons/ic_operation_error_large_lock.svg": "ed263026d57007fe2ce6ae378f166673",
"assets/assets/icons/ic_oragre_nfc_out.svg": "7232537a80b9974a4a1ff964b3c4696e",
"assets/assets/icons/ic_nav_notification_setting_push.svg": "c97255889208d2eca102cbe733302dda",
"assets/assets/icons/ic_nav_key_card_manage.svg": "ea4fd5b73c9fff6b09e111e08374dc1b",
"assets/assets/icons/ic_badge_notification.svg": "7f3cd972b72a68caa22e76e6d264ac14",
"assets/assets/icons/ic_white_plus.svg": "2cd7dfb3e968f4e34169712f9c40dc8a",
"assets/assets/icons/ic_ticked.svg": "5e775a5606a4b56402d5b51bc29069d4",
"assets/assets/icons/ic_nav_option.svg": "0acabc4decf42c8c1dcff2f3aa326fdc",
"assets/assets/icons/ic_white_lock.svg": "020b4f5e63a0cdedc9081c8d0dd9bf0e",
"assets/assets/icons/ic_nfc_in.svg": "47dbe7aa02f31e1f1868ff828cd22c08",
"assets/assets/icons/ic_no_wifi.svg": "44a279e7219cc5da17947143865ba746",
"assets/assets/icons/ic_lock_fail.svg": "b1420a0e71c917dc78ecda050995b77a",
"assets/assets/icons/ic_grey_padcode_out.svg": "1e6aa891d3f80d4480e2be0f44200c3e",
"assets/assets/icons/ic_un_line.svg": "5a81ddedf60b085f15c063af5dc71058",
"assets/assets/icons/ic_next.svg": "38c4697b8e1f10ce6b2927abb1ad5295",
"assets/assets/icons/ic_grey_felica_out.svg": "faa77b4a02c2062c9af13e4a3ff849d4",
"assets/assets/icons/ic_un_arrow_left.svg": "42605fb1123bb99a049a83234fc8f9b7",
"assets/assets/icons/ic_log.svg": "2d4fa45e7c1e8414861b537dbd294052",
"assets/assets/icons/ic_star.svg": "d4922b7fa9ff2e9541aa05fea15935e4",
"assets/assets/icons/ic_white_lock_web.svg": "6935f0560112a848a4bcacf5e9ff6ec7",
"assets/assets/icons/ic_white_tag_web.svg": "9e829712e744785c6bf1cd6b66c2e3e4",
"assets/assets/icons/ic_close_blue.svg": "632f79d4e46876536c689b7043798d19",
"assets/assets/icons/ic_blue_warning.svg": "81f19b95982875b7f1b4eff38dd9c41e",
"assets/assets/icons/ic_line.svg": "7e2178f1488d8158324544b1e4058b61",
"assets/assets/icons/ic_chain.svg": "acb1db69ecae12bf0aa57ed8e4c69d31",
"assets/assets/icons/ic_gray_search.svg": "211ac3ca5a64423153c3f879f028b0d1",
"assets/assets/icons/ic_grey_auto_lock.svg": "ca840ee63ff154aeb785e6c5be52916d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
