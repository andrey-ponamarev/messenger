const faker = require("faker");

exports.default = function() {
  const performerName = faker.name.findName();
  const message = faker.lorem.sentence();
  const image = faker.image.dataUri();
  const id = faker.random.uuid();

  return {
    performerName,
    message,
    image,
    id
  };
};
