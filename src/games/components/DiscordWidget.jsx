import React from "react";

export const DiscordWidget = () => {
  return (
    <div>
      <iframe
      className="w-100"
        src="https://discord.com/widget?id=1095050451549945876&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};
