	const header = document.getElementById("header");

	//La fonction qui prend une string et inverse l'ordre des caractères
	function reverseString (s){
		return s.split("").reverse().join("");
	}

	//Le 1er bouton qui va prendre le texte 1 et le mettre en inversé dans champ 2
	document.getElementById("inverser").onclick = function() {
		//header.style.color = "#10a190";

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
			//console.log(str);
		}

		// TODO - check quel champ est rempli + vider celui qui ne l'est pas
		// TODO - faire système temps réel
		// TODO - message erreur si vide