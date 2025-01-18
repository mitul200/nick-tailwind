import Hero from "./components/Hero";
import Nav from "./components/Nav";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import PopularProducts from "./sections/PopularProducts";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import Subscribe from "./sections/Subscribe";
import SuperQulity from "./sections/SuperQulity";

const App = () => {
  return (
    <main className=" relative">
      <Nav />
      <section className=" xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className=" padding">
        <PopularProducts />
      </section>
      <section className=" padding">
        <SuperQulity />
      </section>
      <section className=" padding">
        <Services />
      </section>
      <section className=" padding">
        <SpecialOffers />
      </section>
      <section className=" bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className=" padding">
        <Subscribe />
      </section>
      <section className=" padding bg-black padding-x padding-t pb-8 ">
        <Footer />
      </section>
    </main>
  );
};
export default App;
