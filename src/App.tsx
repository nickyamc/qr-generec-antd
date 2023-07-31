import { Button, Col, Form, Input, QRCode, Row } from "antd";
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
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Row>
        <Col span={12} style={{display: "flex", flexDirection: "column", gap: 25}}>
          <h1>Generador de QRCode</h1><Input
            placeholder="Nombre del archivo"
            onChange={(e) => setNameFail(e.target.value)}
          />
          <Input
            placeholder="URL a QRCode"
            onChange={(e) => setText(e.target.value)}
          /><Button type="primary" onClick={() => downloadQRCode(nameFile)}>
            Download
          </Button>
        </Col>
        <Col span={12}>
          <div style={{ width: 300 }} id="myqrcode">
            <QRCode
              type="canvas"
              value={text}
              style={{ marginBottom: 16 }}
              icon={ImgLogo}
              errorLevel="H"
              size={300}
              iconSize={300 / 4}
            />
          </div>

        </Col>
      </Row>



    </div>
  );
};

export default App;
