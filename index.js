var formOpen = false;
var form;

function ActivateOverlay() {

	var overlayBox = document.getElementById("OverlayContainer");
	var elementClassName = overlayBox.className;

	overlayBox.setAttribute("class", "OverlayBoxActive");

	form = document.createElement("div");
	form.innerHTML = "Hello";
	form.style.color = "red";
	form.setAttribute("class", "formClass");

	var container = document.getElementById("formContainer");

	container.appendChild(form);
	formOpen = true;

}

function CloseForm() {

	var overlayBox = document.getElementById("OverlayContainer");
	overlayBox.setAttribute("class", "OverlayBoxInactive");

	form.parentNode.removeChild(form);

	if (formOpen) {
		//Close the form. with animation moving out of the screen (down).
	}

}













/*
function ActivateOverlay() {

	var overlayBox = document.getElementById("OverlayContainer");
	var elementClassName = overlayBox.className;
	var overlayStatus = false;

	if (elementClassName == "OverlayBoxInactive") { overlayStatus = true; }
	else if (elementClassName == "OverlayBoxActive") { overlayStatus = false; }

	if (overlayStatus)
	{
		overlayBox.setAttribute("class", "OverlayBoxActive");

		var form = document.createElement("div");
		//newGeneratorElement.innerHTML = gabenSentenceArray[randomSentenceID];
		//newGeneratorElement.style.color = "red";

		form.setAttribute("class", "formClass");


		document.appendChild(form);
	}
	else
	{
		overlayBox.setAttribute("class", "OverlayBoxInactive");
	}

}
*/