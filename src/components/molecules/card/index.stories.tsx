import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";
import Card from './index'

export default {
    Title:'Organism/Card',
    component:Card,
    argTypes: {
        coinSrc: {
            control: { type: "radio" },
            options: ['./coins/Bitcoin.png', './coins/Ethereum.png', './coins/Tether.png', './coins/XRP.png']
        }
    }
}as ComponentMeta<typeof Card> ;

const Template:ComponentStory<typeof Card> = (args) => <Card {...args}/>

export const Bitcoin = Template.bind({});
Bitcoin.args={
    coinSrc:'./coins/Bitcoin.png',
    coinName:'Bitcoin',
    coinAbbr:'BTC',
    currency:'$34,000.00',
    percentage:'+1.06%',
    color:'green'
}

export const Ethereum = Template.bind({});
Ethereum.args={
    coinSrc:'./coins/Ethereum.png',
    coinName:'Ethereum',
    coinAbbr:'ETH',
    currency:'$1,297.85',
    percentage:'+6.85%',
    color:'green'
}
export const Tether = Template.bind({});
Tether.args={
    coinSrc:'./coins/Tether.png',
    coinName:'Tether',
    coinAbbr:'USDT',
    currency:'$74.28',
    percentage:'-0.01%',
    color:'red'
}
export const XRP = Template.bind({});
XRP.args={
    coinSrc:'./coins/XRP.png',
    coinName:'XRP',
    coinAbbr:'XRP',
    currency:'$0.00',
    percentage:'+0.00%',
    color:'green'
}