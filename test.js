const routeChanged = require('./');

test('Listens to route changes', done => {
  expect.assertions(1);

  routeChanged(
    () => {
      expect(true).toBeTruthy();
      done();
    },
    () => {
      return Math.floor(Math.random() * 100 + 1);
    }
  );

  routeChanged(() => {
    // this should not fire
    expect(false).toBeTruthy();
    done();
  });
});
