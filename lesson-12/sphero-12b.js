// STEP 1: Create an event handler to listen for collisions, and add an anonymous function to handle the event
registerEvent(EventType.onCollision, async () => {
    // STEP 2: Stop the robot from rolling, set the main LED to red, and play an explosion animation
    stopRoll();
    setMainLed({
        r: 255,
        g: 0,
        b: 0
    });
    await setDisplayImage(DisplayImage.Explosion);
    // STEP 3a: Make the robot say, "Collision", create a variable for a random heading, then set the heading
    await speak("I crashed!", true);
    let newHeading = getHeading() + 180;
    await spin(newHeading, 0.5);
    // STEP 3b: Wait for half a second, set the main LED to white, and roll again
    await delay(0.5);
    setMainLed(getRandomColor());
    setSpeed(255);
});
// STEP 4: Run the program and see how the robot reacts to collisions
async function startProgram() {
    setMainLed({
        
    })
}