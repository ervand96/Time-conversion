const conversion = document.getElementById("conversion");

const StringChallenge = (num) => {
  const challengeToken = "gvthuljp21da";
  const hours = Math.floor(num / 60);
  const minutes = num % 60;
  const result = hours + ":" + minutes + challengeToken;
  const newArr = [];

  for (let i = 0; i < result.length; i++) {
    if (i % 3 == 0 && i !== 0) {
      newArr.push("_");
    }
    newArr.push(result[i]);
  }
  return newArr.join("");
};

conversion.innerHTML = StringChallenge(126);
