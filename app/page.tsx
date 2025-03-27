import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
import Image from 'next/image';
export default function Page() {
  return (
    <main className="flex h-40 w-40  justify-between  ">
      <Image
        src='/opengraph-image.png'
        width={400}
        height={760}
        
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <Image 
      src='/opengraph-image.png'
      width={400}
      height={760}
      />
    </main>
  );
}
