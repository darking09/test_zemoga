import {useState} from 'react'

const initUser = {
    name: '',
    twitterHandle: '',
    picture: '/istockphoto-517998264-612x612.jpeg',
    experience: '',
    tweets: []
}

function userHook() {
    const [user, setUser] = useState(initUser);

    async function loadUser(urlBase : string, searchingParameter: string) {
        const request = await fetch(`${urlBase}/api/user/${searchingParameter}`);
        const user = await request.json()

        setUser(user)
    }

    return {
        user,
        loadUser
    }
}

export default userHook