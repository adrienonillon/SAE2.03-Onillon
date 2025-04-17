Itération 5 : Création de la table profil
Lors de cette itération, l’objectif était de permettre la gestion des utilisateurs. J’ai donc décidé de créer une table nommée profil.
Elle contient les champs suivants :

id : un identifiant unique en auto-incrément (type int) pour chaque profil.

name : un champ de type varchar(255) pour stocker le nom de l'utilisateur.

image : un autre varchar(255) pour enregistrer le nom de l’image de profil.

age : un champ de type int pour l’âge de l'utilisateur. 

Cette table me permet donc de créer et stocker des profils utilisateurs de manière individuelle.

Itération 9 : Création de la table favoris
Ensuite, j’ai travaillé sur la possibilité d’ajouter des films aux favoris d’un utilisateur. Pour ça, j’ai créé une table favoris, qui permet de faire le lien entre un profil et les films qu’il aime.

Cette table contient :

id : un identifiant unique en auto-incrément.

id_profil : une clé étrangère liée à la table profil.

id_movie : une clé étrangère liée à la table movie.

Ce système me permet de gérer une relation de type plusieurs-à-plusieurs entre les profils et les films. Ainsi, un utilisateur peut avoir plusieurs films en favoris, et un même film peut être aimé par plusieurs utilisateurs.

Itération 11 : Films mis en avant
Enfin, dans cette itération, on m’a demandé de mettre en place une fonctionnalité pour afficher certains films de manière "mise en avant", par exemple sur la page d’accueil.

Pour cela, j’ai choisi d’ajouter un champ supplémentaire dans la table movie :

featured : de type tinyint(1) avec une valeur par défaut à 0.

Quand la valeur est à 1, cela signifie que le film est mis en avant. Sinon, il reste dans la liste standard des films. Ce système simple me permet de filtrer facilement les films à promouvoir.