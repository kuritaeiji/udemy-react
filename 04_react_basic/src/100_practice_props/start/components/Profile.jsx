import './Profile.css'

const Profile = ({ name = 'John Doe', age = '??', country = 'Japan' }) => (
  <div className="profile">
    <h3>{name}</h3>
    <h3>{age}</h3>
    <h3>{country}</h3>
  </div>
)

export default Profile
