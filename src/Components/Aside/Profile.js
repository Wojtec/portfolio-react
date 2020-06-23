import React from 'react';


const Profile = (props) =>{
    const {title, description} = props.props;
    console.log(props);
return (
    <section>
    <div className="profile">
    <h3>{title}</h3>
    <p>{description}</p>
    </div>
    </section>
)
}
export default Profile;