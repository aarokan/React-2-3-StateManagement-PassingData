import React, { Component } from 'react'

class ListProfiles extends Component {
  render() {
   	console.log('profiles', this.props.profiles);
    console.log('users', this.props.users[1]);
    return (
    	<ul className="profiles-list">
      		{this.props.profiles.map((profile) => (
      			<li key={profile.id} className="profile-item">
					{this.props.users[profile.id].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}
      			</li>
      		))}
      	</ul>
    ) 
  }
}

export default ListProfiles