export default {
  stories: ["app/**/*.stories.{js,jsx,ts,tsx}"],
  addons: {
    theme: {
      defaultState: "dark",
    },
    width: {
      options: {
        sx: 376,
        sm: 640,
        md: 768,
        lg: 1024,
        xl: 1280,
        _2xl: 1536,
      },
      defaultValue: 1280, // 0 = no viewport is set
    },
  },
};
