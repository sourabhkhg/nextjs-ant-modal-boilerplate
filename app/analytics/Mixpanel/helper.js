import { Mixpanel } from "./index";
import EVENTS from "./event";
import _ from "lodash";

const doTrack = TRACK => {
  Mixpanel.track(TRACK);
};

const doTrackwithData = (TRACK, data) => {
  Mixpanel.track(TRACK, data);
};

const onLogin = (EMAIL, TRACK) => {
  Mixpanel.track(TRACK);
  Mixpanel.identify(EMAIL);
};

const onSignup = (EMAIL, NAME, TRACK) => {
  Mixpanel.alias(EMAIL);
  Mixpanel.track(TRACK);
  Mixpanel.people.set({
    $email: EMAIL,
    $name: NAME
  });
};

export const analytics = (type, auth, data) => {
  let EMAIL, NAME;

  switch (type) {
    default:
      return;
  }
};
