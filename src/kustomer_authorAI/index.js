import kview from "./kview";

let environmet = "dev";
// let aapikey = process.env.aapikey;
// let aauthtoken = process.env.aauthtoken;
let aapikey;
let aauthtoken;
let x_apikey = process.env.x_Dev_apiKey;
let x_apitoken = process.env.x_Dev_apitoken;
let Dev_CF_ACCESS_CLIENT_ID = process.env.Dev_CF_ACCESS_CLIENT_ID;
let Dev_CF_ACCESS_CLIENT_SECRET = process.env.Dev_CF_ACCESS_CLIENT_SECRET;
let url_endpoint_orchestrator;
let url_normal_endpoint;

// const dev_aapikey="promptogpt4512_@#$&&##$customerdev";
// const dev_aapiToken="42107beb68c44cd0b61018518bb55b675b27a7c0cf703e646fefe06b8456e4f5"

function selecting_endpoint(branch_name) {
    try {
        switch (branch_name) {
            case "dev":
                url_endpoint_orchestrator = process.env.dev_portal_orchestrator;
                url_normal_endpoint = process.env.dev_endpoint;
                aapikey=process.env.dev_aapikey;
                aauthtoken= process.env.dev_aapiToken;
                break;
            case "uat":
                url_endpoint_orchestrator = process.env.prod_portal_orchestrator;
                url_normal_endpoint = process.env.prod_endpoint;
                aapikey=process.env.aapikey;
                aauthtoken= process.env.aauthtoken;
                break;
            case "prod":
                url_endpoint_orchestrator = process.env.prod_portal_orchestrator;
                url_normal_endpoint = process.env.democenter_endpoint;
                aapikey=process.env.aapikey;
                aauthtoken= process.env.aauthtoken;
                break;
            default:
                break;

        }
    } catch (err) {
        console.log("Error in selecting_endpoint::", err);
    }
}

selecting_endpoint(environmet);

