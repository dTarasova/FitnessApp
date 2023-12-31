import React from 'react'
import { SelectedPage } from './types';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink className='rounded-md bg-secondary-500 hover:bg-primary-500 px-10 py-2 hover:text-white'
    // padding in the x direction
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href={`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton
