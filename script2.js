// =====================Redicrect user after ordering=======================================
let patharr = window.location.pathname.split("/");
patharr.splice(-1);
let path = patharr.join("/");
let host = window.location.protocol + "//" + window.location.host + path;
let redirectValue = document.getElementById("redDir2").value;
document.getElementById("redDir2").value = `${host}/thanksPageproduct.html`;
