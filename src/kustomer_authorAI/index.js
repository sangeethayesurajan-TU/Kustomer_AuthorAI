import kview from "./kview";


const aapikey = process.env.aapikey;
const aauthtoken= process.env.aauthtoken;

console.log("apikey => ", aapikey, "authtoken ",aauthtoken)

export default {
    app: "sample_authorai",
    version: "0.0.84",
    description: "Author AI is used to make summarry from the selected text",
    commands: [
        {
            name: "global_config_api",
            displayName: "Config",
            url: "https://taskgpt-access.taskus.com/api/external/getInstanceUsecaseConfig/Global",
            cacheSeconds: 15,
            httpMethod: "get"    
        },
        {
            name: "login_api_data",
            displayName: "Loginres",
            url: "https://orchestrator.taskus.com/api/settings/usercheck?app=PromptoGPT",
            cacheSeconds: 15,
            httpMethod: "post",           
        },
        {
            name: "setting_api_data",
            displayName: "Settingresponse",
            url: "https://orchestrator.taskus.com/api/settings/get?app=PromptoGPT",
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
            url: "https://taskgpt-access.taskus.com/api/external/user/authToken?userInfo=true&assginedChatbots=true&clientToken=true&userAuthToken=true&externalClientType=chrome_extension&generateNewSessionId=true",
            cacheSeconds: 15,
            httpMethod: "post"
        },
        {
            name: "auto_suggest_api_data",
            displayName: "Autosuggestres",
            url: "https://taskgpt-access.taskus.com/api/responses/auto_suggest",
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
            url: "https://orchestrator.taskus.com/api/settings/6/exthealth",
            cacheSeconds: 15,
            httpMethod: "post"
        },
        {
            name: "refresh_token",
            displayName: "Refresh Api",
            url: "https://orchestrator.taskus.com/api/user/refreshToken",
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
            url: "https://orchestrator.taskus.com/api/event/create?app=PromptoGPT",
            httpMethod: "post"
        }
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
            url_def: {
                type: "string",
                defaultValue: "url_def",
            }
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