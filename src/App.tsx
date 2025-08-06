import '@/App.css'
import Header from '@/routes/-components/Header'
import Catalog from '@/routes/-components/Catalog'
import Sidebar from '@/routes/-components/Sidebar'


export default function App() {

  return (
    <>
      <Header />
      <main className='flex flex-row min-h-screen'>
        <Catalog />
        <Sidebar />
      </main>
    </>
  )
}