let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA"
  }
};

let newPassportWithAddress = {...passportWithAddress, address: {...passportWithAddress.address}};
newPassportWithAddress.address.city = "Bobryisk";

console.log(passportWithAddress);
console.log(newPassportWithAddress);
