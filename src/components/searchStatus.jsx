import React from "react";

const Termination = ({n}) => {
     
        n = Math.abs(n) % 100; var n1 = n % 10;
        if (n > 10 && n < 20) { return  Number(n) + ' человек тусанут с тобой сегодня'; }
        if (n1 > 1 && n1 < 5) {return Number(n) + " человека тусанет с тобой сегодня"; }
        if (n1 === 1) { return Number(n) + " человек тусанет с тобой сегодня" }
        return Number(n) + " человек тусанут с тобой сегодня";
    }

export default Termination

