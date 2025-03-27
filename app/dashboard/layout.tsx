import '@/app/ui/global.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        <div className='h-52 w-52 flex justify-center items-center bg-blue-200'>
        {children}
        </div>
        </body>
    </html>
  );
}