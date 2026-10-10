/*

Project name: Notepad
Programmer: Elijah Wiencek
Started on: 2026-05-24
Finished: Not yet!
Description: A typewriter-like experiment made to function in Geometry Dash!

Resources I used to help with my coding:
https://github.com/g-js-api/G.js
https://flowvix.github.io/gd-info-explorer/
https://github.com/SpeckyYT/gd_sfx

Install G.js (the library used here) and WSLiveEditor (a mod from Geode that places everything into the level) to run this code: 
G.js: npm install @g-js-api/g.js
WSLiveEditor: https://geode-sdk.org/mods/iandyhd3.wsliveeditor

*/

import '@g-js-api/g.js'

await $.exportConfig({
    type: 'live_editor',
    options: {
        info: true,
        level_name: "Notepad",
        replacePastObjects: true,
        trigger_pos_start: 30000
    }
});

extract({
    B5: -5,
    B4: -3,
    B3: -1,
    B2: 1,
    B1: 3,
    T1: 5,
    T2: 7,
    T3: 9,
    T4: 11
});

// Block borders
$.add(object({
    OBJ_ID: 1,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 0,
    Y: 45
}));
$.add(object({
    OBJ_ID: 1,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 30,
    Y: 15
}));
$.add(object({
    OBJ_ID: 1,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: -30,
    Y: 15
}));

// Init trigger
$.add(trigger({
    OBJ_ID: 2899,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    HIDE_GROUND: true,
    HIDE_MG: true,
    HIDE_P1: true,
    HIDE_ATTEMPTS: true
}));

// Remove BG effect
$.add(trigger({
    OBJ_ID: 1819,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true
}));

// Stops the main song from looping
$.add(trigger({
    OBJ_ID: 3605,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SONG_STOP: true
}));

// Song trigger
$.add(trigger({
    OBJ_ID: 1934,
    DONT_FADE: true,
    DONT_ENTER: true,
    406: 0.50, // Volume
    404: 0, // Speed
    432: 0, // Song channel
    413: true, // Looping enabled
    392: 10003092, // Song ID
    595: false, // Don't reset
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9524)]
}));

// Zoom trigger
$.add(trigger({
    OBJ_ID: 1913,
    DONT_FADE: true,
    DONT_ENTER: true,
    10: 0, // Time
    371: 0.500 // Zoom
}));

// Guide trigger
$.add(object({
    OBJ_ID: 2016,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    GROUPS: [group(9523)],
    X: 3000,
    Y: 3000,
    SCALE_X: 1,
    SCALE_Y: 1,
    506: 1.00, // Preview opacity
    371: 0.500 // Zoom value
}));

// Static trigger
$.add(trigger({
    OBJ_ID: 1914,
    DONT_FADE: true,
    DONT_ENTER: true,
    10: 0, // Duration
    71: 9523, // Target group
    212: true, // Follow
    213: 0, // Follow easing
    453: true, // Smooth velocity
    454: 0, // Smooth velocity modifier
    465: false, // Exit instant
    110: false // Exit static
}));

// Makes the BG have a certain color
$.add(trigger({
    OBJ_ID: 899,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    BLENDING: true,
    DURATION: 0,
    OPACITY: 1,
    TRIGGER_RED: 0,
    TRIGGER_GREEN: 0,
    TRIGGER_BLUE: 0,
    TARGET_COLOR: BG,
    36: 1
}));

// Switches the BG style to a plain color just in case I change my mind about having the BG black
$.add(trigger({
    OBJ_ID: 3029,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    533: 13
}));

// White text color
$.add(trigger({
    OBJ_ID: 899,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    BLENDING: true,
    DURATION: 0,
    OPACITY: 1,
    TRIGGER_RED: 255,
    TRIGGER_GREEN: 255,
    TRIGGER_BLUE: 255,
    TARGET_COLOR: color(1),
    36: 1
}));

// Makes every color inverted
$.add(trigger({
    OBJ_ID: 2921,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    176: 1.00, // Target
    179: 1.00, // R value
    180: 1.00, // G value
    189: 1.00, // B value
    188: false, // Edit RGB option
    190: false, // Tween RGB option
    194: false // Clamp RGB option
}));

// Filters the invert color effect to only apply between the BG layer & B5 layer
$.add(trigger({
    OBJ_ID: 2904,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    196: 0, // Bottom layer (BG)
    197: 3 // Top layer (B5)
}));

// Fade transition
$.add(object({
    OBJ_ID: 211,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3000,
    Y: 3000,
    GROUPS: [group(9526)],
    SCALE_X: 40,
    SCALE_Y: 40,
    COLOR: BLACK,
    Z_LAYER: T3,
    Z_ORDER: 100
}));

// Bottom black bar
$.add(object({
    OBJ_ID: 211,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3000,
    Y: 2530,
    SCALE_X: 40,
    SCALE_Y: 10,
    COLOR: BLACK,
    Z_LAYER: T4,
    Z_ORDER: 100
}));

