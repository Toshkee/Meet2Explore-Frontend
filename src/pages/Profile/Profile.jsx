import "./Profile.css";

const Profile = () => {
  // Dummy data until backend connects
  const user = {
    username: "Tamara",
    email: "tamara@example.com",
    joined: "January 2025"
  };

  return (
    <div className="profile-container">
     <div className="profile-wrapper">

  <div className="profile-card">
    <img src="/images/user-avatar.png" alt="User" className="profile-avatar" />

    <h1 className="profile-name">Tamara</h1>
    <p className="profile-email">tamara@example.com</p>

    <p className="profile-date">Joined: January 2025</p>

    <button className="profile-btn">Edit Profile</button>
  </div>

</div>

    </div>
  );
};

export default Profile;