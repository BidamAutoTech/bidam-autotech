
        // Mobile menu toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                        mobileMenu.classList.add('hidden');
                    }
                }
            });
        });
        
        // Add fade-in animation when elements come into view
        const fadeElements = document.querySelectorAll('.car-card, .testimonial-card');
        
        const fadeInObserver = 'IntersectionObserver' in window && new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        fadeElements.forEach(element => {
            if (fadeInObserver) fadeInObserver.observe(element);
        });


    let slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length) {
    slides[current].classList.add("active");

    if (slides.length > 1) {
        setInterval(() => {
            slides[current].classList.remove("active");
            current = (current + 1) % slides.length;
            slides[current].classList.add("active");
        }, 3000);
    }
}

const cars = [
 {
    id: 1,
    name: "Honda Accord 2020",
    price: "₦27,000,000",

    images: [
        "images/honda-2020.jpeg",
        "images/honda-2020.jpeg",
        "images/honda-2020.jpeg"
    ],

    type: "Sedan",
    fuel: "Gasoline",
    transmission: "Automatic",
    mileage: "65,000 km",
    condition: "Foreign Used",

    year: "2020",
    engine: "2.0L",
    cylinders: "4",
    interior: "Black",
    status: "Available",

    featured: true,
    newArrival: true
},
  {
    id: 2,
    name: "Toyota Camry 2011",
    price: "₦10,000,000",

    images: [
        "images/camry-2011.jpeg"
    ],

    type: "Sedan",
    fuel: "Gasoline",
    condition: "Foreign Used",

    year: "2011",
    status: "Available",

    featured: false,
    newArrival: false
},
  {
    id: 3,
    name: "Toyota Camry 2013 Sport",
    price: "₦14,000,000",
    images: [
         "images/camry-2013.jpeg"
    ],
    type: "Sedan",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 4,
    name: "Toyota Highlander 2012 Limited Edition",
    price: "₦20,500,000",
    images: [
        "images/highlander-2012.jpeg"
    ],
    type: "SUV",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 5,
    name: "Toyota Highlander 2015 LE",
    price: "₦28,500,000",
    images: [
        "images/highlander-2015.jpeg"
    ],
    type: "SUV",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 6,
    name: "Jeep Wrangler 2020",
    price: "₦55,000,000",
    images: [
        "images/jeep-2020.jpeg"
    ],
    type: "SUV",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 7,
    name: "Lexus ES350 2008",
    price: "₦12,000,000",
    images: [
        "images/lexus-2008.jpeg"
    ],
    type: "Sedan",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 8,
    name: "Lexus RX350 2017",
    price: "₦46,000,000",
    images: [
        "images/lexus-2017.jpeg"
    ],
    type: "SUV",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 9,
    name: "Toyota Sienna 2015 XLE",
    price: "₦17,000,000",
    images: [
        "images/sienna-2015.jpeg"
    ],
    type: "Van",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 10,
    name: "Toyota Solara 2003",
    price: "₦8,800,000",
    images: [
        "images/toyota-2003.jpeg"
    ],
    type: "Coupe",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 11,
    name: "Toyota Corolla 2004",
    price: "₦8,400,000",
    images: [
        "images/toyota-2004.jpeg"
    ],
    type: "Sedan",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 12,
    name: "Toyota Highlander 2010 Basic",
    price: "₦17,300,000",
    images: [
        "images/toyota-2010.jpeg"
    ],
    type: "SUV",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false
  },
  {
    id: 13,
    name: "Toyota Highlander 2016 LE",
    price: "₦28,500,000",
    images: [
        "images/toyota-2016.jpeg"
    ],
    type: "SUV",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    transmission: "Automatic",
    mileage: "65,000 km"
  },
  {
    id: 14,
    name: "Toyota Corolla 2015",
    price: "₦14,000,000",
    images: [
        "images/toyota-2015.jpeg"
    ],
    type: "Sedan",
    fuel: "Gasoline",
    condition: "Foreign Used",
    featured: false,
    newArrival: false,
    transmission: "Automatic",
    mileage: "65,000 km",
  }
];

const WHATSAPP_NUMBER = "2349122240871";
const savedCars = JSON.parse(localStorage.getItem("cars")) || [];

console.log("Saved cars:", savedCars);
console.log("Saved cars length:", savedCars.length);

cars.push(...savedCars);

console.log("Total cars:", cars.length);



const container = document.getElementById("car-list");

