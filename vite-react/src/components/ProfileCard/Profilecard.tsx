//? 1.
// function ProfileCard() {
//     return (
//         <>
//         <h4 className="Profilename">Nicodemus Naveltuta</h4>
        
//         <img src="../../IMGS/profileplaceholder.webp" alt="Profile Picture" />
//         <p className="ProfileTitle">vice ninja</p>
        
//         <button className="ProfileButton">Click me!</button>
        
//         </>
//     )

// }

// export default ProfileCard
//------------------------------------------

//?2.
// function ProfileCard({ProfileName, ProfileTitle}: { ProfileName: string; ProfileTitle: string }) {
//     return (
//         <>
//         <h4 className="ProfileName">{ProfileName}</h4>
        
//         <img src="../../IMGS/profileplaceholder.webp" alt="Profile Picture" />
//         <p className="ProfileTitle">{ProfileTitle}</p>
        
//         <button className="ProfileButton">Click me!</button>
        
//         </>
//     )

// }

// export default ProfileCard
//------------------------------------------
//? 3.


function ProfileCard({user}){
    const {name, title } = user;
   
    return (
      <article>
        <h2>{name}</h2>
        <h3>{title}</h3>
      </article>

    )
}
export default ProfileCard