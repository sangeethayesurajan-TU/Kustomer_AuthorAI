// import emoji from "../../../assets/kusty.png";
const img_value = `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 2.25V5.25M2.25 3.75H5.25M4.5 12.75V15.75M3 14.25H6M9.75 2.25L11.4643 7.39286L15.75 9L11.4643 10.6071L9.75 15.75L8.03571 10.6071L3.75 9L8.03571 7.39286L9.75 2.25Z" stroke="#8217FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

const img_value2 = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7144 7.42855H9.143C8.68834 7.42855 8.2523 7.60917 7.93081 7.93066C7.60932 8.25215 7.42871 8.68818 7.42871 9.14284V15.1428C7.42871 15.5975 7.60932 16.0335 7.93081 16.355C8.2523 16.6765 8.68834 16.8571 9.143 16.8571H11.7144M17.7144 18.5714V22C17.7144 22.682 17.4435 23.336 16.9613 23.8183C16.479 24.3005 15.825 24.5714 15.143 24.5714L11.7144 16.8571V7.42855H21.383C21.7964 7.42388 22.1976 7.56878 22.5126 7.83655C22.8277 8.10432 23.0353 8.47692 23.0973 8.8857L24.2801 16.6C24.3174 16.8457 24.3009 17.0965 24.2316 17.3352C24.1623 17.5738 24.0419 17.7946 23.8789 17.9821C23.7158 18.1696 23.5139 18.3195 23.2872 18.4212C23.0605 18.523 22.8143 18.5742 22.5659 18.5714H17.7144Z" stroke="#8217FF" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;

let styledData = `
    .write_paste_selected_txt {       
        padding: 8px 16px 8px 16px;
        border-radius: 56px;
        text-align: center;
        margin: 0px 25px;
        font-family: poppins;
        font-weight: 500;
    }
    
    .write_paste_selected_txt,
    .active_comp {
        color: #8217FF;
        background: #F3E8FF;
        border: 1px solid #F3E8FF;
    }

    .post_shortcut_list {
        display: flex;
        flex-direction: column;
        border: 1px solid #C694FF;
        border-radius: 8px;
        font-size: 13px;
        font-weight: 500;
        font-family: poppins;
        background: #FFFFFF;
    }

    .ps_single_item {
        border-bottom: 1px solid #F2F2F2;
        display: flex;
        padding: 12px 6px;
        justify-content: space-between;
        align-items: center;
        cursor: default;
    }

    .ps_single_item:first-child {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

    .ps_single_item:last-child {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    .ps_single_item:hover {
        border-bottom: 1px solid #F2F2F2;
        display: flex;
        padding: 12px 7px;
        justify-content: space-between;
        align-items: center;
        background-color: #F3E8FF;
    }

    .post_shortcut_subcategory {
        display: flex;
        align-items: center;
        gap: 4px;
    }

    .ps_subcategory_item {
        color: #282829;
        font-weight: 500;
        border: 1px solid #282829;
        border-radius: 16px;
        padding: 4px 8px;
    }

    .ps_subcategory_item:hover {
        color: #8217FF;
        font-weight: 500;
        border: 1px solid #8217FF;
        border-radius: 16px;
        padding: 4px 8px;
    }

    .ps_main_list_names {
        color: #282829
    }

    .pre_ta_parent {
        background: #F9FAFB;
        border-radius: 8px;
        display: inline-flex;
        width: 95%;
        border: 1px solid #E6E6E6;
        overflow: hidden;
        margin: 8px 8px;
    }

    .pre_textarea {
        width: 100%;
        display: flex;
    }

    .textarea_input {
        padding: 10px;
        height: 74px;
        width: 100%;
        outline: none;
        border: none;
        resize: none;
        border-radius: 8px;
        background: #F9FAFB;
    }

    .textarea_input::placeholder {
        color: #B3B3B3;
        font-size: 12px;
    }

    .magic_icon {
        padding: 10px;
    }

    .selected_txt_post_blog {
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: #F6F6F6;
        padding: 10px;
    }

    .st_response {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 0px 10px;
        font-size: 14px;
        font-family: poppins;
        color: #282829;
        font-weight: 500;
    }

    .select_text_heading {
        color: #8217FF;
        background: #F3E8FF;
        width: 35%;
        padding: 4px;
        border-radius: 4px;
    }

    .query {
        text-align: justify;
    }
`
let styleSection = `\`${styledData}\``; 

export default {
    name: "sample_authorai",
    // template: "<div>Hello AuthorAI Application!</div>",
    template: `
        if (appSettings && appSettings?.default) {

            const { useState, useEffect } = React;
            
            //generate Auth Token API
            async function generateTokenApi(user_setting_response, emailId, isAuthuu) {
                try {
                    const model_type = user_setting_response.settings.Zendesk_PromptoGPT_modeltype;
                    const usecase = user_setting_response.settings.Zendesk_PromptoGPT_usecase;

                    const promptoGPT_toggle = user_setting_response.settings.Zendesk_PromptoGPT_toggle;
                    const knowledgeAssist_toggle = user_setting_response.settings.Zendesk_KnowledgeAssist_toggle;

                    const apitoken = user_setting_response?.settings.x_apitoken;
                    const apikey = user_setting_response?.settings.x_apikey;
                    let endpoint = '/v1/commands/' + isAuthuu.appId + '.app.generate_authtoken_api/run';
                    let authResponse = await KustomerRequest({
                        url: endpoint,
                        method: 'POST',
                        body: {
                            "headers": {
                                "Content-Type": "application/json",
                                "x-apitoken": apitoken,
                                "x-apikey": apikey,
                                "CF-Access-Client-Id": user_setting_response?.settings.CF_Access_Client_Id,
                                "CF-Access-Client-Secret": user_setting_response?.settings.CF_Access_Client_Secret
                            },
                            "body": {
                                "email": "sangeetha.yesurajan@taskus.com"
                            }
                        }
                    },
                        (err, response) => {
                            if (err) {
                                console.log("Into 1")
                                return 'Failed to process return'
                            } else if (response.responseBody.errors) {
                                console.log("Into 2")
                                return response.responseBody.errors.message;
                            }
                        }
                    );
                    const data = authResponse?.data?.attributes?.responseBody;
                    const authToken = data.authToken;
                    const clientAuthToken = data.clientAuthToken;
                    let endpoint_2 = '/v1/commands/' + isAuthuu.appId + '.app.sensitive_check_api/run';
                    let checkAPI = await KustomerRequest({
                        url: endpoint_2,
                        method: "POST",
                        body: {
                            "headers": {
                                "x-authtoken": authToken
                            },
                            "body": {
                                "content": "The Girl Who Lived in the Tree is the 32nd collection by British fashion designer Alexander McQueen, made for the Autumn/Winter 2008 season. The primary inspirations were British culture and national symbols, particularly the British monarchy, as well as the clothing of India during the British Raj. It was presented through the narrative of a fairy tale about a feral girl who lived in a tree before falling in love with a prince and descending to become a princess. The collection's runway show was staged on 29 February 2008 at the Palais Omnisports de Paris-Bercy in Paris.",
                                "productModuleName": "PROMPTOGPT"
                            }
                        }
                    },
                        (err, response) => {
                            if (err) {
                                console.log("Into 1")
                                return 'Failed to process return'
                            } else if (response.responseBody.errors) {
                                console.log("Into 2")
                                return response.responseBody.errors.message;
                            }
                        }
                    );
                    const checkdata = checkAPI?.data?.attributes?.responseBody;
                    console.log("checkdata ", checkdata);
                    return { authToken, clientAuthToken, model_type, usecase, promptoGPT_toggle, knowledgeAssist_toggle };                    
                } catch (err) {
                    console.log("Error in generateTokenApi::", err);
                }
            }  

            const AuthoAI_menu = [
                {
                    id: "1",
                    display_name: "Summarize",
                    sub_cat: [
                        {
                            id: "1",
                            name: "Paragraph"
                        }, 
                        {
                            id: "2",
                            name: "Bullets"
                        }
                    ]
                }, 
                {
                    id: "2",
                    display_name: "Find Action Item",
                    sub_cat: [
                        {
                            id: "1",
                            name: "Bullets"
                        },
                        {
                            id: "2",
                            name: "Table"
                        }
                    ]
                },
                {
                    id: "3",
                    display_name: "Sentiment Analysis",
                    sub_cat: [
                        {
                            id: "1",
                            name: ""
                        }
                    ]
                }, 
                {
                    id: "4",
                    display_name: "Improve Writing",
                    sub_cat: [
                        {
                            id: "1",
                            name: ""
                        }
                    ]
                },
                {
                    id: "5",
                    display_name: "Fix Spellings and Grammar",
                    sub_cat: [
                        {
                            id: "1",
                            name: ""
                        }
                    ]
                },
                {
                    id: "6",
                    display_name: "Change Tone",
                    sub_cat: [
                        {
                            id: "1",
                            name: "Professional"
                        },
                        {
                            id: "1",
                            name: "Casual"
                        },
                        {
                            id: "1",
                            name: "Friendly"
                        }
                    ]
                }
            ]            

            const AuthorAIComponent = window.__authorAIComponent12345 || (window.__authorAIComponent12345 = 
                function AuthorAIComponent(props) {
                    const {
                        conversation,
                        appSettings
                    } = props;
                    console.log("appSettings", appSettings);
                    const [selectedText, setSelectedText] = useState('');
                    const [isClicked, setClicked] = useState(false);
                    const [name, changeName] = useState('');
                    const [isEmail, setEmail] = useState('');
                    const [isAppId, setAppId] = useState({});
                    const [isLoading, setLoading] = useState(false);
                    const [generateToken, setGenerateToken] = useState({});
                    const [isSettingStatus, setSettingStatus] = useState(sessionStorage.getItem('settingStatus') === 'true');
                    const [isLoggedStatus, setLoggedStatus] = useState(sessionStorage.getItem('isLoggedIn') === 'true');
                    const [isAutoLoading, setAutoLoading] = useState(false);
                    const[settingreg, setSettingreg] = useState({});

                    //api's
                    async function autoSuggestApi(user_email, latestmsgfromuser, model_type, use_case, auth_token, isAuthuu, user_setting_infos) {
                        setAutoLoading(true);
                        // let unique_uuid = generateUUID();
                        // const payload = createPayload(
                        //     'Kustomer_PromptoGPT_Request_Query_Started',
                        //     'Success'
                        // );
                        // await logsAPI({isAuthuu: isAuthuu, user_setting: user_setting_infos, PAYLOAD_FOR_EVENT: payload, UUID: unique_uuid });
                        try {
                            let endpoint = '/v1/commands/' + isAuthuu.appId + '.app.auto_suggest_api/run';
                            let response = await KustomerRequest({
                            url: endpoint,
                            method: "POST",
                            body: {
                                "headers": {
                                "Content-Type": "application/json",
                                "X-Authtoken": auth_token
                                },
                                "body": {
                                "user_id": "sangeetha.yesurajan^@taskus.com",
                                "question": "Where is the food?",
                                "model_type": "generative",
                                "usecase": "food_ordering_and_food_delivery",
                                "enable_automasking": true
                                }
                            }
                            },
                            (err, response) => {
                                if (err) {
                                console.log("Into 1")
                                return 'Failed to process return'
                                } else if (response.responseBody.errors) {
                                console.log("Into 2")
                                return response.responseBody.errors.message;
                                }
                            }
                            );
                            if (response?.data?.attributes?.responseBody) {
                            // let unique_uuid = generateUUID();
                            // const payload = createPayload(
                            //     'Kustomer_PromptoGPT_Request_Query_Completed',
                            //     'Success'
                            // );
                            // await logsAPI({ isAuthuu: isAuthuu, user_setting: user_setting_infos, PAYLOAD_FOR_EVENT: payload, UUID: unique_uuid });
                            // const payload_query = createPayload(
                            //     'Kustomer_PromptoGPT_Request_Query',
                            //     'Success'
                            // );
                            // let unique_uuid_query = generateUUID();
                            // await logsAPI({ isAuthuu: isAuthuu, user_setting: user_setting_infos, PAYLOAD_FOR_EVENT: payload_query, UUID: unique_uuid_query, log_message: latestmsgfromuser });
                            setAutoLoading(false);
                            return response?.data?.attributes?.responseBody;
                            }

                        } catch (error) {
                            console.log("Error in autoSuggestApi::", error)
                        }
                        }

                    useEffect(() => {
                        KustomerRequest({ url: '/v1/users/current' }).then(result => {
                            console.log("RES RES",result.data)
                            changeName(result.data.attributes.name);
                            setEmail(result.data.attributes.email);
                        });        
                    }, []);

                    useEffect(() => {
                        let updatedAuth = {};
                        (appSettings?.default || []).forEach((item) => {
                            if (item.attributes.name === 'apikey') {
                            updatedAuth.api_key = item.attributes.value;
                            }
                            if (item.attributes.name === 'authtoken') {
                            updatedAuth.authtoken = item.attributes.value;
                            updatedAuth.appId = item.attributes.app;
                            }
                            if (item.attributes.name === 'url_def') {
                            updatedAuth.url_def = item.attributes.value;
                            updatedAuth.appId = item.attributes.app;
                            }
                        });
                        setAppId(updatedAuth);
                    }, [appSettings?.default]);

                    useEffect(() => {
                        const handleSelection = () => {
                            const selection = window.getSelection();
                            const selectedText = selection.toString();
                            setSelectedText(selectedText);
                        };

                        // Listen for selection changes
                        document.addEventListener('mouseup', handleSelection);
                        document.addEventListener('selectionchange', handleSelection);

                        // Cleanup event listeners on component unmount
                        return () => {
                            document.removeEventListener('mouseup', handleSelection);
                            document.removeEventListener('selectionchange', handleSelection);
                        };
                    }, []);

                    useEffect(() => {
                        if (isAppId?.appId && appSettings?.default) {
                            globalConfigApi();
                            loginBtnAPI()
                        }
                        
                    }, [isAppId]);

                    async function loginBtnAPI() {
                        // setLoading(true);
                        let endpoint = '/v1/commands/' + isAppId.appId + '.app.login_api/run';
                        try {
                            let resdata = await KustomerRequest({
                            url: endpoint,
                            method: 'POST',
                            body: {
                                "body": {
                                "email": "sangeetha.yesurajan@taskus.com"
                                }
                            }
                            },
                            (err, response) => {
                                if (err) {
                                console.log("Into 1")
                                return 'Failed to process return'
                                } else if (response.responseBody.errors) {
                                console.log("Into 2")
                                return response.responseBody.errors.message;
                                }
                            }
                            );
                            let loginResponse = resdata?.data?.attributes?.responseBody;
                            if (loginResponse?.status === true) {
                                sessionStorage.setItem('isLoggedIn', true);
                                setLoggedStatus(true);
                                // setApiCall(false)
                                // settingResponse();
                                settingBtnAPI()
                            }
                        } catch (err) {
                            console.log("Error in loginBtnAPI::", err)
                        }
                    }

                    async function settingBtnAPI() {
                        setLoading(true)
                        let endpoint = '/v1/commands/'+isAppId.appId+'.app.setting_api/run';
                        try {
                            let data = await KustomerRequest({
                            url: endpoint,
                            method: 'POST',
                            body: {
                                "headers": {
                                    "X-ApiToken": "{{{aauthtoken}}}",
                                    "X-ApiKey": "{{{aapikey}}}",
                                    "Accept": "application/json",
                                    "Content-Type": "application/json"
                                },
                                "body": {
                                    "email": "sangeetha.yesurajan@taskus.com"
                                }
                            }
                            },
                            (err, response) => {
                                if (err) {
                                console.log("Into 1")
                                setLoading(false);
                                return 'Failed to process return'
                                } else if (response.responseBody.errors) {
                                console.log("Into 2")
                                return response.responseBody.errors.message;
                                }
                            }
                            );
                            let settingRes = data?.data?.attributes?.responseBody
                            if (settingRes?.message === "Authentication failed ") {
                                sessionStorage.setItem('settingStatus', false);
                                setSettingStatus(false);
                                setLoading(false);
                            } else {
                                sessionStorage.setItem('settingStatus', true);
                                setSettingStatus(true);
                                setSettingreg(settingRes);
                                setLoading(false);
                                const logMsg = "Successfully LoggedIn";
                                // const payload = createPayload(
                                // 'Kustomer_LoggedIn',
                                // 'Success'
                                // );
                                // await logsAPI({ isAuthuu: isAuthuu, user_setting: settingRes, PAYLOAD_FOR_EVENT: payload, log_message: logMsg });                                
                                const { authToken, clientAuthToken, model_type, usecase, promptoGPT_toggle, knowledgeAssist_toggle } = await generateTokenApi(settingRes, isEmail, isAppId);
                                setGenerateToken(
                                {
                                    authToken: authToken,
                                    client_authtoken: clientAuthToken,
                                    promptoGPT_toggle: promptoGPT_toggle,
                                    knowledgeAssist_toggle: knowledgeAssist_toggle,
                                    model_type: model_type,
                                    usecase: usecase
                                }
                                )
                            }
                        } catch (err) {
                            console.log("Error in settingBtnAPI::", err)
                        }
                    }
                    
                    const globalConfigApi = async () => {
                        try {
                            let endpoint = '/v1/commands/'+isAppId.appId+'.app.global_config_api/run';
                            console.log("endpoint ", endpoint);
                            let response = await KustomerRequest({
                                url: endpoint,
                                method: 'POST',                            
                                body: {                                    
                                    headers: {
                                        "x-apitoken": "464c6fe58f214ce5255d6df19878e6067bda7fbcc2e0defc60b827f8eb95f038",
                                        "x-apikey": "wdayP9T8g7K5rro3u3ZcgCgbBnsRHRUvNCUmxatY7hwpQ6kKu5nb4gUd255VUdwH"                                    
                                    }                         
                                }
                            },(err, response) => {
                                    
                                if (err) {
                                    return 'Failed to process return'
                                } 
                            }
                            );
                            let configRes = response?.data?.attributes?.responseBody;
                            console.log("configRes", configRes);
                        } catch (err) {
                            console.log("Error in globalConfigApi::", err);
                        }                
                    }

                    const handleChange = (event) => {
                        try {
                            console.log("handleChange handleChange", event.target.value)
                            setClicked(true);
                        } catch (err) {
                            console.log("Error in handleChange::", err);
                        }
                    }

                    const footerPart = () => {
                        const currentYear = new Date().getFullYear();
                        return (
                            <div style={{
                            fontSize: "14px",
                            fontWeight: "500",
                            fontFamily: "poppins",
                            margin: "10px 0px",
                            textAlign: "center",
                            color: "#000000"
                            }}
                            >
                            <p>Version: 1.0.0 | TaskUs @ {currentYear} | <a style={{color: "#005EFF", textDecoration: "underline"}} href="https://www.taskus.com/security/" target="_blank">Security</a></p>
                            </div>
                        )
                    }

                    const initialPage = () => {
                        return (
                            <>
                                <div className={'write_paste_selected_txt'}>
                                    Write/Paste/Select Text to Start
                                </div>
                            </>
                        )
                    }

                    const post_shortcut_content = () => {
                        return (
                            <div className="post_shortcut_list">
                                {(AuthoAI_menu || []).map((item) => {
                                    return (
                                        <div className={'ps_single_item'}>
                                            <div className={'ps_main_list_names'}>{item.display_name}</div>
                                            <div className={'post_shortcut_subcategory'}>
                                                {(item.sub_cat || []).map((sub) => {
                                                    return (
                                                        <div className={sub?.name?'ps_subcategory_item':''}>
                                                            {sub?.name}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    }

                    const pre_post_textarea = () => {
                        return (
                            <div className={"pre_ta_parent"}>
                                <div className={'pre_textarea'}>
                                    <textarea
                                        // value={replyTxt}
                                        // readOnly={!(userLang?.trim())}
                                        className={'textarea_input'}
                                        placeholder={'Write/Paste/Select any text...'}
                                        // onChange={handleReplyTextArea}
                                    />
                                    <div className={'magic_icon'}>
                                        ${img_value}
                                    </div>
                                </div>
                            </div>                        
                        )
                    }

                    const selected_txt_post_blog = () => {
                        return (
                            <div className={'selected_txt_post_blog'}>
                                <div className={'st_response'}>
                                    <div className={'select_text_heading'}>Selected Text</div>
                                    <div className={'query'}>Hey , I have another query, how can I claim fors refund?</div>
                                </div>
                                <div>{post_shortcut_content()}</div>
                            </div>
                        )
                    }

                    return (
                        <div> 
                            <div>                                                     
                                {initialPage()}   
                                {selected_txt_post_blog()}   
                                {pre_post_textarea()}   
                            </div> 
                            <style>{${styleSection}}</style>
                        </div>
                    )
                }
            );
            <AuthorAIComponent
                conversation={conversation}
                appSettings={appSettings}
            />
        }
        
    `,
    context: 'smartbar-card',
    resource: 'conversation',
    meta: {
        displayName: "Sample AuthorAI",
        icon: "earth",
        state: "open"
    }
}