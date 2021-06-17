import React, {useState} from 'react';
import { useBetween } from 'use-between';
import people from "./people";
import Cestino from './trash';

const useSharableState = () => {
    const [persona, setPersona] = useState(people)
    const [numero, setNumero] = useState(persona.length)
    return {
        persona,
        setPersona, 
        numero, 
        setNumero
    }
}

const ListNames = () => {
    // const [persona, setPersona] = useState(people)
    // const [numero, setNumero] = useState(5)
    const {persona, setPersona, numero, setNumero} = useBetween(useSharableState);
    
    const cliccatoTutto = () => {
        setPersona([]);
        setNumero(0);
    }
    return <section>
    <h1>{numero} Birthdays today</h1>
    {
        persona.map((person) => {
            return <Person person={person} />
        })
    }
    <button type='button' onClick={() => cliccatoTutto()}>Clear All</button>
    </section>
}

const Person = (props) => {
    const {id, img, name, age} = props.person;
    const {persona, setPersona,setNumero} = useBetween(useSharableState);

    const cliccatoSingolo = (nome) => {
        let perso = persona.filter(pers => pers.id !== id)
        setPersona(perso)
        setNumero(persona.length)

    }
    return (
        <div className='persona'>
            <img alt='' src={img}></img>
            <div>
                <h2>{name}</h2>
                <h4>{age} years</h4>
            </div>
            <button type='button' className='cestino' onClick={() => cliccatoSingolo(name)}>
                <Cestino/>
            </button>      
        </div>
    )        
}

export default ListNames;