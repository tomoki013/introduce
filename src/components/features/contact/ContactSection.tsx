"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";

export default function TravelContact() {
  return (
    <section
      id="contact"
      className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative bg-[#fdfbf7] dark:bg-slate-800 rounded-lg shadow-2xl overflow-hidden"
        >
          {/* Postcard Border */}
          <div className="absolute inset-0 border-12 border-white dark:border-slate-700 pointer-events-none z-10" />

          <div className="grid md:grid-cols-2 min-h-[500px]">
            {/* Left Side: Message Area */}
            <div className="p-8 md:p-12 flex flex-col justify-center border-r-2 border-slate-200 dark:border-slate-700 border-dashed">
              <h2 className="text-3xl font-bold font-montserrat mb-6 text-slate-800 dark:text-white">
                Send a Postcard
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-8">
                Have a project in mind or just want to say hi? Drop me a message
                and let's start a new journey together.
              </p>

              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-600 py-2 focus:outline-none focus:border-primary transition-colors font-handwriting"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full bg-transparent border-b-2 border-slate-300 dark:border-slate-600 py-2 focus:outline-none focus:border-primary transition-colors resize-none font-handwriting"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-4 flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-all hover:scale-105"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Right Side: Address & Stamp */}
            <div className="relative p-8 md:p-12 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/paper.png')]">
              {/* Stamp */}
              <div className="absolute top-8 right-8 w-24 h-28 border-4 border-dashed border-slate-300 dark:border-slate-600 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rotate-3">
                <div className="text-center">
                  <div className="text-xs font-bold uppercase text-slate-400">
                    Postage
                  </div>
                  <div className="text-2xl font-black text-slate-300">PAID</div>
                </div>
              </div>

              {/* Address Lines */}
              <div className="w-full max-w-xs space-y-8 mt-20 font-handwriting text-xl text-slate-600 dark:text-slate-300">
                <div className="border-b border-slate-300 dark:border-slate-600 pb-1">
                  To: Tomokichi
                </div>
                <div className="border-b border-slate-300 dark:border-slate-600 pb-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> Kyoto, Japan
                  </div>
                </div>
                <div className="border-b border-slate-300 dark:border-slate-600 pb-1">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4" /> gaomuyuoxi81[at]gmail.com
                  </div>
                  <p className="text-xs text-slate-400 text-right">
                    [at]を@に変換してください。
                  </p>
                </div>
              </div>

              {/* Postmark */}
              <div className="absolute bottom-12 left-12 w-32 h-32 rounded-full border-4 border-primary/20 flex items-center justify-center -rotate-12 pointer-events-none">
                <div className="text-center text-primary/20 font-bold uppercase text-sm">
                  Sent from
                  <br />
                  The Web
                  <br />
                  {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
