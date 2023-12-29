import { ResultScan } from "../../../models/resultScan.models";
import { getEnvVar } from "../../manageVarEnvironnement.service";
import { getContext, getNewLogger } from "../../logger.service";
import { AmazonS3SaveConfig } from "../../../models/export/amazonS3/config.models";
import AWS from 'aws-sdk';

const logger = getNewLogger("AzureBlobStorageLogger");
const context = getContext();

export async function save(save: AmazonS3SaveConfig, result: ResultScan[][]): Promise<void>{
    throw new Error("Implementation not yet complete");
    if(!save.bucketName) throw new Error("bucketName is missing");
    
    await saveJsonToAmazonS3(save, result);
}

async function saveJsonToAmazonS3(save: AmazonS3SaveConfig, result: ResultScan[][]): Promise<void> {
    const client = new AWS.S3();
    await client.putObject({
        Bucket: save.bucketName??"Kexa",
        Key: (save?.origin ?? "") + new Date().toISOString().slice(0, 16).replace(/[-T:/]/g, '') + ".json",
        Body: JSON.stringify({data: result}),
    }).promise();
    logger.info("Saved to Amazon S3");
}