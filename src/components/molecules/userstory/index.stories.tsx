import {ComponentMeta,ComponentStory} from '@storybook/react'
import React from 'react';
import UserStory from '.'

export default {
    Title:'UserStory',
    component:UserStory,
} as ComponentMeta<typeof UserStory>;

export const Application = <UserStory/>
