import React from 'react';
class BasicInfo extends React.Component { 
    render() {
        return (
        <div className="BasicInfo">
            <h1>{this.props.person.name}</h1>
            <h2>{this.props.person.phone}</h2>
            <h3>{this.props.person.birthdate}</h3>
            <p>{this.props.person.email}</p>
        </div>
        )
    }
}
export default BasicInfo;