const pwd = process.cwd();

module.exports = err => {
  if (err) {
    return `error`;
  } else {
    return pwd;
  }
};

// if (err) {
//     console.log('sad day there was an error');
//   } else {
//     return pwd;
//   }
