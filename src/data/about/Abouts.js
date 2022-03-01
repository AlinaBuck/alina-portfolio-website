import { images } from '../../constants';

export const abouts = [
    {
        title: 'Motivation',
        img: images.motivation,
        description: [
            {   
                name: 'What gets me up in the morning',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla voluptas nobis? Adipisci vero ipsum ad repellat eos in quae quos ratione, iure, eligendi minus laborum quo facere provident nostrum!'
            }
        ]
    },
    {
        title: 'Profile',
        img: images.darmsheim,
        description: [
            {
                name: 'First Name',
                text: 'Alina'
            },
            {
                name: 'Last Name',
                text: 'Buck'
            },
            {
                name: 'Birthday',
                text: 'June 20th 1996'
            },
            {
                name: 'Location',
                text: 'Germering'
            },
            {
                name: 'Grew Up In',
                text: 'Darmsheim'
            },
        ]
    },
    {
        title: 'Hobbies',
        img: images.hobbies,
        description: [
            {
                name: 'Sports',
                text: 'Cross Country Skiing, Hiking, Fitness'
            },
            {
                name: 'Travelling',
                secondName: 'Favorite Spot',
                text: 'Rotorua, New Zealand'
            },
            {
                name: 'Dogs',
                secondName: 'Favorite Breed',
                text: 'Golden Retriever',
                secondText: 'Looking forward to soon being a dog mom!',
            },
        ]
    }
]