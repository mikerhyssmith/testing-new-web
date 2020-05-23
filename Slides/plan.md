# Talk Outline


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