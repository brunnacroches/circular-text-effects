// Preload fonts
const preloadFonts = (id) => {
  return new Promise((resolve) => {
      WebFont.load({
          typekit: {
              id: id
          },
          active: resolve
      });
  });
};


export {
  preloadFonts
};