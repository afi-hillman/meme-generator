import React from "react";

const Image = ({
  randomMeme,
  memeHeight,
  memeWidth,
  text1,
  text2,
  textPosition,
  showText,
}) => {
  return (
    <div>
      <div className="max-w-full max-h-full bg-white flex rounded-md">
        <div
          className="bg-gray-300 w-[400px] h-[400px] max-w-[700px] max-h-[700px] m-4 text-white"
          style={{
            backgroundImage: `url(${randomMeme})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: memeWidth,
            height: memeHeight,
            fontSize: memeWidth < 600 ? "60px" : "80px",
            fontWeight: 800,
            textShadow:
              "2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000",
            display: "flex",
            flexDirection: textPosition,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ display: showText }}>{text1}</p>
          <p style={{ display: showText }}>{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default Image;
