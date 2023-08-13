import Layout from '../../components/layout'
import React from "react"
import { ComposableMap, Geographies, Geography } from "react-simple-maps"
import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export const SimpleMap = () => {
//     const defaultProps = {
//         center: {
//             lat: 9.005401,
//             lng: 38.763611
//         },
//         zoom: 7
//     };

//     return (
//         // Important! Always set the container height explicitly
//         <div style={{ height: '600px', width: '100%' }}>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: "" }}
//                 defaultCenter={defaultProps.center}
//                 defaultZoom={defaultProps.zoom}
//             >
//                 <AnyReactComponent
//                     lat={9.005401}
//                     lng={38.763611}
//                     text="My Marker"
//                 />
//             </GoogleMapReact>
//         </div>
//     );
// }

// const geoUrl =
//     "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

// export const MapChart = () => {
//     return (
//         <ComposableMap>
//             <Geographies geography={geoUrl}>
//                 {({ geographies }) =>
//                     geographies.map((geo) => (
//                         <Geography key={geo.rsmKey} geography={geo} />
//                     ))
//                 }
//             </Geographies>
//         </ComposableMap>
//     )
// }

export default function Index({ allPosts }: any) {

    return (
        <>
            <Layout title={'Our Work'}>
                <section className='mt-8 max-w-screen-xl mx-auto lg:px-12'>
                    <h2 className='font-bold mb-8'>Our Work So Far</h2>
                    <p>SNV's international impact spans more than 20 countries across Africa and Asia, building on 60 years of experience in those countries. We are one team of over 1,600 colleagues, the vast majority of whom come from the contexts where we work. Together, we are committed to effective and efficient stewardship of resources and maximising positive, lasting impacts.</p>
                </section>
                <section className='mt-8 h-[900px] max-w-screen-xl mx-auto lg:px-12'>
                    {/* <SimpleMap /> */}
                    {/* <MapChart /> */}
                </section>
            </Layout>
        </>
    )
}
