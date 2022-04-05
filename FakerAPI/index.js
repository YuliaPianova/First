
const faker = require("faker");
const express = require("express");

const app = express();
const port = 8000;

// Create 2 functions: createUser, createCompany that return an object 
// with the properties.

const createUser = () => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    password: faker.internet.password(),
});

const createCompany = () => ({
    id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    address: {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipcode: faker.address.zipCodeByState(),
        country: faker.address.country(),
    },
});

console.log(createUser());
console.log(createCompany());


// Create an api route "/api/users/new" that returns a new user.

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

// Create an api route "/api/companies/new" that returns a new company.

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

//Create an api route "/api/user/company" that returns both a new user and a new company.

app.get("/api/user/company", (req, res) => {
    const newUser = createUser();
    const newCompany = createCompany();
    const userAndCompany = {
        user: newUser,
        company: newCompany,
    };
    res.json(userAndCompany);
});

app.listen(port, () => console.log(`listening on port ${port}`));