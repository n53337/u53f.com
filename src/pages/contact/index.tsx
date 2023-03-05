import Form from "@/components/contact/Form";
import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import Text from "@/ui/Text";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "contact@u53f";
  }, []);

  return (
    <>
      <main className="container min-h-screen">
        <NavBar />
        <section className="py-12 lg:py-24 flex flex-col gap-12 lg:gap-20">
          {/* Get in Touch */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0">
            <Text variant="header" className="col-span-2">
              Get in Touch
            </Text>
            <aside className="col-span-3 flex flex-col gap-4">
              <Text variant="text">
                It would be my pleasure to learn about your current projects and
                discover ways in which I could assist you. As someone who is
                actively seeking new employment opportunities, I am open to a
                diverse range of roles. Ideally, I would love to secure a
                position with a company located in Morocco, but I am certainly
                open to exploring opportunities outside of this area. I possess
                a strong work ethic and a can-do attitude, which I believe makes
                me an asset to any team. Whether it's a challenging project or a
                tedious task, I approach each job with a sense of purpose and
                meticulous attention to detail. I invite you to check out my
                online profiles linked below and to contact me using the
                provided form.
              </Text>
              <div className="flex gap-8">
                <Link to="https://www.linkedin.com/in/youssef-houffaine-a72366252/">
                  <Text variant="link">Linkedin</Text>
                </Link>
                <Link to="https://github.com/n53337">
                  <Text variant="link">Github</Text>
                </Link>
              </div>
            </aside>
          </div>

          {/* Divider */}

          <span className="w-full h-0.5 bg-gray-200"></span>

          {/* Form */}

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-0">
            <Text variant="header" className="col-span-2">
              Contact Me
            </Text>
            <Form />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
