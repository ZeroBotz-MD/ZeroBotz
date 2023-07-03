import cheerio from 'cheerio';
import fetch from 'node-fetch';

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    text,
    command
}) => {
if (!text) return m.reply("Masukan Textnya\nExample: .wxgpt hello")
await m.reply(wait)
// Contoh penggunaan
let result = await wxGpt(text)
await m.reply(result)

}
handler.help = ["wxgpt"]
handler.tags = ["ai"]
handler.command = /^(wxgpt)$/i
handler.limit = true
export default handler

/* New Line */
async function wxGpt(you_qus) {
  let baseURL = "https://free-api.cveoy.top/";
  try {
    const response = await fetch(baseURL + "v3/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "origin": "https://ai1.chagpt.fun",
        "Referer": baseURL
      },
      body: JSON.stringify({
        prompt: you_qus
      })
    });
    
    const data = await response.text();
    // Handle the response data here
    return (data);
    
    return data; // Return the response data if needed
  } catch (error) {
    // Handle any errors here
    console.error(error);
  }
}