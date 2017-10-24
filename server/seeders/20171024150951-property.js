'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Properties', [{
        id: faker.random.uuid(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        rent: faker.commerce.price(),
        userId: '688cdd08-513b-458d-a203-230427b1b7a6',
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },{
        id: faker.random.uuid(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        rent: faker.commerce.price(),
        userId: '688cdd08-513b-458d-a203-230427b1b7a6',
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },{
        id: faker.random.uuid(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        rent: faker.commerce.price(),
        userId: '4bc0c80d-63d9-4012-85ce-9b0a342716fa',
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },{
        id: faker.random.uuid(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        rent: faker.commerce.price(),
        userId: 'b7093692-0937-46fd-9725-d3ba14c2a006',
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      },{
        id: faker.random.uuid(),
        street: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode(),
        rent: faker.commerce.price(),
        userId: 'b7093692-0937-46fd-9725-d3ba14c2a006',
        createdAt: faker.date.recent(),
        updatedAt: faker.date.recent()
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Properties', null, {});
    
  }
};
