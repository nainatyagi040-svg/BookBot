window.watsonAssistantChatOptions = {
  integrationID: "015d7713-8c54-48c1-bdbb-9c85b25a2884",
  region: "au-syd",
  serviceInstanceID: "be8f5224-c612-4215-b578-bf8722569165",
  onLoad: function(instance) {
    instance.render();
  }
};
setTimeout(function() {
  const t = document.createElement('script');
  t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
  document.head.appendChild(t);
});