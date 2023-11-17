'use client';

import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';

import { BillboardColumn } from './columns';
import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';

interface CellActionColumn {
  data: BillboardColumn;
}

export const CellAction: React.FC<CellActionColumn> = ({ data }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'} className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
