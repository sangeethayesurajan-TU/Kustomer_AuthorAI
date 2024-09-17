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

    .magic_icon {
        padding: 10px;
    }
`
let styleSection = `\`${styledData}\``; 

export default {
    name: "sample_authorai",
    // template: "<div>Hello AuthorAI Application!</div>",
    template: `
        const { useState, useEffect } = React;  

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
                } = props;

                const [selectedText, setSelectedText] = useState('');
                const [isClicked, setClicked] = useState(false);

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

                const buttonData = [
                    {
                        id: "1",
                        display_name: "Summarize",
                        value: "summarize"
                    },
                    {
                        id: "2",
                        display_name: "Sentiment Analysis",
                        value: "sentiment"
                    },
                    {
                        id: "3",
                        display_name: "Pronounce Helper",
                        value: "helper"
                    },
                    {
                        id: "4",
                        display_name: "Improve Acting",
                        value: "improve"
                    },
                    {
                        id: "5",
                        display_name: "Fix Spelling & Grammar",
                        value: "fix"
                    }
                ]

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

                const pre_textarea = () => {
                    return (
                        <div className={"pre_ta_parent"}>
                            <div className={'pre_textarea'}>
                                <textarea
                                    // value={replyTxt}
                                    // readOnly={!(userLang?.trim())}
                                    className={'textarea_input'}
                                    // onChange={handleReplyTextArea}
                                />
                                <div className={'magic_icon'}>${img_value}</div>
                            </div>
                        </div>                        
                    )
                }

                return (
                    <div> 
                        <div>
                            {pre_textarea()}                            
                            {initialPage()}   
                            {post_shortcut_content()}   
                        </div>            
                        ${img_value} 
                        ${img_value2}
                        <style>{${styleSection}}</style>
                    </div>
                )
            }
        );
        <AuthorAIComponent
        />
    `,
    context: 'smartbar-card',
    resource: 'conversation',
    meta: {
        displayName: "Sample AuthorAI",
        icon: "earth",
        state: "open"
    }
}