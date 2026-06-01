const roleData = {
  consumer: {
    name: 'Valencia 👋',
    role: 'Consumer',
    price: 'Rp 85.000/kg',
    trend: 'Arabica Flores Grade 1 naik 2,5%',
    favorite: 'Arabica Flores Bajawa'
  },
  farmer: {
    name: 'Antonio 👨‍🌾',
    role: 'Petani',
    price: 'Rp 75.000/kg',
    trend: 'Permintaan coffee shop lokal meningkat',
    favorite: 'Robusta Raigewa Roast'
  }
};

const roleButtons = document.querySelectorAll('.toggle');
const welcomeName = document.getElementById('welcomeName');
const welcomeRole = document.getElementById('welcomeRole');
const hargaUtama = document.getElementById('hargaUtama');
const hargaTrend = document.getElementById('hargaTrend');
const kopiUnggulan = document.getElementById('kopiUnggulan');

roleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const role = button.dataset.role;
    const data = roleData[role];

    roleButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    welcomeName.textContent = `Selamat datang, ${data.name}`;
    welcomeRole.textContent = data.role;
    hargaUtama.textContent = data.price;
    hargaTrend.textContent = data.trend;
    kopiUnggulan.textContent = data.favorite;
  });
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const tab = button.dataset.tab;

    tabButtons.forEach((btn) => btn.classList.remove('active'));
    tabPanels.forEach((panel) => panel.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(`tab-${tab}`).classList.add('active');
  });
});

const chips = document.querySelectorAll('.chip');
chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((item) => item.classList.remove('active'));
    chip.classList.add('active');
  });
});

const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  mainNav.classList.toggle('open');
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mainNav.classList.remove('open'));
});