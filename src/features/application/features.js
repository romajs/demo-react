import featureNames from './featureNames';

const flags = {
  [featureNames.BAR]: false,
  [featureNames.BAZ]: false,
  [featureNames.HOME]: false,
  [featureNames.PRIVATE_BAR]: false,
  [featureNames.PRIVATE_BAZ]: false,
  [featureNames.PRIVATE_HOME]: false,
  set: featureFlags => {
    featureFlags.forEach(flag => {
      flags[flag.key] = flag.enabled;
    });
  },
};

const features = new Proxy(flags, {
  get: (target, property) => target[property],
  set: () => null, // prevent property reassign
});

export default features;
