/**
 * @type - object
 * @desc - Variant object for text small header Container (h5) on homepage
 */

export const smallHeaderVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

/**
 * @type - object
 * @desc - Variant object for text small header characters (span) on homepage
 */

export const smallHeaderCharVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

/**
 * @type - object
 * @desc - Variant object for text header Container (h1) on homepage
 */

export const headerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/**
 * @type - object
 * @desc - Variant object for text header characters (span) on homepage
 */

export const headerCharVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

/**
 * @type - object
 * @desc - Variant object for social links container (<div>) on homepage
 */

export const linkContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

/**
 * @type - object
 * @desc - Variant object for social links (<a>) on homepage
 */

export const linkVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
