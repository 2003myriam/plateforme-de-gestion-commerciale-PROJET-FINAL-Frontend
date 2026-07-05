import React from "react";
import ScrollStack, { ScrollStackItem } from "/src/components/ScrollStack/ScrollStack";
import "./About.css";

function About() {
  return (
    <section className="about-section">

      <div className="about-gauche">
        <h2>ABOUT THE PLATFORM</h2>

        <h1>Powerful management made simple.</h1>

        <p>
          Our platform centralizes products, inventory, employee
          management, planning, and task allocation into a single
          intuitive dashboard. Designed to help teams save time,
          improve collaboration, and make data-driven decisions.
        </p>
      </div>

      <div className="about-droit">

        <ScrollStack>

          <ScrollStackItem>
            <h2> Product Management</h2>
            <p>
              Organize products, categories and inventory from one
              centralized dashboard.
            </p>
          </ScrollStackItem>

          <ScrollStackItem>
            <h2> Employee Management</h2>
            <p>
              Manage your employees, assign roles and keep your team
              organized efficiently.
            </p>
          </ScrollStackItem>

          <ScrollStackItem>
            <h2> Smart Scheduling</h2>
            <p>
              Create weekly schedules, monitor availability and plan
              resources effortlessly.
            </p>
          </ScrollStackItem>

        </ScrollStack>

      </div>

    </section>
  );
}

export default About;