// Top black bar
$.add(object({
    OBJ_ID: 211,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3000,
    Y: 3470,
    SCALE_X: 40,
    SCALE_Y: 10,
    COLOR: BLACK,
    Z_LAYER: T4,
    Z_ORDER: 100
}));

// Left black bar
$.add(object({
    OBJ_ID: 211,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 2370,
    Y: 3000,
    SCALE_X: 10,
    SCALE_Y: 40,
    COLOR: BLACK,
    Z_LAYER: T4,
    Z_ORDER: 100
}));

// Right black bar
$.add(object({
    OBJ_ID: 211,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3630,
    Y: 3000,
    SCALE_X: 10,
    SCALE_Y: 40,
    COLOR: BLACK,
    Z_LAYER: T4,
    Z_ORDER: 100
}));

// Intro text
$.add(object({
    OBJ_ID: 914,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3000,
    Y: 3000,
    SCALE_X: 1,
    SCALE_Y: 1,
    Z_LAYER: T4,
    Z_ORDER: 100,
    COLOR: color(1),
    GROUPS: [group(9525)],
    TEXT: Buffer.from("\"Notepad\"\n\nFiddle around with a notepad!\n\nYou can type up to\n70 characters.\n\n\n\nThis level was made with G.js! :D\nMade by Elijah Wiencek on 2026-10-10").toString("base64")
}));

// Making the texts invisible initially
$.add(trigger({
    OBJ_ID: 1007,
    TARGET: group(9525),
    OPACITY: 0,
    DURATION: 0,
}));

// Makes the game start
$.add(object({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 0,
    Y: 15,
    SPAWN_DURATION: 0.5,
    TARGET: group(9527),
    TOUCH_TRIGGERED: true
}));

// Group 9,527 - alpha trigger for the first set of text's opacity to be 1
$.add(trigger({
    OBJ_ID: 1007,
    TARGET: group(9525),
    OPACITY: 1,
    DURATION: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9527)],
}));

// Notification SFX
$.add(trigger({
    OBJ_ID: 3602,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9527)],
    SFX_ID: 5327,
    SONG_VOLUME: 0.5,
    SONG_START: 50,
    SONG_END: 100
}));

const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,:;-'\"()[]{}<>!?@#$%^&*_+=/\\|~`";

// Character objects
for (let charsetIndex = 1; charsetIndex <= 70; charsetIndex++)
{
    for (let charIndex = 1; charIndex <= 68; charIndex++)
    {
        $.add(object({
            OBJ_ID: 914,
            DONT_FADE: true,
            DONT_ENTER: true,
            GLOW_DISABLED: true,
            Z_LAYER: B5,
            X: 945 + 1650 + ((charsetIndex - 1) % 28) * 30,
            Y: 1665 + 1455 - Math.floor((charsetIndex - 1) / 28) * 30,
            SCALE_X: 1,
            SCALE_Y: 1,
            TEXT: Buffer.from(charset[charIndex - 1]).toString("base64"),
            GROUPS: [group((charsetIndex - 1) * 68 + charIndex)]
        }));
    }
}

// This for-loop here is used to toggle on a certain character in that set (see the section of code explaining when Group 4,761 is spawned)
for (let i = 1; i <= 4760; i++)
{
    $.add(trigger({
        OBJ_ID: 1049,
        ACTIVATE_GROUP: true,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        TARGET: group(i),
        GROUPS: [group(4762 + i)]
    }));
}

// Spawning Group 4,762 toggles all the character sets off
for (let i = 1; i <= 4760; i++)
{
    $.add(trigger({
        OBJ_ID: 1049,
        ACTIVATE_GROUP: false,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        TARGET: group(i),
        GROUPS: [group(4762)]
    }));
}

// Spawning Group 4,762 also resets what you typed and assigns every character set's value to 0 (empty), just like a typewriter :D
for (let charsetIndex = 1; charsetIndex <= 70; charsetIndex++)
{
    $.add(trigger({
        OBJ_ID: 1817,
        COUNT: 0,
        OVERRIDE_COUNT: true,
        ITEM: charsetIndex,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(4762)]
    }));
}


// When Group 4,761 is spawned, every character set shows the character assigned to it
// For example, if charsetIndex = 2 and charIndex = 3, then the second character set out of the 70 character sets will show "C"
for (let charsetIndex = 1; charsetIndex <= 70; charsetIndex++)
{
    for (let charIndex = 1; charIndex <= 68; charIndex++)
    {
        $.add(trigger({
            OBJ_ID: 3620,
            ITEM_ID_1: charsetIndex,
            TYPE_1: ITEM,
            COMP_OP: EQ,
            MOD: 1,
            MOD_2: charIndex,
            COMP_OP_1: MUL,
            COMP_OP_2: MUL,
            TRUE_ID: group(4762 + (charsetIndex - 1) * 68 + charIndex),
            DONT_FADE: true,
            DONT_ENTER: true,
            GLOW_DISABLED: true,
            SPAWN_TRIGGERED: true,
            MULTI_TRIGGER: true,
            GROUPS: [group(4761)]
        }));
    }
}