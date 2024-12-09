const showSumElem = document.querySelector("#showSum");
const inputFormElem = document.querySelector("#inputForm");
const friendSumElem = document.querySelector("#friendSum");
const calculateButton = document.querySelector("#calculateButton");

function calculateTip(sum, tip) {
  const calculatedTip = parseInt(sum) * parseFloat(tip);
  return calculatedTip;
}

function divideTotal(total, numberOfFriends) {
  const sumDivided = total / parseInt(numberOfFriends);
  return sumDivided;
}

function showDividedSum(sum) {
  showSumElem.classList.toggle("hide");
  inputFormElem.classList.toggle("hide");
  friendSumElem.innerHTML = sum + " kr";
}

calculateButton.addEventListener("click", () => {
  const sum = document.querySelector("#sum").value;
  const numberOfFriends = document.querySelector("#numberOfFriends").value;
  const tip = document.querySelector("#tip").value;

  if (sum && numberOfFriends && tip) {
    const calculatedTip = calculateTip(sum, tip);
    const total = parseInt(sum) + calculatedTip;

    const friendSum = divideTotal(total, numberOfFriends);

    showDividedSum(friendSum);
  } else {
    document.querySelector("#error").classList.toggle("hide");
  }
});