export default {
    app: "sample_authorai",
    version: "0.0.172",
    description: "Author AI is used to make summarry from the selected text",
    commands: [
        {
            name: "global_config_api",
            displayName: "Config",
            // url: "https://taskgpt-access.taskus.com/api/external/getInstanceUsecaseConfig/Global",
            url: url_normal_endpoint+""+"/api/external/getInstanceUsecaseConfig/Kustomer",
            cacheSeconds: 15,
            httpMethod: "get"
        },
        {
            name: "updated_global_config_api",
            displayName: "global",
            url: url_normal_endpoint + "" + "/api/external/getInstanceUsecaseConfig/Global",
            httpMethod: "get",
            appSettings: {
                dev_apiKey: {
                    key: "sample_authorai.default.dev_apiKey"
                },
                dev_apitoken: {
                    key: "sample_authorai.default.dev_apitoken"
                },
                cloudFlare_Id: {
                    key: "sample_authorai.default.cloudFlare_Id"
                },
                cloudFlare_Secret: {
                    key: "sample_authorai.default.cloudFlare_Secret"
                }
            }
        },
        {
            name: "login_api_data",
            displayName: "Loginres",
            // url: "https://orchestrator.taskus.com/api/settings/usercheck?app=PromptoGPT",
            url: url_endpoint_orchestrator + "" + "/api/settings/usercheck?app=PromptoGPT",
            cacheSeconds: 15,
            httpMethod: "post",
        },
        {
            name: "setting_api_data",
            displayName: "Settingresponse",
            // url: "https://orchestrator.taskus.com/api/settings/get?app=PromptoGPT",
            url: url_endpoint_orchestrator + "" + "/api/settings/get?app=PromptoGPT",
            cacheSeconds: 15,
            httpMethod: "post",
            appSettings: {
                aapikey: {
                    key: "sample_authorai.default.aapikey"
                },
                aauthtoken: {
                    key: "sample_authorai.default.aauthtoken"
                }
            }
        },
        {
            name: "generate_authtoken_api_data",
            displayName: "Generatetokenres",
            // url: "https://taskgpt-access.taskus.com/api/external/user/authToken?userInfo=true&assginedChatbots=true&clientToken=true&userAuthToken=true&externalClientType=chrome_extension&generateNewSessionId=true&authorAIInstances=true&promptAIInstances=true",
            url: url_normal_endpoint+""+"/api/external/user/authToken?userInfo=true&assginedChatbots=true&clientToken=true&userAuthToken=true&externalClientType=chrome_extension&generateNewSessionId=true&authorAIInstances=true&promptAIInstances=true",
            cacheSeconds: 15,
            httpMethod: "post"
        },
        {
            name: "auto_suggest_api_data",
            displayName: "Autosuggestres",
            // url: "https://taskgpt-access.taskus.com/api/responses/auto_suggest",
            url: url_normal_endpoint+"/api/responses/auto_suggest",
            cacheSeconds: 15,
            httpMethod: "post"
        },
        {
            name: "sensitive_check_api",
            displayName: "Checkapi",
            url: "https://taskgpt-access.taskus.com/api/sensitiveInfo/check",
            cacheSeconds: 15,
            httpMethod: "post"
        },
        {
            name: "exhealth_check_api",
            displayName: "Exhealth Api",
            // url: "https://orchestrator.taskus.com/api/settings/6/exthealth",
            url: url_endpoint_orchestrator + "" + "/api/settings/6/exthealth",
            cacheSeconds: 15,
            httpMethod: "post"
        },
        {
            name: "refresh_token",
            displayName: "Refresh Api",
            // url: "https://orchestrator.taskus.com/api/user/refreshToken",
            url: url_endpoint_orchestrator + "" + "/api/user/refreshToken",
            cacheSeconds: 15,
            httpMethod: "post"
        },
        {
            name: "promptogpt",
            displayName: "prompto",
            url: "https://orchestrator.taskus.com/api/settings/get/propmt_template?app=PromptoGPT",
            httpMethod: "post"
        },
        {
            name: "logs_api_data",
            displayName: "logsapires",
            // url: "https://orchestrator.taskus.com/api/event/create?app=PromptoGPT",
            url: url_endpoint_orchestrator + "" + "/api/event/create?app=PromptoGPT",
            httpMethod: "post"
        },
        
        // {
        //     name: "sample_query",
        //     displayName: "querysample",
        //     inputSchema: {},
        //     type: "external-api",
        //     permittedArgs: ["instanceId"],
        //     // permittedArgs: ["apitokenval", "apikeyval", "cfaccessclientidval", "cfacccessclientsecretval"],
        //     url: "http://dev.democenter.app.taskus.com/api/external/getTemplateList/{{{instanceId}}}",
        //     httpMethod: "post",
        //     cacheSeconds: 15
        // }
    ],
    settings: {
        default: {
            aauthtoken: {
                type: "secret",
                defaultValue: aauthtoken,
                description: "EXTERNAL AUTH TOKEN"
            },
            aapikey: {
                type: "secret",
                defaultValue: aapikey,
                description: "External API Key"
            },
            dev_normal_url: {
                type: "string",
                defaultValue: url_normal_endpoint,
                description: "External Dev URL"
            },
            // dev_apiKey: {
            //     type: "secret",
            //     defaultValue: x_apikey,
            //     description: "External Dev Ex API Key"
            // },
            // dev_apitoken: {
            //     type: "secret",
            //     defaultValue: x_apitoken,
            //     description: "External Dev Ex API Token Key"
            // },
            // cloudFlare_Id: {
            //     type: "secret",
            //     defaultValue: Dev_CF_ACCESS_CLIENT_ID,
            //     description: "External Dev Id Key"
            // },
            // cloudFlare_Secret: {
            //     type: "secret",
            //     defaultValue: Dev_CF_ACCESS_CLIENT_SECRET,
            //     description: "External Dev Token Key"
            // },
            // dev_normal_url: {
            //     type: "string",
            //     defaultValue: url_normal_endpoint,
            //     description: "External Dev URL"
            // }
        }
    },
    appDetails: {
        appDeveloper: {
            name: "TaskUs",
            website: "https://www.taskus.com",
            supportEmail: "TaskGPT@taskus.com"
        },
        externalPlatform: {
            name: 'Taskus',
            website: "https://www.taskus.com"
        }
    },
    title: 'Sample AuthorAI',
    postInstallMessage: "Congratulations! You\'ve installed AuthorAI app!",
    kviews: kview,
}