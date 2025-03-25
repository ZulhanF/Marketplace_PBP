const katalogTrigger = document.getElementById('tombolkatalog');
const katalogDropdown = document.getElementById('katalog');

const searchTrigger = document.getElementById('tombolsearch');
const searchInput = document.getElementById('search');
const logo = document.getElementById('logo');

katalogTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  katalogDropdown.classList.toggle('show');
});

searchTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  searchInput.classList.toggle('show');
  logo.classList.toggle('hide');
});