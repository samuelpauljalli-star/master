const foods = {
    // 🔥 Gym Essentials
    chicken: { name: "🍗 Chicken Breast", calories: 165, protein: 31, carbs: 0, fats: 3.6 },
    egg: { name: "🥚 Egg (Whole)", calories: 155, protein: 13, carbs: 1.1, fats: 11 },
    rice: { name: "🍚 White Rice", calories: 130, protein: 2.7, carbs: 28, fats: 0.3 },
    whey: { name: "💪 Whey Protein", calories: 390, protein: 80, carbs: 8, fats: 7 },
    oats: { name: "🥣 Rolled Oats", calories: 389, protein: 16.9, carbs: 66, fats: 6.9 },
    peanutButter: { name: "🥜 Peanut Butter", calories: 588, protein: 25, carbs: 20, fats: 50 },

    // 🥩 Non-Veg
    chickenThigh: { name: "🍗 Chicken Thigh", calories: 209, protein: 26, carbs: 0, fats: 11 },
    mutton: { name: "🥩 Mutton", calories: 294, protein: 25, carbs: 0, fats: 21 },
    fish: { name: "🐟 Fish (Rohu)", calories: 97, protein: 18, carbs: 0, fats: 2 },
    tuna: { name: "🐠 Tuna", calories: 132, protein: 29, carbs: 0, fats: 1 },
    prawns: { name: "🍤 Prawns", calories: 99, protein: 24, carbs: 0, fats: 0.3 },
    eggWhite: { name: "🥚 Boiled Egg White", calories: 52, protein: 11, carbs: 1, fats: 0.2 },

    // 🫘 Legumes & Veg Protein
    chickpeas: { name: "🧆 Chickpeas", calories: 364, protein: 19, carbs: 61, fats: 6 },
    soybeans: { name: "🌱 Soybeans", calories: 446, protein: 36, carbs: 30, fats: 20 },
    rajma: { name: "🫘 Rajma", calories: 333, protein: 24, carbs: 60, fats: 1 },
    blackChana: { name: "⚫ Black Chana", calories: 378, protein: 20, carbs: 63, fats: 6 },
    moong: { name: "🟢 Green Gram (Moong)", calories: 347, protein: 24, carbs: 63, fats: 1 },
    masoor: { name: "🫘 Masoor Dal", calories: 352, protein: 25, carbs: 60, fats: 1 },
    lentils: { name: "🥣 Boiled Lentils", calories: 116, protein: 9, carbs: 20, fats: 0.4 },

    // 🌾 Grains & Carbs
    brownRice: { name: "🍚 Brown Rice", calories: 111, protein: 2.6, carbs: 23, fats: 0.9 },
    quinoa: { name: "🌾 Quinoa", calories: 120, protein: 4, carbs: 21, fats: 2 },
    sweetPotato: { name: "🍠 Sweet Potato", calories: 86, protein: 1.6, carbs: 20, fats: 0.1 },
    wheatBread: { name: "🍞 Wheat Bread", calories: 265, protein: 9, carbs: 49, fats: 3 },
    pasta: { name: "🍝 Pasta", calories: 131, protein: 5, carbs: 25, fats: 1 },
    corn: { name: "🌽 Corn", calories: 86, protein: 3, carbs: 19, fats: 1 },

    // 🧀 Dairy
    paneer: { name: "🧀 Paneer", calories: 265, protein: 18, carbs: 1, fats: 20 },
    tofu: { name: "🟫 Tofu", calories: 76, protein: 8, carbs: 2, fats: 4 },
    greekYogurt: { name: "🥣 Greek Yogurt", calories: 59, protein: 10, carbs: 3.6, fats: 0.4 },
    curd: { name: "🥛 Curd", calories: 61, protein: 3.5, carbs: 4.7, fats: 3.3 },
    cheese: { name: "🧀 Cheese", calories: 402, protein: 25, carbs: 1, fats: 33 },
    butter: { name: "🧈 Butter", calories: 717, protein: 0.9, carbs: 0.1, fats: 81 },

    // 🍳 Breakfast
    omelette: { name: "🍳 Omelette", calories: 154, protein: 11, carbs: 2, fats: 12 },
    scrambledEggs: { name: "🍳 Scrambled Eggs", calories: 148, protein: 10, carbs: 1.6, fats: 11 },
    pbToast: { name: "🍞🥜 PB Toast", calories: 320, protein: 12, carbs: 35, fats: 15 },
    cornflakes: { name: "🥣 Cornflakes", calories: 357, protein: 8, carbs: 84, fats: 0.4 },
    muesli: { name: "🌾 Muesli", calories: 380, protein: 13, carbs: 70, fats: 8 },
    boiledCorn: { name: "🌽 Boiled Corn", calories: 96, protein: 3, carbs: 21, fats: 1.5 },
    idli: { name: "🥟 Idli", calories: 130, protein: 4, carbs: 28, fats: 1 },
    dosa: { name: "🥞 Dosa", calories: 184, protein: 4, carbs: 30, fats: 6 },
    upma: { name: "🍲 Upma", calories: 150, protein: 5, carbs: 27, fats: 3 },
    poha: { name: "🍛 Poha", calories: 130, protein: 2.5, carbs: 25, fats: 3 },
    chapati: { name: "🫓 Chapati", calories: 297, protein: 9, carbs: 55, fats: 3 },
    paratha: { name: "🥙 Paratha", calories: 320, protein: 8, carbs: 45, fats: 15 },

    // 🥦 Vegetables & Salads
    broccoli: { name: "🥦 Broccoli", calories: 34, protein: 2.8, carbs: 7, fats: 0.4 },
    spinach: { name: "🌿 Spinach", calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4 },
    carrot: { name: "🥕 Carrot", calories: 41, protein: 0.9, carbs: 10, fats: 0.2 },
    tomato: { name: "🍅 Tomato", calories: 18, protein: 0.9, carbs: 3.9, fats: 0.2 },
    cucumber: { name: "🥒 Cucumber", calories: 15, protein: 0.7, carbs: 3.6, fats: 0.1 },
    avocado: { name: "🥑 Avocado", calories: 160, protein: 2, carbs: 9, fats: 15 },
    cabbage: { name: "🥬 Cabbage", calories: 25, protein: 1.3, carbs: 5.8, fats: 0.1 },
    beetroot: { name: "🟥 Beetroot", calories: 43, protein: 1.6, carbs: 10, fats: 0.2 },
    lettuce: { name: "🥗 Lettuce", calories: 15, protein: 1.4, carbs: 2.9, fats: 0.2 },

    // 🍎 Fruits
    banana: { name: "🍌 Banana", calories: 89, protein: 1.1, carbs: 23, fats: 0.3 },
    apple: { name: "🍎 Apple", calories: 52, protein: 0.3, carbs: 14, fats: 0.2 },
    mango: { name: "🥭 Mango", calories: 60, protein: 0.8, carbs: 15, fats: 0.4 },
    orange: { name: "🍊 Orange", calories: 47, protein: 0.9, carbs: 12, fats: 0.1 },
    strawberry: { name: "🍓 Strawberry", calories: 32, protein: 0.7, carbs: 7.7, fats: 0.3 },
    pineapple: { name: "🍍 Pineapple", calories: 50, protein: 0.5, carbs: 13, fats: 0.1 },
    grapes: { name: "🍇 Grapes", calories: 69, protein: 0.7, carbs: 18, fats: 0.2 },
    guava: { name: "🟢 Guava", calories: 68, protein: 2.6, carbs: 14, fats: 0.9 },

    // 🥜 Nuts & Seeds
    almonds: { name: "🌰 Almonds", calories: 579, protein: 21, carbs: 22, fats: 50 },
    cashews: { name: "🥜 Cashews", calories: 553, protein: 18, carbs: 30, fats: 44 },
    walnuts: { name: "🌰 Walnuts", calories: 654, protein: 15, carbs: 14, fats: 65 },
    chia: { name: "🌱 Chia Seeds", calories: 486, protein: 17, carbs: 42, fats: 31 },
    pumpkinSeeds: { name: "🎃 Pumpkin Seeds", calories: 559, protein: 30, carbs: 11, fats: 49 },
    flaxSeeds: { name: "🌾 Flax Seeds", calories: 534, protein: 18, carbs: 29, fats: 42 },
    peanuts: { name: "🥜 Peanuts", calories: 567, protein: 25, carbs: 16, fats: 49 },

    // 🍜 Indian Meals
    chickenBiryani: { name: "🍗🍚 Chicken Biryani", calories: 250, protein: 15, carbs: 30, fats: 8 },
    vegBiryani: { name: "🍛 Veg Biryani", calories: 180, protein: 5, carbs: 32, fats: 4 },
    dalTadka: { name: "🥘 Dal Tadka", calories: 180, protein: 9, carbs: 20, fats: 7 },
    chole: { name: "🧆 Chole", calories: 210, protein: 9, carbs: 28, fats: 6 },
    curdRice: { name: "🥣 Curd Rice", calories: 190, protein: 6, carbs: 28, fats: 6 },

    // 🍖 Fast Food & Snacks
    shawarma: { name: "🌯 Shawarma", calories: 290, protein: 14, carbs: 30, fats: 15 },
    fries: { name: "🍟 French Fries", calories: 312, protein: 3, carbs: 41, fats: 15 },
    kfc: { name: "🍗 KFC Chicken", calories: 320, protein: 21, carbs: 18, fats: 19 },
    momos: { name: "🥟 Momos", calories: 148, protein: 6, carbs: 28, fats: 1 },
    pizza: { name: "🍕 Pizza", calories: 266, protein: 11, carbs: 33, fats: 10 },
    burger: { name: "🍔 Burger", calories: 295, protein: 17, carbs: 25, fats: 14 },

    // 🥤 Drinks & Juices
    milk: { name: "🥛 Milk", calories: 60, protein: 3.2, carbs: 5, fats: 3.3 },
    proteinShake: { name: "💪 Protein Shake", calories: 120, protein: 24, carbs: 3, fats: 1 },
    coconutWater: { name: "🥥 Coconut Water", calories: 19, protein: 0.7, carbs: 3.7, fats: 0.2 },
    blackCoffee: { name: "☕ Black Coffee", calories: 2, protein: 0, carbs: 0, fats: 0 },
    bananaShake: { name: "🍌🥤 Banana Shake", calories: 120, protein: 3, carbs: 20, fats: 2 },
    cola: { name: "🥤 Cola", calories: 42, protein: 0, carbs: 11, fats: 0 },

    // 🍨 Desserts
    iceCream: { name: "🍨 Ice Cream", calories: 207, protein: 3.5, carbs: 24, fats: 11 },
    gulabJamun: { name: "🍯 Gulab Jamun", calories: 280, protein: 4, carbs: 45, fats: 10 },
    brownie: { name: "🍫 Brownie", calories: 466, protein: 6, carbs: 50, fats: 28 }
};

