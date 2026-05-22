// "use client";

// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { CheckCircle, Send } from "lucide-react";
// import { useState } from "react";
// import { Input } from "../ui/input";

// export function ContactForm() {
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setIsLoading(false);
//     setIsSubmitted(true);
//   };

//   return (
//     <section id="contact" className="">
//       <div className="grid md:grid-cols-2 gap-5">
//         {" "}
//         {isSubmitted ? (
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="flex flex-col items-center justify-center h-full py-12 text-center"
//           >
//             <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
//               <CheckCircle className="h-10 w-10 text-green-600" />
//             </div>
//             <h3 className="text-2xl font-bold text-foreground mb-2">
//               Thank You!
//             </h3>
//             <p className="text-muted-foreground">
//               We&apos;ve received your message and will get back to you within
//               24 hours.
//             </p>
//             <Button
//               className="mt-6 gradient-blue text-white"
//               onClick={() => setIsSubmitted(false)}
//             >
//               Send Another Message
//             </Button>
//           </motion.div>
//         ) : (
//           <form
//             onSubmit={handleSubmit}
//             className="flex flex-col justify-center  space-y-4 w-full"
//           >
//             <div>
//               <h2 className=" font-sans  text-4xl font-bold  text-gray-900">
//                 Get in Touch
//               </h2>
//               <p className="text-sm text-gray-600 mt-1">
//                 {" "}
//                 Send us a message and we&apos;ll respond quickly.
//               </p>
//             </div>
//             <Input
//               id="name"
//               name="name"
//               placeholder="Full name*"
//               required
//               className="focus:border-primary"
//             />
//             <Input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Email address*"
//               required
//               className=" focus:border-primary"
//             />

//             <Input
//               id="phone"
//               name="phone"
//               type="tel"
//               placeholder="+91 98765 43210"
//               required
//               className=" focus:border-primary"
//             />

//             <select
//               id="course"
//               name="course"
//               className="w-full h-10 px-3 rounded-md bg-white border  text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
//             >
//               <option value="">Select specialization*</option>
//               <option value="foundation">Foundation Batch</option>
//               <option value="comprehensive">Comprehensive Batch</option>
//               <option value="test-series">Test Series Only</option>
//             </select>

//             <Button
//               type="submit"
//               className="w-full py-5 text-lg font-semibold gradient-blue"
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 1,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
//                 />
//               ) : (
//                 <>
//                   Send Message
//                   <Send className="ml-2 h-5 w-5" />
//                 </>
//               )}
//             </Button>
//           </form>
//         )}
//         <div className=" h-100 hidden md:flex relative overflow-hidden items-center justify-center bg-gradient-to-br from-blue-400 via-pink-400 to-indigo-600 p-10">
//           {" "}
//           {/* Decorative Circles */}
//           <div className="absolute top-20 right-20 w-32 h-32 bg-white rounded-full opacity-30"></div>
//           <div className="absolute bottom-20 left-10 w-40 h-40 bg-white rounded-full opacity-20"></div>
//           <div className="absolute top-1/2 right-10 w-24 h-24 bg-white rounded-full opacity-25"></div>
//           {/* Content */}
//           <div className="relative z-10 text-center">
//             <div className="mb-3 inline-block">
//               <div className="bg-white rounded-lg px-3 py-1 text-xs font-semibold text-orange-600 mb-3">
//                 CONTACT US
//               </div>
//             </div>
//             <h3 className="text-2xl font-bold text-white mb-2">
//               Let&apos;s Connect
//             </h3>
//             <p className="text-white text-opacity-90 max-w-xs text-sm">
//               Have questions? We&apos;re here to help.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/forms/contact-form.tsx

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const courses = [
  "Architecture",
  "Foundation Batch",
  "Comprehensive Batch",
  "Test Series Only",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSuccess(true);
  };

  return (
    <div className="grid min-h-[auto] lg:h-120 grid-cols-1 lg:grid-cols-2">
      {" "}
      {/* LEFT SECTION */}
      <div className="flex flex-col justify-center px-6 py-2 sm:px-10 lg:px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h2 className="md:text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Get the syllabus
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Send us a message and we&apos;ll respond quickly.
          </p>
        </motion.div>

        {!success ? (
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onSubmit={handleSubmit}
            className="mt-3 space-y-3"
          >
            <Input
              placeholder="Full Name"
              className="h-10  rounded-2xl border-neutral-200 px-5 text-base shadow-none focus-visible:ring-2 focus-visible:ring-orange-300"
            />

            <Input
              type="email"
              placeholder="Email Address"
              className="h-10 rounded-2xl border-neutral-200 px-5 text-base shadow-none focus-visible:ring-2 focus-visible:ring-orange-300"
            />

            <Input
              type="tel"
              placeholder="Phone Number"
              className="h-10 rounded-2xl border-neutral-200 px-5 text-base shadow-none focus-visible:ring-2 focus-visible:ring-orange-300"
            />

            <select className="h-10 w-full rounded-2xl border border-neutral-200 bg-white px-5  outline-none transition focus:ring-2 focus:ring-orange-300">
              <option className="text-base text-neutral-700">
                Select specialization*{" "}
              </option>

              {courses.map((course) => (
                <option key={course}>{course}</option>
              ))}
            </select>

            <Button
              type="submit"
              disabled={loading}
              className="h-10 w-full rounded-2xl gradient-blue text-base font-semibold text-white shadow-lg shadow-orange-200 transition-all hover:scale-[1.01] hover:opacity-95"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Sending...
                </>
              ) : (
                "Get Syllabus →"
              )}
            </Button>

            <p className="text-center text-sm leading-relaxed text-neutral-400">
              By submitting this form you agree to our Terms & Conditions and
              Privacy Policy.
            </p>
          </motion.form>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 flex flex-col items-center rounded-[28px] border border-emerald-100 bg-emerald-50 px-6 py-14 text-center"
          >
            <CheckCircle2 className="h-16 w-16 text-emerald-500" />

            <h3 className="mt-5 text-2xl font-bold text-neutral-900">
              Syllabus Sent Successfully
            </h3>

            <p className="mt-3 max-w-md text-neutral-500">
              Please check your inbox. We’ve shared all course details with you.
            </p>
          </motion.div>
        )}
      </div>
      <div>
        <Image
          src="/course-curicullum.png"
          alt="Contact Form"
          width={100}
          height={100}
          className=" h-full w-100  object-center   "
        />
      </div>
    </div>
  );
}
