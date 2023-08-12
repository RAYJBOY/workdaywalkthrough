import { link } from "../components/NavBar";

export const homePageNavBar:link[] = [
    {
        displayName: 'Jobs',
        link: '/jobSearchPage'
    },
    {
        displayName: 'Help/Contact',
        link: '/contact'
    },
    {
        displayName: 'Register New Job',
        link: '/registerJob'
    }
]

export const jobSearchPageNavBar:link[] = [
    {
        displayName: 'Home',
        link: '/'
    },
    {
        displayName: 'Help/Contact',
        link: '/contact'
    }
]

export const userJobDetailsPageNavBar:link[] = [
    {
        displayName: 'Home',
        link: '/'
    },
    {
        displayName: 'Help/Contact',
        link: '/contact'
    }
]

export const helpContactPageNavBar:link[] = [
    {
        displayName: 'Home',
        link: '/'
    },
    {
        displayName: 'Jobs',
        link: '/jobSearchPage'
    }
]