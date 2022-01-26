import { readable } from 'svelte/store';

export let entries = [
    { title: 'bug ', image: './images/bugs/1.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/2.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/3.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/6.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/7.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/9.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/10.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/12.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/13.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/16.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/17.png', type: 'illustration' },
    { title: 'bug ', image: './images/bugs/19.png', type: 'illustration' },
];
 export let name = 'Project Title';
 export let details = 'Project Details Go here';
 export let link = 'link url';