"use strict";
class Time {
    constructor(elementId) {
        const element = document.getElementById(elementId);

        // https://www.educba.com/typescript-instanceof/
        if (element instanceof HTMLElement) {
            this.element = element;
        }
        else {
            throw new Error(`Element with id "${elementId}" not found`);
        }
    }
    start() {
      //uses the setInterval function to update the HTML
        setInterval(() => {
          //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString
            this.element.innerHTML = new Date().toLocaleTimeString();
        }, 1000);
    }
}
const time = new Time("timeKeeper");
time.start();
