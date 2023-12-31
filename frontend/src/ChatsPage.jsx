import { PrettyChatWindow } from "react-chat-engine-pretty";
// import { ChatEngineWrapper, Socket } from "react-chat-engine-pretty";
const ChatsPage = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow
        projectId="eb026860-8f57-4cd1-ad6b-f6fcfac37114"
        username={props.user.username}
        secret={props.user.secret}
        // style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
