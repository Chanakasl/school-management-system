import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'School Management System',
  description: 'Simple school management with GitHub as database',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 p-4 text-white">
          <div className="container mx-auto flex gap-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/students" className="hover:underline">Students</Link>
            <Link href="/teachers" className="hover:underline">Teachers</Link>
            <Link href="/classes" className="hover:underline">Classes</Link>
          </div>
        </nav>
        <main className="container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  )
    }
