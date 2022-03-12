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

	// TODO - check quel champ est rempli + vider celui qui ne l'est pas ?
	// TODO - messages popup selon longueur texte ? Ou si un certain texte (ex: "Corentin") est trouvé dans le champ txt

	//Fonction temps réel
const text1direct = document.getElementById("normaldirect").value;
const text2direct = document.getElementById("inverseddirect").value;

	function directReverse (){
		const activeTextarea = document.activeElement.id;
		const regexCorentin = new RegExp("Corentin", 'i');
		console.log(activeTextarea);
		
		if (activeTextarea == "normaldirect") {
		var textField = document.form2.texte1direct.value;
		//console.log(textField);
		document.form2.texte2direct.value = textField.split("").reverse().join("");
		}
		else if (activeTextarea == "inverseddirect") {
		var textField2 = document.form2.texte2direct.value;
		//console.log(textField2);
		document.form2.texte1direct.value = textField2.split("").reverse().join("");
		}

	//La partie regex qui va chercher "Corentin" et faire pop la div d'alerte
		if (regexCorentin.test(textField) == true){
			document.getElementById('alertcoco').style.display = 'flex';
		}
		else if (regexCorentin.test(textField) == false) {
			document.getElementById('alertcoco').style.display = 'none';
		}

	//La partie pour les warnings
		var longueurTexte = 0;
		longueurTexte = textField.length;
		if (longueurTexte >= 20){
			document.getElementById('warning1').style.display = 'flex';
			document.getElementById('warning2').style.display = 'none';
		}
		if (longueurTexte < 20) {
			document.getElementById('warning1').style.display = 'none';
			document.getElementById('warning2').style.display = 'none';
		}
		if (longueurTexte >= 30){
			document.getElementById('warning2').style.display = 'flex';
			document.getElementById('warning1').style.display = 'none';
		}


		return null;
	}

	//Appels des fonctions
	document.getElementById("normaldirect").onkeyup = directReverse;
	document.getElementById("inverseddirect").onkeyup = directReverse;
	//document.getElementsByClassName("textareadirect").onkeyup = directReverse;
	//document.getElementById("normaldirect").onkeyup = alertDivs;

	document.getElementById("directlog").onclick = function() {
		console.log(textField + " - " + textField2);
		}
//document.write(Date());