const workoutPlans = {
    male_gain: [
        { day: "Monday", focus: "Chest + Triceps", workout: ["Bench Press – 4×8", "Incline DB Press – 3×10", "Chest Fly – 3×12", "Tricep Pushdown – 3×12", "Dips – 3×Failure"], food: ["Oats + Milk", "Chicken + Brown Rice", "Banana", "Protein Shake", "3 Whole Eggs"] },
        { day: "Tuesday", focus: "Back + Biceps", workout: ["Deadlift – 4×6", "Lat Pulldown – 3×10", "Barbell Row – 3×8", "Bicep Curl – 3×12", "Hammer Curl – 3×12"], food: ["Muesli + Milk", "Fish + Rice", "Almonds", "Protein Shake", "Paneer"] },
        { day: "Wednesday", focus: "Legs", workout: ["Squats – 4×8", "Leg Press – 3×10", "Lunges – 3×12", "Leg Curl – 3×12", "Calf Raises – 4×15"], food: ["Omelette + Bread", "Chicken Biryani", "Banana", "Protein Shake", "Greek Yogurt"] },
        { day: "Thursday", focus: "Shoulders", workout: ["Overhead Press – 4×8", "Lateral Raise – 3×15", "Front Raise – 3×12", "Shrugs – 3×12", "Face Pull – 3×15"], food: ["Oats", "Tuna", "PB Toast", "Protein Shake", "Mixed Salad"] },
        { day: "Friday", focus: "Arms", workout: ["Barbell Curl", "Skull Crushers", "Cable Curl", "Tricep Extension", "Pushups"], food: ["Eggs", "Chicken", "Brown Rice", "Shake", "Paneer"] },
        { day: "Saturday", focus: "Abs + Cardio", workout: ["Leg Raises", "Crunches", "Plank", "20 min treadmill"], food: ["Fruits", "Salad", "Fish", "Milk", "Nuts"] },
        { day: "Sunday", focus: "Rest", workout: ["Light walking", "Stretching"], food: ["Oats", "Paneer", "Veggies", "Coconut Water"] }
    ],
    male_loss: [
        { day: "Monday", focus: "Chest + Cardio", workout: ["Bench Press – 3×10", "Incline DB Press – 3×12", "Pushups – 3×Failure", "20 min treadmill walk"], food: ["3 Egg Whites + 1 Egg", "Oats (small)", "Grilled Chicken + Salad", "Protein Shake", "Broccoli + Fish"] },
        { day: "Tuesday", focus: "Back + HIIT", workout: ["Lat Pulldown – 3×12", "Seated Row – 3×12", "Deadlift – 3×8", "15 min HIIT intervals"], food: ["Boiled Eggs", "Tuna + Salad", "Almonds", "Greek Yogurt"] },
        { day: "Wednesday", focus: "Legs", workout: ["Squats – 4×10", "Lunges – 3×12", "Leg Curl – 3×12", "15 min cycling"], food: ["Oats", "Chicken + Veggies", "Banana (Pre-workout)", "Protein Shake"] },
        { day: "Thursday", focus: "Cardio + Core", workout: ["25 min treadmill", "Plank – 3×1 min", "Hanging Leg Raises", "Russian Twists"], food: ["Fruits", "Salad", "Fish", "Curd"] },
        { day: "Friday", focus: "Shoulders + Arms", workout: ["Overhead Press", "Lateral Raise", "Bicep Curl", "Tricep Pushdown"], food: ["Eggs", "Chicken", "Veggies", "Protein Shake"] },
        { day: "Saturday", focus: "Circuit", workout: ["Pushups", "Squats", "Mountain Climbers", "Burpees", "Jump Rope"], food: ["Muesli", "Salad", "Tuna", "Buttermilk"] },
        { day: "Sunday", focus: "Recovery", workout: ["Walking", "Stretching"], food: ["Coconut Water", "Veggies", "Eggs"] }
    ],
    female_gain: [
        { day: "Monday", focus: "Glutes", workout: ["Barbell Squats – 4×8", "Hip Thrust – 4×10", "Lunges – 3×12", "Glute Kickback – 3×15"], food: ["Oats + Milk", "Paneer + Brown Rice", "Banana", "Protein Shake"] },
        { day: "Tuesday", focus: "Upper Strength", workout: ["Dumbbell Press", "Lat Pulldown", "Seated Row", "Triceps Pushdown"], food: ["2 Whole Eggs", "Fish", "Veggies", "Greek Yogurt"] },
        { day: "Wednesday", focus: "Rest", workout: ["Stretching", "Mobility work"], food: ["Muesli", "Paneer", "Avocado", "Nuts"] },
        { day: "Thursday", focus: "Glutes + Hams", workout: ["Romanian Deadlift", "Hip Thrust", "Leg Curl", "Step-ups"], food: ["Omelette", "Chicken", "Rice", "Protein Shake"] },
        { day: "Friday", focus: "Full Body", workout: ["Squats", "Pushups", "Rows", "Shoulder Press"], food: ["Oats", "Fish/Tuna", "Salad", "Curd"] },
        { day: "Saturday", focus: "Core + Glutes", workout: ["Plank", "Leg Raises", "Cable Kickback", "Side Lunges"], food: ["Banana", "Paneer", "Veggies", "Protein Shake"] },
        { day: "Sunday", focus: "Rest", workout: ["Yoga", "Stretching", "Hydration"], food: ["Coconut Water", "Eggs", "Oats"] }
    ],
    female_loss: [
        { day: "Monday", focus: "Glutes + Legs", workout: ["Squats – 4×12", "Hip Thrust – 4×12", "Lunges – 3×12", "Glute Kickback – 3×15"], food: ["Banana", "Oats", "Salad", "Protein Shake", "Curd"] },
        { day: "Tuesday", focus: "Upper Body", workout: ["Lat Pulldown", "Dumbbell Press", "Rows", "Triceps Pushdown"], food: ["Boiled Eggs", "Muesli", "Fish", "Veggies"] },
        { day: "Wednesday", focus: "HIIT Cardio", workout: ["Treadmill intervals", "Jump squats", "Mountain climbers", "Plank"], food: ["Fruits", "Almonds", "Salad", "Buttermilk"] },
        { day: "Thursday", focus: "Glutes + Hams", workout: ["Romanian Deadlift", "Hip Thrust", "Leg Curl", "Step-ups"], food: ["Oats", "Paneer", "Veggies", "Protein Shake"] },
        { day: "Friday", focus: "Core + Abs", workout: ["Russian Twist", "Leg Raises", "Bicycle Crunch", "Plank"], food: ["Banana", "Mixed Salad", "Fish/Tuna", "Greek Yogurt"] },
        { day: "Saturday", focus: "Full Body", workout: ["Squat", "Pushups", "Rows", "Lunges"], food: ["Eggs", "Brown Rice", "Veggies", "Protein Shake"] },
        { day: "Sunday", focus: "Rest", workout: ["Yoga", "Stretching", "Hydration"], food: ["Coconut Water", "Fruits", "Salad"] }
    ]
};

