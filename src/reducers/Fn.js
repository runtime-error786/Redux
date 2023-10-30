let inot = null;
let F_N = (state = inot, action) => {
  if (action.type == "firstname") {
    return state=action.payload;
  } else {
    return state;
  }
}

export { F_N };
