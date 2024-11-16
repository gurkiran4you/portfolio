import Home from "../../components/Home.tsx";
import MapView from "../../islands/MapView.tsx";

export default function Footprint() {
    return (
        <>
            <main class="h-screen">
                <Home />
                <MapView />
            </main>
        </>
    );
}
