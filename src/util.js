export default function Currency(num) {
  num = "$" + Number(num.toFixed(1).toLocaleString()) + " ";
  return num;
}
