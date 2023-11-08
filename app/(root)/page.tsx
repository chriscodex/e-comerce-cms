'use client';

import { UserButton } from '@clerk/nextjs';
import { Modal } from '@/components/ui/modal';

function SetupPage() {
  return (
    <div className="p-4 bg-black">
      <Modal title="Test" description="Test Desc" isOpen onClose={() => {}}>
        Children
        {/* <UserButton afterSignOutUrl="/" /> */}
      </Modal>
    </div>
  );
}

export default SetupPage;
