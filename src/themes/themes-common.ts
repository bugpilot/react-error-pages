// Use this file to export common theme args that are used in multiple
// storybook stories

export const CommonPageArgs = {
  error: new Error("Something went wrong"),
  reset: () => {
    console.log("Call to reset()");
  },
};
