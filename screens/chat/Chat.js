import React, { useState, useCallback, useEffect } from "react";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { AgentConfig } from "../../Utils/AgentConfig";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import Maps from "../../components/Maps";

export function Chat() {
  const Bot = {
    _id: 4,
    name: "Mr. Bot",
    avatar: "https://cdn-icons-png.flaticon.com/512/1395/1395208.png ",
  };

  const useProfile = {
    _id: 1,
    name: "User",
    avatar: "https://cdn-icons-png.flaticon.com/512/4202/4202843.png",
  };

  const [messages, setMessages] = useState([
    {
      _id: 3,
      text: `Qual procedimento gostaria de realizar hoje?`,
      createdAt: new Date().getTime(),
      quickReplies: {
        type: "checkbox", // or 'checkbox',
        keepIt: false,
        values: [
          {
            title: "Agendar Consulta",
            value: "Agendar consulta",
          },
          {
            title: "Pegar resultados",
            value: "Pegar resultados",
          },
        ],
      },
      user: Bot,
    },
    {
      _id: 2,
      text: "Me chamo Zé, seu assistente virtual!",
      createdAt: new Date().getTime(),
      user: Bot,
    },
    {
      _id: 1,
      text: "Olá BELTRANO, Seja Bem Vindo!",
      createdAt: new Date().getTime(),
      user: Bot,
    },
  ]);

  useEffect(() => {
    Dialogflow_V2.setConfiguration(
      AgentConfig.client_email,
      AgentConfig.private_key,
      Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
      AgentConfig.project_id
    );
  }, []);

  const onSend = (message = []) => {
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, message);
    });
    let msg = message[0].text;
    Dialogflow_V2.requestQuery(
      msg,
      (result) => {
        console.log("result", result);
        handleGoogleResponse(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleGoogleResponse = (result) => {
    let a = "";
    if (result.queryResult.fulfillmentMessages[0].payload) {
      a = result.queryResult.fulfillmentMessages[0].payload;
    } else if (!result.queryResult.fulfillmentMessages[0].payload) {
      a = false;
    }
    // let options = result.queryResult.fulfillmentMessages[0].payload.element;
    let text = result.queryResult.fulfillmentText;

    sendBotResponse(text, a);
  };

  const sendBotResponse = (text, options) => {
    if (!options) {
      let msg = {
        _id: messages.length + 1,
        text,
        createdAt: new Date().getTime(),
        user: Bot,
      };
      setMessages((previousMessages) => {
        return GiftedChat.append(previousMessages, [msg]);
      });
    }
    let msg = {
      _id: messages.length + 1,
      text,
      createdAt: new Date(),
      user: Bot,
      quickReplies: {
        type: "checkbox",
        keepIt: false,
        values: options.map((a) => {
          return { title: a.value, value: a.value };
        }),
      },
    };
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, [msg]);
    });
  };

  const onQuickReply = (props) => {
    let msg = {
      _id: messages.length + 100000,
      text: props[0].value,
      createdAt: new Date().getTime(),
      user: useProfile,
    };
    onSend([msg]);
  };

  const renderBobble = (props) => {
    const { currentMessage } = props;
    if (currentMessage.location) {
      return <Maps location={currentMessage.location} />;
    }
    return (
      <Bubble
        {...props}
        textStyle={{ left: { color: "white", fontSize: 16 } }}
        wrapperStyle={{ left: { backgroundColor: "#A24AFA" } }}
      />
    );
  };

  return (
    <GiftedChat
      showUserAvatar={true}
      renderBubble={renderBobble}
      messages={messages}
      onQuickReply={(props) => {
        onQuickReply(props);
      }}
      onSend={(messages) => onSend(messages)}
      user={useProfile}
    />
  );
}
