var omg = document.createElement('div');
omg.appendChild(document.createTextNode("FAKE"));
omg.appendChild(document.createElement("br"));
omg.appendChild(document.createTextNode("NEWS"));
omg.className = 'siteFilterNotification';
var bodyE = document.getElementsByTagName('body')[0];
bodyE.appendChild(omg);