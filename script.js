const suraList = document.getElementById('sura-list');

// Список сур
const suras = [
    { id: 1, name: "Аль-Аср", file: "surasal-asr.html" },
    { id: 2, name: "Аятуль-Курси", file: "surasayat-kursi.html" },
    { id: 3, name: "Аль-Каусар", file: "surasal-kausar.html" },
    { id: 4, name: "Икылас", file: "surasikhlas.html" },
    { id: 5, name: "Аль-Фалак", file: "surasal-falak.html" },
    { id: 6, name: "Ан-Нас", file: "surasan-nas.html" },
    { id: 7, name: "Аль-Фатиха", file: "surasal-fatiha.html" },
    { id: 8, name: "Аш-Шамс", file: "surasash-shams.html" }, // Замена на Аш-Шамс
    
    { id: 11, name: "Аль-Кафирун", file: "surasal-kafirun.html" },
    { id: 12, name: "Аль-Мульк", file: "surasal-mulk.html" },
    { id: 13, name: "Аль-Инширах", file: "surasal-inshirah.html" },
    { id: 14, name: "Аль-Духа", file: "surasal-duha.html" },
    
];

// Генерация списка сур
suras.forEach(sura => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${sura.file}">${sura.name}</a>`;
    suraList.appendChild(li);
});

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', function() {
    const filter = searchInput.value.toLowerCase();
    const items = document.querySelectorAll('#sura-list li');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(filter) ? '' : 'none';
    });
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        setTimeout(() => {
            window.location.href = target;
        }, 300); // Задержка 300 мс
    });
});
