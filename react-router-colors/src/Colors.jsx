import React from "react";
import { Link } from "react-router-dom";

const Colors = ({colors =[]}) => {
    return (
        <div>
            <h2>Colors!!!</h2>

                {colors.length > 0 ? (
                colors.map((color, index) => (
                    <div key={index}>
                        <Link to={`/colorDetails/${color.name}`} style={{color: color.code}}>
                        {color.name}
                        </Link>
                    </div>
                ))
            ) : (
                <p>No colors have been added :</p>
            )}
            </div>
    )
}

export default Colors;