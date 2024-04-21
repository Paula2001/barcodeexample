import React from 'react';
import QrCodeScanner from './QrCodeScanner';

function App() {
    const handleScanSuccess = (decodedText, decodedResult) => {
        console.log(`QR Code decoded: ${decodedText}`, decodedResult);
    };

    const handleScanError = (error) => {
        console.error(`QR Code scanning error: ${error}`);
    };

    return (
        <div className="App">
            <h1>Qr and bar code scanner</h1>
            <QrCodeScanner
                qrCodeSuccessCallback={handleScanSuccess}
                qrCodeErrorCallback={handleScanError}
            />
        </div>
    );
}

export default App;