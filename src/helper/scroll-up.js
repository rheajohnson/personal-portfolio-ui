const scrollUp = () => {
  try {
    window.scroll({
      top: 0,
      left: 0,
    });
  } catch (error) {
    window.scrollTo(0, 0);
  }
};

export default scrollUp;
