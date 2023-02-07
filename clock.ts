class Time {
  private element: HTMLElement;

  //get a reference to the HTML element
  
  constructor(elementId: string) {

    //type guard to check if the element is not null

    const element = document.getElementById(elementId);
    if (element instanceof HTMLElement) {
      this.element = element;
    } else {
      throw new Error(`Element with id "${elementId}" not found`);
    
  }
  }

  start() {
    setInterval(() => {
      this.element.innerHTML = new Date().toLocaleTimeString();
    }, 1000);
  }
}

const time = new Time("timeKeeper");
time.start();