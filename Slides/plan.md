# Talk Outline


---
## Intro



---

## Intro to testing

Why do we test - Confidence - Stability - Documentation

What types of testing

- Show testing pyramid
- This talk is mostly focussing on the high value E2E testing
- Explain why unit testing is easy regardless of how complex something is ( this is why we should so muc more of it than what Im about to show )
- So why write these tests at all ? They cover reality and give us the most confidence (Maybe an example of passing unit tests but not passing in deployment)

---

---

## Example 1

### Perceived Wisdom

The Web is in 2D

### Example

TBC

### How to test

TBC

---

---

## Example 2

### Perceived Wisdom

Our web apps communicate to servers
Explain general structure of end to end testing.

### Example

https://www.youtube.com/watch?v=8wfG8ngFvPk
A simple PrPC example (wuph the office)

### How To Test

Spin up two browser windows using puppeteer
Send from one check sending stuff happens nicely
Receive in a second window check it receives

---

---

## Example 3

### Perceived Wisdom

Our apps are run on Computer and laptop browser.

Explain tests are usually run just on laptops computers and CI machines, for most testing frameworks running mobile tests just means simulating CPU and screen size but not actually testing on mobile devices.

### Example
Simple web app test show running in regular browser (Could just be the first page of the wupf example)

### How To Test
Use test cafe to open on phone and tablet, (Maybe another device if I can find one) Maybe show another example with VR (Cardboard ? Vive ?)

--- 

---

## Example 4

### Perceived Wisdom

We interact with our browsers with our hands

Tests usually involve interacting with web app using the mouse and keyboard. Really good tests also includes touch inputs but what happens on apps with no keyboad, mouse or touch input

### Example
Simple web app showing input with either steering wheel or midi in

### How To Test
Example test with simulated input, Fake midi input or fake gamepad ?

--- 

---

## Example 5

### Perceived Wisdom
Users interact with our web apps through HTML, CSS and JavaScript.

### Example
Slack App (Sparkline)

### How To Test
Use Slack replay request tool to replay requests, use pixel by pixel comparison for images.

--- 

---

## Summary

- Testing is probably moving slower than the web is
- Applying general testing principles allows us to test most scenarios
- E2E tests are the hardest things to apply to more creative cases
- But no matter how new the Web API or approach is there is always  way of getting it tested.