const planBanners = {
    male_gain: "🎯 Goal: Hypertrophy & Muscle Mass | 🥩 High Protein Surplus",
    male_loss: "🎯 Goal: Burn Fat & Maintain Muscle | 🔥 Calorie Deficit & High Protein",
    female_gain: "🎯 Goal: Lean Muscle Build & Glutes | 🥩 Small Calorie Surplus",
    female_loss: "🎯 Goal: Fat Loss & Toning | 🔥 Calorie Deficit & Glute Focus"
};

// Initial State
let log = JSON.parse(localStorage.getItem('nutriLog')) || [];
let currentPlan = 'male_gain';
let macroChart;

// DOM Elements
const foodSelect = document.getElementById("foodSelect");
const gramsInput = document.getElementById("gramsInput");
const addBtn = document.getElementById("addFoodBtn");
const foodTable = document.getElementById("foodTable");
const clearBtn = document.getElementById("clearLogBtn");
const foodSearch = document.getElementById("foodSearch");

// Tab Navigation logic
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        if (!btn.dataset.target) return;
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(`${btn.dataset.target}-tab`).classList.add('active');
    });
});

// Plan Toggle logic
document.querySelectorAll('.plan-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.plan-toggle').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentPlan = btn.dataset.plan;
        renderPlans();
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initChart();
    updateUI();
    renderPlans();
});

