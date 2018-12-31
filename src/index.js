import 'style/App.css';

class App {
    variable = 'Hello Electron WebPack!';
    
    constructor() {
        console.info(this.variable);
    }
}

new App();
