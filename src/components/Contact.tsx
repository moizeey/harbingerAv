function Contact() {
  return (
    <div className="bg-[#26262C] text-white font-heebo pt-20 pb-20">
      <div className="flex  flex-col lg:flex-row  gap-16 px-10 ">
        <div className="lg:w-1/2 flex flex-col gap-8 lg:border-r lg:border-b-0  border-b border-[#3C3C42] lg:pb-0 pb-10 lg:pr-20">
          <h1 className="text-2xl lg:text-4xl font-semibold  tracking-wide">
            Ready to Take Your Internet Marketing to the next Level?
          </h1>
          <p className=" font-semibold text-md tracking-wide">
            Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus
            lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam et
            nunc justo.
          </p>
          <p className=" ">
            Risus tincidunt in laoreet risus dignissim montes, velit egestas eu
            nec et in tincidunt amet, etiam at turpis adipiscing volutpat amet,
            adipiscing purus elementum risus, vitae euismod leo amet eget quam
            enim blandit diam quis diam proin enim suspendisse massa.
          </p>
        </div>
        <div className="flex flex-col gap-8 xl:w-1/3 lg:w-1/2">
          <h1 className="md:text-2xl text-xl  font-semibold">Lets's Talk</h1>
          <form
            action=""
            className="text-black font-montserrat  flex gap-6  flex-col"
          >
            <input type="text" placeholder="Full name" className="px-4 py-3" />
            <input
              type="text"
              placeholder="Full address"
              className="px-4 py-3"
            />
            <textarea
              placeholder="Your message"
              className="px-4 py-3"
            ></textarea>
            <button className="px-5 py-3 lg:w-1/2 font-heebo capitalize tracking-wide  bg-[#3535DE] text-white rounded-lg hover:bg-white hover:text-black">
              get a quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
