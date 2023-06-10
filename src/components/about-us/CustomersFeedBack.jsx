import ben from "../../assets/image/customers/ben.jpg";
import customer1 from "../../assets/image/customers/customer-1.jpg";
import customer2 from "../../assets/image/customers/customer-2.jpg";
import { VscQuote } from "react-icons/vsc";

const CustomersFeedBack = () => {
  return (
    <section className="bg-[#fee6e6] mb-24">
      <div className="container mx-auto md:h-screen p-4">
        <div>
          <div className="text-center mb-8">
            <h6 className="mb-4">Customers feedback</h6>
            <h2 className="font-thin">
              Get real-world advice from the people <br /> who've been there
            </h2>
          </div>
          <div className="p-4 flex items-center justify-center flex-col md:relative gap-y-8">
            <div className="bg-white flex flex-col items-center text-center p-4 rounded-xl md:absolute top-14 left-0 w-56">
              <img src={ben} alt="" className="mx-auto mb-4 rounded-full" />
              <h6 className="mb-2">Ben Bulaun</h6>
              <div>
                <VscQuote className="mb-4 text-[#f53739] text-4xl " />
              </div>
              <p className="text-xs">
                YumYumExpress has a great selection of restaurants and the
                delivery is always on time. I'm a satisfied customer!"
              </p>
            </div>
            <div className="bg-white flex flex-col items-center text-center p-4 rounded-xl md:absolute top-0 left-1/2 md:transform md:-translate-x-1/2 w-56">
              <img
                src={customer1}
                alt=""
                className="mx-auto mb-4 rounded-full"
              />
              <h6 className="mb-2">Ben Bulaun</h6>
              <div>
                <VscQuote className="mb-4 text-[#f53739] text-4xl " />
              </div>
              <p className="text-xs">
                I love using YumYumExpress for my food deliveries. The website
                is user-friendly, and the customer service is top-notch.
              </p>
            </div>
            <div className="bg-white flex flex-col items-center text-center p-4 rounded-xl md:absolute top-24 right-0  w-56 ">
              <img
                src={customer2}
                alt=""
                className="mx-auto mb-4 rounded-full"
              />
              <h6 className="mb-2">Ben Bulaun</h6>
              <div>
                <VscQuote className="mb-4 text-[#f53739] text-4xl " />
              </div>
              <p className="text-xs">
                YumYumExpress exceeded my expectations with their fast delivery
                and tasty food. Highly recommended!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CustomersFeedBack;
