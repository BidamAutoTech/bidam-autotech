const form = document.getElementById("carForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const car = {
        id: Date.now(),

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

    // Get existing cars
    const cars = JSON.parse(localStorage.getItem("cars")) || [];

    // Add new car
    cars.push(car);

    // Save back to localStorage
    localStorage.setItem("cars", JSON.stringify(cars));

    alert("Car saved successfully!");

    form.reset();

    console.log("Car saved:", car);
    console.log("Total saved cars:", cars.length);
});