const user = {
  username: "toto",
  firstName: "Tada",
  lastName: "Toshi",
  email: "toto@test.com",
  test: null,
  age: 36,
  bool: true,
};

/* Get the Length of an Object */
const getObjectLength = (object) => {
  return Object.keys(object).length;
};
/* Get the Length of an Object */

/* Remove Properties from Object */
const removePropertiesFromObject = (object, properties) => {
  properties.forEach((property) => {
    for (const key in object) {
      if (key === property) {
        delete object[key];
      }
    }
  });

  return object;
};

//keys of deleting line
//const properties = ["firstName", "lastName"];

/* Remove Properties from Object */

/* Add Properties to Object */
const addPropertiesToObject = (object, properties) => {
  properties.forEach((property) => {
    if (property[1]) {
      object[property[0]] = property[1];
    } else {
      object[property[0]] = null;
    }
  });

  return object;
};

//key and value
/* const properties = [
  ["age", 36],
  ["address", "Cachan"],
]; */
/* Add Properties to Object */

/* Remove Properties with a Specific Value from Object */
const removePropertiesWithValueFromObject = (object, value) => {
  for (const key in object) {
    if (object[key] === value) {
      delete object[key];
    }
  }

  return object;

  /* console.log(
  "removePropertiesWithValueFromObject : ",
  removePropertiesWithValueFromObject(user, null)
); */
};

/* Remove Properties with a Specific Value from Object */

/* Change Properties Values */
const fromToValues = (object, from, to) => {
  for (const key in object) {
    if (object[key] === from) {
      object[key] = to;
    }
  }

  return object;
};

/* console.log("fromToValues : ", fromToValues(user, null, "là")); */
/* Change Properties Values */

/* Boolean to Number */
const booleanToNumber = (object) => {
  for (const key in object) {
    if (typeof object[key] === "boolean") {
      object[key] = object[key] === false ? 0 : 1;
    }
  }

  return object;
};

// console.log("booleanToNumber : ", booleanToNumber(user));
/* Boolean to Number */
