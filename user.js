// userChrome settings
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // default is false
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("widget.non-native-theme.scrollbar.style", 5);
user_pref("layers.acceleration.force-enabled", true);
user_pref("gfx.webrender.all", true);

// Privacy settings
user_pref("media.peerconnection.enabled", false);
user_pref("privacy.resistFingerprinting", true);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("media.navigator.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.prefetch-next", false);
user_pref("webgl.disabled", true);
user_pref("dom.event.clipboardevents.enabled", false);
user_pref("privacy.resistFingerprinting.letterboxing", true);
user_pref("network.trr.mode", 2);
user_pref("network.security.esni.enabled", true);
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.use_https_rr_as_altsvc", true);

// Disable PiP
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
