import React from 'react';

const Languages = (props) =>{
    const {title, polish, spanish, english} = props.props;
    return(
        <section>
            <div>
                {title}
                <p>Polish: {polish}</p>
                <p>Spainsh: {spanish}</p>
                <p>English: {english}</p>
            </div>
        </section>
    )
}
export default Languages;