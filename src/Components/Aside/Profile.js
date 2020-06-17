import React from 'react';


const Profile = (props) =>{
    console.log(props);
return (
    <section>
        {props.props.description}
    </section>
)
}
export default Profile;