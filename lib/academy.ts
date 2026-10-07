export type AcademyVideo = {
  id: string;
  /** mp4 in /public/academy (also used for the poster: same name with .jpg). */
  file: string;
  duration: string;
  title: string;
  tag: string;
  description: string;
};

/** Videos shown on /academy, in the order a new buyer should watch them. */
export const academyVideos: AcademyVideo[] = [
  {
    id: "zQvneE1oChk",
    file: "edit-your-website",
    duration: "21:28",
    title: "How to edit your website template",
    tag: "Start here",
    description: "Open your downloaded template, change the text, images and colours, and see your changes before you publish.",
  },
  {
    id: "llpNa_p2IIA",
    file: "add-website-to-internet",
    duration: "11:15",
    title: "How to put your website on the internet with cPanel",
    tag: "Go live",
    description: "Upload your finished website to your hosting account so anyone can visit it.",
  },
  {
    id: "53iBA_0W_f0",
    file: "create-email",
    duration: "4:58",
    title: "How to create an email address on cPanel",
    tag: "Business email",
    description: "Set up a professional email address that matches your website, such as hello@yourbusiness.com.",
  },
  {
    id: "7aIOIivv2ww",
    file: "for-developers",
    duration: "6:22",
    title: "For developers",
    tag: "For developers",
    description: "A video for developers who want to work with the template source code.",
  },
];

export const academyUrl = "/academy";

/** The full YouTube playlist with more videos. */
export const academyPlaylistUrl = "https://www.youtube.com/watch?v=mGy4-FLh7ak&list=PLaR9aDcqHCZeeVtaOG7XtPk12EQpc8iSf";
