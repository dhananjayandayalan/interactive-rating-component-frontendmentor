let rate;

const options = document.querySelectorAll(".choices li");
const submit = document.querySelector("button");
const score = document.getElementById("score");
const rating = document.querySelector('.rating');
const thankYou = document.querySelector('.thank-you');

const checkSelected = () => {
  options.forEach((element) => {
    if (element.classList.contains("selected")) {
      element.classList.remove("selected");
    }
  });
};

options.forEach((element) => {
  element.addEventListener("click", () => {
    checkSelected();
    rate = element.innerHTML;
    element.classList.add("selected");
  });
});

submit.addEventListener("click", () => {
  if (!rate) {
    return;
  }

  score.innerHTML = rate;
  rating.classList.add('hide');
  thankYou.classList.remove('hide');

  setTimeout(() => {
    location.reload();
  }, 3000)
});
