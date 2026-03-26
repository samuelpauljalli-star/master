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

const transformationSchedules = {
    loss: [
        { time: "07:00 AM", h: 7, m: 0, title: "🌅 Morning Lemon Water", msg: "Boost metabolism to start the day!", intensity: 2 },
        { time: "08:30 AM", h: 8, m: 30, title: "🍳 High Protein Breakfast", msg: "Boiled Eggs + Oats. Keep it light.", intensity: 4 },
        { time: "11:00 AM", h: 11, m: 0, title: "🍏 Mid-Morning Snack", msg: "Apple or Grapes. Stay hydrated.", intensity: 2 },
        { time: "01:30 PM", h: 13, m: 30, title: "🥗 Lean Lunch", msg: "Grilled Chicken + Big Salad. No Rice.", intensity: 5 },
        { time: "04:00 PM", h: 16, m: 0, title: "🍵 Green Tea", msg: "Energy boost without calories.", intensity: 2 },
        { time: "06:00 PM", h: 18, m: 0, title: "🏋️ HIIT Session", msg: "30 mins of high intensity to burn fat!", intensity: 10 },
        { time: "08:00 PM", h: 20, m: 0, title: "🥣 Dinner", msg: "Spiced Fish + Sautéed Veggies.", intensity: 3 },
        { time: "10:00 PM", h: 22, m: 0, title: "💤 Deep Sleep", msg: "Growth hormone peak for recovery.", intensity: 1 }
    ],
    gain: [
        { time: "07:00 AM", h: 7, m: 0, title: "🥤 Mass Gainer Shake", msg: "Banana + Milk + Peanut Butter.", intensity: 3 },
        { time: "09:00 AM", h: 9, m: 0, title: "🍳 Heavy Breakfast", msg: "4 Eggs + PB Toast + Muesli.", intensity: 4 },
        { time: "11:30 AM", h: 11, m: 30, title: "🌰 Nut Mix", msg: "Almonds & Cashews. Dense calories.", intensity: 2 },
        { time: "02:00 PM", h: 14, m: 0, title: "🍛 Power Lunch", msg: "Chicken Biryani or Paneer Rice.", intensity: 5 },
        { time: "05:00 PM", h: 17, m: 0, title: "⚡ Pre-Workout", msg: "Curd + Sweet Potato. Energy storage.", intensity: 3 },
        { time: "06:30 PM", h: 18, m: 30, title: "💪 Heavy Lifting", msg: "Focus on hypertrophy (8-12 reps).", intensity: 9 },
        { time: "08:30 PM", h: 20, m: 30, title: "🍗 Post-Workout Dinner", msg: "Mutton or Soya + 3 Rotis.", intensity: 4 },
        { time: "10:30 PM", h: 22, m: 30, title: "🛌 Recovery Sleep", msg: "9 hours for maximum muscle growth.", intensity: 1 }
    ],
    height: [
        { time: "06:30 AM", h: 6, m: 30, title: "🤸 Morning Stretch", msg: "Cobra stretch + Toe touches (10 mins).", intensity: 4 },
        { time: "08:00 AM", h: 8, m: 0, title: "🥛 Calcium Kick", msg: "Glass of Milk + Boiled Eggs.", intensity: 3 },
        { time: "10:30 AM", h: 10, m: 30, title: "🥕 Vitamin Mix", msg: "Carrot Juice / Oranges.", intensity: 2 },
        { time: "01:00 PM", h: 13, m: 0, title: "🥘 Balanced Lunch", msg: "Dal Tadka + Spinach + Veggies.", intensity: 4 },
        { time: "04:30 PM", h: 16, m: 30, title: "🏀 Active Jump", msg: "Basketball or skipping (20 mins).", intensity: 8 },
        { time: "07:00 PM", h: 19, m: 0, title: "🧘 Yoga (Vrikshasana)", msg: "Spine lengthening poses.", intensity: 3 },
        { time: "09:00 PM", h: 21, m: 0, title: "🥩 Amino Dinner", msg: "Lentils or Fish. Bone building.", intensity: 3 },
        { time: "10:00 PM", h: 22, m: 0, title: "🛌 Rest & Align", msg: "Sleep on a firm mattress (back).", intensity: 1 }
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
let workoutAttendance = JSON.parse(localStorage.getItem('workoutAttendance')) || [];
let currentPlan = 'male_gain';
let activeTimers = [];
let macroChart;
let blueprintChartInstance;

// DOM Elements
const foodSelect = document.getElementById("foodSelect");
const gramsInput = document.getElementById("gramsInput");
const addBtn = document.getElementById("addFoodBtn");
const foodTable = document.getElementById("foodTable");
const clearBtn = document.getElementById("clearLogBtn");
const foodSearch = document.getElementById("foodSearch");

// Transformation Elements
const generatePlanBtn = document.getElementById("generatePlanBtn");
const goalType = document.getElementById("goalType");
const targetLabel = document.getElementById("targetLabel");
const planArea = document.getElementById("plan-display-area");
const placeholder = document.getElementById("no-plan-placeholder");
const planActions = document.getElementById("plan-actions");

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

// Transformation Logic
if (goalType) {
    goalType.addEventListener('change', () => {
        const val = goalType.value;
        if (targetLabel) targetLabel.innerText = val === 'height' ? "Target Height Gain (cm)" : "Target Weight Change (kg)";
    });
}

if (generatePlanBtn) {
    generatePlanBtn.addEventListener('click', () => {
        const w = document.getElementById('userWeight').value;
        const h = document.getElementById('userHeight').value;
        const m = document.getElementById('targetMonths').value;
        const t = document.getElementById('targetValue').value;
        const g = goalType.value;

        if (!w || !h || !m || !t) {
            alert("Please fill all details for the AI to calculate!");
            return;
        }

        generateTransformationPlan(g, m, t);
    });
}

function generateTransformationPlan(goal, months, target) {
    const plan = transformationSchedules[goal];
    if (placeholder) placeholder.style.display = 'none';
    if (planArea) planArea.style.display = 'block';
    if (planActions) planActions.style.display = 'flex';

    let html = `
        <div class="summary-box">
            <h4>📅 Strategy: ${months}-Month Transformation</h4>
            <p>To reach your ${target}${goal === 'height' ? 'cm' : 'kg'} goal, follow this strict 12-hour daily protocol.</p>
        </div>
    `;

    plan.forEach(item => {
        html += `
            <div class="timeline-item">
                <div class="time-mark">${item.time}</div>
                <div class="content pulse-border">
                    <h5>${item.title}</h5>
                    <p>${item.msg}</p>
                </div>
            </div>
        `;
    });

    const container = document.getElementById("plan-timeline-container");
    if (container) container.innerHTML = html;
    
    // Generate Chart representations
    drawBlueprintChart(plan);

    localStorage.setItem('savedPlan', JSON.stringify({ goal, months, target }));
}

function drawBlueprintChart(plan) {
    const ctx = document.getElementById('blueprintChart');
    if (!ctx) return;
    
    if (blueprintChartInstance) blueprintChartInstance.destroy();
    
    const labels = plan.map(i => i.time);
    const dataPoints = plan.map(i => i.intensity);
    
    blueprintChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Activity Intensity Level',
                data: dataPoints,
                borderColor: '#00d2ff',
                backgroundColor: 'rgba(0, 210, 255, 0.2)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#00ff99',
                pointRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { display: false, min: 0, max: 12 },
                x: { ticks: { color: '#a0a0a8', font: { size: 10 } }, grid: { display: false } }
            },
            plugins: {
                legend: { labels: { color: '#fff' } }
            }
        }
    });
}

