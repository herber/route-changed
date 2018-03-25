module.exports = (cb, url) => {
  url = url || (() => window.location.pathname);
  let path = url();

  window.onpopstate = () => {
    cb(url());
  };

  window.history.onpushstate = () => {
    cb(url());
  };

  setInterval(() => {
    const u = url();

    if (path != u) {
      cb(u);
    }
  }, 200);
};
