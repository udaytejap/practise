import { render, screen } from "@testing-library/react";
import React from "react";
import Card from ".";
describe("Card rendering correctly", () => {
  test("Avatar rendering correctly", () => {
    render(
      <Card
        coinSrc="./coins/Tether.png"
        coinName="Tether"
        coinAbbr="USDT"
        currency="$74.28"
        percentage="-0.01"
        color="red"
      />
    );
    const avatarElement = screen.getByRole("img");
    expect(avatarElement).toBeInTheDocument();
  });
  test("Text rendering correctly", () => {
    render(
      <Card
        coinSrc="./coins/Tether.png"
        coinName="Tether"
        coinAbbr="USDT"
        currency="$74.28"
        percentage="-0.01"
        color="red"
      />
    );
    const textElement = screen.getByText('USDT');
    expect(textElement).toBeInTheDocument();
  });
});
