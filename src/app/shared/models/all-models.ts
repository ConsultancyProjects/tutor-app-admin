export interface Category {
    id: number;
    image: string;
    name: string;
    releaseDate: Date;
    platforms: number[];
    description: string;
}
  
export interface ChildVideoCategory {
    childCategoryId: number;
    name: string;
    parentCategory: VideoCategory;
}

export interface VideoCategory {
    categoryId: number;
    categoryName: string;
}

export interface AuthenticationRequest {
    username: string;
    password: string;
}

export interface AuthenticationResponse{ 
    jwt: string;
}

export interface ErrorMessage {
    statusCode: number;
	timestamp: Date;
	message: string;
	description: string;
}

export interface MyUserDetails {
    userName: string;
    password: string;
    active: boolean;
    authorities: string[];
}
export interface User {
    userName: string;
    password: string;
    active: boolean;
    authorities: string[];
}
export interface Role {
    id:number;
    name:string;
}
export interface Video {
    videoId: number;
    videoName: string;
    s3Path: string;
    createdDate: Date;
}

export interface User {
    id: number;
    userId: string;
    password: string;
    email: string;
    name: string;
    role: Role;
}

export interface TimeTable {
    scheduleId: number;
    videoId: Video;
    tutorId: User;
    fromDate: Date;
    toDate: Date;
}

export interface UserVideoCategory {
	id: number;
	user: User;
    childVideoCategory:ChildVideoCategory;
}
