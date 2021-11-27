let state = {
  socketId: null,
  localStream: null,
  remoteStream: null,
  allowConnectionsFromStrangers: false,
  screenSharingStream: null,
  screenSharingActive: false,
};

export const setSocketId = (socketId) => {
  state = {
    ...state,
    socketId,
  };
  console.log("set");
};

export const setLocalStream = (stream) => {
  state = {
    ...state,
    localStream: stream,
  };
};

export const setAllowConnectionsFromStrangers = (allowConnection) => {
  state = { ...state, allowConnectionsFromStrangers: allowConnection };
};

export const setScreenSharingActive = (screenSharingActive) => {
  state = { ...state, screenSharingActive };
};

export const setScreenSharingStream = (stream) => {
  state = { ...state, screenSharingStream: stream };
};

export const setRemoteStream = (stream) => {
  state = { ...state, remoteStream: stream };
};

export const getState = () => {
  return state;
};
