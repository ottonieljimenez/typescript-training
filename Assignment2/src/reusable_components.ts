class Button {
    constructor(public label: string, public font: string, public fontSize: string) {}

    show(): void {
        console.log(`BUTTON: label: '${this.label}', font: '${this.font}', font-size: '${this.fontSize}'`);
    }

    updateLabel(label: string): void {
        this.label = label;
    }

    updateFont(font: string): void {
        this.font = font;
    }

    updateFontSize(fontSize: string): void {
        this.fontSize = fontSize;
    }
}

console.log("**************************** BUTTON 1 TEST: ****************************\n")

const button1 = new Button("Proceed", "Sans serif", "x-small");
button1.show();

// update label of button 1
button1.updateLabel("Accept");
// show button1 after update
button1.show();

// update font of button 1
button1.updateFont("Consolas");
// show button1 after update
button1.show();

// update font size of button 1
button1.updateFontSize("xx-small");
// show button1 after update
button1.show();

console.log("\n**************************** BUTTON 2 TEST: ****************************\n")

const button2 = new Button("Reject", "Monospace", "large");
button2.show();

// update label of button 2
button2.updateLabel("Decline")
// show button2 after update
button2.show();

// update font of button 2
button2.updateFont("Typography")
// show button2 after update
button2.show();

// update font size of button 2
button2.updateFontSize("xxx-large");
button2.show();