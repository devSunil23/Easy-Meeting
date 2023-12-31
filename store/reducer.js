import {
  MEETING_ACTION_TYPE,
  SCREEN_RECORD_ON,
  SHOW_SCREENSHAREPREVIEW_SCREEN,
  VIDEO_CAMERA_ON,
} from "./actionType";

const initialState = {
  meetingActivyAction: null,
  videoCameraOn: true,
  screenRecordOn: false,
  screenSharePreviewScreen: null,
};
export const reducerMeetingType = (state = initialState, action) => {
  switch (action.type) {
    case MEETING_ACTION_TYPE:
      return {
        ...state,
        meetingActivyAction: action.payload,
      };
    case VIDEO_CAMERA_ON:
      return {
        ...state,
        videoCameraOn: action.payload,
      };
    case SCREEN_RECORD_ON:
      return {
        ...state,
        screenRecordOn: action.payload,
      };
    case SHOW_SCREENSHAREPREVIEW_SCREEN:
      return {
        ...state,
        screenSharePreviewScreen: action.payload,
      };
    default:
      return state;
  }
};
