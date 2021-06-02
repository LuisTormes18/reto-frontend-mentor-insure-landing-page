const $btn_hamburger = document.getElementById("btn-menu-hamburger");
const $menu_movil = document.getElementById("menu-header");
const $img_menu = document.getElementById("img-nabvar");

$btn_hamburger.innerHTML = `<img src="./images/icon-hamburger.svg" alt="" />`;
$menu_movil.style.visibility = "hidden";

$btn_hamburger.addEventListener("click", () => {
  console.log("click");
  if ($menu_movil.style.visibility == "hidden") {
    $menu_movil.style.visibility = "visible";
    $img_menu.style.visibility = "visible";

    $btn_hamburger.innerHTML = `<img src="./images/icon-hamburger.svg" alt="" />`;
  } else {
    $menu_movil.style.visibility = "hidden";
    $img_menu.style.visibility = "hidden";
    $btn_hamburger.innerHTML = `<img src="./images/icon-close.svg" alt="" />`;
  }
});
