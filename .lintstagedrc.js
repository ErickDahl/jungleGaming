module.exports = {
  "*.{ts,tsx,js,jsx}": () => {
    return [
      "turbo run lint --filter=[HEAD^1]",
      "turbo run check-types --filter=[HEAD^1]",
    ];
  },

  "*.{ts,tsx,js,jsx,json,md,css,yaml,yml}": (filenames) => {
    return `prettier --write ${filenames.join(" ")}`;
  },
};
