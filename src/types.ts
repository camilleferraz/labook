export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN"
}

export interface TokenPayload {
    id: string,
	name: string,
    role: USER_ROLES
}

export interface UserDB {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    created_at: string
}

export interface UserModel {
    id: string,
    name: string,
    email: string,
    password: string,
    role: USER_ROLES,
    createdAt: string
}

export interface PostsDB {
    id: string,
    creator_id:string,
    content:string,
    likes:number,
    dislikes:number,
    created_at:string,
    updated_at:string
}

export interface PostsModel {
    id: string,
    creatorId:string,
    content:string,
    likes:number,
    dislikes:number,
    createdAt:string,
    updatedAt:string
}

export interface PostsByUserDB {
    id: string,
    content: string,
    likes:number,
    dislikes:number,
    created_at:string,
    updated_at:string,
    creator_id:string
}

export interface LikesDislikesDB{
    user_id:string,
    post_id:string,
    like:number
}
