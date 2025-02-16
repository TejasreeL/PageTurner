import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

// Fix for default marker icon
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: '/marker-icon-2x.png',
  iconUrl: '/marker-icon.png',
  shadowUrl: '/marker-shadow.png',
});

const WorldMap = ({ onMarkerClick, selectedGenre }) => {
  // Example locations data - replace with your actual data
  const locations = [
    {
      id: 1,
      name: "Hogwarts",
      position: [55.4155, -1.7054],
      world: "Harry Potter",
      genre: "fantasy",
      description: "School of Witchcraft and Wizardry",
    },
    {
      id: 2,
      name: "Rivendell",
      position: [54.4155, -2.7054],
      world: "Middle-earth",
      genre: "fantasy",
      description: "Elven outpost in Middle-earth",
    },
    // Add more locations
  ];

  const filteredLocations = selectedGenre === 'all' 
    ? locations 
    : locations.filter(loc => loc.genre === selectedGenre);

  return (
    <MapContainer
      center={[54.5, -2]}
      zoom={6}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {filteredLocations.map((location) => (
        <Marker
          key={location.id}
          position={location.position}
          eventHandlers={{
            click: () => onMarkerClick(location),
          }}
        >
          <Popup>
            <div className="text-center">
              <h3 className="font-bold">{location.name}</h3>
              <p className="text-sm">{location.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default WorldMap; 