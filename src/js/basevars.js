var $WINDOW = $(window),
    $DOCUMENT = $(document),
    $HTML,
    $BODY,

    QUIRKS_FORCE = location.hash.replace('#', '') === 'quirks',
    TRANSFORMS3D = Modernizr.csstransforms3d,
    CSS3 = TRANSFORMS3D && !QUIRKS_FORCE,
    COMPAT = TRANSFORMS3D || document.compatMode === 'CSS1Compat',
    FULLSCREEN = fullScreenApi.ok,

    MOBILE = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i),
    SLOW = !CSS3 || MOBILE,

    MS_POINTER = window.navigator.msPointerEnabled,

    TOUCH_TIMEOUT = 250,
    TRANSITION_DURATION = 300,
    AUTOPLAY_INTERVAL = 5000,
    MARGIN = 2,
    THUMB_SIZE = 64,

    WIDTH = 500,
    HEIGHT = 333,

    STAGE_FRAME_KEY = '$stageFrame',
    NAV_DOT_FRAME_KEY = '$navDotFrame',
    NAV_THUMB_FRAME_KEY = '$navThumbFrame',

    BEZIER = bez([.1, 0, .25, 1]);