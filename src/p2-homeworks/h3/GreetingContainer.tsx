import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {

        const trimmedName = e.currentTarget.value.trim();
        if(trimmedName === ''){
            setError('Enter ur name')
        } else if (trimmedName) {
            setName(trimmedName)
            setError('')
        } else {
            setName('')
            setError('Enter ur name')
        }
    }

    const addUser = () => {
        // if(name ===  ' '){
        //     setError('Enter ur name')
        //     return
        // }
        addUserCallback(name)
        alert(`Hello  ${name} !`)
        setName('')
    }

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
