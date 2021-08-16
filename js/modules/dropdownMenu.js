export default function initDropdown() {
  const dropdownmenus = document.querySelectorAll("[data-dropdown]");

  dropdownmenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("ativo");
  }
}
