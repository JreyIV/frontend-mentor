// filter buttons

const dailyBtn = document.getElementById("daily-btn");
const weeklyBtn = document.getElementById("weekly-btn");
const monthlyBtn = document.getElementById("monthly-btn");
const timeCards = document.querySelectorAll(".time-card");

// Fetch data from data.json
let data;
fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
    // Initial render (weekly)
    updateTimeCards("weekly");
    weeklyBtn.classList.add("active");
  })
  .catch((err) => console.log(err));

// updating time cards
function updateTimeCards(period) {
  timeCards.forEach((timeCard) => {
    const title = timeCard.querySelector(".title").textContent.toLowerCase();
    const activityData = data.find(
      (item) => item.title.toLowerCase() === title
    );

    // console.log(activityData);

    if (activityData) {
      const { current, previous } = activityData.timeframes[period];
      const hrsElement = timeCard.querySelector(".hrs");
      const prevElement = timeCard.querySelector(".previous");

      hrsElement.textContent = `${current} hrs`;
      prevElement.textContent = `${previous} hrs`;
    }
  });
}

//   daily
dailyBtn.addEventListener("click", () => {
  dailyBtn.classList.add("active");
  weeklyBtn.classList.remove("active");
  monthlyBtn.classList.remove("active");
  updateTimeCards("daily");
});

//   weekly
weeklyBtn.addEventListener("click", () => {
  weeklyBtn.classList.add("active");
  dailyBtn.classList.remove("active");
  monthlyBtn.classList.remove("active");
  updateTimeCards("weekly");
});

//   monthly
monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active");
  weeklyBtn.classList.remove("active");
  dailyBtn.classList.remove("active");
  updateTimeCards("monthly");
});
