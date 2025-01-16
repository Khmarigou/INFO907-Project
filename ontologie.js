
// Activite
// |- Raid
//      |- Etape
//          |- Boss
//          |- Puzzle
// |- Donjon
//      |- Etape
//          |- Boss
//          |- Puzzle
// |- Assaut
//      |- NuitNoire    
// |- Mission
//      |- MissionExotique

class Activite {
    constructor(nom, type, duree, minJoueur, maxJoueur, difficulte, img) {
        this.nom = nom;
        this.type = type;
        this.duree = duree;
        this.minJoueur = minJoueur;
        this.maxJoueur = maxJoueur;
        this.difficulte = difficulte;
        this.img = img;
    }

    toString() {
        return `${this.nom} (${this.type}) - ${this.duree}h - ${this.minJoueur} à ${this.maxJoueur} joueurs - Difficulté ${this.difficulte}/10`
    }
}

class Raid extends Activite {
    constructor(nom, duree, difficulte, img, etapes) {
        super(nom, "Raid", duree, 3, 6, difficulte, img)
        this.etapes = etapes;
    }
    nbEtapes() {
        return this.etapes.length;
    }
}

class Donjon extends Activite {
    constructor(nom, duree, difficulte, img, etapes) {
        super(nom, "Donjon", duree, 1, 3, difficulte, img)
        this.etapes = etapes;
    }
    nbEtapes() {
        return this.etapes.length;
    }
}

class Etape {
    constructor(nom, type, difficulte) {
        this.nom = nom;
        this.type = type;
        this.difficulte = difficulte;
    }
}

class Assaut extends Activite {
    constructor(nom, type, duree, difficulte, img) {
        super(nom, type, duree, 1, 3, difficulte, img)
    }
}

class NuitNoire extends Assaut {
    constructor(assaut) {
        super(assaut.nom, "Nuit Noire", assaut.duree * 2, assaut.difficulte + 2, assaut.img)
    }
}

class Mission extends Activite {
    constructor(nom, duree, difficulte, img) {
        super(nom, "Mission", duree, 1, 3, difficulte, img)
    }
}

class MissionExotique extends Mission {
    constructor(nom, duree, difficulte, img) {
        super(nom, duree, difficulte, img)
    }
}

