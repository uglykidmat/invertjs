	const header = document.getElementById("header");
	const textField = document.form2.texte1direct.value;
	const textField2 = document.form2.texte2direct.value;

	//La fonction qui prend une string et inverse l'ordre des caractères
	function reverseString (s){
		return s.split("").reverse().join("");
	}

	//Le 1er bouton qui va prendre le texte 1 et le mettre en inversé dans champ 2
	document.getElementById("inverser").onclick = function() {
		//On vide le champ 2 au clic sur bouton inverser
		document.getElementById("inversed").value = "";
		//On prend le contenu du champ texte 1 "normal" aka à inverser
		var str = document.getElementById("normal").value;
		console.log(str);
		//document.getElementById("inversed").value = reverseString(str);

		//On push dans le champ 2 "inversé" la valeur inversée du champ 1
		document.form1.texte2.value += reverseString(str);
		console.log(document.getElementById("inversed").value);
		}

	//Le 2e bouton qui reset le champ 2 à vide
	document.getElementById("reset").onclick = function() {
		document.getElementById("inversed").value = "";
		}
	// TODO - message erreur si champ 1 "à inverser" vide

	//TODO - Le 3e bouton qui sert à copier dans le clipboard
	document.getElementById("copy").onclick = function() {
		
		//On crée la variable pour stocker le contenu inversé
		//let copyText = document.getElementById("inversed").value;
		//console.log(copyText + " copied");
		let copyText = document.getElementById("inversed");

		//On prend le contenu du champ inversed
		copyText.select();
  		copyText.setSelectionRange(0, 99999); /* For mobile devices */

  		//TODO - On met dans le clipboard
  		//navigator.clipboard.writeText(copyText.value);

  		//Petit tooltip d'alerte
  		//alert("Texte copié : " + copyText.value);
		}

	// TODO - check quel champ est rempli + vider celui qui ne l'est pas

	//Fonction temps réel
	const text1direct = document.getElementById("normaldirect").value;
	const text2direct = document.getElementById("inverseddirect").value;

	function directReverse (){
		const activeTextarea = document.activeElement.id;
		console.log(activeTextarea);
		
		if (activeTextarea == "normaldirect") {
		let textField = document.form2.texte1direct.value;
		console.log(textField);
		document.form2.texte2direct.value = textField.split("").reverse().join("");
		}
		else if (activeTextarea == "inverseddirect") {
		let textField2 = document.form2.texte2direct.value;
		console.log(textField2);
		document.form2.texte1direct.value = textField2.split("").reverse().join("");
		}
		return null;
	}
	document.getElementById("normaldirect").onkeyup = directReverse;
	document.getElementById("inverseddirect").onkeyup = directReverse;
	document.getElementById("directlog").onclick = function() {
		console.log(textField + " - " + textField2);
		}