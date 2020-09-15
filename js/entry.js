const render = ($, value) => {
  $('#purehtml-container').html(value);
  return Promise.resolve();
};
((global) => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: (prop) => {
      console.log(prop);
      return render($, prop.value);
    },
    update: (prop) => {
      console.log('update props', prop);
      document.getElementById('purehtml-container').innerHTML = prop.value;
      return Promise.resolve();
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
