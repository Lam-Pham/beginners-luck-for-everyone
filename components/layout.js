import Alert from '../components/alert'
import Footer from '../components/footer'

export default function Layout({ preview, children }) {
  return (
    <>
      <div className="bg-off-white min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
    </>
  )
}
