import React, { useEffect, useState } from 'react'
import GetStatus from '../App.service'
import ServerOff from '../../assets/pc-off.png'
import ServerOn from '../../assets/pc-on.gif'

import styles from "../App.module.scss";

interface propsInterface {
    serverId: string
}

const Component = (props: propsInterface) => {
    const [serverIsOn, setServerStatus] = useState(true)
    const [serverLoad, setServerLoad] = useState(0)

    const TIMEOUT = 3000

    useEffect(() => {
        if (serverIsOn) {
            const interval = setInterval(() => {
                checkLoad()
            }, TIMEOUT)
            return () => clearInterval(interval)
        }
    }, [serverLoad])

    const pressButton = () => {
        serverIsOn ? turnServerOff() : turnServerOn()
    }

    const checkLoad = () => {
        GetStatus(props.serverId).then((response)=> {
            setServerLoad(response.load)
        })
    }

    const turnServerOff = () => {
        setServerStatus(false)
        setServerLoad(0)
    }

    const turnServerOn = () => {
        setServerStatus(true)
        checkLoad()
    }

    return (
        <div className="window-body">
            <img src={serverIsOn? ServerOn : ServerOff} width="150px"/>
            <div className="status-bar">
                <p className="status-bar-field">Status:{serverIsOn? "ON" : "OFF"}</p>
                <p className="status-bar-field" onClick={pressButton}>{serverIsOn? "Shut Down" : "Turn On"}</p>
                <p className="status-bar-field">{serverLoad}%</p>
            </div>
        </div>
      );
}

export default Component