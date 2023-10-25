import { checkRules, gatheringRules } from "./services/analyse.service";
import { alertGlobal } from "./services/alerte.service";
import { AsciiArtText, talkAboutOtherProject} from "./services/display.service";
import { getEnvVar, setEnvVar } from "./services/manageVarEnvironnement.service";
import { loadAddOns } from "./services/addOn.service";
import { deleteFile } from "./helpers/files";
import {getNewLogger} from "./services/logger.service";

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const core = require('@actions/core');
require('dotenv').config();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////                                                                   // reading environnement vars                                                       // file system

export async function main() {
    core.addPath('./config');
    let customRules = await getEnvVar("MYOWNRULES");
    if(customRules != "NO"){
        core.addPath(customRules);
        await setEnvVar("RULESDIRECTORY", customRules);
    }
    const logger = getNewLogger("MainLogger");

    logger.debug("test");
    logger.debug(await getEnvVar("TEST"));
    AsciiArtText("Kexa");
    logger.info("___________________________________________________________________________________________________"); 
    logger.info("___________________________________-= running Kexa scan =-_________________________________________");
    logger.info("___________________________________________________________________________________________________"); 
    let rulesDirectory = (await getEnvVar("RULESDIRECTORY"))??"./src/rules";
    if(rulesDirectory == ""){
        rulesDirectory = "./src/rules";
    }
    let settings = await gatheringRules(rulesDirectory);
    if(settings.length != 0){
        let stop = false;
        let resources = {};
        resources = await loadAddOns(resources);
        settings.forEach(setting => {
            let result = checkRules(setting.rules, resources, setting.alert);
            logger.setOutput('resultScan', result);
            if(setting.alert.global.enabled){
                let compteError = alertGlobal(result, setting.alert.global);
                if(compteError[2]>0 || compteError[3]>0){
                    stop = true;
                }
            }
        });
        if(stop) core.setFailed(`Kexa found at least one error or critical error, please check the logs for more details.`);
    }else {
        logger.error("No correct rules found, please check the rules directory or the rules files.");
    }

    deleteFile("./config/headers.json");
    deleteFile("./config/addOnNeed.json");
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    logger.info("___________________________________________________________________________________________________"); 
    logger.info("_______________________________________-= End Kexa scan =-_________________________________________");
    logger.info("___________________________________________________________________________________________________");
    talkAboutOtherProject();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

main();