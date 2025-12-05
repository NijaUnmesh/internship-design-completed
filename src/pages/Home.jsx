import React, { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

import { FiLinkedin } from "react-icons/fi";
import Footer from '../components/Footer';
import { Link } from 'react-scroll';



const team = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    desc: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiibOUzLoR-GPJ3uIccHaL00zkovuZ0RW92A&s",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    desc: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNzB2AJQORcftPuhR1lasdN6DcA__oaJcBA&s",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    desc: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    img: "data:image/jpeg;base64,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",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    desc: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjLYgcKzDsboNJIvFPQNRXvG3hXcjVT7qSLw&s",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    desc: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGG4BPxfb0sylGED2WvZComnlfmv8j_Sa37Q&s",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    desc: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS32tFS8jlNFc28CTCkqzcaHXiFzMpxnwUldg&s"
  },
];

const testimonials = [
  {
    text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
    name: "John Smith",
    role: "Marketing Director at XYZ Corp"
  },
  {
    text: "Professional, creative, and extremely reliable. Highly recommended!",
    name: "David Mathew",
    role: "Startup Founder"
  },
  {
    text: "Great communication and top-quality delivery. Loved working with them.",
    name: "Lisa Raymond",
    role: "Product Designer"
  }
];
const Home = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>


      <nav class="bg-neutral-primary fixed w-full z-20 top-0 start-0 ">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img style={{ height: "50px" }} src="https://cdn.vectorstock.com/i/500p/89/16/star-icon-or-shining-element-flare-black-color-vector-56058916.jpg" class="h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">Positivus</span>
          </a>
          <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

            <button
              type="button"
              class="text-black border border-black px-3 py-2 rounded-md hover:bg-black hover:text-white transition">
              Request a Quote
            </button>

          </div>
          <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="block py-2 px-3 text-heading rounded hover:text-fg-brand cursor-pointer"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="services"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="block py-2 px-3 text-heading rounded hover:text-fg-brand cursor-pointer"
                >
                  Services
                </Link>
              </li>


              <li>
                <Link
                  to="usecases"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="block py-2 px-3 text-heading rounded hover:text-fg-brand cursor-pointer"
                >
                  Use Cases
                </Link>
              </li>


              <li>
                <Link
                  to="pricing"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="block py-2 px-3 text-heading rounded hover:text-fg-brand cursor-pointer"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  to="blog"
                  smooth={true}
                  duration={600}
                  offset={-80}
                  className="block py-2 px-3 text-heading rounded hover:text-fg-brand cursor-pointer"
                >
                  Blog
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <section className="w-full bg-white py-24 ">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6 md:px-16">

          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black">
              Navigating the digital landscape for success
            </h1>
            <p className="text-lg text-gray-700">
              Our digital marketing agency helps businesses grow and succeed online
              through a range of services including SEO, PPC, social media marketing,
              and content creation.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-900 transition">
              Book a Consultation
            </button>



          </div>

          {/* RIGHT COLUMN (IMAGE OR EMPTY) */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoG5WP-tbAKR1suIFe3LlnsYepGyAPr64hh6yMplMc12FtN3RLFAwoe9A4Fhxiy6eL6_E&usqp=CAU"
              alt="Digital Marketing"
              className="w-full max-w-md  "
            />
          </div>

        </div>

        <div
          className="row container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 140px", // 👈 space from both sides
          }}
        >
          <div className="col-2" style={{ textAlign: "center" }}>
            <img
              src="https://cdn.freebiesupply.com/images/large/2x/amazon-logo-transparent.png"
              alt="img1"
              style={{ width: "100%", maxWidth: "120px" }}
            />
          </div>


          <div className="col-2" style={{ textAlign: "center" }}>
            <svg width="120" height="60" viewBox="0 0 200 60">
              <text
                x="0"
                y="45"
                fontFamily="Pacifico, cursive"
                fontSize="48"
                fill="black"
              >
                dribbble
              </text>
            </svg>
          </div>


          <div className="col-2" style={{ textAlign: "center" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/71/HubSpot_Logo.png"
              alt="img3"
              style={{ width: "100%", maxWidth: "120px" }}
            />
          </div>


          <div className="col-2" style={{ textAlign: "center", display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              alt="Notation Logo"
              style={{ width: "40px", height: "40px" }}
            />
            <span style={{ fontFamily: "Helvetica, Arial, sans-serif", fontSize: "24px", fontWeight: "700", color: "black" }}>
              Notation
            </span>
          </div>


          <div className="col-2" style={{ textAlign: "center" }}>
            <img
              src="src/assets/black.png"
              alt="img4"
              style={{ width: "100%", maxWidth: "120px" }}
            />
          </div>
          <div className="col-2" style={{ textAlign: "center" }}>
            <img
              src="src/assets/hd-black-zoom-text-logo-transparent-png-701751694778202hqzbkjjx75-removebg-preview.png"
              alt="img4"
              style={{ width: "100%", maxWidth: "120px" }}
            />
          </div>

        </div>

      </section>

      <section name="services" className="px-35">
        <div className="flex items-center gap-7">
          <h1 className="bg-lime-300 text-black px-3 py-1 font-bold inline-block text-4xl font-medium">
            Services
          </h1>
          <p className="ml-4 text-black">
            At our digital marketing agency, we offer a range of services to <br /> help businesses grow and succeed online. These services include:
          </p>
        </div>
      </section>


      {/* first card */}
      <div className="flex w-full px-30 gap-0 pt-20">

        {/* LEFT CARD */}
        <div className="w-1/2 flex justify-center">
          <div className="bg-gray-200 border border-black rounded-4xl shadow p-6 w-[500px] h-65 flex items-center justify-between">

            {/* Left Section */}
            <div className="flex flex-col justify-between h-full py-2">
              <div className="bg-lime-400 text-black font-bold text-xl px-4 py-2 rounded-md w-max">
                Search Engine <br /> Optimization
              </div>

              <a
                href="#"
                className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded-full w-max hover:bg-lime-500 transition"
              >
                <svg
                  className="w-4 h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                <span className="font-medium text-sm">Learn more</span>
              </a>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="https://www.theeditorialinstitute.com/_next/image?url=%2FServices%2FService_Card_1.png&w=3840&q=75"
                className="h-40 w-auto object-contain"
              />
            </div>

          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="bg-lime-200 border border-black rounded-4xl shadow p-6 w-[500px] h-65 flex items-center justify-between">

            {/* Left Section */}
            <div className="flex flex-col justify-between h-full py-2">
              <div className="bg-white text-black font-bold text-xl px-4 py-2 rounded-md w-max">
                Pay-per-click <br /> advertising
              </div>

              <a
                href="#"
                className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded-full w-max hover:bg-lime-500 transition"
              >
                <svg
                  className="w-4 h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                <span className="font-medium text-sm">Learn more</span>
              </a>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="src/assets/Illustration (1).png"
                className="h-40 w-auto object-contain"
              />
            </div>

          </div>
        </div>

      </div>

      {/* second card */}
      <div className="flex w-full px-30 gap-0 pt-10">

        {/* LEFT CARD */}
        <div className="w-1/2 flex justify-center">
          <div className="bg-black border border-black rounded-4xl shadow p-6 w-[500px] h-65 flex items-center justify-between">

            {/* Left Section */}
            <div className="flex flex-col justify-between h-full py-2">
              <div className="bg-white text-black font-bold text-xl px-4 py-2 rounded-md w-max">
                Social Media <br /> Marketing
              </div>

              <a
                href="#"
                className="flex items-center gap-2 bg-black-400 text-white px-4 py-2 rounded-full w-max transition"
              >
                <svg
                  className="w-4 h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                <span className="font-medium text-sm text-white">Learn more</span>
              </a>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="src/assets/smile.png"
                className="h-40 w-auto object-contain"
              />
            </div>

          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="bg-gray border border-black rounded-4xl shadow p-6 w-[500px] h-65 flex items-center justify-between">

            {/* Left Section */}
            <div className="flex flex-col justify-between h-full py-2">
              <div className="bg-lime-400 text-black font-bold text-xl px-4 py-2 rounded-md w-max">
                Email <br /> Marketing
              </div>

              <a
                href="#"
                className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded-full w-max hover:bg-lime-500 transition"
              >
                <svg
                  className="w-4 h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                <span className="font-medium text-sm">Learn more</span>
              </a>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="src/assets/tokyo-sending-messages-from-one-place-to-another 1.png"
                className="h-40 w-auto object-contain"
              />
            </div>

          </div>
        </div>

      </div>

      {/* third card */}
      <div className="flex w-full px-30 gap-0 pt-10">

        {/* LEFT CARD */}
        <div className="w-1/2 flex justify-center">
          <div className="bg-lime-200 border border-black rounded-4xl shadow p-6 w-[500px] h-65 flex items-center justify-between">

            {/* Left Section */}
            <div className="flex flex-col justify-between h-full py-2">
              <div className="bg-white text-black font-bold text-xl px-4 py-2 rounded-md w-max">
                Content <br /> Creation
              </div>

              <a
                href="#"
                className="flex items-center gap-2 bg-lime-400 text-black px-4 py-2 rounded-full w-max hover:bg-lime-500 transition"
              >
                <svg
                  className="w-4 h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                <span className="font-medium text-sm">Learn more</span>
              </a>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="src/assets/tokyo-many-browser-windows-with-different-information 1.png"
                className="h-40 w-auto object-contain"
              />
            </div>

          </div>
        </div>

        <div className="w-1/2 flex justify-center">
          <div className="bg-black border border-black rounded-4xl shadow p-6 w-[500px] h-65 flex items-center justify-between">

            {/* Left Section */}
            <div className="flex flex-col justify-between h-full py-2">
              <div className="bg-lime-400 text-black font-bold text-xl px-4 py-2 rounded-md w-max">
                Analytics and <br /> Tracking
              </div>

              <a
                href="#"
                className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full w-max "
              >
                <svg
                  className="w-4 h-4 transform -rotate-45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
                <span className="font-medium text-sm text-white">Learn more</span>
              </a>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src="src/assets/last.png"
                className="h-40 w-auto object-contain"
              />
            </div>

          </div>
        </div>

      </div>


      {/* full width card */}
      <div className="w-full px-45 mt-20 ">
        <div className="bg-gray-200 border border-black rounded-4xl shadow px-26 flex items-center justify-between">

          {/* Left Section */}
          <div className="flex flex-col justify-between h-full py-2">
            <div className="text-black font-bold text-2xl">
              Let's make things happen
            </div>

            <p className="text-black mt-4 max-w-md">
              Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
            </p>

            <a
              href="#"
              className="mt-6 inline-block bg-black text-white px-3 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              Get your free proposal
            </a>
          </div>

          {/* Right Section */}
          <div className="flex-shrink-0">
            <img
              src="src/assets/687d8581-cefe-4786-8f60-ee9d840afbd2-removebg-preview.png"
              alt="Digital Marketing"
              className="h-68 w-auto object-contain"
            />
          </div>

        </div>
      </div>

      {/* heading */}
      <section className="px-50 mt-30 usecases">
        <div className="flex items-center gap-7">
          <h1 className="bg-lime-300 text-black px-3 py-1 font-bold inline-block text-4xl font-medium">
            Case Studies
          </h1>
          <p className="ml-4 text-black">
            Explore Real-Life Examples of Our Prov Digital Marketing <br /> Success through Our Case Studies
          </p>
        </div>
      </section>


      {/* full width card with black */}
      <div className="w-full px-45 mt-20 ">
        <div className="bg-black text-white border border-gray-800 rounded-4xl shadow p-16 flex flex-col md:flex-row gap-8">

          {/* Section 1 */}
          <div className="flex-1 flex flex-col">
            <p className="text-sm">
              For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.
            </p>
            <a
              href="#"
              className="text-lime-400 mt-4 flex items-center gap-2  px-4 py-2 rounded-full w-max hover:bg-gray-700 transition"
            >
              <span className="font-medium text-sm">Learn more</span>
              <svg
                className="w-4 h-4 transform -rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Section 2 */}
          <div className="flex-1 flex flex-col">
            <p className="text-sm">
              For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.
            </p>
            <a
              href="#"
              className=" text-lime-400 mt-4 flex items-center gap-2  px-4 py-2 rounded-full w-max hover:bg-gray-700 transition"
            >
              <span className="font-medium text-sm">Learn more</span>
              <svg
                className="w-4 h-4 transform -rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

          {/* Section 3 */}
          <div className="flex-1 flex flex-col">
            <p className="text-sm">
              For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.
            </p>
            <a
              href="#"
              className=" text-lime-400 mt-4 flex items-center gap-2 bg-black px-4 py-2 rounded-full w-max hover:bg-gray-700 transition"
            >
              <span className="font-medium text-sm ">Learn more</span>
              <svg
                className="w-4 h-4 transform -rotate-45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>

        </div>
      </div>

      <section className="px-50 mt-30">
        <div className="flex items-center gap-7">
          <h1 className="bg-lime-300 text-black px-3 py-1 font-bold inline-block text-4xl font-medium">
            Our Working Process
          </h1>
          <p className="ml-4 text-black">
            Step-by-step Guide to Achieving <br /> Your Business Goals
          </p>
        </div>
      </section>

      {/* steps 1,2.... */}
      <div className="w-full px-50 mt-20">
        <div className="bg-lime-300 text-white border border-gray-800 rounded-4xl shadow p-8 flex flex-col gap-6">

          {/* Title with minus in circle */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">01 Consultation</h2>
            <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full text-black font-bold">
              -
            </div>
          </div>

          {/* Horizontal line */}
          <hr className="border-gray-500" />

          {/* Description */}
          <p className="text-sm text-black">
            During the initial consultation, we will discuss our business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.
          </p>

        </div>
      </div>

      <div className="w-full px-50  mt-6">
        <div className="bg-gray text-white border border-gray-800 rounded-4xl shadow p-8 flex flex-col gap-6">

          {/* Title with plus in circle */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">02 Research and Strategy Development</h2>
            <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full text-black font-bold">
              +
            </div>
          </div>

        </div>
      </div>
      <div className="w-full px-50  mt-6">
        <div className="bg-gray text-white border border-gray-800 rounded-4xl shadow p-8 flex flex-col gap-6">

          {/* Title with plus in circle */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">03 Implementation</h2>
            <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full text-black font-bold">
              +
            </div>
          </div>

        </div>
      </div>

      <div className="w-full px-50  mt-6">
        <div className="bg-gray text-white border border-gray-800 rounded-4xl shadow p-8 flex flex-col gap-6">

          {/* Title with plus in circle */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">04 Monitoring and Optimization</h2>
            <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full text-black font-bold">
              +
            </div>
          </div>

        </div>
      </div>

      <div className="w-full px-50  mt-6">
        <div className="bg-gray text-white border border-gray-800 rounded-4xl shadow p-8 flex flex-col gap-6">

          {/* Title with plus in circle */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">05 Reporting and Communication-</h2>
            <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full text-black font-bold">
              +
            </div>
          </div>

        </div>
      </div>
      <div className="w-full px-50  mt-6">
        <div className="bg-gray text-white border border-gray-800 rounded-4xl shadow p-8 flex flex-col gap-6">

          {/* Title with plus in circle */}
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-black">06 Continual Improvement</h2>
            <div className="w-8 h-8 flex items-center justify-center border border-black rounded-full text-black font-bold">
              +
            </div>
          </div>

        </div>
      </div>

      {/* team section */}
      <section className="px-50 py-20 bg-white pricing">
        {/* Heading */}
        <div className="mb-12 flex gap-10">
          <h2 className="text-3xl font-bold bg-lime-300 inline-block px-4 py-1 rounded-lg">
            Team
          </h2>
          <p className="text-gray-700 mt-3">
            Meet the skilled and experienced team behind our successful digital marketing strategies
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, i) => (
            <div
              key={i}
              className="bg-white border border-black rounded-3xl p-6 shadow-[0px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              {/* Top section */}
              <div className="flex items-center justify-between">
                {/* Image with green blob */}
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-lime-300 scale-110 blur-[2px]"></div>
                  <img
                    src={member.img}
                    className="relative w-20 h-20 rounded-full object-cover"
                    alt=""
                  />
                </div>

                {/* LinkedIn icon */}
                <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
                  <FiLinkedin size={20} />
                </div>
              </div>

              {/* Text */}
              <h3 className="font-bold text-xl mt-4">{member.name}</h3>
              <p className="text-gray-700 text-sm font-medium">{member.role}</p>
              <p className="text-gray-600 text-sm mt-3">{member.desc}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-xl font-medium text-lg">
            See all team
          </button>
        </div>
      </section>


      {/* testimonial section */}
      <section className="py-10 bg-white px-50">
        {/* Heading */}
        <div className="mb-10 flex gap-10">
          <h2 className="text-3xl font-bold bg-lime-300 inline-block px-4 py-1 rounded-cross">
            Testimonials
          </h2>
          <p className="text-gray-700 mt-4">
            Hear from our satisfied clients. Read our testimonials to learn more
            about our digital marketing services.
          </p>
        </div>

        {/* Container */}
        <div className="max-w-6xl mx-auto bg-[#191A23] text-white p-14 rounded-[45px] relative">

          {/* Card */}
          <div className="border border-lime-300 rounded-3xl p-10 relative">
            {/* Speech bubble tail */}
            <div className="absolute bottom-[-18px] left-10 w-10 h-10 border-l border-b border-lime-300 bg-[#191A23] rotate-45"></div>
            <div className="mb-6">
            </div>

            <p className="text-lg leading-relaxed">
              “{testimonials[index].text}”
            </p>

            <div className="mt-6">
              <h3 className="text-lime-300 font-semibold">
                {testimonials[index].name}
              </h3>
              <p className="text-sm text-gray-300">{testimonials[index].role}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center mt-10 px-6">
            <button
              onClick={prevSlide}
              className="text-white text-2xl hover:text-lime-300"
            >
              <FiArrowLeft />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${i === index ? "bg-lime-300" : "bg-gray-600"
                    }`}
                ></span>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="text-white text-2xl hover:text-lime-300"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </section>


      <section className="py-20 bg-white px-50">
        {/* Heading */}
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-3xl font-bold bg-lime-300 px-4 py-1 rounded-lg">
            Contact Us
          </h2>
          <p className="text-gray-700">
            Connect with Us: Let’s Discuss Your Digital Marketing Needs
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#F3F3F3] rounded-[40px] p-10 flex relative overflow-hidden">

          {/* Left Form Section */}
          <div className="w-1/2">

            {/* Radio Buttons */}
            <div className="flex items-center gap-6 mb-6">
              <label className="flex items-center gap-2">
                <input type="radio" name="type" defaultChecked className="accent-lime-400" />
                <span>Say Hi</span>
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="type" className="accent-lime-400" />
                <span>Get a Quote</span>
              </label>
            </div>

            {/* Form */}
            <div className="flex flex-col gap-6">

              <div>
                <label className="text-sm text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full mt-1 border border-gray-400 rounded-xl p-3 bg-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email*</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full mt-1 border border-gray-400 rounded-xl p-3 bg-white outline-none"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Message*</label>
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="w-full mt-1 border border-gray-400 rounded-xl p-3 bg-white outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button className="bg-[#111216] text-white py-3 px-6 rounded-xl mt-4 w-full">
                Send Message
              </button>

            </div>
          </div>

          {/* Right Graphic Section */}
          <div className="w-1/2 relative flex items-center justify-center">

            <img src="src/assets/Screenshot 2025-12-05 122734.png" alt="" />
          </div>

        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home


