# jquery-formvote
===============================
jquery formVote générateur de zone de vote pour un formulaire


Version
-------
```
@version         1.0.0
@since           2016.06.13
@author          Nicolas Bernillon
@homepage        https://github.com/Nykaus/jquery-formvote
```

Required files
--------------
+ js/checkvote.js


Options and their default values
--------------------------------
```js
	nombre           : 5     // Default le nombre d'etoile
	class_on         : ""    // class pour afficher une etoile pleine
	class_off        : ""    // class pour afficher une etoile vide
	taille_etoiles   : "29"  // font size de l'etoile
```

Basic example
------

```html
	<input type="hidden" name="star_vote" id="star_vote" class="formVote" />
```
```js
	$('#star_vote').formVote({"nombre":5,"class_on":"fa fa-star","class_off":"fa fa-star-o"});
```
