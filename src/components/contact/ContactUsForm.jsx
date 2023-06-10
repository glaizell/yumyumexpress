const ContactUsForm = () => {
  return (
    <section className="text-white">
      <h2>Send us message</h2>
      <form action="">
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="mb-2">
            Name
          </label>
          <input
            type="text"
            className="bg-[#1a1a1a]  outline-none border-b-2 border-red-600 border-dotted text-sm"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="" className="mb-2">
            Email
          </label>
          <input
            type="email"
            className="bg-[#1a1a1a]  outline-none border-b-2 border-red-600 border-dotted text-sm"
          />
        </div>
        <div className="mb-8 flex flex-col">
          <label htmlFor="" className="mb-2">
            Message
          </label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="3"
            className="bg-[#1a1a1a]  outline-none border-b-2 border-red-600 border-dotted text-sm"
          ></textarea>
        </div>
        <button className="bg-white px-4 py-2 rounded-3xl text-black">
          Submit
        </button>
      </form>
    </section>
  );
};
export default ContactUsForm;
