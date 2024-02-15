import { heroImages } from "../assets/heroImages/heroImages";

export const services: Array<{
  topProgression: Array<number> | null;
  topDefinition: Array<string> | null;
  leftProgression: Array<number> | null;
  leftDefinition: Array<string> | null;
  rightProgression: Array<number> | null;
  rightDefinition: Array<string> | null;
  imageSource: string | null;
  width: number | null;
  height: number | null;
  alt: string | null;
  text: string | null;
  position: "absolute" | "relative" | null;
  flexDirection: "row" | "row-reverse" | null;
  translateRightAmount: number | null;
  translateLeftAmount: number | null;
  scrollId: string | null | undefined;
  serviceName: string;
}> = [
  {
    scrollId: "1",
    position: null,
    topProgression: null,
    topDefinition: null,
    leftProgression: null,
    leftDefinition: null,
    rightDefinition: null,
    rightProgression: null,
    imageSource: heroImages.money,
    width: 150,
    height: 150,
    alt: "dollar",
    flexDirection: "row",
    translateRightAmount: 400,
    translateLeftAmount: -400,
    text: "You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page.",
    serviceName: "Service 1",
  },
  {
    scrollId: "2",
    position: null,
    topProgression: null,
    topDefinition: null,
    leftProgression: null,
    leftDefinition: null,
    rightDefinition: null,
    rightProgression: null,
    imageSource: heroImages.money,
    width: 150,
    height: 150,
    alt: "dollar",
    flexDirection: "row-reverse",
    translateRightAmount: 400,
    translateLeftAmount: -400,
    text: "You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page.",
    serviceName: "Service 2",
  },
  {
    scrollId: "3",
    position: null,
    topProgression: null,
    topDefinition: null,
    leftProgression: null,
    leftDefinition: null,
    rightDefinition: null,
    rightProgression: null,
    imageSource: heroImages.money,
    width: 150,
    height: 150,
    alt: "dollar",
    flexDirection: "row",
    translateRightAmount: 400,
    translateLeftAmount: -400,
    text: "You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page.",
    serviceName: "Service 3",
  },
  {
    scrollId: "4",
    position: null,
    topProgression: null,
    topDefinition: null,
    leftProgression: null,
    leftDefinition: null,
    rightDefinition: null,
    rightProgression: null,
    imageSource: heroImages.money,
    width: 150,
    height: 150,
    alt: "dollar",
    flexDirection: "row-reverse",
    translateRightAmount: 400,
    translateLeftAmount: -400,
    text: "You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page.",
    serviceName: "Service 4",
  },
  {
    scrollId: "5",
    position: null,
    topProgression: null,
    topDefinition: null,
    leftProgression: null,
    leftDefinition: null,
    rightDefinition: null,
    rightProgression: null,
    imageSource: heroImages.money,
    width: 150,
    height: 150,
    alt: "dollar",
    flexDirection: "row",
    translateRightAmount: 400,
    translateLeftAmount: -400,
    text: "You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page.",
    serviceName: "Service 5",
  },
  {
    scrollId: "6",
    position: null,
    topProgression: null,
    topDefinition: null,
    leftProgression: null,
    leftDefinition: null,
    rightDefinition: null,
    rightProgression: null,
    imageSource: heroImages.money,
    width: 150,
    height: 150,
    alt: "dollar",
    flexDirection: "row-reverse",
    translateRightAmount: 400,
    translateLeftAmount: -400,
    text: "You can use flexbox to ensure that the footer is always at the bottom of the page. This is done by setting the giving the body element min-height: 100vh, display: flex and flex-direction: column. Then, give the footer element a margin-top: auto to make its margin fill the remaining space between it and its previous sibling. Note that this technique will not stretch the previous sibling, but rather push the footer to the bottom of the page.",
    serviceName: "Service 6",
  },
];
