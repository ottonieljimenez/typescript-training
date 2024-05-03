import { faker } from '@faker-js/faker';

const fakeProducts: Array<object> = [];

Array.from({ length: 10 }).forEach(() => {
  fakeProducts.push({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.imageUrl(),
  });
})