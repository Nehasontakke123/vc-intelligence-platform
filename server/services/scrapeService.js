import axios from "axios";
import * as cheerio from "cheerio";

export const scrapeWebsite = async (url) => {
  const response = await axios.get(url);
  const $ = cheerio.load(response.data);

  const title = $("title").text();

  const headings = [];
  $("h1, h2").each((i, el) => {
    if (i < 5) headings.push($(el).text());
  });

  return {
    summary: title,
    whatTheyDo: headings,
    keywords: title.split(" ").slice(0, 5),
    signals: ["Website active", "Has headings"],
    sources: [{ url, timestamp: new Date() }],
  };
};