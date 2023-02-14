import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Header />
      <main className="flex">
        <Sidebar />
        <section className="bg-gray-100 dark:bg-slate-900 h-[88vh] flex-1" />
      </main>
    </>
  );
}

export default App;
