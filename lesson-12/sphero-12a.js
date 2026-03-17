//  STEP 1: Create the main program asynchronous function;
async function startProgram() {
    //  STEP 2: Instruct the main LED light with rgb (using object notation);
    setMainLed({ "r": 0, "g": 255, "b": 150 });
    //  STEP 3: Text-to-speech;
    await speak("Starting the lesson program sequence.", false);
    //  STEP 4: Wait for a short period of time;
    await delay(1);
    //  STEP 5: Construct a loop that will iterate 4 times;
    for (let i = 0; i < 4; i++) {
        //  STEP 6: Set the main LED light to a random color;
        setMainLed(getRandomColor());
        //  STEP 7: Play a fun random sound;
        //  Note: Bolt+ supports a wide variety of library sounds;
        await Sound.Game.Coin.play(true);
        //  STEP 8: Use the LCD display screen;
        //  This shows the current loop iteration on the Bolt+ screen;
        await setDisplayText("Go!", { "r": 0, "g": 0, "b": 0 }, { "r": 255, "g": 255, "b": 255 }, 1);
        //  STEP 9: Turn 90 degrees, then roll at speed 0-255, for 1 second;
        //  We multiply 90 by i to make it turn in a square pattern;
        await roll(90 * i, 100, 1);
        //  STEP 10: Announce the current navigational heading in degrees;
        await speak("Heading is " + ("" + getHeading()) + " degrees", true);
        //  STEP 11: Take a one second break;
        await delay(1);
    }

    //  STEP 12: Say how far the robot has travelled (in cm);
    await speak("Total distance travelled is " + ("" + getDistance()) + " centimeters", true);
}

