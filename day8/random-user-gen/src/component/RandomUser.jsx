import React, { useState, useEffect } from 'react';
import styles from './RandomUser.module.css';

function RandomUser() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userCount, setUserCount] = useState(0);

  function fetchUser() {
    setLoading(true);
    setError(null);

    fetch('https://randomuser.me/api/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        return response.json();
      })
      .then((data) => {
        setUser(data.results[0]);
        setUserCount((prev) => prev + 1);
      })
      .catch((err) => {
        setError(err.message);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className={styles.container}>
      <h2>👤 Random User Profile</h2>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}

      {user && !loading && (
        <>
          <img src={user.picture.large} alt="Profile" className={styles.avatar} />
          <div className={styles.name}>{`${user.name.first} ${user.name.last}`}</div>
          <div className={styles.info}>{user.email}</div>
          <div className={styles.info}>{user.phone}</div>
          <div className={styles.info}>{`${user.location.city}, ${user.location.country}`}</div>
        </>
      )}

      <button className={styles.button} onClick={fetchUser}>
        Get New User
      </button>

      <div className={styles.counter}>Users viewed: {userCount}</div>
    </div>
  );
}

export default RandomUser;