function getCondition() {
    const conditions = ["Foreign Used", "Clean", "Registered", "First Body", "Excellent Condition"];
    return conditions[Math.floor(Math.random() * conditions.length)];
}

function renderCars(carsToRender) {
    if (!container) return;

    container.innerHTML = "";

    const emptyInventory = document.getElementById("empty-inventory");
    if (emptyInventory) emptyInventory.classList.toggle("hidden", carsToRender.length !== 0);

    if (!carsToRender.length) return;

    carsToRender.forEach(car => {

        const card = document.createElement("div");

        card.className =
            "car-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-100";


        card.innerHTML = `

        <!-- IMAGE -->
        <div class="relative group">

            <img
                src="${car.images?.[0] || 'images/honda-2020.jpeg'}"
                alt="${car.name}"
                class="w-full h-64 object-cover transition duration-500 group-hover:scale-105"
            >


            <!-- CONDITION -->
            <div class="absolute top-4 left-4
                        bg-black/75 backdrop-blur-sm
                        text-white text-xs font-semibold
                        px-3 py-1.5 rounded-full">

                ${car.condition || "Foreign Used"}

            </div>


            <!-- NEW ARRIVAL -->
            ${car.newArrival ? `

                <div class="absolute top-4 right-4
                            bg-red-600 text-white
                            text-xs font-bold
                            px-3 py-1.5 rounded-full">

                    NEW ARRIVAL

                </div>

            ` : ""}


            <!-- PRICE -->
            <div class="absolute bottom-4 right-4
                        bg-white text-gray-900
                        text-sm font-extrabold
                        px-4 py-2 rounded-lg
                        shadow-lg">

                ${car.price}

            </div>

        </div>


        <!-- CONTENT -->
        <div class="p-5">


            <!-- CAR NAME -->
            <h3 class="text-xl font-bold text-gray-900 mb-2">

                ${car.name}

            </h3>


            <!-- BASIC DETAILS -->
            <div class="flex flex-wrap gap-2 mb-4">

                ${car.year ? `
                    <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        <i class="far fa-calendar mr-1"></i>
                        ${car.year}
                    </span>
                ` : ""}


                ${car.fuel ? `
                    <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        <i class="fas fa-gas-pump mr-1"></i>
                        ${car.fuel}
                    </span>
                ` : ""}


                ${car.transmission ? `
                    <span class="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                        <i class="fas fa-gears mr-1"></i>
                        ${car.transmission}
                    </span>
                ` : ""}

            </div>


            <!-- SECONDARY DETAILS -->
            ${car.mileage ? `

                <div class="flex items-center gap-2
                            text-sm text-gray-500 mb-4">

                    <i class="fas fa-road text-gray-400"></i>

                    <span>${car.mileage}</span>

                </div>

            ` : ""}


            <!-- BUTTONS -->
            <div class="grid grid-cols-2 gap-2">


                <!-- DETAILS -->
                <button
                    onclick="viewDetails(${car.id})"
                    class="bg-gray-900 hover:bg-black
                           text-white py-2.5 rounded-lg
                           text-sm font-semibold
                           transition">

                    <i class="fas fa-eye mr-1"></i>
                    Details

                </button>


                <!-- SAVE -->
                <button
                    onclick="addToCart(${car.id})"
                    class="bg-gray-100 hover:bg-gray-200
                           text-gray-800 py-2.5 rounded-lg
                           text-sm font-semibold
                           transition">

                    <i class="far fa-heart mr-1"></i>
                    Save

                </button>


                <!-- WHATSAPP -->
                <a
                    target="_blank"
                    href="https://wa.me/2349122240871?text=Hi%20Bidam%20AutoTech,%20I%20am%20interested%20in%20${encodeURIComponent(car.name)}"
                    class="col-span-2
                           bg-green-600 hover:bg-green-700
                           text-white py-2.5 rounded-lg
                           text-center text-sm font-semibold
                           transition">

                    <i class="fab fa-whatsapp mr-2"></i>
                    Chat on WhatsApp

                </a>

            </div>

        </div>
        `;


        container.appendChild(card);

    });

}

renderCars(cars);

