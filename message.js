function generateMessages(hashes) {
  return hashes.map((hash) => {
    return `Hi ${hash.name} discount ${hash.discount}`;
  });
}

module.exports = generateMessages;
