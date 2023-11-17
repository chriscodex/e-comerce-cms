'use client';

import { BillboardColumn } from './columns';

interface CellActionColumn {
  data: BillboardColumn
}

export const CellAction: React.FC<CellActionColumn> = ({
  data
}) => {
  return (
    <div>Action</div>
  )
}