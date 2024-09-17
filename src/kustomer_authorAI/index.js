import kview from "./kview";

export default {
    app: "sample_authorai",
    version: "0.0.20",
    description: "Author AI is used to make summarry from the selected text",
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