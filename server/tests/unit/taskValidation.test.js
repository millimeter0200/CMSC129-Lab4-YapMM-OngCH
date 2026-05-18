const validateTask = require("../../src/utils/taskValidation");

describe("Task Validation", () => {
  test("should return false for empty task title", () => {
    const task = {
      title: ""
    };

    expect(validateTask(task)).toBe(false);
  });
});