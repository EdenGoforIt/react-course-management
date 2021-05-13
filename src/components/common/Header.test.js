import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";

it("it contains 3 nav links via shallow", () => {
  const navLinks = shallow(<Header />).find("NavLink").length;
  expect(navLinks).toEqual(3);
});
it("It contains 3 a href via mount which renders DOM", () => {
  const numAnchors = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  ).find("a").length;
  expect(numAnchors).toEqual(3);
});
