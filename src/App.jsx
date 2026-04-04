import "./App.css"
import { useState } from "react"

export default function SummitSeniorCareLandingPage() {
  const services = [
    {
      title: "Senior Daily Care",
      text: "Compassionate day-to-day support for older adults, including companionship, conversation, routine assistance, and help staying comfortable at home.",
      icon: "💬",
    },
    {
      title: "Light Housekeeping",
      text: "Light cleaning and home support when needed to help maintain a safe, pleasant, and organized living space for the client.",
      icon: "🧹",
    },
    {
      title: "Simple Meal Preparation",
      text: "Preparation of basic and simple meals that fit the client’s daily routine and help support comfort, nourishment, and consistency.",
      icon: "🍲",
    },
    {
      title: "Medication Reminders",
      text: "Friendly reminders to help clients stay on schedule with prescribed medications as directed by the family or healthcare provider.",
      icon: "⏰",
    },
  ]

  const highlights = [
    "Denver-based, relationship-centered support",
    "Bilingual service in English and Spanish",
    "Care tailored to each family’s routine",
    "Compassionate support across the Denver metro area",
  ]

  const steps = [
    {
      title: "1. Schedule a Consultation",
      text: "Choose an available day and time to speak with one of our representatives.",
    },
    {
      title: "2. Personalized Assessment",
      text: "We learn about your loved one, your goals, and the kind of support needed at home.",
    },
    {
      title: "3. Start Care with Confidence",
      text: "We guide you through the next steps, answer questions, and help finalize the service agreement.",
    },
  ]

  const testimonials = [
    {
      quote:
        "They treated my mother with patience, warmth, and real respect. We finally felt supported.",
      name: "Family Client",
    },
    {
      quote:
        "Kind, dependable, and respectful. Our family felt supported from the beginning.",
      name: "Daughter of Client",
    },
    {
      quote:
        "The process felt personal, caring, and easy to understand from the start.",
      name: "Local Family",
    },
  ]

  const availability = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 5:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "By request" },
  ]

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ]

  const bookedSlots = {
    "2026-04-05": ["10:00 AM", "1:00 PM"],
    "2026-04-06": ["9:00 AM", "3:00 PM"],
  }

  const [appointmentForm, setAppointmentForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  const handleAppointmentChange = (e) => {
    const { name, value } = e.target
    setAppointmentForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleContactChange = (e) => {
    const { name, value } = e.target
    setContactForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="site">
      <section className="hero">
        <div className="container">
          <header className="topbar">
            <div className="brand">
              <div className="brand-badge" aria-label="Heart and mountain logo">
                <svg viewBox="0 0 64 64" className="brand-logo" role="img">
                  <path
                    d="M31.5 54c-.8 0-1.6-.3-2.2-.8l-15.3-13C8 34.8 6 31.5 6 27.5 6 20.6 11 16 17.1 16c4.2 0 7.2 2 9.2 4.6 2-2.6 5-4.6 9.2-4.6C41.6 16 47 20.5 47 27.5c0 4-2 7.3-8 12.7l-5.3 4.6-.2.2-2 1.8z"
                    fill="#7fd9de"
                  />
                  <path
                    d="M18 40.5 27.8 29l6 8.2 4.8-5.5L46 40.5H18z"
                    fill="#ffffff"
                  />
                </svg>
              </div>

              <div>
                <div className="brand-title">Summit Senior Care</div>
                <div className="brand-subtitle">
                  Trusted non-medical senior support in Denver
                </div>
              </div>
            </div>

            <a href="#availability" className="btn btn-dark">
              Book a Consultation
            </a>
          </header>

          <div className="hero-grid">
            <div>
              <div className="pill">
                Dependable support for seniors and families in Denver
              </div>

              <h1 className="hero-title">
                Reliable non-medical senior care that helps older adults live safely and comfortably.
              </h1>

              <p className="hero-text">
                Summit Senior Care provides compassionate non-medical senior support focused on dignity,
                comfort, and peace of mind. We help older adults with daily routines, light household
                support, simple meals, and medication reminders while giving families confidence and relief.
              </p>

              <div className="hero-actions">
                <a href="#availability" className="btn btn-primary">
                  Schedule a Free Consultation
                </a>
                <a href="#services" className="btn btn-light">
                  View Services
                </a>
              </div>

              <div className="highlight-grid">
                {highlights.map((item) => (
                  <div key={item} className="card small-card">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80"
                alt="Senior care support"
                className="hero-image"
              />
              <div className="floating-note">
                <strong>Bilingual care support</strong>
                <p>
                  We serve families in English and Spanish to make communication easier and more personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Services</p>
            <h2>Thoughtful support for everyday life</h2>
            <p>
              Our care is designed to reduce stress for families and improve quality of life for seniors.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div key={service.title} className="card service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container two-col">
          <div>
            <p className="eyebrow light">Why families choose us</p>
            <h2>Reliable care that feels personal, calm, and professional.</h2>
            <p>
              We know inviting care into the home is a big decision. That is why we focus on trust,
              consistency, bilingual communication, and a respectful family-centered approach from day one.
            </p>
          </div>

          <div className="step-list">
            {steps.map((step) => (
              <div key={step.title} className="step-card">
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Bilingual support</p>
            <h2>Serving families in English and Spanish</h2>
            <p>
              We understand that clear communication matters. Our team can assist families in both English
              and Spanish throughout the consultation, scheduling, and onboarding process.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head center">
            <p className="eyebrow">Testimonials</p>
            <h2>Families deserve peace of mind</h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <div key={item.quote} className="card testimonial-card">
                <p className="quote">“{item.quote}”</p>
                <p className="testimonial-name">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="availability">
        <div className="container availability-grid">
          <div className="card availability-card">
            <p className="eyebrow">Availability</p>
            <h2>Consultation Hours</h2>
            <p>
              Please use the appointment form on the right to request your preferred date and time.
            </p>

            <div className="availability-list">
              {availability.map((item) => (
                <div key={item.day} className="availability-row">
                  <span>{item.day}</span>
                  <span>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card form-card">
            <p className="eyebrow">Request an appointment</p>
            <h3>Select your date and time</h3>

            <form
              action="https://formspree.io/f/xykbpndy"
              method="POST"
              className="form-grid"
            >
              <input
                name="name"
                placeholder="Your name"
                value={appointmentForm.name}
                onChange={handleAppointmentChange}
                required
              />
              <input
                name="phone"
                placeholder="Best phone number to reach you"
                value={appointmentForm.phone}
                onChange={handleAppointmentChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={appointmentForm.email}
                onChange={handleAppointmentChange}
                required
              />

              <input
                type="date"
                name="preferredDate"
                value={selectedDate}
                onChange={(e) => {
                  setSelectedDate(e.target.value)
                  setSelectedTime("")
                }}
                required
              />

              <div className="time-grid">
                {timeSlots.map((time) => {
                  const isBooked = bookedSlots[selectedDate]?.includes(time)

                  const today = new Date().toISOString().split("T")[0]
                  let isPast = false

                  if (selectedDate === today) {
                    const now = new Date()
                    const [hour, modifier] = time.split(" ")
                    let [h, m] = hour.split(":").map(Number)

                    if (modifier === "PM" && h !== 12) h += 12
                    if (modifier === "AM" && h === 12) h = 0

                    const slotTime = new Date()
                    slotTime.setHours(h, m, 0, 0)

                    const bufferHours = 3
                    const diffInMs = slotTime - now
                    const diffInHours = diffInMs / (1000 * 60 * 60)

                    isPast = diffInHours < bufferHours
                  }

                  return (
                    <button
                      type="button"
                      key={time}
                      disabled={isBooked || isPast}
                      className={`time-slot ${selectedTime === time ? "selected" : ""} ${isBooked || isPast ? "booked" : ""}`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  )
                })}
              </div>

              <input type="hidden" name="preferredTime" value={selectedTime} />

              <textarea
                name="message"
                placeholder="Tell us about your loved one and the kind of support needed"
                value={appointmentForm.message}
                onChange={handleAppointmentChange}
                required
              />

              <button
                type="submit"
                className="btn btn-dark"
                disabled={!selectedDate || !selectedTime}
              >
                Request Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="container contact-grid">
          <div className="contact-copy">
            <p className="eyebrow light">Contact</p>
            <h2>Let’s create the right care plan for your family.</h2>
            <p>
              Reach out to learn how Summit Senior Care can support your loved one at home. We proudly
              serve families in Denver and the metro area in both English and Spanish.
            </p>

            <div className="contact-lines">
              <p>📞 We contact families directly after receiving an inquiry</p>
              <p>✉️ summitdenvercare@outlook.com</p>
              <p>📍 Serving Denver and the metro area including Centennial, Lakewood, Aurora, and Littleton</p>
            </div>
          </div>

          <div className="contact-form-wrap">
            <form
              action="https://formspree.io/f/xykbpndy"
              method="POST"
              className="form-grid"
            >
              <input
                name="name"
                placeholder="Your name"
                value={contactForm.name}
                onChange={handleContactChange}
                required
              />
              <input
                name="phone"
                placeholder="Best phone number to reach you"
                value={contactForm.phone}
                onChange={handleContactChange}
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email address"
                value={contactForm.email}
                onChange={handleContactChange}
                required
              />
              <textarea
                name="message"
                placeholder="Tell us about your loved one and the kind of support needed"
                value={contactForm.message}
                onChange={handleContactChange}
                required
              />
              <button type="submit" className="btn btn-dark">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}