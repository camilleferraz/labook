import { UserDatabase } from "../database/UserDataBase"
import { GetUsersInput, GetUsersOutput } from "../dtos/usersDTO"
import { BadRequestError } from "../errors/BadRequestError"
import { User } from "../models/Users"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { TokenManager } from "../services/TokenManager"
import { USER_ROLES } from "../types"

export class UserBusiness{
    constructor(
        private userDataBase:UserDatabase,
        private idGenerator: IdGenerator,
        private tokenManager: TokenManager,
        private hashManager: HashManager){}

    public getAllUsers = async (input:GetUsersInput)=>{

        const {q,token} = input

        if(typeof q !== "string" && q !== undefined){
            throw new BadRequestError("'q' deve ser string ou undefined")
        }

        if(typeof token !== "string" ){
            throw new BadRequestError("Token não preenchido")
        }

        const payload = this.tokenManager.getPayload(token)

        if(payload === null){
            throw new BadRequestError ("Token não é válido")
        }

        if(payload.role !== USER_ROLES.ADMIN){
            throw new BadRequestError ("Permissão inválida para esta requisição.")
        }

        const userDB = await this.userDataBase.findUsers(q)

        const users = userDB.map((userDB)=>{
            const user = new User(
                userDB.id,
                userDB.name,
                userDB.email,
                userDB.password,
                userDB.role,
                userDB.created_at
            )

            return user.toBusinessModel()
        })

        const output: GetUsersOutput = users

        return output
    }
}