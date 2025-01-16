if (typeof activites === 'undefined') {
    alert("Un problème est survenu lors de la récupération des activités")
} 


// Fonction pour créer et ajouter les éléments HTML pour chaque activité
function afficherActivites(activitesFiltrees) {
    const activiteDiv = document.getElementById('activite');
    activiteDiv.innerHTML = ''; // Clear previous activities
    activitesFiltrees.forEach(activite => {
        const activiteElement = document.createElement('div');
        activiteElement.className = 'activite';
        activiteElement.style.backgroundImage = `url('https://www.bungie.net/img/destiny_content/pgcr/${activite.img}')`;
        activiteElement.style.backgroundSize = 'cover';
        activiteElement.style.backgroundPosition = 'center';
        activiteElement.innerHTML = `
            <div class="activite-content">
                <h2>${activite.nom}</h2>
                <p>Type: ${activite.type}</p>
                <p>Durée: ${activite.duree} minutes</p>
                <p>Difficulté: ${activite.difficulte} / 10</p>
                <p>Joueurs: ${activite.minJoueur}-${activite.maxJoueur}</p>
            </div>
            ${activite.etapes !== undefined ? `
                <div class="etapes" style="display: none;">
                    ${activite.etapes.map(etape => `
                        <div class="etape">
                            <h3>${etape.nom}</h3>
                            <p>Type: ${etape.type}</p>
                            <p>Difficulté: ${etape.difficulte}</p>
                        </div>
                    `).join('')}
                </div>
            ` : `
                <div class="etapes" style="display: none;">
                    <p>Cette activité a une seule étape</p>
                </div>
            `}
        `;
        activiteElement.querySelector('.activite-content').addEventListener('click', () => {
            const etapesDiv = activiteElement.querySelector('.etapes');
            etapesDiv.style.display = etapesDiv.style.display === 'none' ? 'block' : 'none';
        });
        activiteDiv.appendChild(activiteElement);
    });
}

// Fonction pour filtrer les activités
function filtrerActivites() {
    const nombreJoueur = parseInt(document.getElementById('nombre-joueur').value);
    const temps = parseInt(document.getElementById('temps').value);
    const niveau = document.getElementById('niveau').value;

    const niveauDifficulte = {
        'débutant': [1, 3],
        'intermédiaire': [4, 6],
        'expert': [7, 10]
    };

    const activitesFiltrees = activites.filter(activite => {
        const [minDifficulte, maxDifficulte] = niveauDifficulte[niveau];
        return (!isNaN(nombreJoueur) ? activite.minParticipants <= nombreJoueur && activite.maxParticipants >= nombreJoueur : true) &&
               (!isNaN(temps) ? activite.duree <= temps : true) &&
               activite.difficulte >= minDifficulte && activite.difficulte <= maxDifficulte;
    });

    afficherActivites(activitesFiltrees);
}

// Ajouter un écouteur d'événement au bouton de filtrage
document.getElementById('filtrer').addEventListener('click', filtrerActivites);

// Ajouter un écouteur d'événement pour la touche "Entrée" sur les champs de saisie
document.querySelectorAll('#nombre-joueur, #temps, #niveau').forEach(element => {
    element.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            filtrerActivites();
        }
    });
});

// Appeler la fonction pour afficher toutes les activités au chargement de la page
document.addEventListener('DOMContentLoaded', () => afficherActivites(activites));