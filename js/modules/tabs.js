export default function initTabNav() {
  const tabmenu = document.querySelectorAll(".js-tabmenu li");
  const tabcontent = document.querySelectorAll(".js-tab-content section");

  if (tabmenu.length && tabcontent.length) {
    tabcontent[0].classList.add("ativo");

    function activeTab(index) {
      tabcontent.forEach((content) => {
        content.classList.remove("ativo");
      });
      const direcao = tabcontent[index].dataset.anime;
      tabcontent[index].classList.add("ativo", direcao);
    }

    tabmenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
