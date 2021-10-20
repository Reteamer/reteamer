Cypress.Commands.add('expectToBeNearDate', ($text, expectedDate) => {
  // Cypress doesn't seem to pass decimal values to the MouseEvent object
  // that it creates, so we can't assert the date is equal, only that we're
  // pretty close
  const oneDayAgo = new Date(expectedDate)
  oneDayAgo.setDate(expectedDate.getDate() - 1);
  const oneDayFromNow = new Date(expectedDate)
  oneDayFromNow.setDate(expectedDate.getDate() + 1);

  expect(new Date($text)).to.be.greaterThan(oneDayAgo)
  expect(new Date($text)).to.be.lessThan(oneDayFromNow)
});
