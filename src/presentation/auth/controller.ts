import { Request, Response } from "express";

export class AuthController {

    constructor(){}

    registerUser = (req:Request, res:Response) => {
        res.json('RegisterUser');
    }

    loginUser = (req:Request, res:Response) => {
        res.json('loginuser');
    }

    validateEmail = (req:Request, res:Response) => {
        res.json('RegisterUser');
    }
}