import Categories from '../components/Categories';
import Actions from '../components/movies/Actions';
import NavBar from '/src/components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function Action() {
  return (
    <>
    <NavBar />
    <section className=" w-full pt-16 bg-gray-500">
        <div className='max-w-[1100px] m-auto py-10 '>
            <Link to={'/'} className='underline'>Home</Link> <span>{`>`}</span> <span>Action</span>
        </div>
    </section>
    <section className='py-10'>
    <Categories />
    </section>
    <section className="pb-20">
        <div className="max-w-[1100px] m-auto">
            <h1 className="text-4xl my-6">Best Action Movies</h1>
            <div className="flex justify-between flex-wrap gap-5">
                <Actions />
            </div>
        </div>
    </section>
    <footer className="bg-[#2e2e2e]">
        <div className="md:max-w-[1100px] m-auto">
          <Footer />
        </div>
      </footer>
    </>
  )
}

export default Action