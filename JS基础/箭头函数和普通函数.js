const f1 = (...args) => {
  console.log(this);
}

f1(1, 2, 3)