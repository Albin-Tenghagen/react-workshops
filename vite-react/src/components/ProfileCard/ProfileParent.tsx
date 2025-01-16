import ProfileCard from "./Profilecard";
//* ProfileParent creates a user object and passes it as a prop to ProfileCard.
function ProfileParent(){
    const user = {
        name: 'Nicodemus Naveltuta',
        age: '47',
        title: 'vice ninja',
        email: 'nicokick@theoffice.net'
    }
    


    return (
        <section>
            <h1>Övning 3</h1>
            <ProfileCard user={user}/>
        </section>

    )
}

export default ProfileParent