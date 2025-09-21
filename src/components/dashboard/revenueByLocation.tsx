import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapContainer, TileLayer, useMap, CircleMarker } from "react-leaflet"
import L from "leaflet"
import { useEffect, useMemo } from "react"

function SetupMap() {
    const map = useMap()
    useEffect(() => {
        map.createPane("pins")
        const pane = map.getPane("pins")
        if (pane) pane.style.zIndex = "650"

       
        const southWest = L.latLng(-58, -185)
        const northEast = L.latLng(78, 185)
        map.fitBounds(L.latLngBounds(southWest, northEast), { padding: [4, 6] })
        const c = map.getCenter()
        map.setView([c.lat, c.lng + 5], map.getZoom(), { animate: false })
    }, [map])
    return null
}

type Row = { label: string; value: string }
type Pin = { label: string; lat: number; lon: number }

const pinByCity: Record<string, { lat: number; lon: number }> = {
    "New York": { lat: 40.7128, lon: -74.006 },
    "San Francisco": { lat: 37.7749, lon: -122.4194 },
    Sydney: { lat: -33.8688, lon: 151.2093 },
    Singapore: { lat: 1.3521, lon: 103.8198 },
}

export function RevenueByLocationCard({ rows }: { rows: Row[] }) {
    const parsed = useMemo(
        () =>
            rows.map((r) => {
                const n = parseFloat(r.value.replace(/k/i, ""))
                return { ...r, n }
            }),
        [rows]
    )
    const max = Math.max(...parsed.map((r) => r.n || 0), 1)

    const pins: Pin[] = rows
        .map((r) => ({ label: r.label, ...(pinByCity[r.label] || {}) }))
        .filter((p) => Number.isFinite((p as any).lat) && Number.isFinite((p as any).lon)) as any

    return (
        <Card className="rounded-3xl">
            <CardHeader className="pb-2">
                <CardTitle>Revenue by Location</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="rounded-2xl overflow-hidden mb-3">
                    <MapContainer
                        className="w-full h-[110px]
                        [&_.leaflet-tile-pane]:brightness-[1.6] [&_.leaflet-tile-pane]:saturate-[0]
                        [&_.leaflet-tile-pane]:contrast-[0.9]"
                        center={[15, 10]}
                        zoom={1}
                        worldCopyJump
                        scrollWheelZoom={false}
                        dragging={false}
                        doubleClickZoom={false}
                        boxZoom={false}
                        keyboard={false}
                        zoomControl={false}
                        attributionControl={false}
                    >
                        
                        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" />
                        <SetupMap />
                        
                        {pins.map((p) => (
                            <g key={p.label}>
                                <CircleMarker pane="pins" center={[p.lat, p.lon]} radius={5} pathOptions={{ color: "#fff", weight: 2, fillOpacity: 0 }} />
                                <CircleMarker pane="pins" center={[p.lat, p.lon]} radius={3.5} pathOptions={{ color: "#111827", weight: 0, fillColor: "#111827", fillOpacity: 1 }} />
                            </g>
                        ))}
                    </MapContainer>
                </div>

                <ul className="space-y-3">
                    {parsed.map((r) => {
                        const pct = Math.max(0, Math.min(100, Math.round((r.n / max) * 100)))
                        return (
                            <li key={r.label}>
                                <div className="flex items-center justify-between">
                                    <span className="text-[12px] text-foreground/80">{r.label}</span>
                                    <span className="text-[12px] font-semibold">{r.value}</span>
                                </div>
                                <div className="mt-2 h-[3px] w-[96%] rounded-full bg-muted"> 
                                    <div className="h-[3px] rounded-full bg-sky-300" style={{ width: `${pct}%` }} />
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </CardContent>
        </Card>
    )
}
