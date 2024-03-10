import lumeCMS from "lume/cms.ts";

const cms = lumeCMS({
    site: {
        name: "My website CMS",
        description: "Here i can edit the content of my website",
        url: "https://tjay.nl",
    },
    auth: {
        method: "basic",
        users: {
            user1: "password1",
            user2: "password2",
        },
    },
    log: {
        filename: "errors.log",
    },
});

cms.storage("posts", "/content/posts");

cms.document("landing-page", "src:index.yml", [
    "title: text",
    "subtitle: text",
    "content: markdown",
]);

cms.collection("posts", "src:content/posts/*.md", [
    "title: text",
    "content: markdown",
]);

export default cms;