function renderPlans() {
    const grid = document.getElementById('plan-schedule');
    const banner = document.getElementById('current-plan-banner');

    if (!grid || !banner) return;

    banner.innerHTML = `<p>${planBanners[currentPlan]}</p>`;

    const createCard = (d) => `
        <div class="day-card">
            <h3><span>${d.day}</span> 🔘</h3>
            <h4>💪 ${d.focus}</h4>
            <ul>${d.workout.map(w => `<li>${w}</li>`).join('')}</ul>
            <h4>🥗 Meal Plan</h4>
            <ul>${d.food.map(f => `<li>${f}</li>`).join('')}</ul>
        </div>
    `;

    grid.innerHTML = workoutPlans[currentPlan].map(createCard).join('');
}

// Search Functionality
foodSearch.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const groups = foodSelect.querySelectorAll('optgroup');
    let firstVisible = null;

    groups.forEach(group => {
        let hasMatch = false;
        const options = group.querySelectorAll('option');
        options.forEach(opt => {
            if (opt.textContent.toLowerCase().includes(term)) {
                opt.style.display = 'block';
                hasMatch = true;
                if (!firstVisible) firstVisible = opt.value;
            } else { opt.style.display = 'none'; }
        });
        group.style.display = hasMatch ? 'block' : 'none';
    });
    if (firstVisible && term !== "") foodSelect.value = firstVisible;
});

