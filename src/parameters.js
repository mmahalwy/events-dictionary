export default {
  initEvent: [],
  initUIEvent: ['view', 'detail'],
  initKeyboardEvent: [
    'view',
    'char',
    'key',
    'location',
    'modifiersList',
    'repeat',
    'locale'
  ],
  initKeyEvent: [
    'view',
    'ctrlKey',
    'altKey',
    'shiftKey',
    'metaKey',
    'keyCode',
    'charCode'
  ],
  initMouseEvent: [
    'view',
    'detail',
    'screenX',
    'screenY',
    'clientX',
    'clientY',
    'ctrlKey',
    'altKey',
    'shiftKey',
    'metaKey',
    'button',
    'relatedTarget'
  ],
  initHashChangeEvent: ['oldURL', 'newURL'],
  initCompositionEvent: ['view', 'data', 'locale'],
  initDeviceMotionEvent: [
    'acceleration',
    'accelerationIncludingGravity',
    'rotationRate',
    'interval'
  ],
  initDeviceOrientationEvent: ['alpha', 'beta', 'gamma', 'absolute'],
  initMessageEvent: ['data', 'origin', 'lastEventId', 'source'],
  initStorageEvent: ['key', 'oldValue', 'newValue', 'url', 'storageArea']
};
