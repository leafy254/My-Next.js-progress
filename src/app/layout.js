

export const metadata = {
  title: {
    
    default: "Next.js Tutorial-Codevolution",
    template: "%s | Codevolution",
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
         style={{
          backgroundColor: "lightblue",
          padding: "1rem"
         }}
         >
          <p>Header</p>
        </header>
        {children}
        <footer
         style={{
          backgroundColor: "ghostwhite",
          padding: "1rem",
         }}
         >
          <p>footer</p>
        </footer>
      </body>
    </html>
  )
}
