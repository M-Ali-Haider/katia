import { activeLinks } from "@/utils/activeLinks";

const ActiveLinks = () => {
  return (
    <>
      <div className="flex-1 gap-8 flex items-center justify-center">
        {activeLinks.map((item, index) => (
          <a key={index} href={item.id} className="text-sm">
            {item.title}
          </a>
        ))}
      </div>
    </>
  );
};

export default ActiveLinks;
