"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { LeadFormValues, leadSchema } from "./validatIon";

const courses = [
  "Architecture",
  "Foundation Batch",
  "Comprehensive Batch",
  "Test Series Only",
];

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      course: "",
    },
  });

  // const onSubmit = async (values: LeadFormValues) => {
  //   try {
  //     setLoading(true);

  //     const response = await fetch("/api/lead", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...values,
  //         source: "Landing Page",
  //       }),
  //     });

  //     const data = await response.json();

  //     if (!data.success) {
  //       throw new Error(data.message);
  //     }

  //     setSuccess(true);
  //     reset();
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const onSubmit = async (values: LeadFormValues) => {
    if (loading) return;

    try {
      setLoading(true);

      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          source: "Landing Page",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const data = await response.json();

      console.log(data);

      setSuccess(true);

      reset();
    } catch (error) {
      console.log("FORM ERROR =>", error);
    } finally {
      setLoading(false);
    }
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
            onSubmit={handleSubmit(onSubmit)}
            className="mt-3 space-y-3"
          >
            <Input
              placeholder="Full Name"
              {...register("name")}
              className="h-10  rounded-2xl border-neutral-200 px-5 text-base shadow-none focus-visible:ring-2 focus-visible:ring-orange-300"
            />
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                {...register("email")}
                className="h-10 rounded-2xl border-neutral-200 px-5 text-base shadow-none focus-visible:ring-2 focus-visible:ring-orange-300"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <Input
              type="tel"
              placeholder="Phone Number"
              {...register("phone")}
              className="h-10 rounded-2xl border-neutral-200 px-5 text-base shadow-none focus-visible:ring-2 focus-visible:ring-orange-300"
            />

            <div>
              <select
                {...register("course")}
                className="h-10 w-full rounded-2xl border border-neutral-200 bg-white px-5  outline-none transition focus:ring-2 focus:ring-orange-300"
              >
                <option className="text-base text-neutral-700">
                  Select specialization*{" "}
                </option>

                {courses.map((course) => (
                  <option key={course}>{course}</option>
                ))}
              </select>
              {errors.course && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.course.message}
                </p>
              )}
            </div>

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
