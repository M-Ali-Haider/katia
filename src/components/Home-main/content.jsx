import ContentFeatures from "./contentFeatures";
import ContentGenerated from "./contentGenerated";

const Content = ({ conversationData }) => {
  return (
    <div className="h-[calc(100%-110px)] sm:h-[calc(100%-83px)] flex items-end justify-center">
      {conversationData && conversationData.message.length > 0 ? (
        <ContentGenerated conversationMessages={conversationData.message} />
      ) : (
        <ContentFeatures />
      )}
    </div>
  );
};

export default Content;
