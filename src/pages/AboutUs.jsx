import aboutPhoto from "../assets/image/about.png";
import CustomersFeedBack from "../components/about-us/CustomersFeedBack";
import SubscribeForm from "../components/about-us/SubscribeForm";

const AboutUs = () => {
  return (
    <section>
      <div className="container mx-auto px-4 mb-8 h-full ">
        <div className="grid lg:grid-cols-2 items-center gap-14 px-12">
          <div>
            <h2 className="mb-8">
              Introducing YumYum Express: World's Best Chef Team
            </h2>
            <p className="text-gray-800 text-sm mb-8">
              Experience culinary excellence with YumYum Express! Our food order
              website brings you the unmatched skills of the world's best chef
              team. Delight your taste buds with a diverse menu of delectable
              dishes prepared by renowned chefs. Fresh ingredients, easy online
              ordering, and prompt delivery make YumYum Express your go-to
              destination for exceptional dining. Discover a world of flavors at
              your doorstep!
            </p>
            <button className="bg-[#f53739] px-4 py-2 rounded-3xl text-white">
              Message us
            </button>
          </div>
          <div>
            <img src={aboutPhoto} alt="" className="w-full h-full " />
          </div>
        </div>
      </div>
      <CustomersFeedBack />

      <SubscribeForm />
    </section>
  );
};
export default AboutUs;
