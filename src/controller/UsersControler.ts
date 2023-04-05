import { Request, Response } from "express"
import { UserBusiness } from "../business/UsersBusiness"

export class UsersControler {
    constructor(
        private usersBusiness: UserBusiness
    ){}

public getAllUsers = async (req:Request, res: Response) =>{
    try {
        const input ={
            q:req.query.q,
            token:req.headers.authorization
        }

        const output = await this.usersBusiness.getAllUsers(input)

        res.status(200).send(output)

    } catch (error) {
        console.log(error)
    
        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        } 
    }
}

public signup = async (req:Request, res: Response) =>{
    try {
        const input ={
            q:req.query.q,
            token:req.headers.authorization
        }

        const output = await this.usersBusiness.getAllUsers(input)

        res.status(200).send(output)

    } catch (error) {
        console.log(error)
    
        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        } 
    }
}

public login = async (req:Request, res: Response) =>{
    try {
        const input ={
            q:req.query.q,
            token:req.headers.authorization
        }

        const output = await this.usersBusiness.getAllUsers(input)

        res.status(200).send(output)

    } catch (error) {
        console.log(error)
    
        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        } 
    }
}

}