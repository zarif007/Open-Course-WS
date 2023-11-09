"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const onSocketPreError = (e) => {
    console.log(e);
};
const onSocketPostError = (e) => {
    console.log(e);
};
const configureSocketServer = (server) => {
    const wss = new ws_1.WebSocketServer({ noServer: true });
    server.on('upgrade', (req, socket, head) => {
        socket.on('error', onSocketPreError);
        // Perform Auth validate (coming soon)
        wss.handleUpgrade(req, socket, head, ws => {
            socket.removeListener('error', onSocketPreError);
            wss.emit('connection', ws, req);
        });
    });
    wss.on('connection', ws => {
        ws.on('error', onSocketPostError);
        ws.on('message', (msg, isBinary) => {
            wss.clients.forEach(client => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(msg, { binary: isBinary });
                }
            });
        });
        ws.on('close', () => {
            console.log('closed');
        });
    });
};
exports.default = configureSocketServer;
