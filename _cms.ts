import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.upload(
  "images: Here you can manage all images",
  "src:img",
);

cms.document({
  name: "Site settings",
  store: "src:_data/site.yml",
  fields: [
    { name: "name", label: "Naam", type: "text" },
    {
      name: "analytics",
      label: "Analytics",
      type: "object",
      fields: [
        { name: "google_id", label: "Google analytics key", type: "text" },
        { name: "umami_id", label: "Umami analytics key", type: "text" },
      ],
    },
    {
      name: "metas",
      label: "Meta data",
      type: "object",
      fields: [
        { name: "site", label: "Site naam", type: "text" },
        { name: "title", label: "Title", type: "text" },
        { name: "description", label: "Description", type: "text" },
        {
          name: "image",
          label: "Image",
          type: "file",
          accept: [".svg", ".png", ".jpg", ".webp"],
        },
        { name: "twitter", label: "Twitter ID", type: "text" },
        { name: "lang", label: "Language", type: "text" },
        { name: "generator", label: "Generator", type: "checkbox" },
      ],
    },
  ],
});

cms.document({
  name: "Company settings",
  store: "src:_data/company.yml",
  fields: [
    { name: "name", label: "Naam", type: "text" },
    { name: "logo", label: "Logo", type: "file", accept: [".svg", ".png"] },
    { name: "kvk", label: "Kvk nummer", type: "text" },
    {
      name: "contact",
      label: "Contact gegevens",
      type: "object",
      fields: [
        { name: "phone", label: "Telefoon nummer", type: "text" },
        { name: "email", label: "Email", type: "email" },
      ],
    },
    {
      name: "address",
      label: "Adress",
      type: "object",
      fields: [
        { name: "street", label: "Straat", type: "text" },
        { name: "zipcode", label: "Postcode", type: "text" },
        { name: "city", label: "Stad", type: "text" },
      ],
    },
    {
      name: "socials",
      label: "Socials",
      type: "object-list",
      fields: [
        { name: "platform", label: "Platform", type: "text" },
        { name: "url", label: "Url", type: "url" },
        { name: "handle", label: "Handle", type: "text" },
      ],
    },
  ],
});

cms.collection({
  name: "Projects",
  store: "src:design/*md",
  fields: [
    "title: text",
    "description: textarea",
    {
      name: "cover",
      label: "Cover image",
      type: "file",
      accept: [".svg", ".png"],
    },
    {
      name: "metas",
      label: "Metas",
      type: "object",
      fields: [
        { name: "title", label: "SEO Title", type: "text" },
        { name: "description", label: "SEO Description", type: "textarea" },
      ],
    },
    "date: date",
    {
      name: "tags",
      label: "Tags",
      type: "list",
      fields: [
        { name: "tag", label: "Tag", type: "text" },
      ],
    },
    "content: markdown",
  ],
});

export default cms;
