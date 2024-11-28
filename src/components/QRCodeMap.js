import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { QRCodeCanvas } from "qrcode.react";

const map = 'https://maps.app.goo.gl/cRAD7BDUT4XHPFSD9';

const QRCodeMap = () => {
  return (
      <>
          <Card
            className="text-center shadow-lg"
            style={{
              backgroundColor: "#fff",
              color: "#000",
              borderRadius: "10px",
            }}
          >
            <Card.Body>
              <h4>Scan to View Location</h4>
              <QRCodeCanvas
                value={map}
                size={150} // Size of the QR code
                bgColor="#fff" // Matches card background
                fgColor="#000" // QR code foreground color
                level="Q" // Error correction level
              />
              <p className="mt-3">
                Scan this QR code to open the event location on Google Maps.
              </p>
            </Card.Body>
          </Card>
        </>
  );
};

export default QRCodeMap;
