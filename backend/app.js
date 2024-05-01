const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://anthonyjacq:OEkN0EJrbkFgiVyn@clustercookbook.7ppzks6.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCookbook',
    { useNewUrlParser: true,
    useUnifiedTopology: true })
    .then(() => console.log('Youhou ! Connexion à MongoDB réussie !!'))
    .catch(() => console.log('Échec de la connexion à MongoDB'))

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content, Accept, Content-Type, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    next()
})

app.get('/', (req, res, next) => {
    const FruitsEtLegumesDeSaison = [
        {
            mois: 'janvier    ',
            legumes: [
                'Betterave', 'Carotte', 'Céleri', 'Champignon de Paris', 'Chou', 'Chou de Bruxelles', 'Chou-fleur', 'Courge', 'Cresson', 'Endive', 'Épinard', 'Mâche', 'Navet', 'Oignon', 'Panais', 'Poireau', 'Potiron', 'Salsifis', 'Topinambour'
            ],
            fruits: ['Citron', 'Clémentine', 'Kaki', 'Kiwi', 'Mandarine', 'Orange', 'Poire', 'Pomme']
        },
        {
            mois: 'fevrier',
            legumes: [
                'Betterave', 'Carotte', 'Céleri', 'Champignon de Paris', 'Choux', 'Choux de Bruxelles', 'Chou-fleur', 'Cresson', 'Endive', 'Épinard', 'Mâche', 'Navet', 'Oignon', 'Panais', 'Poireau', 'Salsifis', 'Topinambour'
            ],
            fruits: [
                'Citron', 'Clémentine', 'Kiwi', 'Mandarine', 'Orange', 'Pamplemousse', 'Poire', 'Pomme'
            ]
        },
        {
            mois: 'mars',
            legumes: [
                'Betterave', 'Carotte', 'Céleri', 'Champignon de Paris', 'Chou', 'Chou de Bruxelles', 'Chou-fleur', 'Cresson', 'Endive', 'Épinard', 'Navet', 'Oignon', 'Panais', 'Poireau', 'Radis'
            ],
            fruits: [
                'Kiwi', 'Orange', 'Pamplemousse', 'Poire', 'Pomme'
            ]
        },
        {
            mois: 'avril',
            legumes: [
                'Asperge', 'Betterave', 'Champignon de Paris', 'Cresson', 'Endive', 'Épinard', 'Fenouil', 'Navet', 'Oignon', 'Poireau', 'Radis', 'Salade'
            ],
            fruits: [
                'Pamplemousse', 'Pomme', 'Rhubarbe'
            ]
        },
        {
            mois: 'mai',
            legumes: [
                'Artichaut', 'Asperge', 'Champignon de Paris', 'Concombre', 'Courgette', 'Cresson', 'Épinard', 'Navet', 'Petit pois', 'Radis', 'Salade'
            ],
            fruits: [
                'Fraise', 'Pamplemousse', 'Rhubarbe'
            ]
        },
        {
            mois: 'juin',
            legumes: [
                'Artichaut', 'Asperge', 'Aubergine', 'Blette', 'Champignon de Paris', 'Concombre', 'Courgette', 'Fenouil', 'Haricot vert', 'Petit pois', 'Poivron', 'Radis', 'Tomate', 'Salade'
            ],
            fruits: [
                'Abricot', 'Cassis', 'Cerise', 'Fraise', 'Framboise', 'Groseille', 'Melon', 'Pamplemousse', 'Pastèque', 'Pêche', 'Rhubarbe'
            ]
        },
        {
            mois: 'juillet',
            legumes: [
                'Ail', 'Artichaut', 'Aubergine', 'Blette', 'Champignon de Paris', 'Concombre', 'Courgette', 'Fenouil', 'Haricot vert', 'Maïs', 'Petit pois', 'Poivron', 'Radis', 'Tomate', 'Salade'
            ],
            fruits: [
                'Abricot', 'Cassis', 'Cerise', 'Figue', 'Fraise', 'Framboise', 'Groseille', 'Melon', 'Myrtille', 'Nectarine', 'Pastèque', 'Pêche', 'Prune'
            ]
        },
        {
            mois: 'aout',
            legumes: [
                'Ail', 'Artichaut', 'Aubergine', 'Blette', 'Champignon de Paris', 'Concombre', 'Courgette', 'Fenouil', 'Haricot vert', 'Maïs', 'Poivron', 'Tomate', 'Salade'
            ],
            fruits: [
                'Abricot', 'Cassis', 'Figue', 'Framboise', 'Groseille', 'Melon', 'Mirabelle', 'Mûre', 'Myrtille', 'Nectarine', 'Pastèque', 'Pêche', 'Poire', 'Pomme', 'Prune'
            ]
        },
        {
            mois: 'septembre',
            legumes: [
                'Ail', 'Artichaut', 'Aubergine', 'Blette', 'Brocoli', 'Carotte', 'Chou-fleur', 'Champignon de Paris', 'Concombre', 'Courge', 'Courgette', 'Cresson', 'Épinard', 'Fenouil', 'Haricot vert', 'Maïs', 'Oignon', 'Poireau', 'Poivron', 'Potiron', 'Tomate', 'Salade'
            ],
            fruits: [
                'Figue', 'Melon', 'Mirabelle', 'Mûre', 'Myrtille', 'Noisette', 'Noix', 'Pastèque', 'Pêche', 'Poire', 'Pomme', 'Prune', 'Raisin'
            ]
        },
        {
            mois: 'octobre',
            legumes: [
                'Ail', 'Betterave', 'Blette', 'Brocoli', 'Carotte', 'Céleri', 'Champignon de Paris', 'Chou', 'Chou de Bruxelles', 'Chou-fleur', 'Concombre', 'Courge', 'Courgette', 'Cresson', 'Échalotte', 'Endive', 'Épinard', 'Fenouil', 'Haricot vert', 'Mâche', 'Navet', 'Oignon', 'Panais', 'Poireau', 'Potiron', 'Salade'
            ],
            fruits: [
                'Châtaigne', 'Coing', 'Figue', 'Kaki', 'Noisette', 'Noix', 'Poire', 'Pomme', 'Raisin'
            ]
        },
        {
            mois: 'novembre',
            legumes: [
                'Ail', 'Betterave', 'Brocoli', 'Carotte', 'Céleri', 'Champignon de Paris', 'Chou', 'Chou de Bruxelles', 'Chou-fleur', 'Courge', 'Cresson', 'Échalotte', 'Endive', 'Épinard', 'Fenouil', 'Mâche', 'Navet', 'Oignon', 'Panais', 'Poireau', 'Potiron', 'Salsifis', 'Topinambour'
            ],
            fruits: [
                'Châtaigne', 'Citron', 'Clémentine', 'Kaki', 'Kiwi', 'Mandarine', 'Noisette', 'Poire', 'Pomme'
            ]
        },
        {
            mois: 'decembre',
            legumes: [
                'Ail', 'Betterave', 'Carottes', 'Céleri', 'Champignons de Paris', 'Chou', 'Chou de Bruxelles', 'Chou-fleur', 'Courge', 'Cresson', 'Échalote', 'Endive', 'Épinard', 'Mâche', 'Navet', 'Oignon', 'Panais', 'Poireau', 'Potiron', 'Salsifis', 'Topinambour'
            ],
            fruits: [
                'Citron', 'Clémentine', 'Kaki', 'Kiwi', 'Mandarine', 'Orange', 'Poire', 'Pomme'
            ]
        },
    ]
    res.status(200).json(FruitsEtLegumesDeSaison)
})

app.use((req, res) => {
    res.json({message: 'REQUÊTE REÇUE !!!'})
})


module.exports = app

//anthonyjacq
//OEkN0EJrbkFgiVyn
//mongodb+srv://anthonyjacq:OEkN0EJrbkFgiVyn@clustercookbook.7ppzks6.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCookbook