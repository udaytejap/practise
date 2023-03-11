import Button from "."
import { render,screen } from "@testing-library/react"
import React from "react"

test('Button testing correctly',()=>{
    render(<Button/>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
})