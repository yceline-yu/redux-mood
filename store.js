const INITIAL_STATE = {mood: "(ㅅꈍ ˘ ꈍ)"}

function moodReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case "HAPPY":
      return { ...state, mood: "(｡𓎆 𓎺 𓎆)" };
    
    case "SAD": 
      return { ...state, mood: "˚‧º·(˚ ˃̣̣̥⌓˂̣̣̥ )‧º·˚" };

    case "ANGRY":
      return { ...state, mood:"p(╬ Ò ‸ Ó)q" };
    
    case "SHOCKED":
      return { ...state, mood: "(。ᅌ ω ᅌ。)" }
  }
  return state;
}

const store = Redux.createStore(moodReducer);