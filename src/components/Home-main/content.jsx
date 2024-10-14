import ContentFeatures from "./contentFeatures";
import ContentGenerated from "./contentGenerated";

const Content = ({ isSubmit }) => {
  return (
    <div className="flex-1 flex items-end justify-center max-h-full">
      {isSubmit ? <ContentGenerated /> : <ContentFeatures />}
    </div>
  );
};

export default Content;