const activites = [
    new Raid("Le Léviathan", 45, 6, "raid_gluttony.jpg", [
        new Etape("Le cirque", "Puzzle", 5),
        new Etape("Le jardin", "Puzzle", 5),
        new Etape("Les bassins", "Puzzle", 5),
        new Etape("Calus", "Boss", 6)
    ]),
    new Raid("Le Fléau du passé", 30, 5, "raids.1305rh0093145r13t5hn10tnz.raid_sunset.jpg", [
        new Etape("Infiltration", "Puzzle", 5),
        new Etape("Course de sparrow", "Puzzle", 3),
        new Etape("Desarmement de bombes", "Puzzle", 5),
        new Etape("Insurection Prime", "Boss", 6)
    ]),
    new Raid("Serment du disciple", 90, 8, "raid_nemesis.jpg", [
        new Etape("Convoi", "Puzzle", 5),
        new Etape("Le gardien", "Boss", 7),
        new Etape("Exhibition", "Puzzle", 8),
        new Etape("Le disciple", "Boss", 8)
    ]),
    new Raid("Le dernier vœu", 120, 8, "raid_beanstalk.jpg", [
        new Etape("Kalli", "Boss", 5),
        new Etape("Shuro-shi", "Boss", 7),
        new Etape("Morgeth", "Boss", 7),
        new Etape("Caveau", "Puzzle", 5),
        new Etape("Riven des milles voix", "Boss", 8),
    ]),
    new Raid("Orée du salut", 140, 10, "raid_splinter.jpg", [
        new Etape("Labirynthe", "Puzzle", 7),
        new Etape("Herald", "Boss", 8),
        new Etape("Repository", "Puzzle", 8),
        new Etape("Vérité", "Puzzle", 10),
        new Etape("Le témoin", "Boss", 10),
    ]),
    new Raid("La chute de Cropta", 60, 7, "raid_crotas_end.jpg", [
        new Etape("Entrée", "Puzzle", 5),
        new Etape("Le pont", "Puzzle", 5),
        new Etape("Ir Yût", "Boss", 6),
        new Etape("Cropta", "Boss", 7),
    ]),
    new Raid("Origine des cauchemars", 45, 6, "raid_root_of_nightmares.jpg", [
        new Etape("Entrée", "Puzzle", 5),
        new Etape("Le relais", "Puzzle", 5),
        new Etape("Le cartographe", "Boss", 6),
        new Etape("Nezarec", "Boss", 6),
    ]),
    new Raid("La chute du roi", 45, 6, "raid_kings_fall.jpg", [
        new Etape("Les status", "Puzzle", 5),
        new Etape("Golgoroth", "Boss", 5),
        new Etape("Les soeurs", "Boss", 6),
        new Etape("Oryx", "Boss", 6),
    ]),
    new Raid("Le caveau de verre", 30, 5, "vault_of_glass.jpg", [
        new Etape("Entrée", "Puzzle", 3),
        new Etape("Les pilonnes", "Puzzle", 4),
        new Etape("Templar", "Boss", 5),
        new Etape("Le gardien des clés", "Boss", 5),
        new Etape("Atheon", "Boss", 5)
    ]),
    new Raid("Crypte de la pierre", 60, 6, "europa-raid-deep-stone-crypt.jpg", [
        new Etape("Les fuseaux", "Puzzle", 5),
        new Etape("Atraks-1", "Boss", 6),
        new Etape("La chute", "Puzzle", 4),
        new Etape("Taniks", "Boss", 6)
    ]),
    new Raid("Jardin du salut", 60, 7, "raid_garden_of_salvation.jpg", [
        new Etape("Infiltration", "Puzzle", 5),
        new Etape("Les piliers", "Puzzle", 5),
        new Etape("L'esprit Vex", "Boss", 6),
        new Etape("Esprit sanctifié", "Boss", 7)
    ]),
    new Raid("La couronne du malheur", 45, 6, "raid_eclipse.jpg", [
        new Etape("Entrée", "Puzzle", 5),
        new Etape("Ombres de Gahlran", "Boss", 6),
        new Etape("Gahlran", "Boss", 6)
    ]),
    new Raid("La flèche d'étoile", 30, 7, "raid_greed.jpg", [
        new Etape("Entrée", "Puzzle", 5),
        new Etape("Les défenses", 4),
        new Etape("Capitaine de la garde", "Boss", 7)
    ]),
    new Raid("Devoreur de monde", 30, 5, "raids_leviathan_eater_of_worlds.jpg", [
        new Etape("Entrée", "Puzzle", 5),
        new Etape("Le bouclier", "Puzzle", 4),
        new Etape("Argos", "Boss", 5)
    ]),

    new Donjon("Le trône brisé", 20, 4, "mission_labyrinth.jpg", [
        new Etape("Le syboles", "Puzzle", 4),
        new Etape("Vorgeth", "Boss", 4),
        new Etape("Dul Incaru", "Boss", 4)
    ]),
    new Donjon("Prophétie", 30, 5, "dungeon_prophecy.jpg", [
        new Etape("Gardien", "Boss", 4),
        new Etape("Cube", "Puzzle", 3),
        new Etape("Kell Echo", "Boss", 5),
    ]),
    new Donjon("Hôte vesper", 40, 6, "vespers_host.jpg", [
        new Etape("Infiltration", "Puzzle", 5),
        new Etape("Les boules", "Boss", 6),
        new Etape("Atraks-2", "Boss", 6)
    ]),
    new Donjon("Ruine de la guerrière", 40, 6, "dungeon_ridgeline.jpg", [
        new Etape("Rathl", "Boss", 5),
        new Etape("Lodus", "Boss", 6),
        new Etape("Hefnd", "Boss", 6)
    ]),
    new Donjon("Fantome des profondeurs", 50, 7, "dungeon_ghosts_of_the_deep.jpg", [
        new Etape("Entrée", "Puzzle", 5),
        new Etape("Echtar", "Boss", 7),
        new Etape("Simmumah", "Boss", 7)
    ]),
    new Donjon("Flèche de la vigile", 40, 5, "dungeon_spire_of_the_watcher.jpg", [
        new Etape("Entrée", "Puzzle", 5),
        new Etape("Silence", "Boss", 5),
        new Etape("Persys", "Boss", 5)
    ]),
    new Donjon("Dualité", 30, 5, "dungeon_spire_of_the_watcher.jpg", [
        new Etape("Entrée", "Puzzle", 3),
        new Etape("Fantome de Galhran", "Boss", 5),
        new Etape("Fantome de Caitl", "Boss", 5)
    ]),
    new Donjon("Etreinte de l'avarice", 40, 6, "30th-anniversary-grasp-of-avarice.jpg", [
        new Etape("L'ogre", "Boss", 5),
        new Etape("Le bouclier", "Puzzle", 4),
        new Etape("Le capitaine déchu", "Boss", 6)
    ]),
    new Donjon("Fosse de l'hérésie", 30, 5, "dungeon_pit_of_heresy.jpg", [
        new Etape("Entrée", "Puzzle", 3),
        new Etape("Zulmak", "Boss", 5),
        new Etape("Sorcière", "Boss", 5)
    ]),

    new Assaut("Le trafiquant d'armes", "Assaut", 10, 2, "strike_the_arms_dealer.jpg"),
    new Assaut("Crash de l'Exode", "Assaut", 15, 3, "strike_exodus_crash.jpg"),
    new Assaut("La corrompu", "Assaut", 15, 3, "strike_gemini.jpg"),


    new NuitNoire(new Assaut("Le trafiquant d'armes", "Nuit Noire", 10, 2, "strike_the_arms_dealer.jpg")),
    new NuitNoire(new Assaut("Crash de l'Exode", "Nuit Noire", 15, 3, "strike_exodus_crash.jpg")),
    new NuitNoire(new Assaut("La corrompu", "Assaut", 15, 3, "strike_gemini.jpg")),

    new Mission("Le retour d'Uldren", 20, 2, "mission_uldren.jpg"),
    new Mission("La forme finale", 40, 6, "tfs_m1.jpg"),
    new MissionExotique("Mauvais présage", 20, 7, "edz_exotic_harbinger.jpg"),
    new MissionExotique("Le murmure du ver", 20, 8, "whisper.jpg")


]