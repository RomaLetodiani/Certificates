import udemylogo from "../assets/Companies/udemy.jpg";
import sololearnlogo from "../assets/Companies/sololearn.jpg";
import clickuplogo from "../assets/Companies/clickup.jpg";
import efsetlogo from "../assets/Companies/efset.jpg";
import hackerranklogo from "../assets/Companies/hackerrank.jpg";
import freecodecamplogo from "../assets/Companies/freeCodeCamp.jpg";
import harvardlogo from "../assets/Companies/CS50.jpg";

export enum Issuers {
  UDEMY = "Udemy",
  SOLOLEARN = "Sololearn",
  CLICKUP = "ClickUp",
  EFSET = "EF Education First",
  HACKERRANK = "HackerRank",
  FREECODECAMP = "freeCodeCamp",
  HARVARD = "Harvard University",
}

const logos = {
  [Issuers.UDEMY]: udemylogo,
  [Issuers.SOLOLEARN]: sololearnlogo,
  [Issuers.CLICKUP]: clickuplogo,
  [Issuers.EFSET]: efsetlogo,
  [Issuers.HACKERRANK]: hackerranklogo,
  [Issuers.FREECODECAMP]: freecodecamplogo,
  [Issuers.HARVARD]: harvardlogo,
};

export const getLogoByIssuer = (issuer: Issuers) => {
  return logos[issuer];
};
