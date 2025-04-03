let HOST_URL = "https://mmi.unilim.fr/~onillon4/SAE2.03-Onillon";

let DataMovie = {};

/**
 * Envoie les données du formulaire MovieForm au serveur via une requête POST.
 * @param {Object} movieData - Un objet contenant les données du film (name, image, description, etc.).
 * @returns {Promise<Object>} - La réponse du serveur sous forme de JSON.
 */
DataMovie.add = async function (movieData) {
    try {
        let response = await fetch(HOST_URL + "/server/script.php?todo=addMovie", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),
        });

        return await response.json(); // Réponse du serveur
    } catch (error) {
        console.error("Erreur :", error);
        return null;
    }
};

export { DataMovie };
