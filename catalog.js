document.addEventListener('DOMContentLoaded', function() {
    const catalog = document.getElementById('catalog');
    
    // Расширенный список компьютеров с дополнительными характеристиками
    const computers = [
    { id: 1, name: 'Компьютер 1', price: 50000, img: 'computer1.png', cpu: 'Intel Core i5', ram: '16GB', storage: 'SSD 512GB', gpu: 'NVIDIA GTX 1660' },
    { id: 2, name: 'Компьютер 2', price: 60000, img: 'computer2.png', cpu: 'AMD Ryzen 5', ram: '8GB', storage: 'HDD 1TB', gpu: 'AMD Radeon RX 560' },
    // Добавьте другие компьютеры по аналогии
    ];
    
    // Отображение компьютеров с их характеристиками
    computers.forEach(computer => {
    const computerDiv = document.createElement('div');
    computerDiv.innerHTML = `
    <img src="${computer.img}" alt="${computer.name}" class="computer-img">
    <h3>${computer.name}</h3>
    Цена: ${computer.price} руб.
    Процессор: ${computer.cpu}
    Оперативная память: ${computer.ram}
    Накопитель: ${computer.storage}
    Видеокарта: ${computer.gpu}
    <p><button class="buy-button" onclick="buyComputer(${computer.id})">Купить</button></p>`;
    catalog.appendChild(computerDiv);
    });
    });
    
    // Функция покупки
    function buyComputer(computerId) {
    alert(`Компьютер с ID ${computerId} куплен!`);
    // Здесь должен быть код для обработки покупки
    }