import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      <div className='map' style={{ height: '400px', width: '100%' }}>
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key:''  }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact> */}
        <p>Here Google Map</p>
      </div>
    );
  }
}

export default SimpleMap;