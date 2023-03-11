import { ComponentMeta,ComponentStory } from "@storybook/react";
import React from "react";
import Coin from './index'

export default {
    Title:'Organism/Coin',
    component:Coin,
    argTypes: {
        coinSrc: {
            control: { type: "radio" },
            options: ['./coins/Bitcoin.png', './coins/Ethereum.png', './coins/Tether.png', './coins/XRP.png']
        }
    }
}as ComponentMeta<typeof Coin> ;

const Template:ComponentStory<typeof Coin> = (args) => <Coin {...args}/>

export const Bitcoin = Template.bind({});
Bitcoin.args={
    coinSrc:'./coins/Bitcoin.png',
    coinName:'Bitcoin',
    coinAbbr:'BTC'
}
export const Ethereum = Template.bind({})
Ethereum.args={
    coinSrc:'./coins/Ethereum.png',
    coinName:'Ethereum',
    coinAbbr:'ETH'
}
export const Tether = Template.bind({})
Tether.args={
    coinSrc:'./coins/Tether.png',
    coinName:'Tether',
    coinAbbr:'USDT'
}
export const XRP = Template.bind({})
XRP.args={
    coinSrc:'./coins/XRP.png',
    coinName:'XRP',
    coinAbbr:'XRP',
    hasBgColor:true,
    bgColor:'#E8E8F7',
    textColor:'#4B4B60'
}