import {
  MEETING_ACTION_TYPE,
  SCREEN_RECORD_ON,
  SHOW_SCREENSHAREPREVIEW_SCREEN,
  VIDEO_CAMERA_ON,
} from "./actionType";
export const meetingActivity = (data) => {
  return {
    type: MEETING_ACTION_TYPE,
    payload: data,
  };
};
export const videoCameraOnAction = (data) => {
  return {
    type: VIDEO_CAMERA_ON,
    payload: data,
  };
};
export const screenRecordAction = (data) => {
  return {
    type: SCREEN_RECORD_ON,
    payload: data,
  };
};
export const screenSharePreviewAction = (data) => {
  return {
    type: SHOW_SCREENSHAREPREVIEW_SCREEN,
    payload: data,
  };
};
