import React from "react";
import { Collapse } from "antd";
import "./Question.css";
function Question() {
  const items = [
    {
      key: "1",
      label: "How do I create a company?",
      children: (
        <p>
          Create an account, register your company and invite your employees.
        </p>
      ),
    },
    {
      key: "2",
      label: "How long is the free trial?",
      children: (
        <p>
          14 days, no credit card required. Full access to Professional
          features.
        </p>
      ),
    },
    {
      key: "3",
      label: "Is my data secure?",
      children: (
        <p>Absolutely. Each company has its own protected workspace.</p>
      ),
    },
    {
  key: "4",
  label: "Can I access the platform from anywhere?",
  children: (
    <p>
      Yes. Simply sign in from your browser to access your company's workspace securely.
    </p>
  ),}
  ];
  return (
    <>
      <section className="F-Q">
        <h4>FAQ</h4>

        <h2>Frequently Asked Questions</h2>

        <p className="faq-subtitle">
          Everything you need to know before getting started.
        </p>

        <div className="box-container">
          <Collapse  accordion
  bordered={false} items={items} />
        </div>
      </section>
    </>
  );
}

export default Question;
