import {Action} from '@ngrx/store';
import {User} from '../../../core';


export const GET_ALL_VIDEOS = 'GET_ALL_VIDEOS';
export const GET_ALL_VIDEOS_SUCCESS = 'GET_ALL_VIDEOS_SUCCESS';
export const GET_ALL_VIDEOS_ERROR = 'GET_ALL_VIDEOS_ERROR';

export const GET_VIDEO_BY_VIDEO_ID = 'GET_VIDEO_BY_VIDEO_ID';
export const GET_VIDEO_BY_VIDEO_ID_SUCCESS = 'GET_VIDEO_BY_VIDEO_ID_SUCCESS';
export const GET_VIDEO_BY_VIDEO_ID_ERROR = 'GET_VIDEO_BY_VIDEO_ID_ERROR';


export const ADD_VIDEO_METADATA = 'ADD_VIDEO_METADATA';
export const ADD_VIDEO_METADATA_SUCCESS = 'ADD_VIDEO_METADATA_SUCCESS';
export const ADD_VIDEO_METADATA_ERROR = 'ADD_VIDEO_METADATA_ERROR';


export const GET_VIDEOS_META_BY_CHILD_CATEGORY_ID = 'GET_VIDEOS_META_BY_CHILD_CATEGORY_ID';
export const GET_VIDEOS_META_BY_CHILD_CATEGORY_ID_SUCCESS = 'GET_VIDEOS_META_BY_CHILD_CATEGORY_ID_SUCCESS';
export const GET_VIDEOS_META_BY_CHILD_CATEGORY_ID_ERROR = 'GET_VIDEOS_META_BY_CHILD_CATEGORY_ID_ERROR';


export const FIND_ALL_VIDEOS_BY_PARENT_CATEGORY = 'FIND_ALL_VIDEOS_BY_PARENT_CATEGORY';
export const FIND_ALL_VIDEOS_BY_PARENT_CATEGORY_SUCCESS = 'FIND_ALL_VIDEOS_BY_PARENT_CATEGORY_SUCCESS';
export const FIND_ALL_VIDEOS_BY_PARENT_CATEGORY_ERROR = 'FIND_ALL_VIDEOS_BY_PARENT_CATEGORY_ERROR';
/****************************************
 * GET all the Videos
 ****************************************/
export class GetAllVideos implements Action {
  readonly type = GET_ALL_VIDEOS;
}

export class GetAllVideosSuccess implements Action {
  readonly type = GET_ALL_VIDEOS_SUCCESS;

  constructor(public payload: User[]) {
  }
}

export class GetAllVideosError implements Action {
  readonly type = GET_ALL_VIDEOS_ERROR;

  constructor(public payload: Error) {
  }
}


export class GetVideoById implements Action {
  readonly type = GET_VIDEO_BY_VIDEO_ID;
}

export class GetVideoByIdSuccess implements Action {
  readonly type = GET_VIDEO_BY_VIDEO_ID_SUCCESS;

  constructor(public payload: Video) {
  }
}

export class GetVideoByIdError implements Action {
  readonly type = GET_VIDEO_BY_VIDEO_ID_ERROR;

  constructor(public payload: Error) {
  }
}