document.getElementById("search-button")
?.addEventListener("click", function () {

    const makeValue =
        document.getElementById("make-filter").value;

    const modelValue =
        document.getElementById("model-filter").value;

    const priceValue =
        document.getElementById("price-filter").value;

    const filteredCars = cars.filter(car => {

        const carPrice =
            parseInt(car.price.replace(/[^0-9]/g, ""));

        const matchMake =
            makeValue === "all" ||
            car.name.includes(makeValue);

        const matchModel =
            modelValue === "all" ||
            car.name.includes(modelValue);

        const matchPrice =
            priceValue === "all" ||
            carPrice <= parseInt(priceValue);

        return matchMake && matchModel && matchPrice;
    });

    renderCars(filteredCars);
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showToast(message) {
    const toast = document.createElement("div");

    toast.textContent = message;

    toast.className = `
        fixed bottom-6 left-1/2 -translate-x-1/2
        bg-black text-white px-4 py-3 rounded-lg shadow-lg z-[9999]
        text-sm
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2000);
}

function addToCart(id) {
    const car = cars.find(c => c.id === id);
    if (!car) return;
   

    const existing = cart.find(item => item.id === id);

if (existing) {
    existing.qty = (existing.qty || 1) + 1;
} else {
    cart.push({ ...car, qty: 1 });
}

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    renderCartItems();

    showToast(car.name + " added to cart");
}

function updateCartCount() {
    const countElement = document.getElementById("cart-count");

    const totalItems = cart.reduce((sum, item) => {
        return sum + (item.qty || 1);
    }, 0);

    if (countElement) countElement.textContent = totalItems;
}
console.log("Total cars loaded:", cars.length);

// initialize count on page load
updateCartCount();

window.viewDetails = function(id) {
    const car = cars.find(c => c.id === id);
    if (!car) return;
    const thumbnailsContainer =
    document.getElementById("modal-thumbnails");

    if (!thumbnailsContainer) return;

thumbnailsContainer.innerHTML = "";

   document.getElementById("modal-image").src =
    car.images?.[0] || "images/honda-2020.jpeg";
   if (car.images?.length) {

    car.images.forEach(img => {
        const thumb = document.createElement("img");

        thumb.src = img;

        thumb.className =
            "w-20 h-16 object-cover rounded cursor-pointer border-2 border-gray-300 hover:border-blue-600 transition";

        thumb.onclick = () => {
            document.getElementById("modal-image").src = img;
        };

        thumbnailsContainer.appendChild(thumb);
    });

}
    document.getElementById("modal-title").textContent = car.name;
    document.getElementById("modal-price").textContent = car.price;

    const detailFields = {
        "modal-condition": car.condition,
        "modal-type": car.type,
        "modal-fuel": car.fuel,
        "modal-year": car.year,
        "modal-custom-paper": car.customPaper,
        "modal-engine": car.engine,
        "modal-cylinder": car.cylinders,
        "modal-interior": car.interior,
        "modal-status": car.status,
        "modal-transmission": car.transmission,
        "modal-mileage": car.mileage
    };

    Object.entries(detailFields).forEach(([fieldId, value]) => {
        const field = document.getElementById(fieldId);
        if (field) field.textContent = value || "Not specified";
    });

    document.getElementById("modal-whatsapp").href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hello Bidam AutoTech, I am interested in the ${car.name}. Is it still available?`)}`;

    const modal = document.getElementById("car-modal");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
};

function closeModal() {
    const modal = document.getElementById("car-modal");
    if (!modal) return;
    modal.classList.add("hidden");
    modal.classList.remove("flex");
}

window.addEventListener("click", (e) => {
    const modal = document.getElementById("car-modal");
    if (e.target === modal) {
        closeModal();
    }
});

window.toggleCart = function() {
    const panel = document.getElementById("cart-panel");
    if (!panel) return;
    panel.classList.toggle("translate-x-full");
    renderCartItems();
};

const cartPanel = document.getElementById("cart-panel");

function openCart() {
    const panel = document.getElementById("cart-panel");
    if (!panel) return;
    panel.classList.remove("translate-x-full");
    renderCartItems();
}

function closeCart() {
    document.getElementById("cart-panel")?.classList.add("translate-x-full");
}

function renderCartItems() {
    const container = document.getElementById("cart-items");
    const totalElement = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");

    if (!container || !totalElement || !checkoutBtn) return;

    container.innerHTML = "";

    

    if (cart.length === 0) {
        container.innerHTML = "<p class='text-gray-500'>Your cart is empty</p>";
        totalElement.textContent = "₦0";
        checkoutBtn.href = "#";
        return;
    }

    let total = 0;
    let message = "Hello Bidam AutoTech, I am interested in these cars:\n\n";

    cart.forEach((car, index) => {

        const priceNumber = parseInt(car.price.replace(/[^0-9]/g, ""));
        const quantity = car.qty || 1;
        total += priceNumber * quantity;

        message += `${index + 1}. ${car.name} × ${quantity} - ${car.price}\n`;

        const item = document.createElement("div");

        item.className = "flex items-center justify-between border-b pb-2";

       item.innerHTML = `
    <div class="flex items-center space-x-3">
         <img src="${car.images?.[0] || "images/honda-2020.jpeg"}"
         class="w-16 h-16 object-cover rounded">

        <div>
            <h4 class="text-sm font-bold">${car.name}</h4>
            <p class="text-blue-600 text-sm">${car.price} × ${quantity}</p>
        </div>
    </div>

    <button onclick="removeFromCart(${index})"
    class="w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-100 text-red-500 text-lg font-bold">
    ×
</button>
`;

        container.appendChild(item);
    });

    totalElement.textContent = "₦" + total.toLocaleString();

    message += `\nTotal: ₦${total.toLocaleString()}`;

    checkoutBtn.href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

        localStorage.setItem("cart", JSON.stringify(cart));
}

function removeFromCart(index) {
    const removed = cart[index];
    if (!removed) return;

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    renderCartItems();

    showToast(removed.name + " removed");
}

renderCartItems();

/* Retired duplicate search/render/cart implementation. The inventory uses the
   search-button handler and renderCars implementation above. Keeping this
   block commented temporarily makes the cleanup reversible without allowing
   it to attach conflicting handlers. */
/*
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {

    console.log("search clicked");

    const makeValue =
        document.getElementById("make-filter").value;

    const modelValue =
        document.getElementById("model-filter").value;

    const priceValue =
        document.getElementById("price-filter").value;

    let filteredCars = cars.filter(car => {

        // MAKE FILTER
        const makeMatch =
            makeValue === "all" ||
            car.name.toLowerCase().includes(makeValue.toLowerCase());

        // MODEL FILTER
        const modelMatch =
            modelValue === "all" ||
            car.name.toLowerCase().includes(modelValue.toLowerCase());

        // PRICE FILTER
        const carPrice =
            parseInt(car.price.replace(/[^0-9]/g, ""));

        const priceMatch =
            priceValue === "all" ||
            carPrice <= parseInt(priceValue);

        return makeMatch && modelMatch && priceMatch;
    });

    renderFilteredCars(filteredCars);
});


function renderFilteredCars(filteredCars) {

    container.innerHTML = "";

    if (filteredCars.length === 0) {

        container.innerHTML = `
            <p class="text-center text-gray-500 col-span-full">
                No cars found
            </p>
        `;

        return;
    }

    filteredCars.forEach(car => {

        const card = document.createElement("div");

        card.className =
            "car-card bg-white rounded-lg overflow-hidden shadow-md transition duration-300";

        card.innerHTML = `
<div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2">

    <div class="relative">

        <img src="${car.images[0]}"
             class="w-full h-64 object-cover">

        <!-- Status -->
        <span class="absolute top-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Available
        </span>

        <!-- Year -->
        <span class="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full">
            ${car.year || ""}
        </span>

    </div>

    <div class="p-5">

        <h3 class="text-xl font-bold text-gray-800">
            ${car.name}
        </h3>

        <p class="text-2xl font-bold text-blue-600 mt-2">
            ${car.price}
        </p>

        <div class="grid grid-cols-2 gap-3 text-sm text-gray-600 mt-5">

            <div>
                🚗 ${car.type}
            </div>

            <div>
                ⛽ ${car.fuel}
            </div>

            <div>
                ✔ ${car.condition}
            </div>

            <div>
                📅 ${car.year || ""}
            </div>

        </div>

        <div class="mt-6 flex gap-3">

            <button onclick="viewDetails(${car.id})"
                class="flex-1 bg-gray-900 hover:bg-black text-white py-3 rounded-lg font-semibold">
                View Details
            </button>

            <a target="_blank"
               href="https://wa.me/2349013757400?text=Hi I'm interested in ${encodeURIComponent(car.name)}"
               class="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-center font-semibold">
                WhatsApp
            </a>

        </div>

    </div>

</div>
`;

        container.appendChild(card);
    });
}

function openCart() {
    document.getElementById("cart-panel")
        .classList.remove("translate-x-full");

    renderCartItems();
}
*/
