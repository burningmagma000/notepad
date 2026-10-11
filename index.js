/*

Project name: Notepad
Programmer: Elijah Wiencek
Started on: 2026-05-24
Finished: 2026-10-11
Description: A typewriter-like experiment made to function in Geometry Dash!

Resources I used to help with my coding:
https://g-js-api.github.io/G.js/
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

// Z-Layers
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
    Y: 75
}));
$.add(object({
    OBJ_ID: 1,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 0,
    Y: 15
}));
$.add(object({
    OBJ_ID: 1,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 30,
    Y: 45
}));
$.add(object({
    OBJ_ID: 1,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: -30,
    Y: 45
}));
$.add(object({ // Spawn point
    OBJ_ID: 3809,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 0,
    Y: 45,
    GROUPS: [group(9986)]
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

// Stops the main song
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
    406: 0.35, // Volume
    404: 0, // Speed
    432: 0, // Song channel
    413: true, // Looping enabled
    392: 10003092, // Song ID
    595: false, // Don't reset
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
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

// Mode trigger
$.add(trigger({
    OBJ_ID: 2925,
    DONT_FADE: true,
    DONT_ENTER: true,
    111: true // Free mode
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

// Horizontal line color
$.add(trigger({
    OBJ_ID: 899,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    BLENDING: false,
    DURATION: 0,
    OPACITY: 1,
    TRIGGER_RED: 40,
    TRIGGER_GREEN: 10,
    TRIGGER_BLUE: 10,
    TARGET_COLOR: color(3),
    36: 1
}));
// Horizontal lines
for (let yValueOfHorizontalLine = 2700; yValueOfHorizontalLine <= 3240; yValueOfHorizontalLine += 30)
{
    $.add(object({
        OBJ_ID: 211,
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        X: 3000,
        Y: yValueOfHorizontalLine,
        SCALE_X: 32,
        SCALE_Y: 0.075,
        COLOR: color(3),
        Z_LAYER: B5,
        Z_ORDER: 1
    }));
}

// Margin line (vertical) color
$.add(trigger({
    OBJ_ID: 899,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    BLENDING: false,
    DURATION: 0,
    OPACITY: 1,
    TRIGGER_RED: 10,
    TRIGGER_GREEN: 40,
    TRIGGER_BLUE: 40,
    TARGET_COLOR: color(4),
    36: 1
}));
// Margin line (vertical)
$.add(object({
    OBJ_ID: 211,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 2580,
    Y: 3000,
    SCALE_X: 0.075,
    SCALE_Y: 21.375,
    COLOR: color(4),
    Z_LAYER: B5,
    Z_ORDER: 2
}));

// 3 holes color
$.add(trigger({
    OBJ_ID: 899,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    BLENDING: false,
    DURATION: 0,
    OPACITY: 1,
    TRIGGER_RED: 50,
    TRIGGER_GREEN: 50,
    TRIGGER_BLUE: 50,
    TARGET_COLOR: color(5),
    36: 1
}));
// 3 holes
for (let yValueOfHole = 2782.5; yValueOfHole <= 3217.5; yValueOfHole += 217.5)
{
    $.add(object({
        OBJ_ID: 3802,
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        X: 2545,
        Y: yValueOfHole,
        SCALE_X: 1,
        SCALE_Y: 1,
        COLOR: color(5),
        Z_LAYER: B4,
        Z_ORDER: 3
    }));
}

// Switches the BG style to a plain color just in case I change my mind about having the BG black
$.add(trigger({
    OBJ_ID: 3029,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    533: 13
}));

// White text color (becomes black due to color inversion)
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

// Filters the invert color effect to only apply between the BG layer & B4 layer
$.add(trigger({
    OBJ_ID: 2904,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    196: 0, // Bottom layer (BG)
    197: 4 // Top layer (B4)
}));

// Black rectangle
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
    SCALE_X: 0.875,
    SCALE_Y: 0.875,
    Z_LAYER: T4,
    Z_ORDER: 100,
    COLOR: color(1),
    GROUPS: [group(9525)],
    TEXT: Buffer.from("Project: \"Notepad\"\n\n Description: Fiddle around with a 70-character notepad!\n\n\n\n\nThis level was made with G.js!\n\nMade by Elijah Wiencek on 2026-10-11\n\nView the source code at:\nhttps://github.com/burningmagma000/notepad/blob/main/index.js\n\n\n\n\nPress any valid input to continue").toString("base64")
}));

// Making the texts invisible initially
$.add(trigger({
    OBJ_ID: 1007,
    TARGET: group(9525),
    OPACITY: 0,
    DURATION: 0,
}));

// Makes the intro text appear
$.add(object({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 0,
    Y: 45,
    SPAWN_DURATION: 0.5,
    TARGET: group(9527),
    TOUCH_TRIGGERED: true
}));

// Starting the playthrough (a call on Group 9,524)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 1,
    TARGET: group(9524),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9528)],
}));

// Stops the Notification SFX
$.add(trigger({
    OBJ_ID: 3603,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SFX_GROUP: 1,
    SONG_STOP: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9528)]
}));

// Clears every character set at initialization
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0,
    TARGET: group(4762),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9524)],
}));

// Spawns Group 9,804 (the preview character set position checker) instantly when the main program begins
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0,
    TARGET: group(9804),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9524)],
}));

// Starts the preview character set blinking animation
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9805),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9524)],
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

// First ever input (events 69, 71, and 73)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9527)],
    TARGET: group(9528),
    EVENTS: "69.71.73"
}));

// Alpha trigger for pressing a valid key; gets rid of the first text (group 9,525)
$.add(trigger({
    OBJ_ID: 1007,
    TARGET: group(9525),
    OPACITY: 0,
    DURATION: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9528)]
}));

// Gets rid of the intro black BG
$.add(trigger({
    OBJ_ID: 1007,
    TARGET: group(9526),
    OPACITY: 0,
    DURATION: 0,
    GROUPS: [group(9524)],
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
}));

// Notification SFX
$.add(trigger({
    OBJ_ID: 3602,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9527)],
    SFX_ID: 5327,
    SFX_GROUP: 1,
    SONG_VOLUME: 0.5,
    SONG_START: 50,
    SONG_END: 100
}));

// Character set locations
for (let charsetIndex = 1; charsetIndex <= 71; charsetIndex++)
{
    $.add(object({
        OBJ_ID: 1,
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        135: true, // Hide
        X: 2595 + ((charsetIndex - 1) % 28) * 30,
        Y: 3225 - Math.floor((charsetIndex - 1) / 28) * 30,
        GROUPS: [group(9529 + charsetIndex - 1)]
    }));
}

// The 68 ways a character can be shown in a character set
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
            COLOR: color(1),
            X: 945 + 1650 + ((charsetIndex - 1) % 28) * 30,
            Y: 1665 + 90 + 1455 + 15 - Math.floor((charsetIndex - 1) / 28) * 30,
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

// Spawning Group 9,974 toggles all the character sets off (but does not reset the data)
for (let i = 1; i <= 4760; i++)
{
    $.add(trigger({
        OBJ_ID: 1049,
        ACTIVATE_GROUP: false,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        TARGET: group(i),
        GROUPS: [group(9974)]
    }));
}

// Group 4,762 toggles all the character sets off AND resets the data
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0,
    TARGET: group(9974),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(4762)]
}));

// Spawning Group 4,762 also resets what you typed and assigns every character set's value to 0 (empty), just like a typewriter :D
for (let charsetIndex = 1; charsetIndex <= 70; charsetIndex++)
{
    $.add(trigger({
        OBJ_ID: 3619,
        ITEM_TARGET: charsetIndex,
        ITEM_TARGET_TYPE: ITEM,
        TYPE_1: NONE,
        TYPE_2: NONE,
        ASSIGN_OP: EQ,
        OP_1: ADD,
        OP_2: MUL,
        MOD: 0,
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








// Preview character set (shows what character will be typed)
for (let charIndex = 1; charIndex <= 68; charIndex++)
{
    // Text object
    $.add(object({
        OBJ_ID: 914,
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        Z_LAYER: B4,
        COLOR: color(1),
        X: 2595,
        Y: 3225,
        SCALE_X: 1,
        SCALE_Y: 1,
        TEXT: Buffer.from(charset[charIndex - 1]).toString("base64"),
        GROUPS: [group(9981), group(9599 + charIndex)]
    }));

    // True condition (toggles a certain character ON)
    $.add(trigger({
        OBJ_ID: 1049,
        ACTIVATE_GROUP: true,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        TARGET: group(9599 + charIndex),
        GROUPS: [group(9667 + charIndex)]
    }));

    // False condition (toggles a certain character OFF)
    $.add(trigger({
        OBJ_ID: 1049,
        ACTIVATE_GROUP: false,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        TARGET: group(9599 + charIndex),
        GROUPS: [group(9735 + charIndex)]
    }));

    // Checks what character the preview character set is, and toggles on the character the player wants to type
    $.add(trigger({
        OBJ_ID: 3620,
        ITEM_ID_1: 72,
        TYPE_1: ITEM,
        COMP_OP: EQ,
        MOD: 1,
        MOD_2: charIndex,
        COMP_OP_1: MUL,
        COMP_OP_2: MUL,
        TRUE_ID: group(9667 + charIndex),
        FALSE_ID: group(9735 + charIndex),
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9804)]
    }));
}

// Set of conditional statements based on how many character sets are taken
// Depending on the position the preview character set is in, a corresponding group will spawn
// A move trigger is also called on to move the preview character set to where the next character set will exist
for (let previewCharsetPosition = 0; previewCharsetPosition <= 70; previewCharsetPosition++)
{
    $.add(trigger({
        OBJ_ID: 3620,
        ITEM_ID_1: 71,
        TYPE_1: ITEM,
        COMP_OP: EQ,
        MOD: 1,
        MOD_2: previewCharsetPosition,
        COMP_OP_1: MUL,
        COMP_OP_2: MUL,
        TRUE_ID: group(9806 + previewCharsetPosition),
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9805)]
    }));

    $.add(trigger({
        OBJ_ID: 901,
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        DURATION: 0,
        TARGET: group(9981),
        100: true, // Target Mode
        71: 9529 + previewCharsetPosition, // TargetPos Group ID
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9806 + previewCharsetPosition)]
    }));

    // Toggles on the entire preview character set
    $.add(trigger({
        OBJ_ID: 1049,
        ACTIVATE_GROUP: true,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        TARGET: group(9981),
        GROUPS: [group(9806 + previewCharsetPosition)]
    }));

    // Calls on the position checker (Group 9,804)
    $.add(trigger({
        OBJ_ID: 1268,
        SPAWN_DURATION: 0,
        TARGET: group(9804),
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9806 + previewCharsetPosition)]
    }));

    // Toggles off character sets when deleted (P1 Left Push)
    if (previewCharsetPosition < 70)
    {
        for (let charIndex = 1; charIndex <= 68; charIndex++)
        {
            $.add(trigger({
                OBJ_ID: 1049,
                ACTIVATE_GROUP: false,
                SPAWN_TRIGGERED: true,
                MULTI_TRIGGER: true,
                TARGET: group(previewCharsetPosition * 68 + charIndex),
                GROUPS: [group(9806 + previewCharsetPosition)]
            }));
        }
    }
}


// BLINK ANIMATION FOR PREVIEW CHARACTER SET
let previewCharacterSetBlinkInterval = 0.5;

$.add(trigger({
    OBJ_ID: 1007,
    TARGET: group(9981),
    OPACITY: 0.67,
    DURATION: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9877)]
}));

// Interval BEFORE the opacity is 0
$.add(trigger({
    OBJ_ID: 1268,
    SPAWN_DURATION: previewCharacterSetBlinkInterval,
    TARGET: group(9878),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9877)]
}));

$.add(trigger({
    OBJ_ID: 1007,
    TARGET: group(9981),
    OPACITY: 0,
    DURATION: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9878)]
}));

// Interval AFTER the opacity is 0
$.add(trigger({
    OBJ_ID: 1268,
    SPAWN_DURATION: previewCharacterSetBlinkInterval,
    TARGET: group(9877),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9878)]
}));





// RESETTING THE BLINK ANIMATION

// Stop triggers (Object ID 1,616) are made here to stop the loop

$.add(trigger({
    OBJ_ID: 1616,
    TARGET: group(9877),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9805)]
}));

$.add(trigger({
    OBJ_ID: 1616,
    TARGET: group(9878),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9805)]
}));

// This spawn trigger starts the blinking loop again (with a small delay of 0.0050s to guarantee it starts on low-end devices such as my iPad 11)
$.add(trigger({
    OBJ_ID: 1268,
    SPAWN_DURATION: 0.0050,
    TARGET: group(9988),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9805)]
}));

$.add(trigger({
    OBJ_ID: 1268,
    SPAWN_DURATION: 0,
    TARGET: group(9877),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9988)]
}));








// EVENT TRIGGERS

// P1 Left Push (Item ID 73)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9892),
    EXTRA_ID_2: 1,
    EVENTS: 71
}));

// Item ID 73 += 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 73,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9879)]
}));

// P1 Left Release (Item ID 73)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9885),
    EXTRA_ID_2: 1,
    EVENTS: 72
}));

// Item ID 73 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 73,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9885)]
}));

// P1 Right Push (Item ID 74)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9893),
    EXTRA_ID_2: 1,
    EVENTS: 73
}));

// Item ID 74 += 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 74,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9880)]
}));

// P1 Right Release (Item ID 74)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9886),
    EXTRA_ID_2: 1,
    EVENTS: 74
}));

// Item ID 74 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 74,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9886)]
}));

// P1 Jump Push (Item ID 75)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9894),
    EXTRA_ID_2: 1,
    EVENTS: 69
}));

// Item ID 75 += 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 75,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9881)]
}));

// P1 Jump Release (Item ID 75)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9887),
    EXTRA_ID_2: 1,
    EVENTS: 70
}));

// Item ID 75 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 75,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9887)]
}));

// P2 Left Push (Item ID 76)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9895),
    EXTRA_ID_2: 2,
    EVENTS: 71
}));

// Item ID 76 += 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 76,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9882)]
}));

// P2 Left Release (Item ID 76)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9888),
    EXTRA_ID_2: 2,
    EVENTS: 72
}));

// Item ID 76 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 76,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9888)]
}));

// P2 Right Push (Item ID 77)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9896),
    EXTRA_ID_2: 2,
    EVENTS: 73
}));

// Item ID 77 += 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 77,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9883)]
}));

// P2 Right Release (Item ID 77)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9889),
    EXTRA_ID_2: 2,
    EVENTS: 74
}));

// Item ID 77 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 77,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9889)]
}));

// P2 Jump Push (Item ID 78)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9897),
    EXTRA_ID_2: 2,
    EVENTS: 69
}));

// Item ID 78 += 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 78,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9884)]
}));

// P2 Jump Release (Item ID 78)
$.add(trigger({
    OBJ_ID: 3604,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: false,
    MULTI_TRIGGER: false,
    TARGET: group(9890),
    EXTRA_ID_2: 2,
    EVENTS: 70
}));

// Item ID 78 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 78,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9890)]
}));






// Turning input OFF (Group 9,891)

// Item ID 73 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 73,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9891)]
}));

// Item ID 74 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 74,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9891)]
}));

// Item ID 75 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 75,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9891)]
}));

// Item ID 76 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 76,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9891)]
}));

// Item ID 77 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 77,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9891)]
}));

// Item ID 78 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 78,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9891)]
}));

// Item ID 79 = 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 79,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9891)]
}));

// Calls on Group 9,891 (turns off input when starting the level)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0,
    TARGET: group(9891)
}));

// Turns on input after the intro is done
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 79,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9524)]
}));

// If Item ID 79 = 1, then inputs are allowed!

// P1 Left Push
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 79,
    TYPE_1: ITEM,
    COMP_OP: EQ,
    MOD: 1,
    MOD_2: 1,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9879),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9892)]
}));

// P1 Right Push
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 79,
    TYPE_1: ITEM,
    COMP_OP: EQ,
    MOD: 1,
    MOD_2: 1,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9880),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9893)]
}));

// P1 Jump Push
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 79,
    TYPE_1: ITEM,
    COMP_OP: EQ,
    MOD: 1,
    MOD_2: 1,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9881),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9894)]
}));

// P2 Left Push
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 79,
    TYPE_1: ITEM,
    COMP_OP: EQ,
    MOD: 1,
    MOD_2: 1,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9882),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9895)]
}));

// P2 Right Push
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 79,
    TYPE_1: ITEM,
    COMP_OP: EQ,
    MOD: 1,
    MOD_2: 1,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9883),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9896)]
}));

// P2 Jump Push
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 79,
    TYPE_1: ITEM,
    COMP_OP: EQ,
    MOD: 1,
    MOD_2: 1,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9884),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9897)]
}));







// Preview character set position index (Item ID 71) - initialized as 0
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 71,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0
}));

// Preview character set value (Item ID 72) - initialized as "A"
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 72,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1
}));








// Checking to see if Item ID 73 = 1 (P1 Left Push); spawns Group 9,898
$.add(trigger({
    OBJ_ID: 1611,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    ITEM: 73,
    COUNT: 1,
    TARGET: group(9898),
    ACTIVATE_GROUP: true,
    COUNT_MULTI_ACTIVATE: true
}));

// Checking to see if Item ID 74 = 1 (P1 Right Push); spawns Group 9,971
$.add(trigger({
    OBJ_ID: 1611,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    ITEM: 74,
    COUNT: 1,
    TARGET: group(9971),
    ACTIVATE_GROUP: true,
    COUNT_MULTI_ACTIVATE: true
}));

// Checking to see if Item ID 75 = 1 (P1 Jump Push); spawns Group 9,973
$.add(trigger({
    OBJ_ID: 1611,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    ITEM: 75,
    COUNT: 1,
    TARGET: group(9973),
    ACTIVATE_GROUP: true,
    COUNT_MULTI_ACTIVATE: true
}));

// Group 9,898 - Backspace function; if Item ID 71 (the amount of characters typed) > 0, then Group 9,970 will be spawned. Otherwise, nothing will happen
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 71,
    TYPE_1: ITEM,
    COMP_OP: GREATER,
    MOD: 1,
    MOD_2: 0,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9970),
    FALSE_ID: group(9805),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9898)]
}));

for (let charsetIndex = 1; charsetIndex <= 70; charsetIndex++)
{
    $.add(trigger({ // Checks how many characters have been typed (including spaces) and calls on the function below depending on the character set index
        OBJ_ID: 3620,
        ITEM_ID_1: 71,
        TYPE_1: ITEM,
        COMP_OP: EQ,
        MOD: 1,
        MOD_2: charsetIndex - 1,
        COMP_OP_1: MUL,
        COMP_OP_2: MUL,
        TRUE_ID: group(9898 + charsetIndex),
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9969)]
    }));

    $.add(trigger({ // Sets the corresponding character set equal to the preview character set
        OBJ_ID: 3619,
        ITEM_ID_2: 80,
        ITEM_TARGET: charsetIndex,
        ITEM_TARGET_TYPE: ITEM,
        TYPE_1: NONE,
        TYPE_2: ITEM,
        ASSIGN_OP: EQ,
        OP_1: ADD,
        OP_2: MUL,
        MOD: 1,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9898 + charsetIndex)]
    }));

    $.add(trigger({ // Starts the refresh to update what should show the correct output
        OBJ_ID: 1268,
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        SPAWN_DURATION: 0.0001,
        TARGET: group(9977),
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9898 + charsetIndex)]
    }));
}


// BACKSPACE VALUES ARE MADE HERE

// Item ID 80: the value that will be written to the corresponding character set
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 80,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9970)]
}));

// Item ID 71 (the position of the preview character set is decremented by 1)
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 71,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: SUB,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9970)]
}));

// Item ID 71's value is set equal to Item ID 80's value
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9969),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9970)]
}));


// The preview character set is placed in the correct area again, and the blink animation is reset; the old character set has been erased.
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9805),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9970)]
}));

// If Item ID 71 is less than 70 (the character limit), then when P1 Right Push is executed, a space will be acted upon which makes a blank character set
// Also, Item ID 71 is incremented by 1 when Group 9,972 is called
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 71,
    TYPE_1: ITEM,
    COMP_OP: LESS,
    MOD: 1,
    MOD_2: 70,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9972),
    FALSE_ID: group(9805),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9971)]
}));

// Group 9,972

$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 71,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9972)]
}));

$.add(trigger({ // Preview character set is updated to be at the correct place & its blinking animation is reset.
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9805),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9972)]
}));









// P1 Jump Push - Sets the value of the corresponding character set equal to what is previewed (in other words the character is typed)
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_ID_2: 72,
    ITEM_TARGET: 80,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: ITEM,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9973)]
}));

// The old position of the preview character set is copied to Item ID 81 before it's changed
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_ID_2: 71,
    ITEM_TARGET: 81,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: ITEM,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9973)]
}));

// This is the root of the typing execution (calling on Group 9,975)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9975),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9973)]
}));

// Instantly types the character into the set (calling on Group 9,980)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0,
    TARGET: group(9980),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9975)]
}));

// Spawning Group 9,979 after 0.0001 seconds to ensure there are no conflicting functions
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9979),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9975)]
}));

// Group 9,979 - calls on Group 9,976
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9976),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9979)]
}));

// Group 9,976 - P1 Jump Push can increment the preview character set's index by 1 similar to P1 Right Push (happens after a character is typed)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0,
    TARGET: group(9971),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9976)]
}));

// Group 9,977 - adds a small delay of 0.0001 seconds to ensure the correct output when refreshing (calling Group 9,978)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9978),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9977)]
}));

// Group 9,978 - calls on Group 4,761 (refreshes every character set to display its correct value)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0,
    TARGET: group(4761),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9978)]
}));


// Group 9,980 - Types the character desired at the saved position
for (let charsetIndex = 1; charsetIndex <= 70; charsetIndex++)
{
    $.add(trigger({
        OBJ_ID: 3620,
        ITEM_ID_1: 81,
        TYPE_1: ITEM,
        COMP_OP: EQ,
        MOD: 1,
        MOD_2: charsetIndex - 1,
        COMP_OP_1: MUL,
        COMP_OP_2: MUL,
        TRUE_ID: group(9898 + charsetIndex),
        DONT_FADE: true,
        DONT_ENTER: true,
        GLOW_DISABLED: true,
        SPAWN_TRIGGERED: true,
        MULTI_TRIGGER: true,
        GROUPS: [group(9980)]
    }));
}







// COUNT TRIGGERS

// When Item ID 77 is equal to 1 (P2 Right Push is executed), Group 9,982 is spawned
$.add(trigger({
    OBJ_ID: 1611,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    ITEM: 77,
    COUNT: 1,
    TARGET: group(9982),
    ACTIVATE_GROUP: true,
    COUNT_MULTI_ACTIVATE: true
}));

// When Item ID 76 is equal to 1 (P2 Left Push is executed), Group 9,984 is spawned
$.add(trigger({
    OBJ_ID: 1611,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    ITEM: 76,
    COUNT: 1,
    TARGET: group(9984),
    ACTIVATE_GROUP: true,
    COUNT_MULTI_ACTIVATE: true
}));

// When Item ID 78 is equal to 1 (P2 Jump Push is executed), Group 9,987 is spawned
$.add(trigger({
    OBJ_ID: 1611,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    ITEM: 78,
    COUNT: 1,
    TARGET: group(9987),
    ACTIVATE_GROUP: true,
    COUNT_MULTI_ACTIVATE: true
}));










// Group 9,982 - increments the value of the preview character set by 1 (shows the next possible character that can be typed), unless it reaches ` (character 68 of 68)
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 72,
    TYPE_1: ITEM,
    COMP_OP: LESS,
    MOD: 1,
    MOD_2: 68,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9983),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9982)]
}));

// Item ID 72 += 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 72,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9983)]
}));

// Group 9,984 - decrements the value of the preview character set by 1 (shows the previous possible character that can be typed), unless it reaches A (character 1 of 68)
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 72,
    TYPE_1: ITEM,
    COMP_OP: GREATER,
    MOD: 1,
    MOD_2: 1,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9985),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9984)]
}));

// Item ID 72 -= 1
$.add(trigger({
    OBJ_ID: 3619,
    ITEM_TARGET: 72,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: SUB,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9985)]
}));

// Resets the blink animation on the preview character set when P2 Left/Right Push is executed, regardless of whether Item ID 72 can change or not
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 0.0001,
    TARGET: group(9805),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9982), group(9984)]
}));






// Instructions text
$.add(object({
    OBJ_ID: 914,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3000,
    Y: 2875,
    SCALE_X: 1,
    SCALE_Y: 1,
    Z_LAYER: B4,
    Z_ORDER: 100,
    COLOR: color(1),
    HVS_ENABLED: true,
    HVS: hsv(0, 1, 0.25),
    TEXT: Buffer.from("Instructions:\n\nP1 Left - Backspace\nP1 Right - Space\nP1 Jump - Enter key\n\nP2 Left - Change to the preceding character\nP2 Right - Change to the following character\nP2 Jump - Finish the level (must wait at least 60 seconds!)").toString("base64")
}));

// "Notepad" by burningmagma text
$.add(object({
    OBJ_ID: 914,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3000,
    Y: 3273.75,
    SCALE_X: 1.375,
    SCALE_Y: 1.375,
    Z_LAYER: B4,
    Z_ORDER: 100,
    COLOR: color(1),
    TEXT: Buffer.from("\"Notepad\" by burningmagma").toString("base64")
}));

// Time counter text
$.add(object({
    OBJ_ID: 1615,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3309,
    Y: 3015,
    SCALE_X: 1,
    SCALE_Y: 1,
    Z_LAYER: B4,
    Z_ORDER: 100,
    COLOR: color(1),
    HVS_ENABLED: true,
    HVS: hsv(0, 1, 0.25),
    GROUPS: [group(9994)],
    390: -2, // Label special (0 - unset, main time - -1, points - -2, attempts - -3)
    391: 1 // Label align (0 - unset, 1 - left, 2 - right)
}));
$.add(object({
    OBJ_ID: 1615,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3309,
    Y: 3015,
    SCALE_X: 1,
    SCALE_Y: 1,
    Z_LAYER: B4,
    Z_ORDER: 100,
    COLOR: color(1),
    HVS_ENABLED: true,
    HVS: hsv(0, 1, 0.25),
    GROUPS: [group(9993)],
    80: 82,
    391: 1
}));
$.add(object({
    OBJ_ID: 914,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3119.75,
    Y: 3015,
    SCALE_X: 1,
    SCALE_Y: 1,
    Z_LAYER: B4,
    Z_ORDER: 100,
    COLOR: color(1),
    HVS_ENABLED: true,
    HVS: hsv(0, 1, 0.25),
    TEXT: Buffer.from("Time passed (in seconds):").toString("base64")
}));

// Character amount text
$.add(object({
    OBJ_ID: 1615,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3363.875,
    Y: 3150,
    SCALE_X: 1,
    SCALE_Y: 1,
    Z_LAYER: B4,
    Z_ORDER: 100,
    COLOR: color(2),
    HVS_ENABLED: true,
    HVS: hsv(0, 1, 0.25),
    80: 71, // Item ID displayed
    391: 2 // Label align (0 - unset, 1 - left, 2 - right)
}));
$.add(object({
    OBJ_ID: 914,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    X: 3390,
    Y: 3150,
    SCALE_X: 1,
    SCALE_Y: 1,
    Z_LAYER: B4,
    Z_ORDER: 100,
    COLOR: color(2),
    HVS_ENABLED: true,
    HVS: hsv(0, 1, 0.25),
    TEXT: Buffer.from("/70").toString("base64")
}));

// The character amount text is initialized as white (becomes black after inversion)
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
    TARGET_COLOR: color(2),
    36: 1
}));

// If there are 61+ characters filled, then the character amount text will become cyan (becomes red after inversion)
$.add(trigger({
    OBJ_ID: 3620,
    ITEM_ID_1: 71,
    TYPE_1: ITEM,
    COMP_OP: GREATER_OR_EQ,
    MOD: 1,
    MOD_2: 61,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9989),
    FALSE_ID: group(9990),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9804)]
}));

// Cyan color (Item ID 71 >= 61)
$.add(trigger({
    OBJ_ID: 899,
    BLENDING: true,
    DURATION: 0,
    OPACITY: 1,
    TRIGGER_RED: 0,
    TRIGGER_GREEN: 255,
    TRIGGER_BLUE: 255,
    TARGET_COLOR: color(2),
    36: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9989)]
}));

// White color (Item ID 71 < 61)
$.add(trigger({
    OBJ_ID: 899,
    BLENDING: true,
    DURATION: 0,
    OPACITY: 1,
    TRIGGER_RED: 255,
    TRIGGER_GREEN: 255,
    TRIGGER_BLUE: 255,
    TARGET_COLOR: color(2),
    36: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9990)]
}));





// Point increment loop (1-second interval)
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 1,
    TARGET: group(9991),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9524)]
}));

$.add(trigger({
    OBJ_ID: 3619,
    478: 3,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: ADD,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 1,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9991)]
}));

$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 1,
    TARGET: group(9991),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9991)]
}));

// Point value - initialized as 0
$.add(trigger({
    OBJ_ID: 3619,
    478: 3,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9524)]
}));

// Toggles off the point display
$.add(trigger({
    OBJ_ID: 1049,
    ACTIVATE_GROUP: false,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    TARGET: group(9994),
    GROUPS: [group(9524)]
}));

// A 1-second delay is applied to toggle off the empty Item ID 82 display
$.add(trigger({
    OBJ_ID: 1268,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_DURATION: 1,
    TARGET: group(9995),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9524)]
}));

// Toggles off the empty Item ID 82 display
$.add(trigger({
    OBJ_ID: 1049,
    ACTIVATE_GROUP: false,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    TARGET: group(9993),
    GROUPS: [group(9995)]
}));

// Toggles back on the point display
$.add(trigger({
    OBJ_ID: 1049,
    ACTIVATE_GROUP: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    TARGET: group(9994),
    GROUPS: [group(9995)]
}));






// Group 9,987 - Checks whether 60 seconds after spawning Group 9,524 have passed
$.add(trigger({
    OBJ_ID: 3620,
    TYPE_1: 3,
    COMP_OP: GREATER_OR_EQ,
    MOD: 1,
    MOD_2: 60,
    COMP_OP_1: MUL,
    COMP_OP_2: MUL,
    TRUE_ID: group(9992),
    FALSE_ID: group(9996),
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9987)]
}));





// Group 9,992 (True condition of Group 9,987) - Ends the level
$.add(trigger({ // End trigger - Spawns Group 9,992 at activation (the triggers used to stop SFX, the song, etc.)
    OBJ_ID: 3600,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    TARGET: group(9998),
    NO_EFFECTS: true,
    NO_SFX: true,
    INSTANT_END: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: false,
    GROUPS: [group(9992)]
}));

$.add(trigger({ // Input is disabled
    OBJ_ID: 3619,
    ITEM_TARGET: 79,
    ITEM_TARGET_TYPE: ITEM,
    TYPE_1: NONE,
    TYPE_2: NONE,
    ASSIGN_OP: EQ,
    OP_1: ADD,
    OP_2: MUL,
    MOD: 0,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9998)]
}));

$.add(trigger({ // Stops the preview character set blink loop
    OBJ_ID: 1616,
    TARGET: group(9877),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9998)]
}));

$.add(trigger({ // Stops the preview character set blink loop
    OBJ_ID: 1616,
    TARGET: group(9878),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9998)]
}));

$.add(trigger({ // Stops the point increment loop
    OBJ_ID: 1616,
    TARGET: group(9991),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9998)]
}));

$.add(trigger({ // Stops and mutes SFX Group 1
    OBJ_ID: 3603,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SFX_GROUP: 1,
    SONG_VOLUME: 0,
    CHANGE_VOLUME: true,
    SONG_STOP: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9998)]
}));

$.add(trigger({ // Stops and mutes SFX Group 2
    OBJ_ID: 3603,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SFX_GROUP: 2,
    SONG_VOLUME: 0,
    CHANGE_VOLUME: true,
    SONG_STOP: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9998)]
}));

$.add(trigger({ // Stops and mutes the Song
    OBJ_ID: 3605,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SONG_VOLUME: 0,
    CHANGE_VOLUME: true,
    SONG_STOP: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9998)]
}));

$.add(trigger({ // Makes the black rectangle visible again
    OBJ_ID: 1007,
    TARGET: group(9526),
    OPACITY: 1,
    DURATION: 0,
    GROUPS: [group(9998)],
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true
}));





// Group 9,996 (False condition of Group 9,987) - Plays a buzzer SFX indicating you can't complete the level yet
$.add(trigger({
    OBJ_ID: 3603,
    DONT_FADE: true,
    DONT_ENTER: true,
    GLOW_DISABLED: true,
    SFX_GROUP: 2,
    SONG_STOP: true,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9996)]
}));

$.add(trigger({
    OBJ_ID: 1268,
    SPAWN_DURATION: 0.0050,
    TARGET: group(9997),
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9996)]
}));

$.add(trigger({
    OBJ_ID: 3602,
    SPAWN_TRIGGERED: true,
    MULTI_TRIGGER: true,
    GROUPS: [group(9997)],
    SFX_ID: 14061,
    SFX_GROUP: 2,
    SONG_VOLUME: 0.40
}));