import React, { useState } from "react";
import "../styles/faq.css";

const DownArrowIcon = () => (
  <div>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M12 15l-4.243-4.243 1.415-1.414L12 12.172l2.828-2.829 1.415 1.414z" />
      </g>
    </svg>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a range of services including full interior design, space planning, furniture selection, color consultations, and project management.",
    },
    {
      question: "How do I start the interior design process?",
      answer:
        "You can start by scheduling a consultation with us. During the consultation, we’ll discuss your needs, preferences, budget, and the scope of your project.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "The duration of a project can vary depending on its complexity and scope. On average, a full interior design project can take anywhere from a few weeks to several months.",
    },
    {
      question: "Can you work with my existing furniture?",
      answer:
        "Yes, we can incorporate your existing furniture into the new design. We’ll assess your current pieces and suggest how they can be integrated with new elements to achieve the desired look.",
    },
    {
      question: "Do I need to be involved in the design process?",
      answer:
        "Your involvement is entirely up to you. Some clients prefer to be involved in every step, while others prefer to leave the details to us. We’ll tailor our approach based on your preferences.",
    },
    {
      question: "What is your fee structure?",
      answer:
        "Our fee structure varies depending on the scope of the project and the services required. We offer a detailed proposal outlining all costs after our initial consultation.",
    },
    {
      question: "Can you work within my budget?",
      answer:
        "Absolutely. We believe that great design can be achieved at any budget. We’ll work with you to create a plan that meets your aesthetic goals and financial constraints.",
    },
    {
      question: "Do you handle the entire project from start to finish?",
      answer:
        "Yes, we offer comprehensive project management services, handling everything from the initial concept to the final installation, ensuring a seamless process and a stunning result.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container-fluid pt-0" id="faq">
      <div className="row m-2-hor">
        <div className="col-12 mb-5">
          <div className="heading">Frequently Asked Questions</div>
        </div>
        <div className="col-12">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-item"
              onClick={() => handleToggle(index)}
            >
              <div className="question flex justify-between">
                <p className="font-medium">{item.question}</p>
                {/* <img style={{float:'right'}} src='../../public/img/down-arrow.png' alt="v"/> */}
                <DownArrowIcon />
              </div>
              {openIndex === index && (
                <div className="answer">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
