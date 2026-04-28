import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import contactImg from "../Images/contact-team.png";
import FAQ from './FAQ'

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },

    validationSchema: Yup.object({
      fullName: Yup.string().required("Full name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      subject: Yup.string().required("Subject is required"),
      message: Yup.string().required("Message is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values);
      alert("Message sent successfully!");
      resetForm();
    },
  });

  return (
    <>
    <section id="contact" className="bg-white py-20 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-semibold text-center mb-16 text-gray-900">
          How can we help you today?
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-[40px] overflow-hidden h-full min-h-100">
            <img
              src={contactImg}
              alt="Our team helping"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="ml-2">Full name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formik.values.fullName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-[#f0f4ff] rounded-full px-6 py-4 outline-none"
                />
                {formik.touched.fullName && formik.errors.fullName && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.fullName}</p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="ml-2">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-[#f0f4ff] rounded-full px-6 py-4 outline-none"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-2">
                <label className="ml-2">Phone no</label>
                <input
                  type="tel"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-[#f0f4ff] rounded-full px-6 py-4 outline-none"
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.phone}</p>
                )}
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="ml-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formik.values.subject}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="bg-[#f0f4ff] rounded-full px-6 py-4 outline-none"
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="text-red-500 text-sm ml-2">{formik.errors.subject}</p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label className="ml-2">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="bg-[#f0f4ff] rounded-[30px] px-6 py-4 outline-none resize-none"
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-sm ml-2">{formik.errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-blue-700 transition-all shadow-md active:scale-95"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
    <FAQ />
    </>
  );
};

export default Contact;