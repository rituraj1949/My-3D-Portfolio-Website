import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "JavaScript Mastery",
          from_email: form.email,
          to_email: "sujata@jsmastery.pro",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <br />
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white text-4xl font-large mb-8">
                Ritu Raj
              </span>

              <div>
                Full Stack MERN Developer, <br />
                <br />
                <br />
                + (91) 9060736005, 6209581793 ,<br />
                rituraj1949@gmail.com ,
                <br />
                <br />
                <br /> Noida Electronic City , Sector-62 , <br />
                Noida{" "}
              </div>
              <br />
            </label>
            <div className="mt-4">
              <a
                href="https://www.linkedin.com/in/rituraj1949/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="mt-4 flex items-center">
                  <div>
                    <a
                      href="https://www.linkedin.com/in/rituraj1949/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="66"
                        height="68"
                        src="https://img.icons8.com/fluency/48/linkedin.png"
                        alt="LinkedIn"
                        style={{
                          width: "66px",
                          height: "68px",
                          transition:
                            "transform 0.4s ease-in-out, filter 0.4s ease-in-out",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                          e.currentTarget.style.filter = "brightness(1.3)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.filter = "brightness(1)";
                        }}
                      />
                    </a>
                  </div>

                  <div className="ml-4">
                    <a
                      href="https://github.com/rituraj1949"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="68"
                        height="66"
                        src="https://img.icons8.com/fluency/96/github.png"
                        alt="GitHub"
                        style={{
                          width: "64px",
                          height: "65px",
                          transition:
                            "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                          e.currentTarget.style.filter = "brightness(1.2)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.filter = "brightness(1)";
                        }}
                      />
                    </a>
                  </div>
                  <div className="ml-4">
                    <a
                      href="https://drive.google.com/file/d/189WvU1ouLafaKtyYg4L1YsD_h5dqBnAS/view?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        width="68"
                        height="66"
                        src="https://img.icons8.com/stickers/100/parse-from-clipboard.png" alt="parse-from-clipboard"
                        style={{
                          width: "64px",
                          height: "65px",
                          transition:
                            "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "scale(1.2)";
                          e.currentTarget.style.filter = "brightness(1.2)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.filter = "brightness(1)";
                        }}
                      />
                    </a>
                  </div>
                </div>
              </a>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <br />
      <div>
        <style>
          {`
          .animated-text {
            display: inline-block;
            margin-top: 105px; /* Adjust the value as needed */
            font-size: 0.rem;
            color: white;
            transition: transform 12.3s ease-in-out, color 9.3s ease-in-out;
            cursor: pointer;
          }

          .animated-text:hover {
            transform: scale(1.255);
            color: #00FFB4; /* Change to a different color on hover */
          }
        `}
        </style>
        <div className="animated-text">
          With over 3+ years of experience in full stack development, I've had
          the pleasure of working on diverse projects spanning various
          industries. On the frontend, I specialize in crafting engaging user
          experiences using React.js. Whether it's implementing complex UI
          components or optimizing for performance, I enjoy the creative process
          of turning designs into intuitive interfaces. In the backend realm,
          I'm well-versed in Node.js and Express.js, empowering me to build
          robust APIs and handle server-side logic efficiently. Working with
          databases like MongoDB and MySQL, I ensure data integrity and
          scalability are never compromised. Throughout my journey, I've learned
          the value of continuous improvement and staying abreast of emerging
          technologies. <br />
          In my previous role as a full stack developer at Xotiv Technologies, I
          was responsible for leading the development of several key projects,
          including e-commerce web app, This involved working closely with
          cross-functional teams to define project requirements, develop
          technical solutions, and deliver high-quality software products. As a
          full stack developer, I was involved in all aspects of the development
          lifecycle, from frontend design and implementation using technologies
          like React.js to backend development with Node.js and Express.js. I
          also managed database architecture and optimization using MongoDB,
          ensuring data integrity and scalability.One of my most significant
          achievements was leading the migration of our legacy monolithic
          application to a microservices architecture, which resulted in a 30%
          reduction in response times and improved system stability. I also
          implemented automated testing and CI/CD pipelines, reducing deployment
          times by 50% and enhancing overall development efficiency. Throughout
          my tenure, I encountered various challenges, such as scaling our
          application to handle increased user traffic and integrating
          third-party APIs for new features. However, through collaboration with
          my team and leveraging my problem-solving skills, we were able to
          overcome these obstacles and deliver successful outcomes.
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>{" "}
    </>
  );
};

export default SectionWrapper(Contact, "contact");
