Itération 1 : 

Aucune modifications dans la base de donnée
Requête sql : $sql = "SELECT Movie.id, Movie.name, Movie.image, Category.name AS category_name 
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id"; 

Itération 2 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = "INSERT INTO Movie (name, year, length, description, director, id_category, image, trailer, min_age) 
            VALUES (:name, :year, :length, :description, :director, :id_category, :image, :trailer, :min_age)";

Itération 3 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = "SELECT Movie.id, Movie.name, image, description, director, year, length, Category.name AS category_name, min_age, trailer FROM Movie
    INNER JOIN Category ON Movie.id_category = Category.id WHERE Movie.id = :id";

Itération 4 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = "SELECT Category.id AS category_id, Category.name AS category_name, 
                   Movie.id AS movie_id, Movie.name AS movie_name, Movie.image AS movie_image
            FROM Movie 
            INNER JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.min_age <= :age";

Itération 5 : Création de la table profil
Lors de cette itération, l’objectif était de permettre la gestion des utilisateurs. J’ai donc décidé de créer une table nommée profil.
Elle contient les champs suivants :

id : un identifiant unique en auto-incrément (type int) pour chaque profil.

name : un champ de type varchar(255) pour stocker le nom de l'utilisateur.

image : un autre varchar(255) pour enregistrer le nom de l’image de profil.

age : un champ de type int pour l’âge de l'utilisateur. 

Cette table me permet donc de créer et stocker des profils utilisateurs de manière individuelle.
requête : $sql = "INSERT INTO Profil (id, name, image, age) 
            VALUES (:id, :name, :image, :age)";

Itération 6 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = "select id, name, image, age from Profil";

Itération 7 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = "select * from Profil where id = :id";


Itération 8 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = "UPDATE Profil 
            SET name = :name, image = :image, age = :age 
            WHERE id = :id";

Itération 9 : Création de la table favoris
Ensuite, j’ai travaillé sur la possibilité d’ajouter des films aux favoris d’un utilisateur. Pour ça, j’ai créé une table favoris, qui permet de faire le lien entre un profil et les films qu’il aime.

Cette table contient :

id : un identifiant unique en auto-incrément.

id_profil : une clé étrangère liée à la table profil.

id_movie : une clé étrangère liée à la table movie.

Ce système me permet de gérer une relation de type plusieurs-à-plusieurs entre les profils et les films. Ainsi, un utilisateur peut avoir plusieurs films en favoris, et un même film peut être aimé par plusieurs utilisateurs.
requête : $sql = "INSERT INTO Favoris  
    (id_movie, id_profil) 
    VALUES (:id_movie, :id_profil);";



Itération 10 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = "DELETE FROM Favoris WHERE id_movie = :id_movie AND id_profil = :id_profil";

Itération 11 : Films mis en avant
Enfin, dans cette itération, on m’a demandé de mettre en place une fonctionnalité pour afficher certains films de manière "mise en avant", par exemple sur la page d’accueil.

Pour cela, j’ai choisi d’ajouter un champ supplémentaire dans la table movie :

featured : de type tinyint(1) avec une valeur par défaut à 0.

Quand la valeur est à 1, cela signifie que le film est mis en avant. Sinon, il reste dans la liste standard des films. Ce système simple me permet de filtrer facilement les films à promouvoir.
requête : $sql = "SELECT id, name, image, description 
            FROM Movie 
            WHERE featured = TRUE AND min_age <= :age";

Itération 12 : 
Aucune modifications dans la base de donnée
Requête sql : $sql = 'SELECT Movie.id, Movie.name, Movie.image, Movie.year, Movie.min_age, Movie.description, Movie.featured, Category.name AS category_name
            FROM Movie
            INNER JOIN Category ON Movie.id_category = Category.id
            WHERE Movie.name LIKE :title OR Category.name LIKE :title OR year LIKE :title';

Looping : 

J’ai établi une relation entre les tables Category et Movie à travers l’association Catégoriser, en me basant sur les règles suivantes :

Une catégorie peut catégoriser de 0 à plusieurs films, ce qui justifie une cardinalité de (0,n) du côté de Movie.

En revanche, un film n’appartient qu’à une seule catégorie, ce qui implique une cardinalité de (1,1) du côté de Category.

Par ailleurs, j’ai relié les tables Movie et Profil via l’association Favoriser, en créant une table intermédiaire contenant les champs id_movie et id_profil.

Cette association respecte les règles suivantes :

Un film peut être mis en favoris par aucun ou plusieurs profils utilisateurs, d’où une cardinalité de (0,n) du côté de Profil.

Un profil utilisateur peut également avoir 0 à plusieurs films en favoris, ce qui donne une cardinalité de (0,n) du côté de Movie.

