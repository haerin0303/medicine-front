const  { S3Client , AbortMultipartUploadCommand }  =  require ( "@aws-sdk/client-s3" ) ;
import  {  S3Client ,  AbortMultipartUploadCommand  }  from  "@aws-sdk/client-s3" ;

const  client  =  new  S3Client ( {  region : "REGION"  } ) ;

const  params  =  { 
  /** 입력 매개변수 */ 
} ; 
const  command  =  new  AbortMultipartUploadCommand ( params ) ;


try {
    const data = await client.send(command);
  } catch (error) {
  } finally {
  }