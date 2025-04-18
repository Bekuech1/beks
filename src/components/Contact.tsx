"use client";

import { useState, useEffect } from "react";
import Header from "./Header";


const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const formspreeEndpoint = "https://formspree.io/f/mjkvovyo";

  const validateForm = () => {
    const newErrors = { firstName: "", lastName: "", email: "", message: "" };
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please check your connection.");
    }
    setIsLoading(false);
  };

  return (
    <div className="max-w-[954px] mx-auto pt-24 mb-24 grid gap-4" id="contact">
      <Header>Contact Me</Header>
      <div className="flex gap-x-20 py-10">
        <div className="w-full md:w-[60%] grid gap-8 p-8 bg-white/10 rounded-3xl shadow-[0px_4px_24px_0px_rgba(2,142,75,0.10)]">
          <section className={`gap-2 ${!isSubmitted ? "grid" : "hidden"}`}>
            <h4 className="text-[#fefefe] text-2xl font-semibold leading-loose">Send me a message</h4>
            <p className="text-[#a4a4a4] text-sm font-medium leading-tight">I'll get back to you within 24 hours</p>
          </section>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} noValidate className="w-full">
              <div className="mb-4 flex gap-4">
                <div className="mb-4">
                  <label htmlFor="firstName" className="text-xs font-medium">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`w-full p-2 rounded-lg bg-[#333333] ${
                      errors.firstName ? "border-red-500" : ""
                    }`}
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter your firstname"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="text-xs font-medium">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`w-full p-2 rounded-lg bg-[#333333] ${
                      errors.lastName ? "border-red-500" : ""
                    }`}
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter your lastname"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="text-xs font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`w-full p-2 rounded-lg bg-[#333333] ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="text-xs font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`w-full p-3 rounded-lg bg-[#333333] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter your message"
                  rows={4}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className={`w-full p-2 bg-purple-500 text-white rounded-lg ${
                  isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-600"
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          ) : (
            <div className="text-center my-auto">
              <div className="text-purple-500 text-4xl mb-4 mx-auto w-fit">
                <img src="/success.svg" alt="" />
              </div>
              <h3 className="text-lg font-medium">Thank you for reaching out!</h3>
              <p className="text-sm text-gray-600">
                I appreciate your message! I’ll be in touch shortly. Thanks again!
              </p>
            </div>
          )}
        </div>

        <div className="w-[40%] py-8">

          <section className="grid gap-2 mb-12">
            <h4 className="text-[#fefefe] text-2xl font-semibold leading-loose">Or get to me through socials</h4>
            <p className="text-[#a4a4a4] text-sm font-medium leading-tight">For general inquiries, partnership opportunities, or customer support.</p>
          </section>
          <section className="flex mx-auto w-full justify-between h-[100px]">

            <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                <div className="w-14 h-14 p-2.5 bg-white/10 rounded-[100px] flex justify-center items-center transition-transform duration-300 ease-in-out">
                    <a 
                        href="https://wa.me/+2348023614838?text=Hi I'd like to talk to you about "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/p-call.svg" alt="Call Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                    </a>
                </div>
                <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                    whatsapp
                </h3>
            </div>
        
            <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                <div className="w-14 h-14 p-2.5 bg-white/10 rounded-[100px] flex justify-center items-center transition-transform duration-300 ease-in-out">
                    <a 
                        href="https://github.com/Bekuech1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/p-github.svg" alt="GitHub Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                    </a>
                </div>
                <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                    GitHub
                </h3>
            </div>
        
            <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                <div className="w-14 h-14 p-2.5 bg-white/10 rounded-[100px] flex justify-center items-center transition-transform duration-300 ease-in-out">
                    <a 
                        href="https://linkedin.com/in/yourlinkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/p-linkedin.svg" alt="LinkedIn Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                    </a>
                </div>
                <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                    LinkedIn
                </h3>
            </div>
        
            <div className="flex flex-col justify-center items-center gap-1 group w-[78px]">
                <div className="w-14 h-14 p-2.5 bg-white/10 rounded-[100px] flex justify-center items-center transition-transform duration-300 ease-in-out">
                    <a 
                        href="/resume.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src="/p-resume.svg" alt="Resume Icon" className="w-8 h-8 transition-transform duration-300 ease-in-out hover:scale-[1.15]" />
                    </a>
                </div>
                <h3 className="capitalize text-white hidden transition-opacity duration-300 ease-in-out group-hover:block font-medium">
                    Resume
                </h3>
            </div>

          </section>
        </div>
        
      </div>
    </div>
  );
};

export default ContactForm;