function initChart() {
    const ctx = document.getElementById('macroChart').getContext('2d');
    macroChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Protein', 'Carbs', 'Fats'],
            datasets: [{
                data: [0, 0, 0],
                backgroundColor: ['#f97316', '#0ea5e9', '#eab308'],
                borderColor: '#141418',
                borderWidth: 2
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom', labels: { color: '#a0a0a8', font: { family: 'Outfit', size: 11 } } } },
            cutout: '70%', responsive: true, maintainAspectRatio: false
        }
    });
}

function updateUI() {
    let totals = { calories: 0, protein: 0, carbs: 0, fats: 0 };
    foodTable.innerHTML = '';
    log.forEach((item, index) => {
        totals.calories += item.macros.calories;
        totals.protein += item.macros.protein;
        totals.carbs += item.macros.carbs;
        totals.fats += item.macros.fats;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.grams}g</td>
            <td>${item.macros.calories.toFixed(1)}</td>
            <td>${item.macros.protein.toFixed(1)}g</td>
            <td>${item.macros.carbs.toFixed(1)}g</td>
            <td>${item.macros.fats.toFixed(1)}g</td>
            <td><button class="delete-btn" onclick="deleteItem(${index})">×</button></td>
        `;
        foodTable.appendChild(row);
    });
    document.getElementById("totalCalories").innerText = totals.calories.toFixed(0);
    document.getElementById("totalProtein").innerText = totals.protein.toFixed(1);
    document.getElementById("totalCarbs").innerText = totals.carbs.toFixed(1);
    document.getElementById("totalFats").innerText = totals.fats.toFixed(1);
    const progress = Math.min((totals.calories / 2500) * 100, 100);
    document.getElementById("calProgress").style.width = progress + '%';
    if (macroChart) {
        macroChart.data.datasets[0].data = [totals.protein, totals.carbs, totals.fats];
        macroChart.update();
    }
    localStorage.setItem('nutriLog', JSON.stringify(log));
}

function addFood() {
    const selectedKey = foodSelect.value;
    const grams = parseFloat(gramsInput.value);
    if (isNaN(grams) || grams <= 0) { return; }
    const foodBase = foods[selectedKey];
    const ratio = grams / 100;
    log.push({
        name: foodBase.name,
        grams: grams,
        macros: {
            calories: foodBase.calories * ratio,
            protein: foodBase.protein * ratio,
            carbs: foodBase.carbs * ratio,
            fats: foodBase.fats * ratio
        }
    });
    gramsInput.value = '';
    updateUI();
}

window.deleteItem = (index) => { log.splice(index, 1); updateUI(); };
addBtn.addEventListener('click', addFood);
clearBtn.addEventListener('click', () => { if (confirm('Clear Today\'s Log?')) { log = []; updateUI(); } });
gramsInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') addFood(); });

// Gym Assistant Logic
const gymQuery = document.getElementById('gymQuery');
const sendQuery = document.getElementById('sendQuery');
const chatResponse = document.getElementById('chatResponse');

const mockResponses = {
    "protein": "For muscle gain, aim for 1.6g to 2.2g of protein per kg of bodyweight. Check our 'Gym Essentials' food category for high-protein options!",
    "weight": "Focus on progressive overload—gradually increasing the weight, frequency, or number of repetitions in your core lifts.",
    "recovery": "Sleep is crucial. Aim for 7-9 hours of quality sleep and ensure you're drinking at least 3-4 liters of water daily.",
    "carb": "Carbs are your primary energy source. Focus on complex carbs like oats, brown rice, and sweet potatoes for sustained energy.",
    "fat": "Healthy fats like avocado, nuts, and olive oil are essential for hormone production and joint health."
};

function handleGymQuery() {
    const query = gymQuery.value.toLowerCase();
    if (!query) return;

    let response = "That's a great question! For specific advice on that, I recommend checking our curated Workout Plans or consulting with a certified trainer at IronPulse.";

    for (const key in mockResponses) {
        if (query.includes(key)) {
            response = mockResponses[key];
            break;
        }
    }

    chatResponse.innerText = response;
    chatResponse.classList.add('active');
    gymQuery.value = '';

    setTimeout(() => {
        chatResponse.classList.remove('active');
    }, 8000);
}

if (sendQuery) sendQuery.addEventListener('click', handleGymQuery);
if (gymQuery) gymQuery.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleGymQuery(); });
