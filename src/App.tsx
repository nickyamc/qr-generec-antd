import { Button, Form, Input, QRCode } from "antd";
import React, { useState } from "react";
import ImgLogo from "./assets/logo_unamad.png";

const downloadQRCode = (nameFile: string) => {
  const canvas = document
    .getElementById("myqrcode")
    ?.querySelector<HTMLCanvasElement>("canvas");
  if (canvas) {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.download = `${nameFile}.png`;
    a.href = url;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
};

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [nameFile, setNameFail] = useState<string>("");
  return (
    <div id="myqrcode">
      <Input
        placeholder="Nombre del archivo"
        onChange={(e) => setNameFail(e.target.value)}
      />
      <Input
        placeholder="URL a QRCode"
        onChange={(e) => setText(e.target.value)}
      />
      <QRCode
        type="canvas"
        value={text}
        style={{ marginBottom: 16 }}
        icon={ImgLogo}
        errorLevel="H"
        size={300}
        iconSize={300 / 4}
      />
      <Button type="primary" onClick={() => downloadQRCode(nameFile)}>
        Download
      </Button>
    </div>
  );
};

export default App;
