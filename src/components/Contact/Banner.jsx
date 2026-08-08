import React, { useEffect, useRef, useState } from "react";
import DesktopBackground from "../../assets/Contact/Banner/Desktop Background.webp";
import MobileBackground from "../../assets/Contact/Banner/Mobile Background.webp";

function Banner() {
  const [opacity, setOpacity] = useState(0);
  const bannerRef = useRef(null);
  const hasFadedIn = useRef(false);

  // Form State (Caveman Mode)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFadedIn.current) {
          setOpacity(1);
          hasFadedIn.current = true;
        }
      },
      { threshold: 0.3 },
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <section className="contact-banner" ref={bannerRef}>
      <img
        src={DesktopBackground}
        alt="Designing Banner Background"
        style={{ opacity }}
        className="contact-banner-background desktop"
      />
      <img
        src={MobileBackground}
        alt="Designing Banner Background"
        style={{ opacity }}
        className="contact-banner-background mobile"
      />
      <div className="contact-banner-container">
        <div className="contact-banner-heading">
          <h1>Get In Touch</h1>
          <p>Talk to us and we will help you reach out as soon as possible.</p>
        </div>
        <div className="contact-banner-div">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.521833492831!2d77.5398564740489!3d12.874131217009822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae41001394a64d%3A0x89ad540e86937622!2sKoiostudio%20-%20Digital%20Solutions%20Agency!5e0!3m2!1sen!2sin!4v1763797186861!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form>
            <div className="inputs-container">
              <div className="input-container">
                <label
                  htmlFor="first-name"
                  style={{
                    color: formData.firstName
                      ? "var(--Grey-text-Primary, #979797)"
                      : "var(--White-text, #fff)",
                  }}
                >
                  First name <span>*</span>
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="input-container">
                <label
                  htmlFor="last-name"
                  style={{
                    color: formData.lastName
                      ? "var(--Grey-text-Primary, #979797)"
                      : "var(--White-text, #fff)",
                  }}
                >
                  Last name <span>*</span>
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="input-container">
              <label
                htmlFor="email"
                style={{
                  color: formData.email
                    ? "var(--Grey-text-Primary, #979797)"
                    : "var(--White-text, #fff)",
                }}
              >
                Email address <span>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <label
                htmlFor="phone"
                style={{
                  color: formData.phone
                    ? "var(--Grey-text-Primary, #979797)"
                    : "var(--White-text, #fff)",
                }}
              >
                Mobile number <span>*</span>
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 99999 99999"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-container">
              <label
                htmlFor="message"
                style={{
                  color: formData.message
                    ? "var(--Grey-text-Primary, #979797)"
                    : "var(--White-text, #fff)",
                }}
              >
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type here"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="primary-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Banner;
