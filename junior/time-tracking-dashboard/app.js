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

      //   current
      if (current === 1) {
        hrsElement.textContent = `${current} hr`;
      } else {
        hrsElement.textContent = `${current} hrs`;
      }

      // previous

      if (period === "daily") {
        if (previous === 1) {
          prevElement.textContent = `Yesterday: ${previous} hr`;
        } else {
          prevElement.textContent = `Yesterday: ${previous} hrs`;
        }
      } else if (period === "weekly") {
        if (previous === 1) {
          prevElement.textContent = `Last Week: ${previous} hr`;
        } else {
          prevElement.textContent = `Last Week: ${previous} hrs`;
        }
      } else {
        if (previous === 1) {
          prevElement.textContent = `Last Month: ${previous} hr`;
        } else {
          prevElement.textContent = `Last Month: ${previous} hrs`;
        }
      }
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
