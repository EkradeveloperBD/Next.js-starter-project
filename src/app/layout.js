
import Sidebar from './components/Sidebar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          
            <div className="flex flex-col">
                    <div className="h-[1200px]">{children}</div>
                    <div><Sidebar/></div>
            </div>
             

      
          
      </body>
      
    </html>
  )
}
