 import '@/app/ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <div className='h-screen w-screen flex justify-center items-center bg-blue-400'>
        {children}
        </div>
        </body>
    </html>
  );
}
