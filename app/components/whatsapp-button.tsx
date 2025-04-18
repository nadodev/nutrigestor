'use client';

import { Button } from '@/components/ui/button';
import { BsWhatsapp } from 'react-icons/bs';

export function WhatsAppButton() {
  return (
    <Button
      className="fixed bottom-8 right-8 rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce bg-[#25D366] hover:bg-[#25D366]/90"
      onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
    >
      <div className="flex items-center justify-center">
        <BsWhatsapp size={30} />
      </div>
    </Button>
  );
} 