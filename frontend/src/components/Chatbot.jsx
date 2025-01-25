import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    // Dynamically inject the required scripts
    const toastifyScript = document.createElement("script");
    toastifyScript.src =
      "https://cdn.jsdelivr.net/npm/toastify-js@1.12.0/src/toastify.min.js";
    toastifyScript.async = true;
    document.body.appendChild(toastifyScript);

    const botpressInjectScript = document.createElement("script");
    botpressInjectScript.src =
      "https://cdn.botpress.cloud/webchat/v2.2/inject.js";
    botpressInjectScript.async = true;
    document.body.appendChild(botpressInjectScript);

    const botpressConfigScript = document.createElement("script");
    botpressConfigScript.src =
      "https://files.bpcontent.cloud/2024/12/19/04/20241219042452-M2DM8JU7.js";
    botpressConfigScript.defer = true;
    document.body.appendChild(botpressConfigScript);

    window.botpressWebChat = {
      init: {
        botName: "My Custom Bot",
        botAvatarUrl: "https://via.placeholder.com/50", // Replace with your logo URL
        backgroundColor: "#f4f4f4",
        textColorOnBackground: "#333",
        textColor: "#444",
        customStylesheet: "https://example.com/custom-styles.css", // Optional custom CSS
        enableReset: true, // Adds a reset button
      },
    };

    // Event listeners for botpress (without Toastify)
    const handleEvents = () => {
      if (window.botpress) {
        window.botpress.on("*", (event) => {
          // You can log events here for debugging (optional)
          console.log("Event:", event.type);
        });

        window.botpress.on("webchat:ready", () => {
          console.log("Webchat Ready");
        });

        window.botpress.on("webchat:opened", () => {
          console.log("Webchat Opened");
        });

        window.botpress.on("webchat:closed", () => {
          console.log("Webchat Closed");
        });

        window.botpress.on("conversation", (conversationId) => {
          console.log("Conversation:", conversationId);
        });

        window.botpress.on("message", (message) => {
          console.log("Message Received:", message.id);
        });

        window.botpress.on("messageSent", (message) => {
          console.log("Message Sent:", message);
        });

        window.botpress.on("error", (error) => {
          console.error("Error:", error);
        });

        window.botpress.on("webchatVisibility", (visibility) => {
          console.log("Visibility:", visibility);
        });

        window.botpress.on("webchatConfig", () => {
          console.log("Webchat Config");
        });

        window.botpress.on("customEvent", () => {
          console.log("Received a custom event");
        });
      }
    };

    // Check if botpress is ready
    const interval = setInterval(() => {
      if (window.botpress) {
        handleEvents();
        clearInterval(interval);
      }
    }, 100);

    // Cleanup on unmount
    return () => {
      document.body.removeChild(toastifyScript);
      document.body.removeChild(botpressInjectScript);
      document.body.removeChild(botpressConfigScript);
      clearInterval(interval);
    };
  }, []);

  return <div id="botpress-webchat-container"></div>;
};

export default Chatbot;
