import express, { Application } from "express";

class App {
    private app: Application;

    constructor() {
        this.app = express();
    }

    public bootstrap(): void {
        this.app.listen(process.env.PORT || 3000);
    }
}

export { App };