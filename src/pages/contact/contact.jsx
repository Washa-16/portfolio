import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSendEmail = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setStatus("");
      await emailjs.sendForm(
        "service_n42wfac",
        "template_hbb4asd",
        formRef.current,
        "A3lyNxkRM1IniGM7l",
      );
      setStatus("Message sent successfully.");
      formRef.current.reset();
    } catch (error) {
      console.error("Email send failed:", error);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
      setStatus('')
    }
  };

  return (
    <section className="py-20">
      <div className="pb-12">
        <div className="flex flex-col justify-center items-start border-b border-gray-200 dark:border-neutral-800 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-3">Get in touch</h1>
          <p className="text-gray-400 text-lg">
            Let&apos;s build something awesome.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-100 dark:bg-neutral-900 rounded-2xl p-6 md:p-8 shadow-lg mt-20">
          <form ref={formRef} onSubmit={handleSendEmail} className="space-y-5">
            <div className="grid gap-4">
              <div className="flex items-center justify-center">
                <span>New message</span>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black px-4 py-3 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="8"
                  placeholder="Write your message here"
                  required
                  className="w-full rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black px-4 py-3 outline-none resize-none"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {status}
              </p>

              <button
                type="submit"
                disabled={loading}
                className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50 border border-gray-300 dark:border-neutral-700"
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
