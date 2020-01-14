let open = document.getElementById("open");
let close = document.getElementById("close");
let background = document.getElementById("background");
let body = document.querySelector("body");
let leftMenu = document.getElementById("leftMenu");

function openNav() {
  leftMenu.style.width = "275px";
  open.style.display = "none";
  close.style.display = "block";
  background.style.visibility = "visible";
  body.style.position = "fixed";
}

function closeNav() {
  leftMenu.style.width = "0";
  close.style.display = "none";
  open.style.display = "block";
  background.style.visibility = "hidden";
  body.style.position = "";
}

window.addEventListener('click', function(event){
    if (event.target != open && event.target.parentNode != open){
        leftMenu.style.width = "0";
        close.style.display = "none";
        open.style.display = "block";
        background.style.visibility = "hidden";
        body.style.position = "";
    }
});


/*===============================*/
/*=== Swipe avec Touch Events ===*/
/*===============================*/
// Si l'écran est plus petit que "x" pixels (optionnel) // 1024px ici
if(screen.width <= 1024) {
	var startX = 0; // Position de départ
	var distance = 100; // 100 px de swipe pour afficher le menu

	// Au premier point de contact
	window.addEventListener("touchstart", function(evt) {
		// Récupère les "touches" effectuées
		var touches = evt.changedTouches[0];
		startX = touches.pageX;
		var between = 0;
	}, false);

	// Quand les points de contact sont en mouvement
	window.addEventListener("touchmove", function(evt) {
		// Limite les effets de bord avec le tactile...
		evt.preventDefault();
		evt.stopPropagation();
	}, false);

	// Quand le contact s'arrête
	window.addEventListener("touchend", function(evt) {
		var touches = evt.changedTouches[0];
		between = touches.pageX - startX;

		// Détection de la direction
		if(between > 0) {
			var orientation = "ltr";
		} else {
			var orientation = "rtl";
		}

		// Créé l'effet pour le menu slide (compatible partout)
		if(Math.abs(between) >= distance && orientation == "ltr" && leftMenu.clientWidth == 0) {
      leftMenu.style.width = "275px";
      open.style.display = "none";
      close.style.display = "block";
      background.style.visibility = "visible";
      body.style.position = "fixed";
		}
		if(Math.abs(between) >= distance && orientation == "rtl" && leftMenu.clientWidth == 275) {
      leftMenu.style.width = "0";
      close.style.display = "none";
      open.style.display = "block";
      background.style.visibility = "hidden";
      body.style.position = "";
		}
	}, false);
}