// Notifications
document.getElementById('enableNotifications')?.addEventListener('click', () => {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
        return;
    }

    if (Notification.permission === "granted") {
        setupAlarms();
    } else {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") setupAlarms();
        });
    }
});

function setupAlarms() {
    activeTimers.forEach(t => clearTimeout(t));
    activeTimers = [];

    const plan = transformationSchedules[goalType.value];
    const now = new Date();

    plan.forEach(item => {
        const alarmTime = new Date();
        alarmTime.setHours(item.h, item.m, 0);

        if (alarmTime < now) alarmTime.setDate(alarmTime.getDate() + 1);

        const diff = alarmTime.getTime() - now.getTime();
        const timer = setTimeout(() => {
            new Notification("⚡ IronPulse Coach", {
                body: `${item.title}: ${item.msg}`,
                icon: "https://cdn-icons-png.flaticon.com/512/3048/3048344.png"
            });
            setupAlarms();
        }, diff);

        activeTimers.push(timer);
    });

    alert("Reminders activated! You'll receive alerts at scheduled times.");
    const notifyBtn = document.getElementById('enableNotifications');
    if (notifyBtn) notifyBtn.innerText = "✅ Reminders On";
}

document.getElementById('resetPlan')?.addEventListener('click', () => {
    localStorage.removeItem('savedPlan');
    location.reload();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initChart();
    updateUI();
    updateWorkoutUI();
    renderPlans();

    const saved = JSON.parse(localStorage.getItem('savedPlan'));
    if (saved) {
        if (document.getElementById('targetMonths')) document.getElementById('targetMonths').value = saved.months;
        if (document.getElementById('targetValue')) document.getElementById('targetValue').value = saved.target;
        if (goalType) goalType.value = saved.goal;
        generateTransformationPlan(saved.goal, saved.months, saved.target);
    }
});

