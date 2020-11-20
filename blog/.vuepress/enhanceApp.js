export default ({ router }) => {
  const originalPush = router.push;
  router.push = function push(location) {
    return originalPush.call(this, location).catch((err) => err);
  };
};
