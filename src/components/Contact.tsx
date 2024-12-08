import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";
import emailjs from "emailjs-com";

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: number;
  message: string;
  status: string;
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    status: "unread",
  });

  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const formSubmissionsRef = collection(db, "form-submissions");
  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const docRef = await addDoc(collection(db, "form-submissions"), formData);
      console.log("document written with ID: ", docRef.id);

      //send email with Emailjs
      const serviceID = "service_ek25wni";
      const templateID = "template_nexpl7e";
      const publicKey = "XtY87iUEgVcP7UrY3";

      const emailData = {
        to_email: formData.email,
        to_name: formData.name,
        message: "Thank you for reaching out! We will get back to you soon.",
      };

      await emailjs.send(serviceID, templateID, emailData, publicKey);
      console.log("Email sent successfully!");
      alert("Form submitted succesfully");

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        status: "unread",
      });
    } catch (e) {
      console.error("error adding document: ", e);
      alert("error submitting form. ");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const getFormData = async () => {
      try {
        const querySnapshot = await getDocs(formSubmissionsRef);
        const data = querySnapshot.docs.map((docs) => ({
          id: docs.id,
          ...docs.data(),
        })) as Submission[];

        setSubmissions(data);
        console.log(submissions.map((data) => data));
      } catch (error) {
        console.error(error);
      }
    };
    getFormData();
  }, []);

  return (
    <div className="bg-[#26262C] text-white font-heebo pt-20 pb-20">
      <div className="flex  flex-col lg:flex-row  gap-16 px-10 ">
        <div className="lg:w-1/2 flex flex-col gap-8 lg:border-r lg:border-b-0  border-b border-[#3C3C42] lg:pb-0 pb-10 lg:pr-20">
          <h1 className="text-2xl lg:text-4xl font-semibold  tracking-wide">
            Ready to Take Your Bussiness to the next Level?
          </h1>
          <p className=" font-semibold text-md tracking-wide">
            Amet ut elementum, ipsum lobortis amet, ut duis facilisis purus
            lorem ac pharetra, nunc mi egestas diam id nisl consequat aliquam et
            nunc justo.
          </p>
          <p className=" ">
            Our team of experts is here to help you scale your business with
            personalized strategies and solutions. Whether you're looking to
            enhance your online presence, improve efficiency, or increase
            conversions, Harbinger AR is your trusted partner for success.
          </p>
        </div>
        <div className="flex flex-col gap-8 xl:w-1/3 lg:w-1/2">
          <h1 className="md:text-2xl text-xl  font-semibold">Lets's Talk</h1>
          <form
            onSubmit={handleOnSubmit}
            className="text-black font-montserrat  flex gap-6  flex-col"
          >
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="px-4 py-3"
              value={formData.name}
              onChange={handleOnChange}
              required
            />
            <input
              value={formData.phone}
              name="phone"
              type="number"
              placeholder="Your phone number"
              className="px-4 py-3"
              onChange={handleOnChange}
              required
            />
            <input
              value={formData.email}
              name="email"
              type="text"
              placeholder="Your Email"
              className="px-4 py-3"
              onChange={handleOnChange}
              required
            />

            <textarea
              value={formData.message}
              name="message"
              placeholder="Your message"
              className="px-4 py-3"
              onChange={handleOnChange}
              required
            ></textarea>
            <button
              disabled={isLoading}
              type="submit"
              className="px-5 py-3 lg:w-1/2 font-heebo capitalize tracking-wide disabled:bg-gray-300 disabled:hover:text-white  bg-[#3535DE] text-white rounded-lg hover:bg-white hover:text-black"
            >
              {isLoading ? "Loading.." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
