import { create, blank } from "../src/index";

test("filling in an argument", () => {
  const fn = jest.fn();
  const partial = create(fn, blank, "foo");

  partial("bar");

  expect(fn).toBeCalledWith("bar", "foo");
});

test("applying arguments multiple times", () => {
  const fn = jest.fn();
  const p1 = create(fn, "foo", blank, blank);
  const p2 = create(p1, "bar", blank);
  const p3 = create(p2, "baz");

  p3();

  expect(fn).toBeCalledWith("foo", "bar", "baz");
});