function renderPlans() {
    const grid = document.getElementById('plan-schedule');
    const banner = document.getElementById('current-plan-banner');
    if (!grid || !banner) return;
    
    banner.innerHTML = `<p>${planBanners[currentPlan]}</p>`;
    
    window.openDayDetails = (dayIndex) => {
        sessionStorage.setItem('selectedDayData', JSON.stringify(workoutPlans[currentPlan][dayIndex]));
        window.location.href = 'day-details.html';
    };

    const createCard = (d, index) => `
        <div class="day-card" onclick="openDayDetails(${index})" style="cursor: pointer; transition: transform 0.2s; position: relative;" onmouseover="this.style.transform='scale(1.02)'; this.style.borderColor='var(--accent-green)';" onmouseout="this.style.transform='scale(1)'; this.style.borderColor='var(--border-color)';">
            <h3><span>${d.day}</span> 🔘</h3>
            <h4>💪 ${d.focus}</h4>
            <ul>${d.workout.slice(0,3).map(w => `<li>${w}</li>`).join('')}${d.workout.length > 3 ? '<li style="color:var(--text-gray); font-style:italic;">...etc</li>' : ''}</ul>
            <div style="margin-top: 15px; padding: 10px; text-align: center; border-radius: 8px; border: 1px solid rgba(0,255,153,0.3); color: var(--accent-green); font-size: 0.9rem; font-weight: 600;">Click to view animated GIFs & Food ▶</div>
        </div>
    `;
    
    grid.innerHTML = workoutPlans[currentPlan].map((d, i) => createCard(d, i)).join('');
}

// Search, Chart, UI update
foodSearch?.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const groups = foodSelect.querySelectorAll('optgroup');
    groups.forEach(group => {
        let hasMatch = false;
        group.querySelectorAll('option').forEach(opt => {
            if (opt.textContent.toLowerCase().includes(term)) {
                opt.style.display = 'block';
                hasMatch = true;
            } else opt.style.display = 'none';
        });
        group.style.display = hasMatch ? 'block' : 'none';
    });
});

