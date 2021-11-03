import express from "express";

export abstract class ComonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }

    get getName(): string {
        return this.name;
    }

    abstract configureRoutes(): express.Application;
}
