function Contact() {
  return (
    <div className="bg-[#26262C] text-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex  space-x-20">
          <div className="w-1/2 border-r border-[#3C3C42] pr-20">
            <h1 className="text-4xl  tracking-wide">
              Ready to Take Your Internet Marketing to the next Level?
            </h1>
            <p className="pt-8 font-semibold text-lg tracking-wide">
              Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus
              lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam
              et nunc justo.
            </p>
            <p className="pt-6 text-lg">
              Risus tincidunt in laoreet risus dignissim montes, velit egestas
              eu nec et in tincidunt amet, etiam at turpis adipiscing volutpat
              amet, adipiscing purus elementum risus, vitae euismod leo amet
              eget quam enim blandit diam quis diam proin enim suspendisse
              massa.
            </p>
          </div>
          <div className="">
            <h1>Lets's Talk</h1>
            <form action="" className="flex flex-col">
              <input type="text" placeholder="Full name" />
              <input type="text" placeholder="Full address" />
              <textarea placeholder="Your message" id=""></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
