import React from "react";

import styles from '../styles/introduction.module.scss';
import { ReactComponent as MySvg} from '../assets/law.svg';
import { Button } from "react-bootstrap";

function Test() {
    return (
        <div class={styles["content"]}>
            <MySvg id={styles["logo"]}/>
            <h1>Hola! Soy alexceend</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                <span id={styles["underlined"]}> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span> 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            </p>
            <div>
                <table >
                    <tr>
                        <th>
                            <a href="mailto:alexceend@gmail.com" target="_blank" id={styles["boton"]}>
                                Contactame!
                            </a>
                        </th>
                        <th>
                            <a href="https://github.com/alexceend" target="_blank" id={styles["boton"]}>
                                Github!
                            </a>
                        </th>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Test;