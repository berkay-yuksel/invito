// pages/api/twitter.js

export async function fetchUserData(accessToken) {
    // Make an API call to Twitter to fetch additional user data
    const response = await fetch('https://api.twitter.com/2/users/me', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!response.ok) {
      // Handle error if the API call fails
      throw new Error('Failed to fetch user data');
    }
  
    const data = await response.json();
  
    // Extract the required fields from the Twitter API response
    const additionalData = {
      twitterUsername: data.username,
      // Add more fields as needed
    };
  
    return additionalData;
  }
  