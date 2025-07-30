import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import SeasonCollection from '../components/SeasonCollection';
import ProductData from '../data/ProductData';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SeasonCollection />

      <div className="mx-5 md:mx-10">
        <p className="my-18 text-4xl text-center">You are in best sellers</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center gap-4">
          {ProductData.map(item => (
            <div key={item.id}>
              <ProductCard
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image.image1}
                hoverdImage={item.image.image2}
                product={item}
              />
            </div>
          ))}
        </div>

        <div className="mb-15 md:mb-25 mt-6 md:mt-20 md:flex md:justify-center">
          <a href="">
            <button className="border py-2.5 px-7 rounded-md cursor-pointer hover:bg-black hover:text-white w-full md:w-auto">
              Shop Now
            </button>
          </a>
        </div>
      </div>

      {/* Footer Section */}

      <Footer />
    </>
  );
}

export default Home;
