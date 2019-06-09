import React from 'react';
import Loadable from 'react-loadable';

export const Home = Loadable({
    loader: () => import('./components/home/home.component'),
    loading: () => <div>Loading...</div>
});

export const About = Loadable({
    loader: () => import('./components/about/about.component'),
    loading: () => <div>Loading...</div>
});

export const Contact = Loadable({
    loader: () => import('./components/contact/contact.component'),
    loading: () => <div>Loading</div>
});