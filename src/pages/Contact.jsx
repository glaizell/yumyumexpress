import bg from ".././assets/image/contacts/contactbg.png";
import message from ".././assets/image/contacts/contact.png";
import ContactUsForm from "../components/contact/ContactUsForm";

const Contact = () => {
  return (
    <section className="container mx-auto p-4 mb-14">
      <div
        className=" max-w-[768px] mx-auto bg-cover bg-center  bg-no-repeat max-h-screen py-8 px-24 flex items-center justify-center rounded-3xl shadow-2xl relative"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="bg-[#1a1a1a] h-full w-96 flex items-center justify-center rounded-3xl shadow-xl p-8">
          <ContactUsForm />
        </div>
        <div className="absolute bottom-0 right-0 sm:right-8 md:right-14 lg:right-20 ">
          <img src={message} alt="" className="h-36 md:h-44 w-full" />
        </div>
      </div>
    </section>
  );
};
export default Contact;
