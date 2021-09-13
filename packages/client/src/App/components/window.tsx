import React from 'react'
import Server from "./server";

interface propsInterface {
    serverId: string
}

const Component = (props: propsInterface) => {
    return (
        <div className="window" style={{width: 320, margin: "auto"}}>
            <div className="title-bar">
                <div className="title-bar-text">Server #{props.serverId}</div>
                <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
                </div>
            </div>
            <Server serverId={props.serverId}/>
        </div>
      );
}

export default Component