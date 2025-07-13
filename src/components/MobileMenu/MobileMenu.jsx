import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import * as Dialog from '@radix-ui/react-dialog';

export default function MobileMenu({ open, onOpenChange, children }) {
    // <Dialog.Overlay className='DialogOverlay' />
  return (
      <Dialog.Root open={open} onOpenChange={onOpenChange} modal={true}>
        {children}
        <Dialog.Portal>
          <OverLay />
          <Content>
            <VisuallyHidden>
                <Dialog.Title className="DialogTitle">Menu</Dialog.Title>
                <Dialog.Description className="DialogDescription">
                    This is the main menu.
                </Dialog.Description>
            </VisuallyHidden>
            <nav>
              <a href="/sale">Sale</a>
              <a href="/new">New&nbsp;Releases</a>
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
              <a href="/collections">Collections</a>
            </nav>
            <footer>
              <a href="/terms">Terms and Conditions</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/contact">Contact Us</a>
            </footer>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
  );
}

const OverLay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: hsl(220deg, 5%, 50% / 0.8);
`;

const Content = styled.div`
    background-color: var(--color-white);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    witdh: 300px;
    height: 100%;
`;

MobileMenu.Button = Dialog.Trigger;
