const moodElement = document.querySelector("h1");

document.querySelector("#happy")
.addEventListener("click", function () {
  store.dispatch({type: "HAPPY"});
  const currentMood = store.getState().mood;
  moodElement.innerText = currentMood;
});

document.querySelector("#sad")
.addEventListener("click", function () {
  store.dispatch({type: "SAD"});
  const currentMood = store.getState().mood;
  moodElement.innerText = currentMood;
});

document.querySelector("#angry")
.addEventListener("click", function () {
  store.dispatch({type: "ANGRY"});
  const currentMood = store.getState().mood;
  moodElement.innerText = currentMood;
});

document.querySelector("#shocked")
.addEventListener("click", function () {
  store.dispatch({type: "SHOCKED"});
  const currentMood = store.getState().mood;
  moodElement.innerText = currentMood;
});