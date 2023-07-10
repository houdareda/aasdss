// =====================Redicrect user after ordering=======================================
let patharr = window.location.pathname.split("/");
patharr.splice(-1);
let path = patharr.join("/");
let host = window.location.protocol + "//" + window.location.host + path;
let redirectValue = document.getElementById("redDir").value;
document.getElementById("redDir").value = `${host}/thanksPage.html`;


let patharr2 = window.location.pathname.split("/");
patharr2.splice(-1);
let path2 = patharr.join("/");
let host2 = window.location.protocol + "//" + window.location.host + path;
let redirectValue2 = document.getElementById("redDir2").value;
document.getElementById("redDir2").value = `${host}/thanksPageproduct.html`;
