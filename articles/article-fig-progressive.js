(function () {
  'use strict';

  function bindProgressiveFigs(root) {
    if (!root) root = document;
    root.querySelectorAll('.fig-prog:not([data-progressive-bound])').forEach(function (wrap) {
      wrap.setAttribute('data-progressive-bound', '1');
      var hi = wrap.querySelector('img.fig-hi');
      if (!hi) return;
      function reveal() {
        wrap.classList.add('is-loaded');
      }
      if (hi.complete && hi.naturalWidth > 0) reveal();
      else {
        hi.addEventListener('load', reveal, { once: true });
        hi.addEventListener('error', reveal, { once: true });
      }
    });
  }

  function run() {
    bindProgressiveFigs(document);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run);
  else run();

  window.bindArticleProgressiveFigs = bindProgressiveFigs;
})();
