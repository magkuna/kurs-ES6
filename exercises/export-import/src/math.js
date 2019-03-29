console.log("how many times do you see that");
export function sum(a, b) {
  return a + b;
};

export const VALUE = 9001;

const NEW_VALUE = 9001;

export {NEW_VALUE as SUPER_VALUE};

const settings = {
  width: 5000,
  height: 2000
};

export { settings };

export function diff(a, b) {
  return a - b;
};

export default () => {
  return 'Math lib ver 1.0';
};