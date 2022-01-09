import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { FileUpload } from './file-upload';

// https://ozenero.com/angular-11-amazon-s3-get-list-files

@Injectable()
export class UploadFileService {

  
  BUCKET = 'lms-tutor-application';
  FOLDER = '';

  constructor() { }

  private getS3Bucket(): any {
    const bucket = new S3(
      {
        accessKeyId: '',
        secretAccessKey: '',
        region: 'us-east-2'
      }
    );

    return bucket;
  }

  uploadfile(file, folder) {
    const params = {
      Bucket: this.BUCKET,
      Key: folder + file.name,
      Body: file
    };

   

    this.getS3Bucket().upload(params).on('httpUploadProgress', function (evt) {
      console.log(evt.loaded + ' of ' + evt.total + ' Bytes');
      }).send(function (err, data) {
      if (err) {
          console.log('There was an error uploading your file: ', err);
          return false;
      }
      console.log('Successfully uploaded file.', data);
      return true;
    });
  }

  getFiles(): Observable<Array<FileUpload>> {
    let _this = this;
    const fileUploads = new Array<FileUpload>();

    const params = {
      Bucket: this.BUCKET,
      Prefix: this.FOLDER
    };

    this.getS3Bucket().listObjects(params, function (err, data) {
      if (err) {
        console.log('There was an error getting your files: ' + err);
        return;
      }

      console.log('Successfully get files.', data);

      const fileDatas = data.Contents;
      _this.getS3PresignedUrl('config/Boy Highlights.mp4');
      fileDatas.forEach(function (file) {
        fileUploads.push(new FileUpload(file.Key, 
          _this.getS3PresignedUrl(file.Key)));
        //fileUploads.push(new FileUpload(file.Key, 'https://'+ params.Bucket +'.s3.eu-west-2.amazonaws.com/' + file.Key));
      
      
      });
    });

    return Observable.of(fileUploads);
  }

  getS3PresignedUrl(keyName) {
    var profileImage = '';
    this.getS3Bucket().getSignedUrl('getObject', {
      Bucket: this.BUCKET,
      Expires: 2 * 60 * 60,   
      Key: keyName    
    }, function(err, url) {
          if (err) {
           console.log(err);
          } else if (url) {
            console.log(url);
           profileImage = url;
          }
    });
    
    return profileImage;
  };

}
