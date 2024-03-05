
import { Header } from '@/components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import "leaflet/dist/leaflet.css";
import Script from 'next/script';
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <html>
      <body>
        <div className='w-100'>
          {/* <!-- partial:partials/_navbar.html --> */}
          <Header />
          {/* <!-- partial --> */}
          <div className="container-fluid page-body-wrapper">
            <Sidebar />
            {children}
          </div>
          {/* <!-- page-body-wrapper ends --> */}
        </div>
        {/* <!-- container-scroller --> */}
        {/* <!-- plugins:js --> */}
        <Script src="/js/jquery.js" strategy="afterInteractive" />
        <Script src="/js/vendor.bundle.base.js" strategy="afterInteractive" />
        {/* <!-- endinject --> */}
        <Script src="/js/template.js" strategy="afterInteractive" />

      </body>
    </html>
  )
}
