const validateTask = require("../../src/utils/taskValidation");

describe("Task Validation", () => {
  test("should return false for empty task title", () => {
    const task = {
      title: ""
    };

    expect(validateTask(task)).toBe(false);
  });
});

test("should return true for valid task title", () => {
  const task = {
    title: "Finish CMSC129 Lab"
  };

  expect(validateTask(task)).toBe(true);
});

test("should return false for whitespace-only title", () => {
  const task = {
    title: "     "
  };

  expect(validateTask(task)).toBe(false);
});