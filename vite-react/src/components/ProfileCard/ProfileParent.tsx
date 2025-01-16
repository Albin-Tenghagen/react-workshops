import ProfileCard from "./Profilecard";

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