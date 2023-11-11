'use client';

import React, { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ModalProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  title,
  description,
  isOpen,
  onClose,
  children,
}) => {
  

  const [initialRenderState, setinitialRenderState] = useState(<div></div>);

  useEffect(() => {
    const onChange = (open: boolean) => {
      if (!open) {
        onClose();
      }
    };
    const initialRender = (
      <>
        <Dialog open={isOpen} onOpenChange={onChange}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">{children}</div>
          </DialogContent>
        </Dialog>
      </>
    );
    setinitialRenderState(initialRender);
  }, [isOpen, title, description, children, onClose]);

  return initialRenderState;
};
