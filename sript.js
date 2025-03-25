const katalogTrigger = document.getElementById('tombolkatalog');
const katalogDropdown = document.getElementById('katalog');

katalogTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  katalogDropdown.classList.toggle('show');
});