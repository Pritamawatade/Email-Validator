let result =
{
  "tag": "",
  "free": true,
  "role": false,
  "user": "pritamawatadeluffy",
  "email": "pritamawatadeluffy@gmail.com",
  "score": 0.48,
  "state": "undeliverable",
  "domain": "gmail.com",
  "reason": "invalid_mailbox",
  "mx_found": true,
  "catch_all": null,
  "disposable": false,
  "smtp_check": false,
  "did_you_mean": "",
  "format_valid": true
};

submitBtn.addEventListener("click", async (e) => { 
  e.preventDefault()
  resultCont.innerHTML = ` <svg style="height:200px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path fill="#17020A" stroke="#17020A" stroke-width="15" transform-origin="center" d="m148 84.7 13.8-8-10-17.3-13.8 8a50 50 0 0 0-27.4-15.9v-16h-20v16A50 50 0 0 0 63 67.4l-13.8-8-10 17.3 13.8 8a50 50 0 0 0 0 31.7l-13.8 8 10 17.3 13.8-8a50 50 0 0 0 27.5 15.9v16h20v-16a50 50 0 0 0 27.4-15.9l13.8 8 10-17.3-13.8-8a50 50 0 0 0 0-31.7Zm-47.5 50.8a35 35 0 1 1 0-70 35 35 0 0 1 0 70Z"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="0;120" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></path></svg>`
  console.log("clicked")
  let key = "ema_live_vXwSR2vAMVoZTiixemMNPBAOcPN3iKz6xYGudeWC"
  let email = document.getElementById('Mail').value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
let res = await fetch(url)
let result = await res.json()
let str = ``
for (key of Object.keys(result)) {
  if(result[key] !== "" && result[key] !== " ")
    {

      str = str + `<div>${key}: ${result[key]}</div>`;
    }
}
console.log(str)
resultCont.innerHTML = str;

})


