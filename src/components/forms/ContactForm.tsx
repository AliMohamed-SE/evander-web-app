"use client";
import { contactSchema } from "@/lib/formValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import {
  ArrowRight,
  Check,
  Globe,
  Loader2,
  Mail,
  Phone,
  User,
  XCircle,
} from "lucide-react";
import CustomFormField from "./Fields/CustomFormField";
import EvanderButton from "../shared/EvanderButton";
import { useState } from "react";
import CustomCurrencyField from "./Fields/CustomCurrencyField";
import CustomMultiChoiceField from "./Fields/CustomMultiChoiceField";
import { toast } from "sonner";

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      country: "",
      phone: "",
      budget: "",
      service: "Software Dev",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      // Show success message
      setSubmitted(true);
      toast.success("Your message has been sent successfully!");
      form.reset();

      // Optional: Reset to first step after a delay
      setTimeout(() => {
        setSubmitted(false);
        setCurrentStep(1);
      }, 5000);
    } catch (err: any) {
      console.error("Error submitting form:", err);
      setError(err.message || "Something went wrong. Please try again.");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const nextStep = async () => {
    const isValid = await form.trigger(["first_name", "last_name", "email"]);

    if (isValid) {
      setCurrentStep(2);
    }
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="bg-green-100 rounded-full p-3 mb-4">
          <Check className="text-green-600 w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
        <p className="mb-6 text-gray-600 max-w-md">
          Thank you for reaching out. We've received your message and will get
          back to you shortly.
        </p>
        <EvanderButton
          label="Send Another Message"
          size="sm"
          onClick={() => {
            setSubmitted(false);
            form.reset();
          }}
        />
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
            <XCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        )}

        {currentStep === 1 ? (
          <div className="space-y-3 mb-8 mt-8">
            <CustomFormField
              form={form}
              name={"first_name"}
              label="First Name"
              placeholder="First Name"
              icon={<User width={28} />}
              required
            />

            <CustomFormField
              form={form}
              name={"last_name"}
              label="Last Name"
              placeholder="Last Name"
              icon={<User width={28} />}
              required
            />

            <CustomFormField
              form={form}
              name={"email"}
              label="Email"
              placeholder="Email"
              icon={<Mail width={28} />}
              required
            />

            <div className="flex md:flex-col lg:flex-row gap-3 justify-center items-start">
              <div className="md:w-full lg:w-fit">
                <CustomFormField
                  form={form}
                  name={"country"}
                  label="Country"
                  placeholder="Country"
                  icon={<Globe width={28} />}
                />
              </div>
              <div className="flex-1 md:w-full lg:flex-1">
                <CustomFormField
                  form={form}
                  name={"phone"}
                  label="Phone Number"
                  placeholder="Phone Number"
                  icon={<Phone width={28} />}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-3 mb-8 mt-8">
            <CustomCurrencyField
              form={form}
              name="budget"
              label="Budget"
              placeholder="0.00"
              required={true}
            />

            <CustomMultiChoiceField
              form={form}
              name={"service"}
              label="What do you need help with?"
              required
            />

            <CustomFormField
              form={form}
              name={"details"}
              label="More Details"
              placeholder="Type Here..."
            />
          </div>
        )}

        <div className="flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <div className="flex gap-2 justify-center items-center">
              <div className={`w-3 h-3 bg-primary rounded-full`} />
              <div
                className={`${
                  currentStep === 2 ? "bg-primary w-3 h-3" : "bg-white w-2 h-2"
                } rounded-full`}
              />
            </div>
            Step {currentStep} of 2
          </div>
          {currentStep === 1 ? (
            <EvanderButton label="Next Step" size="sm" onClick={nextStep} />
          ) : (
            <div className="flex gap-2">
              <EvanderButton
                variant="ghost"
                label="Go Back"
                size="sm"
                onClick={prevStep}
                className="text-primary hover:bg-transparent"
                disabled={submitting}
              />
              <EvanderButton
                label={submitting ? "Sending..." : "Submit"}
                type="submit"
                size="sm"
                iconAfter={
                  submitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <ArrowRight />
                  )
                }
                disabled={submitting}
              />
            </div>
          )}
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
