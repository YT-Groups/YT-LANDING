import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast } from "sonner";

interface FormData {
  email: string;
  message: string;
}

const Footer: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = {
        email: data.email,
        message: data.message,
        bcc_email: "kobbyawesome@gmail.com,aliodimekitonima@gmail.com",
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <footer id="contact" className="bg-black text-white py-16 md:py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-xl font-light uppercase tracking-wider mb-6">
              Yorke & Toni
            </h2>
            <p className="text-sm opacity-70 max-w-xs mb-6">
              Bridging Innovation, Designing Futures at the intersection of
              technology, strategy, and human ambition.
            </p>
            <p className="text-xs opacity-50">
              &copy; {new Date().getFullYear()} Yorke & Toni. All rights
              reserved.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#companies"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  Companies
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-5">
            <h3 className="text-sm font-medium uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email address"
                  {...register("email", { required: true })}
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full bg-transparent border-b border-white/30 py-2 text-sm focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-2 px-6 border border-white/30 text-sm hover:bg-white hover:text-black transition-colors"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
