export default {
  install (Vue, connection, options) {
    let webSocket = new WebSocket('ws://echo.websocket.org');
  }
}
