import React from 'react';


const Profile = (props) =>{
    const {title, description} = props.props;
    console.log(props);
return (
    <section>
    <h3>{title}</h3>
    <div className="profile">
    <p>{description}</p>
    </div>
    </section>
)
}
export default Profile;