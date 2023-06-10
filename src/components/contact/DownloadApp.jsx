import phoneImage from "../../assets/image/foodDelivery/1.png";
import motorImage from "../../assets/image/foodDelivery/2.png";
import google from "../../assets/image/google-play-badge.png";

const DownloadApp = () => {
  return (
    <section className="mb-14">
      <div className=" w-[768px] mx-auto mb-12 rounded-3xl overflow-hidden shadow-lg">
        <div className=" ">
          <div className=" bg-black">
            <img src={motorImage} alt="" className="h-48 w-48" />
            <div className="flex flex-col  justify-center px-12">
              <h2 className="mb-8 text-[#f53739]">Download our mobile app</h2>
              <div className="flex ">
                <button className="">
                  <img src={google} alt="" className="h-16 w-40" />
                </button>
                <button>
                  <img src={google} alt="" className="h-16 w-40" />
                </button>
              </div>
            </div>
          </div>
          {/* <div className="">
            <img src={phoneImage} alt="" className="h-56 w-full" />
          </div> */}
        </div>
      </div>
    </section>
  );
};
export default DownloadApp;
