// pakai array n object buat simpan nama-nama menu
const menus = [
    {
        name: "Cappuccino",
        category: "coffee",
        price: "Rp. 38.000,00",
        image: "https://i.pinimg.com/736x/80/e2/0a/80e20ade3f26efeda7d18959547e23ad.jpg"
    },
    {
        name: "Americano",
        category: "coffee",
        price: "Rp. 45.000,00",
        image: "https://i.pinimg.com/736x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg"
    },
    {
        name: "Espresso",
        category: "coffee",
        price: "Rp. 45.000,00",
        image: "https://i.pinimg.com/736x/54/c4/fe/54c4fecf885515e12b3ab635eb3e58db.jpg"
    },
    {
        name: "Matcha Latte",
        category: "noncoffee",
        price: "Rp. 30.000,00",
        image: "https://i.pinimg.com/736x/3e/ab/4f/3eab4f668f4d7870016f898e85d41367.jpg"
    },
    {
        name: "Chocolate Milk",
        category: "noncoffee",
        price: "Rp. 28.000,00",
        image: "https://i.pinimg.com/1200x/b0/30/83/b03083353651ba7e93fe6f81b6eb6254.jpg"
    },
    {
        name: "Croissant",
        category: "food",
        price: "Rp. 35.000,00",
        image: "https://i.pinimg.com/1200x/cf/9b/af/cf9bafa8f904bb4c2aacf06cebf46331.jpg"
    },
    {
        name: "French Toast",
        category: "food",
        price: "Rp. 35.000,00",
        image: "https://i.pinimg.com/1200x/ec/30/18/ec3018cfabb5a2a294ee5c63c6d6e7c3.jpg"
    }
];

const menuContainer = document.getElementById("menu-container");
const btnAll = document.getElementById("btnAll");
const btnCoffee = document.getElementById("btnCoffee");
const btnNonCoffee = document.getElementById("btnNonCoffee");
const btnFood = document.getElementById("btnFood");

