import {render,screen} from '@testing-library/react'
import Price from '.'
import React from 'react'

describe('Price rendering correctly',()=>{
    test('Text rendering correfctly',()=>{
        render(<Price currency='$1,297.85' percentage='+6.85%' color='green'/>)
        const percentageTextElement = screen.getByText('+6.85%')
        expect(percentageTextElement).toBeInTheDocument();

        const priceTextElement = screen.getByText('$1,297.85')
        expect(priceTextElement).toBeInTheDocument();
    })
    test('Text rendering correctly',()=>{
        render(<Price currency='$34,000.00' percentage='+1.06%' color='green'/>)
        const percentageTextElement = screen.getByText('+1.06%')
        expect(percentageTextElement).toBeInTheDocument();

        const priceTextElement = screen.getByText('$34,000.00')
        expect(priceTextElement).toBeInTheDocument();
    })
    test('Percentage text rendering with correct color',()=>{
        render(<Price currency='$34,000.00' percentage='+1.06%' color='green'/>)
        const textElement = screen.getByText('+1.06%')
        // const computedStyle = window.getComputedStyle(textElement);
        // expect(computedStyle.color).toBe("rgb(0, 128, 0)");
        const computedStyle = getComputedStyle(textElement);
        expect(computedStyle.color).toBe("green");
    })
})