const form = document.getElementById("carForm");
const carList = document.getElementById("carList");

let editCarId = null;


// ===============================
// SAVE / UPDATE CAR
// ===============================

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const car = {
    id: editCarId || Date.now(),

    // Keep the original date when editing,
    // create a new date when adding a car
    dateAdded: editCarId
        ? (JSON.parse(localStorage.getItem("cars")) || [])
            .find(c => c.id === editCarId)?.dateAdded || Date.now()
        : Date.now(),

    name: document.getElementById("name").value,
        price: document.getElementById("price").value,

        images: document.getElementById("images").value
            .split(",")
            .map(image => image.trim())
            .filter(image => image !== ""),

        type: document.getElementById("type").value,
        fuel: document.getElementById("fuel").value,
        transmission: document.getElementById("transmission").value,
        mileage: document.getElementById("mileage").value,
        condition: document.getElementById("condition").value,

        year: document.getElementById("year").value,
        engine: document.getElementById("engine").value,
        cylinders: document.getElementById("cylinders").value,
        interior: document.getElementById("interior").value,

        customPaper: document.getElementById("customPaper").value,

        status: document.getElementById("status").value,

        featured: document.getElementById("featured").checked,
        newArrival: document.getElementById("newArrival").checked
    };

    const cars = JSON.parse(localStorage.getItem("cars")) || [];

    if (editCarId) {

        // UPDATE EXISTING CAR
        const index = cars.findIndex(c => c.id === editCarId);

        if (index !== -1) {
            cars[index] = car;
        }

        alert("Car updated successfully!");

        editCarId = null;

        form.querySelector("button[type='submit']").textContent = "Save Car";

    } else {

        // ADD NEW CAR
        cars.push(car);

        alert("Car saved successfully!");
    }

    localStorage.setItem("cars", JSON.stringify(cars));

    form.reset();

    displayCars();
});


// ===============================
// DISPLAY EXISTING CARS
// ===============================

function displayCars() {

    const cars = JSON.parse(localStorage.getItem("cars")) || [];

    carList.innerHTML = "";

    if (cars.length === 0) {

        carList.innerHTML = `
            <p class="text-gray-500">
                No cars have been added yet.
            </p>
        `;

        return;
    }


    cars.forEach(car => {

        const div = document.createElement("div");

        div.className =
            "border rounded-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4";


        div.innerHTML = `

            <div>

                <h3 class="text-xl font-bold">
                    ${car.name}
                </h3>

                <p class="text-gray-600">
                    ${car.year || ""}
                </p>

                <p class="font-semibold">
                    ${car.price || ""}
                </p>

            </div>


            <div class="flex gap-2">

                <button
                    onclick="editCar(${car.id})"
                    class="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">

                    Edit

                </button>


                <button
                    onclick="deleteCar(${car.id})"
                    class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">

                    Delete

                </button>

            </div>

        `;

        carList.appendChild(div);

    });
}


// ===============================
// EDIT CAR
// ===============================

function editCar(id) {

    const cars = JSON.parse(localStorage.getItem("cars")) || [];

    const car = cars.find(c => c.id === id);

    if (!car) return;


    document.getElementById("name").value = car.name || "";
    document.getElementById("price").value = car.price || "";

    document.getElementById("images").value =
        (car.images || []).join(", ");


    document.getElementById("type").value = car.type || "";
    document.getElementById("fuel").value = car.fuel || "";
    document.getElementById("transmission").value =
        car.transmission || "";

    document.getElementById("mileage").value =
        car.mileage || "";

    document.getElementById("condition").value =
        car.condition || "";

    document.getElementById("year").value =
        car.year || "";

    document.getElementById("engine").value =
        car.engine || "";

    document.getElementById("cylinders").value =
        car.cylinders || "";

    document.getElementById("interior").value =
        car.interior || "";

    document.getElementById("customPaper").value =
        car.customPaper || "";

    document.getElementById("status").value =
        car.status || "";

    document.getElementById("featured").checked =
        car.featured || false;

    document.getElementById("newArrival").checked =
        car.newArrival || false;


    editCarId = id;


    form.querySelector("button[type='submit']").textContent =
        "Update Car";


    // Scroll back to the form
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ===============================
// DELETE CAR
// ===============================

function deleteCar(id) {

    const confirmDelete =
        confirm("Are you sure you want to delete this car?");

    if (!confirmDelete) return;


    let cars =
        JSON.parse(localStorage.getItem("cars")) || [];


    cars = cars.filter(car => car.id !== id);


    localStorage.setItem(
        "cars",
        JSON.stringify(cars)
    );


    displayCars();

    alert("Car deleted successfully!");

}


// ===============================
// LOAD CARS WHEN PAGE OPENS
// ===============================

displayCars();