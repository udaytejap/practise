import { render, screen } from "@testing-library/react";
import React from "react";
import Coin from "./index";

describe("Coin working properly", () => {
  test("Avatars rendering correctly", () => {
    render(
      <Coin coinName="Bitcoin" coinSrc="./coins/Bitcoin.png" coinAbbr="BTC" />
    );
    const avatarElement = screen.getByRole("img");
    expect(avatarElement).toBeInTheDocument();
  });
  test("Coin Text  rendering correctly", () => {
    render(
      <Coin coinName="Bitcoin" coinSrc="./coins/Bitcoin.png" coinAbbr="BTC" />
    );
    const textElement = screen.getByText('Bitcoin');
    expect(textElement).toBeInTheDocument();

    const abbrTextElement = screen.getByText('BTC');
    expect(abbrTextElement).toBeInTheDocument();
  });
});
