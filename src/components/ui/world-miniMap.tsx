import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet"
import L from "leaflet"
import { useEffect } from "react"

const dotIcon = new L.DivIcon({
  html: '<div style="width:8px;height:8px;background:#111827;border:2px solid #fff;border-radius:9999px;"></div>',
  className: "",
  iconSize: [12, 12],
  iconAnchor: [6, 6],
})

function FitWorld() {
  const map = useMap()
  useEffect(() => {
    // Fit to near-world with padding so continents are visible
    const southWest = L.latLng(-60, -180)
    const northEast = L.latLng(80, 180)
    map.fitBounds(L.latLngBounds(southWest, northEast), { padding: [10, 10] })
  }, [map])
  return null
}

type Pin = { label: string; lat: number; lon: number }

export function LocationMap({ pins }: { pins: Pin[] }) {
  return (
    <div className="rounded-xl border bg-muted/30 overflow-hidden">
      <MapContainer
        className="w-full h-[160px]"
        center={[15, 10]}
        zoom={1}
        scrollWheelZoom={false}
        dragging={false}
        doubleClickZoom={false}
        boxZoom={false}
        keyboard={false}
        zoomControl={false}
        attributionControl={false}
        worldCopyJump
      >
        {/* More reliable global tiles; switch to OSM if needed */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          // Alternative: 
          // url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <FitWorld />
        {pins.map((p) => (
          <Marker key={p.label} position={[p.lat, p.lon]} icon={dotIcon} />
        ))}
      </MapContainer>
    </div>
  )
}
