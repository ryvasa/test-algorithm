const input = ["xc", "dz", "bbb", "dz"];
const query = ["bbb", "ac", "dz"];

const queryCounting = () => {
  return query.map((word) => input.filter((item) => item === word).length);
};
console.log(queryCounting());
