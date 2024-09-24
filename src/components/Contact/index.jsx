import ContactLeft from "./left";
import ContactRight from "./right";

const Contact = () => {
  return (
    <>
      <div className="py-28 flex flex-wrap justify-between gap-20" id="contact">
        <ContactLeft />
        <ContactRight />
      </div>
    </>
  );
};

export default Contact;
