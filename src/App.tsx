import '@/App.css'
import Header from '@/components/Header'
import Catalog from '@/components/Catalog'
import Sidebar from '@/components/Sidebar'


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