import { useInView } from "@/hooks/useInView";
import { useState } from "react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const socialLinks = [
  {
    icon: "✉",
    label: "Email",
    value: "aditijadhav0308@gmail.com",
    href: "mailto:aditijadhav0308@gmail.com",
    hint: "Update with your actual email",
  },
  {
    icon: "in",
    label: "LinkedIn",
    value: "linkedin.com/in/aditi-jadhav-664b5339b",
    href: "https://www.linkedin.com/in/aditi-jadhav-664b5339b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    hint: "Add your LinkedIn profile URL",
  },
  {
    icon: "</>",
    label: "GitHub",
    value: "github.com/aditi-jadhav",
    href: "https://github.com",
    hint: "Add your GitHub profile URL",
  },
];

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: linksRef, inView: linksInView } = useInView();
  const { ref: formRef, inView: formInView } = useInView();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`,
    );
    window.location.href = `mailto:aditijadhav0308@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`mb-14 transition-all duration-700 ease-out ${
            headingInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-section-label mb-4">05 / Contact</p>
          <h2 className="text-section-heading">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            I'm open to conversations about opportunities, collaborations, or
            just connecting with others in tech.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social links */}
          <div ref={linksRef}>
            <h3 className="text-sm font-semibold font-display text-muted-foreground tracking-wider uppercase mb-6">
              Connect
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  data-ocid={`contact-${link.label.toLowerCase()}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className={`flex items-center gap-4 p-4 border border-border bg-background hover:border-accent group transition-all duration-500 ease-out ${
                    linksInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  }`}
                >
                  <div className="w-10 h-10 border border-border group-hover:border-accent group-hover:bg-accent/5 flex items-center justify-center text-muted-foreground group-hover:text-accent font-mono text-xs font-bold transition-all duration-200 flex-shrink-0">
                    {link.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-section-label mb-0.5">
                      {link.label}
                    </p>
                    <p className="font-display text-sm text-foreground group-hover:text-accent transition-colors duration-200 truncate">
                      {link.value}
                    </p>
                  </div>
                  <span className="ml-auto text-muted-foreground group-hover:text-accent transition-colors duration-200 text-xs">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div
            ref={formRef}
            className={`transition-all duration-700 ease-out delay-200 ${
              formInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-sm font-semibold font-display text-muted-foreground tracking-wider uppercase mb-6">
              Send a Message
            </h3>
            {submitted ? (
              <div
                data-ocid="contact-success"
                className="border border-accent bg-accent/5 p-8 text-center"
              >
                <p className="text-accent font-display font-semibold text-lg">
                  Message prepared!
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Your mail client should open momentarily.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    data-ocid="contact-name"
                    placeholder="Your name"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200 font-body"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    data-ocid="contact-email"
                    placeholder="your@email.com"
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200 font-body"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold font-display text-muted-foreground uppercase tracking-wider mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    data-ocid="contact-message"
                    placeholder="Tell me about your opportunity or just say hello..."
                    className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors duration-200 font-body resize-none"
                  />
                </div>
                <button
                  type="submit"
                  data-ocid="contact-submit"
                  className="w-full py-4 bg-accent text-accent-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity duration-200"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
