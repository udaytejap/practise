import {fireEvent, render,screen} from '@testing-library/react'
import React from 'react'
import UserStory from '.'

describe('UserStory rendering correctly',()=>{
    test('All avatars and Icons are rendering correctly',()=>{
        render(<UserStory />)
        const totalImages = screen.getAllByRole('img');
        expect(totalImages.length).toBe(6);     // 4 avatars and 2 icons
    })
    test('Buttons are rendering correctly',()=>{
        render(<UserStory />)
        const clickElement = screen.getAllByRole('button');
        expect(clickElement.length).toBe(2)
;    })
})
