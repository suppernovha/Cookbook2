import saladierIcon from '../../assets/utensils/saladier.png'
import rouleauPatisserieIcon from '../../assets/utensils/rouleau-a-patisserie.png'
import cuillereBoisIcon from '../../assets/utensils/cuillere-bois.png'
import marmiteIcon from '../../assets/utensils/marmite.png'

export const RecipeMockedData = [
    {
        title: "pâte brisée thym et parmesan",
        id: 1,
        picture: "",
        type: "basic",
        ingredients: {
            "farine": { amount: 125, unit: "g" },
            "beurre": { amount: 65, unit: "g" },
            "sel": { amount: 2, unit: "pincée" },
            "thym": { amount: 3, unit: "branche" },
            "jaune d'oeuf": { amount: 1, unit: null },
            "eau": { amount: 2.5, unit: "cl" },
            "parmesan": { amount: 1, unit: "sachet" },
            "poivre noir": { amount: 8, unit: "tour de moulin" }
        },
        preparation: 15,
        cooking_duration: null,
        temperature: 180,
        utensils: [
            "rouleau à pâtisserie",
            "saladier"
        ],
        steps: [
            "mélanger la farine avec le sel, le poivre, et le thym émietté",
            "incorporer le beurre",
            "ajouter l'oeuf et l'eau. ",
            "ajouter le parmesan",
            "bien pétrir la pate",
            "précuire dans un plat à tarte, et attendre que ce soit légèrement doré"
        ],
        people: 4
    },
    {
        title: "soupe à l'oignon",
        id: 2,
        picture: "onion-soup.jpeg",
        type: "main",
        ingredients: {
            "oignons": { amount: 4, unit: null },
            "beurre": { amount: 50, unit: "g" },
            "huile d'olive": { amount: 1, unit: "càs" },
            "farine": { amount: 1, unit: "càs" },
            "sel": { amount: 1, unit: "pincée" },
            "poivre": { amount: 5, unit: "tour de moulin" },
            "vin blanc": { amount: 25, unit: "cl" },
            "eau": { amount: 1, unit: "l" }
        },
        preparation: 20,
        cooking_duration: 20,
        temperature: "feu doux",
        utensils: [
            "marmite", 
            "cuillère en bois"
        ],
        steps: [
            "peler et émincer les oignons",
            "faire revenir les oignons dans le mélange beurre et huile jusqu'à ce qu'ils soient tendres et légèrement dorés",
            "saupoudrer le mélange de farine",
            "ajouter l'eau et le vin blanc",
            "assaisonner avec le sel et le poivre",
            "couvrir et laisser bouillonner doucement pendant 20mn"
        ],
        people: 4
    }
]

export const utensils = {
    'saladier': saladierIcon,
    'cuillère en bois': cuillereBoisIcon,
    'marmite': marmiteIcon,
    'rouleau à pâtisserie': rouleauPatisserieIcon
}