import * as aws from "@pulumi/aws";

// Create an S3 bucket
const bucket = new aws.s3.Bucket("infra-pulumi-test");

// Export the bucket name
export const bucketName = bucket.id;
