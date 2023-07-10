import React from "react";
import { useEffect, useState, createContext } from "react";
import { Dialogflow_V2 } from "react-native-dialogflow";
import { AgentConfig } from "../utils/AgentConfig";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {

    useEffect(() => {
        Dialogflow_V2.setConfiguration(
          AgentConfig.client_email,
          AgentConfig.private_key,
          Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
          AgentConfig.project_id
        );
      }, []);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