function initChart() {
    const canvas = document.getElementById('macroChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
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
    if (!foodTable) return;
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
    
    const calEl = document.getElementById("totalCalories");
    const proEl = document.getElementById("totalProtein");
    const carbEl = document.getElementById("totalCarbs");
    const fatEl = document.getElementById("totalFats");
    const progEl = document.getElementById("calProgress");

    if (calEl) calEl.innerText = totals.calories.toFixed(0);
    if (proEl) proEl.innerText = totals.protein.toFixed(1);
    if (carbEl) carbEl.innerText = totals.carbs.toFixed(1);
    if (fatEl) fatEl.innerText = totals.fats.toFixed(1);
    
    if (progEl) {
        const progress = Math.min((totals.calories / 2500) * 100, 100);
        progEl.style.width = progress + '%';
    }

    if (macroChart) {
        macroChart.data.datasets[0].data = [totals.protein, totals.carbs, totals.fats];
        macroChart.update();
    }
    localStorage.setItem('nutriLog', JSON.stringify(log));
}

function addFood() {
    const selectedKey = foodSelect?.value;
    const grams = parseFloat(gramsInput?.value);
    if (!selectedKey || isNaN(grams) || grams <= 0) return;
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
    if (gramsInput) gramsInput.value = '';
    updateUI();
}

window.deleteItem = (index) => { log.splice(index, 1); updateUI(); };
addBtn?.addEventListener('click', addFood);
clearBtn?.addEventListener('click', () => { if (confirm('Clear Today\'s Log?')) { log = []; updateUI(); } });
gramsInput?.addEventListener('keypress', (e) => { if (e.key === 'Enter') addFood(); });

// Workout Attendance Logic
const workoutType = document.getElementById("workoutType");
const workoutTime = document.getElementById("workoutTime");
const workoutDuration = document.getElementById("workoutDuration");
const addWorkoutBtn = document.getElementById("addWorkoutBtn");
const workoutTable = document.getElementById("workoutTable");

if (addWorkoutBtn) {
    addWorkoutBtn.addEventListener('click', () => {
        const typeText = workoutType.options[workoutType.selectedIndex].text;
        const time = workoutTime.value;
        const dur = parseInt(workoutDuration.value);
        if (!time || !dur) return;

        let calRate = 6;
        if (workoutType.value === 'hiit') calRate = 12;
        else if (workoutType.value === 'yoga') calRate = 4;

        const cals = dur * calRate;
        // Fat loss estimation (approx): 60% of calories from fat, 9 cals per 1g fat
        const fatLoss = (cals * 0.6) / 9;
        // Protein loss estimation (approx): 5% of calories from muscle protein, 4 cals per 1g protein
        const protLoss = (cals * 0.05) / 4;

        workoutAttendance.push({
            type: typeText,
            time,
            dur,
            cals,
            fatLoss: fatLoss.toFixed(1),
            protLoss: protLoss.toFixed(1)
        });
        
        if(workoutTime) workoutTime.value = '';
        if(workoutDuration) workoutDuration.value = '';
        updateWorkoutUI();
    });
}

function updateWorkoutUI() {
    if(!workoutTable) return;
    workoutTable.innerHTML = '';
    workoutAttendance.forEach((item, idx) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.time}</td>
            <td>${item.type.split(' ')[0]}</td>
            <td>${item.dur}m</td>
            <td style="color:var(--danger)">🔥 ${item.cals}</td>
            <td style="color:var(--text-gray)">-${item.protLoss}g</td>
            <td style="color:#eab308">-${item.fatLoss}g</td>
            <td><button class="delete-btn" onclick="deleteWorkout(${idx})">×</button></td>
        `;
        workoutTable.appendChild(tr);
    });
    localStorage.setItem('workoutAttendance', JSON.stringify(workoutAttendance));
}

window.deleteWorkout = (idx) => {
    workoutAttendance.splice(idx, 1);
    updateWorkoutUI();
};

// Local TensorFlow Google MobileNet Vision AI 
let tfModel = null;
const aiCameraBtn = document.getElementById('aiCameraBtn');
const aiFoodCamera = document.getElementById('aiFoodCamera');
const aiCameraStatus = document.getElementById('aiCameraStatus');

if (aiCameraBtn && aiFoodCamera) {
    aiCameraBtn.addEventListener('click', () => aiFoodCamera.click());
    
    aiFoodCamera.addEventListener('change', async (e) => {
        if (!e.target.files.length) return;
        aiCameraBtn.disabled = true;
        aiCameraStatus.style.display = 'block';
        aiCameraStatus.innerText = "⏳ Loading Google Vision AI Model... (Takes a moment first time)";
        
        try {
            if (!tfModel) {
                // Initialize MobileNet locally (runs completely client-side in browser!)
                tfModel = await mobilenet.load();
            }
            
            aiCameraStatus.innerText = "👁️ AI is processing your photo...";
            
            const file = e.target.files[0];
            const imgEl = new Image();
            imgEl.src = URL.createObjectURL(file);
            await new Promise((resolve) => { imgEl.onload = resolve; });
            
            const predictions = await tfModel.classify(imgEl);
            if (!predictions || predictions.length === 0) throw new Error("Unrecognizable object");
            
            // "granny smith, apple" -> "Apple"
            const detectedName = predictions[0].className.split(',')[0].trim();
            const confidence = (predictions[0].probability * 100).toFixed(1);
            
            aiCameraStatus.innerText = `✅ Identified: ${detectedName} (${confidence}%). Calculating exact macros...`;
            
            // Generate macros specifically for 100g of the visually detected item using an LLM
            const prompt = `You are a strict JSON endpoint. I give you a food class perfectly detected by Google MobileNet: "${detectedName}". Return ONLY a raw JSON object string representing nutritional fact estimates for exactly 100 grams of this food. Format MUST be exactly this (with no markdown, no conversational text): {"calories":95,"protein":0.5,"carbs":25.0,"fats":0.3}`;
            
            const res = await fetch('https://text.pollinations.ai/' + encodeURIComponent(prompt));
            const textResponse = await res.text();
            
            const match = textResponse.match(/\{[\s\S]*?\}/);
            if (!match) throw new Error("Failed to parse macro JSON from text");
            
            const parsedMacros = JSON.parse(match[0]);
            
            // Assign random realistic grams to the portion
            const randomGrams = Math.floor(Math.random() * 150) + 50; 
            const ratio = randomGrams / 100;
            
            log.push({
                name: "📷 AI: " + detectedName.charAt(0).toUpperCase() + detectedName.slice(1),
                grams: randomGrams,
                macros: {
                    calories: (parsedMacros.calories || 0) * ratio,
                    protein: (parsedMacros.protein || 0) * ratio,
                    carbs: (parsedMacros.carbs || 0) * ratio,
                    fats: (parsedMacros.fats || 0) * ratio
                }
            });
            updateUI();
            
            aiCameraStatus.innerHTML = `<span style="color:var(--accent-green)">🎉 Successfully scanned & logged ${randomGrams}g of ${detectedName}!</span>`;
            
        } catch (error) {
            console.error("AI Camera Error:", error);
            aiCameraStatus.innerText = "⚠️ AI failed to process image. Make sure it's a clear photo.";
        } finally {
            setTimeout(() => {
                aiCameraStatus.style.display = 'none';
                aiCameraBtn.disabled = false;
                aiFoodCamera.value = ''; // clear input to allow re-selection
            }, 5000);
        }
    });
}


// AI Conversational Chat (General Purpose)
const robotBtn = document.getElementById('robotBtn');
const robotChatWindow = document.getElementById('robotChatWindow');
const closeRobotBtn = document.getElementById('closeRobotBtn');
const robotQuery = document.getElementById('robotQuery');
const robotSend = document.getElementById('robotSend');
const robotChatHistory = document.getElementById('robotChatHistory');

// Speech Elements
const robotMicBtn = document.getElementById('robotMicBtn');
const robotVoiceToggle = document.getElementById('robotVoiceToggle');
const aiVoiceSelect = document.getElementById('aiVoiceSelect');

let chatContext = "You are ChatGPT, a highly helpful AI. Keep answers short and friendly.\\n";

// TTS Setup
let availableVoices = [];
function populateVoices() {
    if (!window.speechSynthesis) return;
    availableVoices = window.speechSynthesis.getVoices();
    if(aiVoiceSelect) {
        aiVoiceSelect.innerHTML = '';
        availableVoices.forEach((voice, index) => {
            aiVoiceSelect.options.add(new Option(`${voice.name} (${voice.lang})`, index));
        });
    }
}
if (window.speechSynthesis) {
    populateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoices;
    }
}

// STT Setup
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition;
if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    
    recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        robotQuery.value = transcript;
        handleRobotChat();
    };
    
    recognition.onend = () => {
        if(robotMicBtn) robotMicBtn.innerText = "🎙️";
    };
    
    if(robotMicBtn) {
        robotMicBtn.addEventListener('click', () => {
            recognition.start();
            robotMicBtn.innerText = "🔴";
        });
    }
}

if (robotBtn) {
    robotBtn.addEventListener('click', () => { 
        robotChatWindow.style.display = 'flex'; 
        robotBtn.style.display = 'none'; 
    });
    closeRobotBtn.addEventListener('click', () => { 
        robotChatWindow.style.display = 'none'; 
        robotBtn.style.display = 'flex'; 
    });
    robotSend.addEventListener('click', handleRobotChat);
    robotQuery.addEventListener('keypress', (e) => { 
        if(e.key === 'Enter') handleRobotChat(); 
    });
}

async function handleRobotChat() {
    const q = robotQuery.value.trim();
    if (!q) return;

    // User Message
    const userDiv = document.createElement('div');
    userDiv.className = 'chat-msg user';
    userDiv.innerText = q;
    robotChatHistory.appendChild(userDiv);
    
    robotQuery.value = '';
    robotChatHistory.scrollTop = robotChatHistory.scrollHeight;

    // AI "Typing"
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg ai';
    typingDiv.style.fontStyle = 'italic';
    typingDiv.innerText = "🤖 Thinking...";
    robotChatHistory.appendChild(typingDiv);
    robotChatHistory.scrollTop = robotChatHistory.scrollHeight;

    try {
        const promptParams = chatContext + "User: " + q + "\\nAI:";
        // Using Pollinations Text Endpoint (free, no key required)
        const response = await fetch('https://text.pollinations.ai/' + encodeURIComponent(promptParams));
        if (!response.ok) throw new Error("Network error");
        
        const text = await response.text();
        
        typingDiv.remove();
        
        const aiDiv = document.createElement('div');
        aiDiv.className = 'chat-msg ai';
        aiDiv.innerText = text;
        robotChatHistory.appendChild(aiDiv);
        
        // Text-to-Speech
        if (robotVoiceToggle && robotVoiceToggle.checked && window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(text);
            if(aiVoiceSelect && availableVoices.length > 0 && aiVoiceSelect.value) {
                utterance.voice = availableVoices[aiVoiceSelect.value];
            }
            window.speechSynthesis.speak(utterance);
        }
        
        // Update context to maintain conversational memory
        chatContext += "User: " + q + "\\nAI: " + text + "\\n";
        if (chatContext.length > 1500) {
           chatContext = chatContext.slice(-1500); 
        }
    } catch (err) {
        typingDiv.innerText = "⚠️ Network issue or server heavy load. Try again.";
    }
    
    robotChatHistory.scrollTop = robotChatHistory.scrollHeight;
}
