
export interface IConstants {

}

export interface IROUTES {
    ACCOUNT_LOGIN : string;
    LOGIN: string;
    HOME: string,
    REGISTER: string
}
export const ROUTES: IROUTES = {
    ACCOUNT_LOGIN: 'account/login',
    LOGIN: `login`,
    HOME: `/`,
    REGISTER: `/register`,
}

export const GENERIC_CONSTANTS = {
    LOGGEDIN_USER: 'LOGGEDIN_USER',
    LOGGEDIN_TOKEN: 'LOGGEDIN_TOKEN'
}


export const API_ENDPOINTS = {
    
    LOGIN: `login`,
    REGISTER: `register`,
    CATEGORY : {
        API: 'video-categories',
        GET_ALL: '/',
        ADD: '/',
        ADD_ALL: '/all',
        DELETE: (categoryId: string) => `/?categoryId=${categoryId}`
    },
    ROLE: {
        API: 'roles',
        GET_ALL: '/',
        UPDATE: (roleId: string) => `/${roleId}`,
        UPDATEUSERROLE: (roleId: string, userId: string) => `/${roleId}?userName=${userId}`,
    },
    VIDEO: {
        API: 'videos',
        GET_VIDEO_METADATA: (videoId: number) => `/${videoId}/metadata/`,
        GET_ALL_VIDEOS_METADATA: '/all/metadata/',
        FIND_ALL_VIDEOS_BY_PARENT_CATEGORY: (categoryId: number) => `/all/metadata/${categoryId}`,
        GET_VIDEOS_BY_CHILD_CATEGORY_ID: (categoryId: number) => `/metadata/${categoryId}`,
        ADD_VIDEO_METADATA: '/metadata',
    },
    VIDEO_CATEGORY: {
        API: 'video-categories',
        GET_ALL_VIDEO_CATEGORIES: '/',
        ADD_PARENT_VIDEO_CATEGORY: '/',
        UPDATE_PARENT_VIDEO_CATEGORY: '/',
    },
    CHILD_VIDEO_CATEGORY: {
        API: 'child-video-categories',
        GET_ALL_CHILD_VIDEO_CATEGORIES: `/`,
        GET_ALL_VIDEO_CATEGORIES_BY_PARENT_CATEGORY_ID: (parentCategoryId: any) => `/${parentCategoryId}`,
        ADD_CHILD_VIDEO_CATEGORY: '/',
        UPDATE_CHILD_VIDEO_CATEGORY: '/',
    },
    USER_VIDEO_CATEGORY: {
        API: 'user-catgeory-mapping',
        GET_ALL_CATEGORIES_BY_USER_ID: (userId: string) => `/user/${userId}`,
        GET_ALL_CATEGORIES_BY_CATEGORY_ID: (categoryId: any) => `/category/${categoryId}`,
        ADD_USER_VIDEO_CATEGORY_ID: '/',
        UPDATE_USER_VIDEO_CATEGORY_ID: '/',
        DELETE_USER_CATEGORY: (userVideoCategoryId: any) => `/${userVideoCategoryId}`,
    },
    USER: {
        API: 'users',
        ALL_USERS: '/all',
        GET_ALL_USERS_BY_ROLE: (roleId: string) => `/?roleId=${roleId}`,
        GET_USER_PROFILE: (userId: string) => `/${userId}`,
        DELETE_USER_PROFILE: (userId: string) => `/${userId}`,
    },
    TIMETABLE: {
        API: 'timetable',
        GET_TIMETABLE_BY_DATE: (fromDate: string) => `/?fromDate=${fromDate}`,
        ADD_TIMETABLE: '/',
        UPDATE_TIMETABLE: '/'
    }
}