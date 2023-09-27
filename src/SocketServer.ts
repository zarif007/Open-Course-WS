/* eslint-disable no-console */
import { IncomingMessage, Server, ServerResponse } from 'http';
import { WebSocketServer } from 'ws';

const onSocketPreError = (e: Error) => {
  console.log(e);
};

const onSocketPostError = (e: Error) => {
  console.log(e);
};

const configureSocketServer = (
  server: Server<typeof IncomingMessage, typeof ServerResponse>
) => {
  const wss = new WebSocketServer({ noServer: true });

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

export default configureSocketServer;
