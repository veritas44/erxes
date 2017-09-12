export const KIND_CHOICES = {
  MESSENGER: 'messenger',
  FORM: 'form',
  TWITTER: 'twitter',
  FACEBOOK: 'facebook',
  LIVE_CALL: 'live_call',
  ALL_LIST: ['messenger', 'form', 'twitter', 'facebook', 'live_call'],
};

export const FORM_LOAD_TYPES = {
  SHOUTBOX: 'shoutbox',
  POPUP: 'popup',
  EMBEDDED: 'embedded',
  ALL_LIST: ['', 'shoutbox', 'popup', 'embedded'],
};

export const FORM_SUCCESS_ACTIONS = {
  EMAIL: 'email',
  REDIRECT: 'redirect',
  ONPAGE: 'onPage',
  ALL_LIST: ['', 'email', 'redirect', 'onPage'],
};

// same as form load types
export const LIVE_ROOM_LOAD_TYPES = {
  SHOUTBOX: 'shoutbox',
  POPUP: 'popup',
  EMBEDDED: 'embedded',
  ALL_LIST: ['', 'shoutbox', 'popup', 'embedded'],
};

/**
  closed means shut down but not deleted
  open means that the current room is waiting for calls
  active means that the current is occupied by participants engaged in call
  incoming_call means that the channel is occupied by one person and the second one needs to answer
*/
export const LIVE_ROOM_STATUS_CHOICES = {
  CLOSED: 'closed',
  OPEN: 'open',
  ACTIVE: 'active',
  INCOMING_CALL: 'incoming_call',
  ALL_LIST: ['closed', 'open', 'active', 'incoming_call'],
};
