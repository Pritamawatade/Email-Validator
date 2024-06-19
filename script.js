console.log("script is included");
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
let str = ``

for (key of Object.keys(result)) {
  str = str + `<div>${key}: ${result[key]}</div>`;
}

console.log(str)
resultCont.innerHTML = str;

