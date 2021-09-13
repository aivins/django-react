const isObject = (obj) => {
  return obj !== null && typeof obj === "object" && !Array.isArray(obj);
};

const flatten = (input) => {
  if (!input) return null;
  const output = {};

  Object.keys(input).forEach((key) => {
    if (input[key] && input[key].edges) {
      output[key] = input[key].edges.map((edge) => flatten(edge.node));
    } else if (isObject(input[key])) {
      output[key] = flatten(input[key]);
    } else {
      output[key] = input[key];
    }
  });

  return output;
};

export { flatten };
