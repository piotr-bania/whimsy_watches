import './globals.scss'

export const metadata = {
    title: 'Whimsy Watches - The Eccentric Millionaire’s Collection',
    description: 'An immersive 3D web experience showcasing a unique collection of luxurious and whimsical timepieces. Crafted with Next.js, Three.js, and React Three Fiber.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}