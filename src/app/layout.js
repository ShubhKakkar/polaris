import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import Sidebar from '../components/commons/Sidebar'
import { Toaster } from '@/components/ui/toaster';
export const metadata = {
  title: "Polaris",
  description: "Meter testing assignment",
};
export default function RootLayout({
  children,
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="flex">
          <Sidebar />
          <div className="w-5/6">
            {children}
            <Toaster />
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}