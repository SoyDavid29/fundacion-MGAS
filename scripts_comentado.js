
/* <![CDATA[ */
window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/14.0.0\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/fundacionmgas.org.mx\/wp-includes\/js\/wp-emoji-release.min.js?ver=6.4.5"}};
/*! This file is auto-generated */
!function(i,n){var o,s,e;function c(e){try{var t={supportTests:e,timestamp:(new Date).valueOf()};sessionStorage.setItem(o,JSON.stringify(t))}catch(e){}}function p(e,t,n){e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(t,0,0);var t=new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data),r=(e.clearRect(0,0,e.canvas.width,e.canvas.height),e.fillText(n,0,0),new Uint32Array(e.getImageData(0,0,e.canvas.width,e.canvas.height).data));return t.every(function(e,t){return e===r[t]})}function u(e,t,n){switch(t){case"flag":return n(e,"\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f","\ud83c\udff3\ufe0f\u200b\u26a7\ufe0f")?!1:!n(e,"\ud83c\uddfa\ud83c\uddf3","\ud83c\uddfa\u200b\ud83c\uddf3")&&!n(e,"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f","\ud83c\udff4\u200b\udb40\udc67\u200b\udb40\udc62\u200b\udb40\udc65\u200b\udb40\udc6e\u200b\udb40\udc67\u200b\udb40\udc7f");case"emoji":return!n(e,"\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c\udfff","\ud83e\udef1\ud83c\udffb\u200b\ud83e\udef2\ud83c\udfff")}return!1}function f(e,t,n){var r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?new OffscreenCanvas(300,150):i.createElement("canvas"),a=r.getContext("2d",{willReadFrequently:!0}),o=(a.textBaseline="top",a.font="600 32px Arial",{});return e.forEach(function(e){o[e]=t(a,e,n)}),o}function t(e){var t=i.createElement("script");t.src=e,t.defer=!0,i.head.appendChild(t)}"undefined"!=typeof Promise&&(o="wpEmojiSettingsSupports",s=["flag","emoji"],n.supports={everything:!0,everythingExceptFlag:!0},e=new Promise(function(e){i.addEventListener("DOMContentLoaded",e,{once:!0})}),new Promise(function(t){var n=function(){try{var e=JSON.parse(sessionStorage.getItem(o));if("object"==typeof e&&"number"==typeof e.timestamp&&(new Date).valueOf()<e.timestamp+604800&&"object"==typeof e.supportTests)return e.supportTests}catch(e){}return null}();if(!n){if("undefined"!=typeof Worker&&"undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof URL&&URL.createObjectURL&&"undefined"!=typeof Blob)try{var e="postMessage("+f.toString()+"("+[JSON.stringify(s),u.toString(),p.toString()].join(",")+"));",r=new Blob([e],{type:"text/javascript"}),a=new Worker(URL.createObjectURL(r),{name:"wpTestEmojiSupports"});return void(a.onmessage=function(e){c(n=e.data),a.terminate(),t(n)})}catch(e){}c(n=f(s,u,p))}t(n)}).then(function(e){for(var t in e)n.supports[t]=e[t],n.supports.everything=n.supports.everything&&n.supports[t],"flag"!==t&&(n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&n.supports[t]);n.supports.everythingExceptFlag=n.supports.everythingExceptFlag&&!n.supports.flag,n.DOMReady=!1,n.readyCallback=function(){n.DOMReady=!0}}).then(function(){return e}).then(function(){var e;n.supports.everything||(n.readyCallback(),(e=n.source||{}).concatemoji?t(e.concatemoji):e.wpemoji&&e.twemoji&&(t(e.twemoji),t(e.wpemoji)))}))}((window,document),window._wpemojiSettings);
/* ]]> */



	    var tf_mobile_menu_trigger_point = 900;
	


// Función para mostrar u ocultar el menú móvil según el tamaño de pantalla
	function themifyMobileMenuTrigger(e) {
// Obtener el ancho de la pantalla actual
		var w = document.body.clientWidth;
		if( w > 0 && w <= tf_mobile_menu_trigger_point ) {
// Activar clase para menú móvil si el ancho es pequeño
			document.body.classList.add( 'mobile_menu_active' );
		} else {
// Quitar clase de menú móvil si el ancho es grande
			document.body.classList.remove( 'mobile_menu_active' );
		}
		
	}
	themifyMobileMenuTrigger();
// Inicializa evento para controlar el menú después de cargar la página
	var _init =function () {
// Asocia la función al evento de redimensionar la ventana
	    jQuery( window ).on('tfsmartresize.tf_mobile_menu', themifyMobileMenuTrigger );
	    document.removeEventListener( 'DOMContentLoaded', _init, {once:true,passive:true} );
	    _init=null;
	};
// Esperar a que el DOM esté completamente cargado
	document.addEventListener( 'DOMContentLoaded', _init, {once:true,passive:true} );



				if(document.getElementById( "themify-builder-style" )===null ){
					var el =  document.getElementById( "builder-styles-css" );
					if(el!==null){
					var link = document.createElement("link");
					link.id="themify-builder-style";
					link.rel="stylesheet";
					link.type="text/css";
					link.href=el.getAttribute("data-href");
					el.parentNode.replaceChild( link, el);
					}
				}
			

[{"@context":"https:\/\/schema.org","@type":"WebSite","url":"http:\/\/fundacionmgas.org.mx\/","potentialAction":{"@type":"SearchAction","target":"http:\/\/fundacionmgas.org.mx\/?&s={search_term_string}","query-input":"required name=search_term_string"}},{"@context":"https:\/\/schema.org","@type":"WebPage","mainEntityOfPage":{"@type":"WebPage","@id":"https:\/\/fundacionmgas.org.mx\/"},"headline":"Inicio","datePublished":"2020-04-27T15:37:38+00:00","dateModified":"2020-04-27T15:37:38+00:00","description":""}]


/* <![CDATA[ */
var themify_vars = {"version":"4.8.6","url":"https:\/\/fundacionmgas.org.mx\/wp-content\/themes\/themify-ultra\/themify","wp":"6.4.5","map_key":null,"bing_map_key":null,"includesURL":"https:\/\/fundacionmgas.org.mx\/wp-includes\/","isCached":null,"commentUrl":"","minify":{"css":{"themify-icons":0,"lightbox":0,"main":0,"themify-builder-style":0},"js":{"backstretch.themify-version":0,"bigvideo":0,"themify.dropdown":0,"themify-tiles":0,"themify.mega-menu":0,"themify.builder.script":0,"themify.scroll-highlight":0,"themify-youtube-bg":0,"themify-ticks":0}},"media":{"css":{"wp-mediaelement":{"src":"https:\/\/fundacionmgas.org.mx\/wp-includes\/js\/mediaelement\/wp-mediaelement.min.css","v":false},"mediaelement":{"src":"https:\/\/fundacionmgas.org.mx\/wp-includes\/js\/mediaelement\/mediaelementplayer-legacy.min.css","v":"4.2.17"}},"_wpmejsSettings":"var _wpmejsSettings = {\"pluginPath\":\"\\\/wp-includes\\\/js\\\/mediaelement\\\/\",\"classPrefix\":\"mejs-\",\"stretching\":\"responsive\",\"audioShortcodeLibrary\":\"mediaelement\",\"videoShortcodeLibrary\":\"mediaelement\"};","js":{"mediaelement-core":{"src":"https:\/\/fundacionmgas.org.mx\/wp-includes\/js\/mediaelement\/mediaelement-and-player.min.js","v":"4.2.17","extra":{"before":[false,"var mejsL10n = {\"language\":\"es\",\"strings\":{\"mejs.download-file\":\"Descargar archivo\",\"mejs.install-flash\":\"Est\\u00e1s usando un navegador que no tiene Flash activo o instalado. Por favor, activa el componente del reproductor Flash o descarga la \\u00faltima versi\\u00f3n desde https:\\\/\\\/get.adobe.com\\\/flashplayer\\\/\",\"mejs.fullscreen\":\"Pantalla completa\",\"mejs.play\":\"Reproducir\",\"mejs.pause\":\"Pausa\",\"mejs.time-slider\":\"Control de tiempo\",\"mejs.time-help-text\":\"Usa las teclas de direcci\\u00f3n izquierda\\\/derecha para avanzar un segundo y las flechas arriba\\\/abajo para avanzar diez segundos.\",\"mejs.live-broadcast\":\"Transmisi\\u00f3n en vivo\",\"mejs.volume-help-text\":\"Utiliza las teclas de flecha arriba\\\/abajo para aumentar o disminuir el volumen.\",\"mejs.unmute\":\"Activar el sonido\",\"mejs.mute\":\"Silenciar\",\"mejs.volume-slider\":\"Control de volumen\",\"mejs.video-player\":\"Reproductor de v\\u00eddeo\",\"mejs.audio-player\":\"Reproductor de audio\",\"mejs.captions-subtitles\":\"Pies de foto \\\/ Subt\\u00edtulos\",\"mejs.captions-chapters\":\"Cap\\u00edtulos\",\"mejs.none\":\"Ninguna\",\"mejs.afrikaans\":\"Afrik\\u00e1ans\",\"mejs.albanian\":\"Albano\",\"mejs.arabic\":\"\\u00c1rabe\",\"mejs.belarusian\":\"Bielorruso\",\"mejs.bulgarian\":\"B\\u00falgaro\",\"mejs.catalan\":\"Catal\\u00e1n\",\"mejs.chinese\":\"Chino\",\"mejs.chinese-simplified\":\"Chino (Simplificado)\",\"mejs.chinese-traditional\":\"Chino (Tradicional)\",\"mejs.croatian\":\"Croata\",\"mejs.czech\":\"Checo\",\"mejs.danish\":\"Dan\\u00e9s\",\"mejs.dutch\":\"Neerland\\u00e9s\",\"mejs.english\":\"Ingl\\u00e9s\",\"mejs.estonian\":\"Estonio\",\"mejs.filipino\":\"Filipino\",\"mejs.finnish\":\"Fin\\u00e9s\",\"mejs.french\":\"Franc\\u00e9s\",\"mejs.galician\":\"Gallego\",\"mejs.german\":\"Alem\\u00e1n\",\"mejs.greek\":\"Griego\",\"mejs.haitian-creole\":\"Creole haitiano\",\"mejs.hebrew\":\"Hebreo\",\"mejs.hindi\":\"Indio\",\"mejs.hungarian\":\"H\\u00fangaro\",\"mejs.icelandic\":\"Island\\u00e9s\",\"mejs.indonesian\":\"Indonesio\",\"mejs.irish\":\"Irland\\u00e9s\",\"mejs.italian\":\"Italiano\",\"mejs.japanese\":\"Japon\\u00e9s\",\"mejs.korean\":\"Coreano\",\"mejs.latvian\":\"Let\\u00f3n\",\"mejs.lithuanian\":\"Lituano\",\"mejs.macedonian\":\"Macedonio\",\"mejs.malay\":\"Malayo\",\"mejs.maltese\":\"Malt\\u00e9s\",\"mejs.norwegian\":\"Noruego\",\"mejs.persian\":\"Persa\",\"mejs.polish\":\"Polaco\",\"mejs.portuguese\":\"Portugu\\u00e9s\",\"mejs.romanian\":\"Rumano\",\"mejs.russian\":\"Ruso\",\"mejs.serbian\":\"Serbio\",\"mejs.slovak\":\"Eslovaco\",\"mejs.slovenian\":\"Esloveno\",\"mejs.spanish\":\"Espa\\u00f1ol\",\"mejs.swahili\":\"Swahili\",\"mejs.swedish\":\"Sueco\",\"mejs.tagalog\":\"Tagalo\",\"mejs.thai\":\"Tailand\\u00e9s\",\"mejs.turkish\":\"Turco\",\"mejs.ukrainian\":\"Ukraniano\",\"mejs.vietnamese\":\"Vietnamita\",\"mejs.welsh\":\"Gal\\u00e9s\",\"mejs.yiddish\":\"Yiddish\"}};"]}},"mediaelement-migrate":{"src":"https:\/\/fundacionmgas.org.mx\/wp-includes\/js\/mediaelement\/mediaelement-migrate.min.js","v":false,"extra":""}}},"scrollTo":null};
var tbLocalScript = {"ajaxurl":"https:\/\/fundacionmgas.org.mx\/wp-admin\/admin-ajax.php","isAnimationActive":"1","isParallaxActive":"1","isScrollEffectActive":"1","isStickyScrollActive":"1","animationInviewSelectors":[".module.wow",".module_row.wow",".builder-posts-wrap > .post.wow"],"backgroundSlider":{"autoplay":5000},"animationOffset":"100","videoPoster":"https:\/\/fundacionmgas.org.mx\/wp-content\/themes\/themify-ultra\/themify\/themify-builder\/img\/blank.png","backgroundVideoLoop":"yes","builder_url":"https:\/\/fundacionmgas.org.mx\/wp-content\/themes\/themify-ultra\/themify\/themify-builder","framework_url":"https:\/\/fundacionmgas.org.mx\/wp-content\/themes\/themify-ultra\/themify","version":"4.8.6","fullwidth_support":"1","fullwidth_container":"body","loadScrollHighlight":"1","addons":[],"breakpoints":{"tablet_landscape":[769,"1280"],"tablet":[681,"768"],"mobile":"680"},"ticks":{"tick":30,"ajaxurl":"https:\/\/fundacionmgas.org.mx\/wp-admin\/admin-ajax.php","postID":29},"cf_api_url":"https:\/\/fundacionmgas.org.mx\/?tb_load_cf=","emailSub":"Check this out!"};
var themifyScript = {"lightbox":{"lightboxSelector":".themify_lightbox","lightboxOn":true,"lightboxContentImages":false,"lightboxContentImagesSelector":"","theme":"pp_default","social_tools":false,"allow_resize":true,"show_title":false,"overlay_gallery":false,"screenWidthNoLightbox":600,"deeplinking":false,"contentImagesAreas":"","gallerySelector":".gallery-icon > a","lightboxGalleryOn":true},"lightboxContext":"body"};
var tbScrollHighlight = {"fixedHeaderSelector":"#headerwrap.fixed-header","speed":"900","navigation":"#main-nav, .module-menu .ui.nav","scrollOffset":"-5","scroll":"internal"};
/* ]]> */



/* <![CDATA[ */
var themifyScript = {"themeURI":"https:\/\/fundacionmgas.org.mx\/wp-content\/themes\/themify-ultra","lightbox":{"lightboxSelector":".themify_lightbox","lightboxOn":true,"lightboxContentImages":false,"lightboxContentImagesSelector":"","theme":"pp_default","social_tools":false,"allow_resize":true,"show_title":false,"overlay_gallery":false,"screenWidthNoLightbox":600,"deeplinking":false,"contentImagesAreas":"","gallerySelector":".gallery-icon > a","lightboxGalleryOn":true},"lightboxContext":"#pagewrap","fixedHeader":"fixed-header","sticky_header":"","ajax_nonce":"71aa35ef51","ajax_url":"https:\/\/fundacionmgas.org.mx\/wp-admin\/admin-ajax.php","smallScreen":"760","resizeRefresh":"250","parallaxHeader":"1","loadingImg":"https:\/\/fundacionmgas.org.mx\/wp-content\/themes\/themify-ultra\/images\/loading.gif","maxPages":"0","currentPage":"1","pageLoaderEffect":"","autoInfinite":"auto","bufferPx":"50","infiniteURL":"0","scrollToNewOnLoad":"scroll","resetFilterOnLoad":"reset","fullPageScroll":"","shop_masonry":"no","tiledata":{"grids":{"post":{"1":["AAAA"],"2":["BBCC","BBCC"],"3":["DD.."],"4":[".EEF",".EEF"],"5":["DD..","BBCC","BBCC"],"6":[".EEF",".EEF","BBCC","BBCC"],"7":[".EEF",".EEF","DD.."],"8":[".EEF",".EEF","DD..","AAAA"],"9":[".EEF",".EEF","DD..","BBCC","BBCC"],"10":[".EEF",".EEF","DD..","MMNN","MMPP"],"11":[".EEF",".EEF","DD..","MMNN","MMPP","AAAA"],"12":[".EEF",".EEF","DD..","MMNN","MMPP","BBCC","BBCC"],"13":[".EEF",".EEF","DD..","MMNN","MMPP","LSRR","LSRR"]},"mobile":["AA",".."]},"default_grid":"post","small_screen_grid":"mobile","breakpoint":800,"padding":5,"full_width":false,"animate_init":false,"animate_resize":true,"animate_template":false},"responsiveBreakpoints":{"tablet_landscape":"1280","tablet":"768","mobile":"680"}};
/* ]]> */