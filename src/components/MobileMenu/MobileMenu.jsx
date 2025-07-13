import React from 'react';
import styled from 'styled-components';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

import * as Dialog from '@radix-ui/react-dialog';

export default function MobileMenu({ open, onOpenChange, children }) {
    // <Dialog.Overlay className='DialogOverlay' />
  return (
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        {children}
        <Dialog.Portal>
          <Dialog.Content>
            <h1>HELLO WORLD</h1>
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
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
  );
}

MobileMenu.Button = Dialog.Trigger;
