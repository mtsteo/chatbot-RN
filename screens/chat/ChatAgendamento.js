import React, { useState, useCallback, useEffect } from "react";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import Maps from "../../components/Maps";
import Colors from "../../styles/Colors";

export function ChatAgendamento() {
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


  const onSend = (message = []) => {
    setMessages((previousMessages) => {
      return GiftedChat.append(previousMessages, message);
    });
    let msg = message[0].text;
    Dialogflow_V2.requestQuery(
      msg,
      (result) => {
        handleGoogleResponse(result);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleGoogleResponse = (result) => {
    console.log(result)
    let a = "";
    if (result.queryResult.fulfillmentMessages[0].payload) {
      a = result.queryResult.fulfillmentMessages[0].payload.element;
    }
    if (!result.queryResult.fulfillmentMessages[0].payload) {
      a = null;
    }
    // let options = result.queryResult.fulfillmentMessages[0].payload.element;
    let text = result.queryResult.fulfillmentText;
    sendBotResponse(text, a);
  };

  const sendBotResponse = (text, options) => {
    if (options == null) {
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
    if (options != null) {
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
        }, // useEffect(() => {
          //   Dialogflow_V2.setConfiguration(
          //     AgentConfig.client_email,
          //     AgentConfig.private_key,
          //     Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
          //     AgentConfig.project_id
          //   );
          // }, []);
      };
      setMessages((previousMessages) => {
        return GiftedChat.append(previousMessages, [msg]);
      });
    }
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
        textStyle={{
          left: { color: "white", fontSize: 16, fontWeight: 700 },
          right: {
            color: Colors.mainColors.textColors.textRight,
            fontSize: 16,
            fontWeight: 700,
          },
        }}
        wrapperStyle={{
          left: { backgroundColor: Colors.mainColors.primary },
          right: { backgroundColor: Colors.mainColors.bubbleRight },
        }}
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
