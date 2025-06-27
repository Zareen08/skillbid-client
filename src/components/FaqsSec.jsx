import React from 'react';

const faqs = [
  {
    question: "What is SkillBid?",
    answer: "SkillBid is a freelancing platform where clients can post tasks and hire skilled freelancers to complete them.",
  },
  {
    question: "How do I create a task?",
    answer: "Click on the 'Add Task' button, fill out the required fields like title, description, budget, and deadline, and submit the form.",
  },
  {
    question: "Can I update a posted task?",
    answer: "Yes, go to the task list, click on the 'Update' button for a task, and edit the fields as needed.",
  },
  {
    question: "Is there a cost to use the platform?",
    answer: "SkillBid is free to use. However, premium features may be introduced in the future.",
  },
];

const FaqsSec = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-[#5f5a7c] text-center mb-7">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
            <input type="checkbox" name={`faq-${index}`} />
            <div className="collapse-title font-semibold text-lg">
              {faq.question}
            </div>
            <div className="collapse-content text-sm text-gray-600">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsSec;
