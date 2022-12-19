let phrase_utilisateur = prompt("Quelle est ta phrase?");
let mot_phrase = prompt("Quel est le mot de la phrase précédente à changer?");
let change_mot_phrase = prompt("Quel mot vas-tu mettre à la place?");

alert(phrase_utilisateur.replace(mot_phrase, change_mot_phrase));