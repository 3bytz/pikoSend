import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  User,
  Building,
  Mail,
  Shield,
} from "lucide-react";
import {
  waitingListSchema,
  WaitingListFormInput,
} from "../../utils/validation";
import { useWaitingList } from "../../hooks/useWaitingList";
import { TurnstileWidget, TurnstileWidgetRef } from "../TurnstileWidget";
import toast from "react-hot-toast";

const steps = [
  { id: 1, title: "Basic Info", icon: User },
  { id: 2, title: "Usage Details", icon: Building },
  { id: 3, title: "Confirmation", icon: CheckCircle },
];

const Step1BasicInfo: React.FC<{
  register: any;
  errors: any;
  watch: any;
  setValue: any;
}> = ({ register, errors, watch, setValue }) => {
  const userType = watch("userType");

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <label className="block text-sm font-medium text-piko-black mb-4">
          Are you signing up as: *
        </label>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              value: "personal",
              label: "Personal User",
              desc: "For individual use",
            },
            { value: "business", label: "Business", desc: "For company use" },
          ].map((type) => (
            <button
              key={type.value}
              type="button"
              onClick={() =>
                setValue("userType", type.value, { shouldValidate: true })
              }
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                userType === type.value
                  ? "border-piko-purple bg-piko-purple/5 shadow-lg scale-[1.02]"
                  : "border-piko-soft-grey hover:border-piko-purple/50 hover:bg-piko-purple/2"
              }`}
            >
              <div className="font-semibold text-piko-black">{type.label}</div>
              <div className="text-xs text-piko-medium-grey mt-1">
                {type.desc}
              </div>
            </button>
          ))}
        </div>
        <input type="hidden" {...register("userType")} />
        {errors.userType && (
          <p className="mt-2 text-sm text-red-600">{errors.userType.message}</p>
        )}
      </div>

      {userType === "personal" && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-piko-black mb-2">
                First Name *
              </label>
              <input
                {...register("firstName")}
                type="text"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.firstName ? "border-red-500" : "border-piko-soft-grey"
                } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
                placeholder="John"
              />
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-piko-black mb-2">
                Last Name *
              </label>
              <input
                {...register("lastName")}
                type="text"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.lastName ? "border-red-500" : "border-piko-soft-grey"
                } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
                placeholder="Doe"
              />
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {userType === "business" && (
        <>
          <div>
            <label className="block text-sm font-medium text-piko-black mb-2">
              Business Name *
            </label>
            <input
              {...register("businessName")}
              type="text"
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.businessName ? "border-red-500" : "border-piko-soft-grey"
              } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
              placeholder="Your Company Ltd"
            />
            {errors.businessName && (
              <p className="mt-1 text-sm text-red-600">
                {errors.businessName.message}
              </p>
            )}
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium text-piko-black mb-2">
          Phone Number *
          <span className="text-xs text-piko-medium-grey ml-2">
            (We'll send SMS confirmation)
          </span>
        </label>
        <div className="relative">
          <PhoneInput
            international
            defaultCountry="KE"
            value={watch("phone")}
            onChange={(value) =>
              setValue("phone", value || "", { shouldValidate: true })
            }
            className={`!pl-4 !pr-4 !py-3 !rounded-xl !border ${
              errors.phone ? "!border-red-500" : "!border-grey"
            } focus:!outline-none focus:!ring-2 focus:!ring-piko-purple/30 focus:!border-piko-purple !transition`}
            placeholder="+254 712 345 678"
          />
        </div>
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
        )}
      </div>

      {userType === "personal" && (
        <div>
          <label className="block text-sm font-medium text-piko-black mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-piko-medium-grey w-5 h-5" />
            <input
              {...register("personalEmail")}
              type="email"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                errors.personalEmail ? "border-red-500" : "border-grey"
              } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
              placeholder="john@example.com"
              required
            />
          </div>
          {errors.personalEmail && (
            <p className="mt-1 text-sm text-red-600">
              {errors.personalEmail.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

const Step2UsageDetails: React.FC<{
  register: any;
  errors: any;
  watch: any;
  setValue: any;
}> = ({ register, errors, watch, setValue }) => {
  const userType = watch("userType");

  return (
    <div className="space-y-6 animate-fade-in">
      {userType === "business" && (
        <>
          <div>
            <label className="block text-sm font-medium text-piko-black mb-2">
              Business Email *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-piko-medium-grey w-5 h-5" />
              <input
                {...register("businessEmail")}
                type="email"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.businessEmail ? "border-red-500" : "border-grey"
                } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
                placeholder="info@company.com"
              />
            </div>
            {errors.businessEmail && (
              <p className="mt-1 text-sm text-red-600">
                {errors.businessEmail.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-piko-black mb-2">
              Physical Address / Location *
            </label>
            <textarea
              {...register("physicalAddress")}
              rows={3}
              className={`w-full px-4 py-3 rounded-xl border ${
                errors.physicalAddress ? "border-red-500" : "border-grey"
              } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition resize-none`}
              placeholder="Street, Building, City, Country"
            />
            {errors.physicalAddress && (
              <p className="mt-1 text-sm text-red-600">
                {errors.physicalAddress.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-piko-black mb-2">
                Contact First Name *
              </label>
              <input
                {...register("contactFirstName")}
                type="text"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.contactFirstName ? "border-red-500" : "border-grey"
                } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
                placeholder="John"
              />
              {errors.contactFirstName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactFirstName.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-piko-black mb-2">
                Contact Last Name *
              </label>
              <input
                {...register("contactLastName")}
                type="text"
                className={`w-full px-4 py-3 rounded-xl border ${
                  errors.contactLastName ? "border-red-500" : "border-grey"
                } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
                placeholder="Doe"
              />
              {errors.contactLastName && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.contactLastName.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-piko-black mb-2">
              Contact Phone Number
            </label>
            <div className="relative">
              <PhoneInput
                international
                defaultCountry="KE"
                value={watch("contactPhone")}
                onChange={(value) =>
                  setValue("contactPhone", value || "", {
                    shouldValidate: true,
                  })
                }
                className={`!pl-4 !pr-4 !py-3 !rounded-xl !border ${
                  errors.contactPhone ? "!border-red-500" : "!border-grey"
                } focus:!outline-none focus:!ring-2 focus:!ring-piko-purple/30 focus:!border-piko-purple !transition`}
                placeholder="+254 712 345 678"
              />
            </div>
            {errors.contactPhone && (
              <p className="mt-1 text-sm text-red-600">
                {errors.contactPhone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-piko-black mb-2">
              Contact Email (Optional)
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-piko-medium-grey w-5 h-5" />
              <input
                {...register("contactEmail")}
                type="email"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${
                  errors.contactEmail ? "border-red-500" : "border-grey"
                } focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition`}
                placeholder="contact@company.com"
              />
            </div>
            {errors.contactEmail && (
              <p className="mt-1 text-sm text-red-600">
                {errors.contactEmail.message}
              </p>
            )}
          </div>
        </>
      )}

      <div>
        <label className="block text-sm font-medium text-piko-black mb-2">
          How did you hear about us? *
        </label>
        <select
          {...register("source")}
          className="w-full px-4 py-3 rounded-xl border border-grey focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition bg-white"
          required
        >
          <option value="">Select an option</option>
          <option value="landing_page">Landing Page</option>
          <option value="referral">Referral</option>
          <option value="social_media">Social Media</option>
          <option value="other">Other</option>
        </select>
        {errors.source && (
          <p className="mt-1 text-sm text-red-600">{errors.source.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-piko-black mb-2">
          Referral Code (Optional)
        </label>
        <input
          {...register("referralCode")}
          type="text"
          className="w-full px-4 py-3 rounded-xl border border-grey focus:outline-none focus:ring-2 focus:ring-piko-purple/30 focus:border-piko-purple transition"
          placeholder="Enter if you were referred"
        />
      </div>
    </div>
  );
};

const WaitingListForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [honeypot, setHoneypot] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef<TurnstileWidgetRef>(null);
  const {
    submitForm,
    error,
    success,
    submissionId,
    resetForm,
    canSubmit,
  } = useWaitingList();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<WaitingListFormInput | any>({
    resolver: zodResolver(waitingListSchema),
    mode: "onChange",
    defaultValues: {
      userType: "personal",
      country: "KE",
       source: "landing_page",
    },
  });

  const watchFields = watch([
  "userType",
  "firstName",
  "lastName",
  "phone",
  "personalEmail",
  "businessName",
  "businessEmail",
  "physicalAddress",
  "contactFirstName",
  "contactLastName",
  "contactPhone",
  "contactEmail",
  "referralCode",
  "source", 
  "country"
]);

  const handleTurnstileVerify = (token: string) => {
    if (turnstileToken) return;
    setTurnstileToken(token);
  };

  const handleTurnstileError = (error: any) => {
    console.error("Turnstile error:", error);
    
    let errorMessage = "Failed to verify. Please try again.";
    
    if (error?.code === '110200') {
      errorMessage = "Domain verification failed. Please ensure this domain is registered in Cloudflare Turnstile.";
      console.error("Turnstile domain error: Make sure to add this domain to your Cloudflare Turnstile allowed domains list.");
    }
    
    toast.error(errorMessage);
    setTurnstileToken(null);
    
    if (error?.code !== '110200' && turnstileRef.current) {
      turnstileRef.current.reset();
    }
  };

  const handleTurnstileExpire = () => {
    toast.error("Verification expired. Please try again.");
    setTurnstileToken(null);
    if (turnstileRef.current) {
      turnstileRef.current.reset();
    }
  };

  useEffect(() => {
    if (error) {
      setTurnstileToken(null);
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
    }
  }, [error]);

  useEffect(() => {
    if (currentStep !== 3) {
      setTurnstileToken(null);
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
    }
  }, [currentStep]);

  const nextStep = async () => {
    let isValid = false;
    if (currentStep === 1) {
      const userType = watchFields[0];
      if (userType === "personal") {
        isValid = await trigger(["firstName", "lastName", "phone", "personalEmail"]);
      } else {
        isValid = await trigger(["businessName", "phone", "businessEmail"]);
      }
    } else if (currentStep === 2) {
      isValid = await trigger(["userType", "source"]);
    }

    if (isValid && currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: WaitingListFormInput) => {
    if (!canSubmit) {
      alert("Please wait 5 minutes before submitting again.");
      return;
    }

    if (!turnstileToken) {
      toast.error("Please complete the verification");
      return;
    }

    if (honeypot) {
      toast.error("Submission failed. Please try again.");
      return;
    }

    const sitekey = import.meta.env.VITE_TURNSTILE_SITE_KEY;
    if (!sitekey || sitekey.trim() === '') {
      toast.error("Verification system is not configured. Please contact support.");
      console.error("Turnstile sitekey is missing in environment variables");
      return;
    }

    try {
      setIsSubmitting(true);
      
      const payload = {
        ...data,
        source: data.source || "landing_page",
        turnstileToken: turnstileToken,
        timestamp: Date.now(),
      };
      
      await submitForm(payload, turnstileToken);
      toast.success("Successfully joined waiting list!");
    } catch (error: any) {
      console.error("Submission error:", error);
      
      let errorMessage = error.message || "Something went wrong. Please try again later.";
      
      if (errorMessage.includes('Turnstile verification is required') || 
          errorMessage.includes('invalid turnstile token')) {
        errorMessage = "Verification failed. Please complete the CAPTCHA again.";
      }
      
      toast.error(errorMessage);
      setTurnstileToken(null);
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (success) {
      setTurnstileToken(null);
      if (turnstileRef.current) {
        turnstileRef.current.reset();
      }
    }
  }, [success]);

  const Step3Confirmation: React.FC<{
    watchFields: any[];
    isSubmitting: boolean;
    turnstileToken: string | null;
  }> = ({ watchFields, isSubmitting, turnstileToken }) => {
    const isBusiness = watchFields[0] === "business";

    return (
      <div className="animate-fade-in">
        <div className="bg-piko-soft-grey/50 rounded-2xl p-6 mb-6">
          <h3 className="font-semibold text-piko-black mb-4">
            Please review your information:
          </h3>

          <div className="space-y-4">
            {isBusiness ? (
              <>
                <div className="flex justify-between border-b border-grey/50 pb-2">
                  <span className="text-piko-medium-grey">Business Name:</span>
                  <span className="font-medium text-piko-black text-right">
                    {watchFields[5]}
                  </span>
                </div>
                <div className="flex justify-between border-b border-grey/50 pb-2">
                  <span className="text-piko-medium-grey">Business Email:</span>
                  <span className="font-medium text-piko-black text-right">
                    {watchFields[6]}
                  </span>
                </div>
                <div className="flex justify-between border-b border-grey/50 pb-2">
                  <span className="text-piko-medium-grey">Contact Person:</span>
                  <span className="font-medium text-piko-black text-right">
                    {watchFields[8]} {watchFields[9]}
                  </span>
                </div>
                <div className="flex justify-between border-b border-grey/50 pb-2">
                  <span className="text-piko-medium-grey">Contact Phone:</span>
                  <span className="font-medium text-piko-black text-right">
                    {watchFields[10] || watchFields[3]}
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-between border-b border-grey/50 pb-2">
                  <span className="text-piko-medium-grey">Name:</span>
                  <span className="font-medium text-piko-black text-right">
                    {watchFields[1]} {watchFields[2]}
                  </span>
                </div>
                <div className="flex justify-between border-b border-grey/50 pb-2">
                  <span className="text-piko-medium-grey">Phone:</span>
                  <span className="font-medium text-piko-black text-right">
                    {watchFields[3]}
                  </span>
                </div>
                <div className="flex justify-between border-b border-grey/50 pb-2">
                  <span className="text-piko-medium-grey">Email:</span>
                  <span className="font-medium text-piko-black text-right">
                    {watchFields[4]}
                  </span>
                </div>
              </>
            )}

            <div className="flex justify-between border-b border-grey/50 pb-2">
              <span className="text-piko-medium-grey">Account Type:</span>
              <span className="font-medium text-piko-black text-right capitalize">
                {watchFields[0]}
              </span>
            </div>

            <div className="flex justify-between border-b border-grey/50 pb-2">
              <span className="text-piko-medium-grey">How you heard about us:</span>
              <span className="font-medium text-piko-black text-right capitalize">
                {watchFields[13] === "landing_page" ? "Landing Page" :
                 watchFields[13] === "social_media" ? "Social Media" :
                 watchFields[13] === "referral" ? "Referral" : "Other"}
              </span>
            </div>

            {watchFields[12] && (
              <div className="flex justify-between border-b border-grey/50 pb-2">
                <span className="text-piko-medium-grey">Referral Code:</span>
                <span className="font-medium text-piko-black text-right">
                  {watchFields[12]}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label className="flex items-start">
            <input
              type="checkbox"
              required
              className="w-4 h-4 text-piko-purple rounded border-grey focus:ring-piko-purple focus:ring-offset-0 mt-1"
            />
            <span className="ml-3 text-sm text-piko-black">
              I agree to receive SMS updates about PikoSend launch.
            </span>
          </label>
        </div>

        <div className="mb-6 flex justify-center">
          {currentStep === 3 && (
            <TurnstileWidget
              ref={turnstileRef}
              sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY || ""}
              onVerify={handleTurnstileVerify}
              onError={handleTurnstileError}
              onExpire={handleTurnstileExpire}
            />
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
          className="w-full px-8 py-3 bg-gradient-to-r from-piko-purple to-piko-violet text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Submitting...
            </span>
          ) : (
            "Join Waiting List"
          )}
        </button>
      </div>
    );
  };

if (success) {
  return (
    <div className="bg-white rounded-2xl p-8 text-center animate-fade-in border border-piko-soft-grey shadow-lg">
    
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-r from-piko-purple to-piko-violet blur-lg opacity-30 rounded-full w-32 h-32 mx-auto" />
        <div className="relative w-20 h-20 mx-auto bg-gradient-to-r from-piko-purple to-piko-violet rounded-full flex items-center justify-center shadow-md">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
      </div>

      <h3 className="text-2xl font-bold text-piko-black mb-3">
        Successfully Joined! 🎉
      </h3>

      {/* Description */}
      <p className="text-piko-medium-grey mb-6">
        You're now on the PikoSend waiting list. We'll contact you at:
      </p>
      <div className="mb-6 space-y-3">
        <div className="inline-flex items-center gap-2 bg-piko-purple/5 px-4 py-2 rounded-full">
          <span className="text-sm text-piko-medium-grey">Phone:</span>
          <span className="font-semibold text-piko-purple">{watch("phone")}</span>
        </div>
        {watch("userType") === "business" && watch("businessEmail") && (
          <div className="inline-flex items-center gap-2 bg-piko-violet/5 px-4 py-2 rounded-full">
            <span className="text-sm text-piko-medium-grey">Email:</span>
            <span className="font-semibold text-piko-violet">{watch("businessEmail")}</span>
          </div>
        )}
        {watch("userType") === "personal" && watch("personalEmail") && (
          <div className="inline-flex items-center gap-2 bg-piko-violet/5 px-4 py-2 rounded-full">
            <span className="text-sm text-piko-medium-grey">Email:</span>
            <span className="font-semibold text-piko-violet">{watch("personalEmail")}</span>
          </div>
        )}
      </div>

  
      <div className="mb-6">
        <div className="text-sm text-piko-medium-grey mb-2">
          Reference Number:
        </div>
        <div className="font-mono text-sm text-piko-purple bg-piko-purple/10 px-4 py-2 rounded-lg border border-piko-purple/20">
          {submissionId || "PS-" + Date.now().toString().slice(-8)}
        </div>
      </div>

      {/* CTA Button */}
      <button
        onClick={() => {
          resetForm();
          setCurrentStep(1);
          setTurnstileToken(null);
        }}
        className="w-full px-6 py-3 bg-gradient-to-r from-piko-purple to-piko-violet text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
      >
        Register Another Account
      </button>

      {/* Note */}
      <p className="text-xs text-piko-medium-grey mt-4">
        You'll receive early access offers and product updates via SMS/email
      </p>
    </div>
  );
}

  return (
    <div className="relative">
      <div style={{ position: "absolute", left: "-9999px" }}>
        <input
          type="text"
          name="confirm_email"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="flex justify-between items-center mb-8 relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-piko-soft-grey -translate-y-1/2 z-0"></div>

        {steps.map((step, index) => {
          const StepIcon = step.icon;
          const isCompleted = currentStep > step.id;
          const isCurrent = currentStep === step.id;

          return (
            <div
              key={step.id || index}
              className="flex flex-col items-center relative z-10"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                  isCompleted
                    ? "bg-gradient-to-r from-piko-purple to-piko-violet text-white shadow-lg"
                    : isCurrent
                      ? "bg-white border-2 border-piko-purple text-piko-purple shadow-md"
                      : "bg-white border-2 border-grey text-piko-medium-grey"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <StepIcon className="w-6 h-6" />
                )}
              </div>
              <span
                className={`text-xs font-medium ${
                  isCompleted || isCurrent
                    ? "text-piko-purple"
                    : "text-piko-medium-grey"
                }`}
              >
                {step.title}
              </span>
            </div>
          );
        })}
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
          <div className="flex items-center text-red-700">
            <div className="w-5 h-5 mr-2">⚠️</div>
            <div className="text-sm">{error}</div>
          </div>
          {error.includes("wait") && (
            <div className="mt-2 text-xs text-red-600">
              This helps prevent spam. Thank you for your patience.
            </div>
          )}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {currentStep === 1 && (
          <Step1BasicInfo
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        )}

        {currentStep === 2 && (
          <Step2UsageDetails
            register={register}
            errors={errors}
            watch={watch}
            setValue={setValue}
          />
        )}

        {currentStep === 3 && (
          <Step3Confirmation
            watchFields={watchFields}
            isSubmitting={isSubmitting}
            turnstileToken={turnstileToken}
          />
        )}

        {currentStep < 3 && (
          <div className="flex justify-between pt-6 border-t border-grey">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                currentStep === 1
                  ? "text-piko-medium-grey cursor-not-allowed"
                  : "text-piko-purple hover:bg-piko-purple/5"
              }`}
            >
              <ChevronLeft className="inline-block w-4 h-4 mr-1" />
              Back
            </button>

            <button
              type="button"
              onClick={nextStep}
              className="px-8 py-3 bg-gradient-to-r from-piko-purple to-piko-violet text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Continue
              <ChevronRight className="inline-block w-4 h-4 ml-1" />
            </button>
          </div>
        )}

        <div className="text-center pt-6 border-t border-piko-soft-grey">
          <div className="inline-flex items-center gap-2 text-xs text-piko-medium-grey">
            <Shield className="w-3 h-3" />
            <span>Protected by Cloudflare Turnstile • Your data is secure</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export const WaitingListFormWithProvider: React.FC = () => (
  <WaitingListForm />
);

export default WaitingListFormWithProvider;