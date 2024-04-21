import React, { useRef, useState, useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const QrCodeScanner = () => {
    const qrRef = useRef(null);
    const [qrCodeResult, setQrCodeResult] = useState('No result');

    useEffect(() => {
        const qrScanner = new Html5QrcodeScanner(
            "qr-reader",
            { fps: 10, qrbox: 250 },
            false
        );

        const onScanSuccess = (decodedText, decodedResult) => {
            setQrCodeResult(decodedText);
            console.log(decodedResult);
        };

        const onScanError = (error) => {
            console.error(`Scanning error: ${error}`);
        };

        qrScanner.render(onScanSuccess, onScanError);

        return () => {
            qrScanner.clear().catch(console.error);
        };
    }, []);

    return (
        <div>
            <div id="qr-reader" ref={qrRef}></div>
            <h1>Scanned Result: {qrCodeResult}</h1>
        </div>
    );
};

export default QrCodeScanner;
