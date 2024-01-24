// Use this file to export common theme args that are used in multiple
// storybook stories

export const CommonPageStoryArgs = {
  error: new Error("Something went wrong"),
  reset: () => {
    console.log("Call to reset()");
  },
};
