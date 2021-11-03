import { ComonRoutesConfig } from "../comon/comon.routes.config";

import express from 'express';

export class UsersRoutes extends ComonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UserRoutes');
    }

    configureRoutes() {
        this.app.route('/users')
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send('List of users');
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send('Post to users');
            });

        this.app.route('/users/:userId')
            .all((req: express.Request, res: express.Response, next: express.NextFunction) => {

                next();
            })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`Get requested for id: ${req.params.userId}`);
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`Put requested`);
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`Patch`);
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`Delete`);
            });

        return this.app;
    }
}