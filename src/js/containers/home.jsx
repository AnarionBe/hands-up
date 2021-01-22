import React from 'react'

export const Home = () => {
  return (
    <div className="home">
      <h1>Hands-up</h1>

      <h2>About this app</h2>
      <p>
        Hands-up is an hand tracking app. That means that it will be possible to controle any element only by moving your hand in front of your camera.
        <br/>
        The rules are simple: when you move your hand, you will see a rectangle with a dot in the middle.
        The rectangle represent your hand. The dot is the position that will be use to determine where your are aiming.
        <br/>
        To validate a click, you must stay some time (1 or 2 seconds) hover your target. 
        <br/><br/>
        Note that this is still a work in progress. This is not perfect and not complete. Other examples will come.
        <br/><br/>
        Sources are available <a href="https://github.com/AnarionBe/hands-up">here</a>.
      </p>

      <h2>Examples</h2>

      <h3>Numpad</h3>
      <p>
        In this example you will be able to interact with buttons to enter a number. This is inspired from
        &nbsp;<a href="https://qz.com/679782/programmers-imagine-the-most-ridiculous-ways-to-input-a-phone-number/">the most ridiculous UI to enter a phone number</a>.
      </p>

      <h3>Aim</h3>
      <p>
        Hit the targets to increase your score. Each target will stay for 2 seconds only
      </p>
    </div>
  );
}