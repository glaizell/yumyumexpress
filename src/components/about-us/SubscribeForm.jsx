import bgImage from "../../assets/image/foodDelivery/bg/1.png";
import delivery from "../../assets/image/foodDelivery/2.png";

const SubscribeForm = () => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat relative md:h-screen flex flex-col items-center justify-center px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="h-96 flex flex-col items-center justify-center">
        <div className="absolute top-8 sm:top-0 left-12 sm:left-36">
          <img src={delivery} alt="" className="md:h-64 h-40" />
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center  gap-x-8">
          <div className="text-center">
            <p className="font-extrabold md:mb-2">Subscribe for offers</p>
            <h2 className="hidden md:block font-thin text-white text-base">
              Stay in touch with offers
            </h2>
          </div>
          <div className="bg-white rounded-xl p-2 md:p-4 flex items-center shadow-lg">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-48 md:w-56 lg:w-72 xl:w-96 px-4 py-2 rounded-l-3xl outline-none border border-gray-300 border-r-0"
            />
            <button className="bg-[#1a1a1a] px-6 py-2 rounded-3xl text-white -ml-6">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SubscribeForm;
