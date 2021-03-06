import { createClient, createMicrophoneAndCameraTracks, ClientConfig } from "agora-rtc-react";

// const appId = "902b2e809ca54994ba1af501720d3c0f";
// const token =
//     "006902b2e809ca54994ba1af501720d3c0fIACMQnjd3Mmto7F08fdn+kIOkO1sh1WR8GxyXXqdOV7yzWTNKL8AAAAAEAA8g5F5sImxYAEAAQCwibFg";

export const config: ClientConfig = { mode: "rtc", codec: "vp8" };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
