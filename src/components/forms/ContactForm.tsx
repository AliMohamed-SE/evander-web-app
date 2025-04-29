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
  AlertCircle,
} from "lucide-react";
import CustomFormField from "./Fields/CustomFormField";
import EvanderButton from "../shared/EvanderButton";
import { useEffect, useState } from "react";
import CustomCurrencyField from "./Fields/CustomCurrencyField";
import CustomMultiChoiceField from "./Fields/CustomMultiChoiceField";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const currencies = [
  { code: "USD", symbol: "$" },
  { code: "EUR", symbol: "€" },
  { code: "GBP", symbol: "£" },
  { code: "JPY", symbol: "¥" },
  { code: "CAD", symbol: "CA$" },
];

// Create a unique submission ID for each session
const generateSubmissionId = () => {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
};

const ContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [submissionId, setSubmissionId] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownTime, setCooldownTime] = useState(0);

  // Initialize submission ID when component mounts
  useEffect(() => {
    setSubmissionId(generateSubmissionId());

    // Check for previous submissions
    const previousCount = localStorage.getItem("contactFormSubmitCount");
    const lastSubmitTime = localStorage.getItem("contactFormLastSubmit");

    if (previousCount) {
      setSubmitCount(parseInt(previousCount));
    }

    if (lastSubmitTime) {
      const timeSinceLastSubmit = Date.now() - parseInt(lastSubmitTime);
      const cooldownPeriod = 2 * 60 * 1000; // 5 minutes in milliseconds

      if (timeSinceLastSubmit < cooldownPeriod) {
        setCooldownActive(true);
        const remainingTime = Math.ceil(
          (cooldownPeriod - timeSinceLastSubmit) / 1000
        );
        setCooldownTime(remainingTime);

        // Set up the countdown timer
        const timer = setInterval(() => {
          setCooldownTime((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timer);
              setCooldownActive(false);
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);

        return () => clearInterval(timer);
      }
    }
  }, []);

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      country: "",
      phone: "",
      budget: "",
      service: "Software Solution",
      details: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactSchema>) {
    if (currentStep === 1) {
      setCurrentStep(2);
      return;
    }

    // Check if user is in cooldown period
    if (cooldownActive) {
      toast.error(
        `Please wait ${cooldownTime} seconds before submitting again`,
        {
          position: "top-center",
          style: {
            background: "#ef4444",
            color: "white",
          },
        }
      );
      return;
    }

    // Check if max submissions reached
    const maxSubmissions = 3; // Max submissions in a 24-hour period
    if (submitCount >= maxSubmissions) {
      setError("Maximum submission limit reached. Please try again tomorrow.");
      toast.error(
        "Maximum submission limit reached. Please try again tomorrow.",
        {
          position: "top-center",
          style: {
            background: "#ef4444",
            color: "white",
          },
        }
      );
      return;
    }

    try {
      setSubmitting(true);
      setError("");

      // Add anti-abuse token and submission ID to request
      const formData = {
        ...values,
        budget:
          typeof values.budget === "object"
            ? values.budget
            : `${selectedCurrency.symbol}${values.budget}`,
        submissionId,
        submissionTime: Date.now(),
        clientFingerprint: navigator.userAgent, // Basic browser fingerprinting
      };

      console.log(formData);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Submission-ID": submissionId,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      // Update local storage with submission count and time
      const newCount = submitCount + 1;
      setSubmitCount(newCount);
      localStorage.setItem("contactFormSubmitCount", newCount.toString());
      localStorage.setItem("contactFormLastSubmit", Date.now().toString());

      // Set cooldown period
      setCooldownActive(true);
      setCooldownTime(300); // 5 minutes (300 seconds)

      const timer = setInterval(() => {
        setCooldownTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            setCooldownActive(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      // Show success message
      setSubmitted(true);
      toast.success("Your message has been sent successfully!", {
        position: "top-center",
        style: {
          background: "#10b981",
          color: "white",
        },
      });
      form.reset();
      setCurrentStep(1);

      // Generate new submission ID for next attempt
      setSubmissionId(generateSubmissionId());
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Something went wrong. Please try again.");
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

  // Reset submission counts (typically called daily or when needed)
  // const resetSubmissionLimits = () => {
  //   localStorage.removeItem("contactFormSubmitCount");
  //   localStorage.removeItem("contactFormLastSubmit");
  //   setSubmitCount(0);
  //   setCooldownActive(false);
  //   setCooldownTime(0);
  // };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
              <XCircle className="w-5 h-5 mr-2" />
              <span>{error}</span>
            </div>
          )}

          {cooldownActive && (
            <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded mb-6 flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              <span>
                Please wait {cooldownTime} seconds before submitting again.
              </span>
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
                selectedCurrency={selectedCurrency}
                setSelectedCurrency={setSelectedCurrency}
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
                    currentStep === 2
                      ? "bg-primary w-3 h-3"
                      : "bg-white w-2 h-2"
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
                  disabled={submitting || cooldownActive}
                />
              </div>
            )}
          </div>
        </form>
      </Form>
      <Dialog open={submitted} onOpenChange={setSubmitted}>
        <DialogContent className="text-center">
          <DialogHeader>
            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-green-100 rounded-full p-3 mb-4">
                <Check className="text-green-600 w-10 h-10" />
              </div>
              <DialogTitle className="text-3xl md:text-5xl font-semibold mb-3">
                Thank you for reaching out!
              </DialogTitle>
              <p className="mb-6 text-gray-600 text-lg md:text-xl w-[85%] md:w-[70%]">
                We&apos;ve received your message and will get back to you as
                soon as possible. In the meantime, feel free to explore our
                latest projects or connect with us on social media.
              </p>
              <EvanderButton
                label="Explore Our Work"
                link="/portfolio"
                className="bg-primary rounded-lg text-white py-3 px-8 flex justify-center items-center"
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;
