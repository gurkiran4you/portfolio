import { useEffect, useState } from "preact/hooks";
import { Feature, Map, View } from "npm:ol";
import TileLayer from "npm:ol/layer/Tile.js";
import OSM from "npm:ol/source/OSM.js";
import Point from "npm:ol/geom/Point.js";
import VectorSource from "npm:ol/source/Vector.js";
import VectorLayer from "npm:ol/layer/Vector.js";
import Style from "npm:ol/style/Style.js";
import Text from "npm:ol/style/Text.js";
import Fill from "npm:ol/style/Fill.js";
import LineString from "npm:ol/geom/LineString.js";
import Stroke from "npm:ol/style/Stroke.js";
import {
    AMRITSAR,
    BATALA,
    CALGARY,
    CHANDIGARH,
    CHARLOTTE,
    GURDASPUR,
    GURGAON,
    HOUSTON,
    locations,
    LUDHIANA,
    MERRIMACK,
    MYSURU,
    PHILADELPHIA,
    PISCATAWAY,
    WASHINGTON,
} from "../utils/cities.ts";
import type { Geometry } from "npm:ol/geom.js";
import type { Coordinate } from "npm:ol/coordinate.d.ts";

function MapView() {
    const [map, setMap] = useState<Map | null>(null);

    const iconFeature = new Feature({
        geometry: new Point(BATALA),
        name: "Batala",
    });

    const initialView: View = new View({
        center: [0, 0],
        zoom: 2,
    });

    const base_layers = [
        new TileLayer({
            source: new OSM(),
        }),
        new VectorLayer({
            source: new VectorSource({
                features: [iconFeature],
            }),
        }),
    ];

    useEffect(() => {
        const map = new Map({
            target: "map",
            layers: base_layers,
            view: initialView,
        });

        setMap(map);

        return () => {
            map?.setTarget();
        };
    }, []);

    const reset_map = () => {
        map?.setLayers(base_layers);
        map?.setView(initialView);
    };

    const handle = (e) => {
        console.log(e);
    };

    const addNewVLayer = (features: Feature<Geometry>[], location: {
        name: string;
        lonlat: Coordinate;
        info: string;
    }) => {
        if (map == null) {
            return;
        }
        const text = location.info;
        const id = location.name;
        const layerExistsInMap = map?.getLayers().getArray().find((layer) =>
            layer.get("layer_id") == id
        ) as VectorLayer;
        if (layerExistsInMap) {
            // find the text in icon feature
            const style = layerExistsInMap.getStyle() as Style;
            const text = style?.getText() as Text;
            text.setText(`${text.getText()} AND ${location.info}`);
        }
        // check if there is already a vector at this location
        const newLayer = new VectorLayer({
            source: new VectorSource({
                features,
            }),
            style: new Style({
                // image: new Icon({
                //     anchor: [0.5, 46],
                //     anchorXUnits: "fraction",
                //     anchorYUnits: "pixels",
                //     src: "https://openlayers.org/en/latest/examples/data/icon.png",
                // }),
                text: new Text({
                    text,
                    scale: 1,
                    offsetY: -20,
                    padding: [2, 1, 2, 1],
                    backgroundFill: new Fill({
                        color: "#000",
                    }),
                    fill: new Fill({
                        color: "#fff",
                    }),
                }),
                zIndex: 1,
            }),
        });
        newLayer.set("layer_id", location.name);
        map?.addLayer(newLayer);
    };

    const flyTo = (index: number, done: (more: boolean) => void) => {
        if (map == null) {
            return;
        }
        const location = locations[index].lonlat;
        const duration = 4000;
        const viewMap = map.getView();
        const zoom = 8;
        let parts = 2;
        let called = false;

        const marker = createMarker(locations[index]);
        addNewVLayer(Array(marker), locations[index]);

        drawLine(index);

        function callback(complete: boolean) {
            --parts;
            if (called) {
                return;
            }
            if (parts === 0 || !complete) {
                called = true;
                done(complete);
            }
        }
        viewMap.animate(
            {
                center: location,
                duration: duration,
            },
            callback,
        );
        viewMap.animate(
            {
                zoom: zoom - 1,
                duration: duration / 2,
            },
            {
                zoom: zoom,
                duration: duration / 2,
            },
            callback,
        );
    };

    function createMarker(location: {
        name: string;
        lonlat: Coordinate;
        info: string;
    }) {
        const feature = new Feature({
            geometry: new Point(location.lonlat),
            name: location.name,
        });
        feature.setId(location.name);
        return feature;
    }

    const drawLine = (index: number) => {
        if (index === 0) {
            return;
        }
        const from = locations[index - 1].lonlat;
        const to = locations[index].lonlat;

        const lineFeature = new Feature({
            geometry: new LineString([from, to]),
        });

        const vector = new VectorLayer({
            source: new VectorSource({
                features: [lineFeature],
            }),
            style: new Style({
                stroke: new Stroke({
                    color: "#000",
                    width: 2,
                    lineDash: [1, 2, 3, 4],
                }),
            }),
        });
        map?.addLayer(vector);
    };

    const reset_zoom_center = () => {
        const viewMap = map?.getView();
        viewMap?.animate(
            {
                center: [0, 0],
                duration: 1000,
                zoom: 2,
            },
        );
    };

    const tour = () => {
        let index = -1;
        function next(more: boolean) {
            if (more) {
                ++index;
                if (index < locations.length) {
                    const delay = index === 0 ? 0 : 2000;
                    setTimeout(function () {
                        flyTo(index, next);
                    }, delay);
                } else {
                    setTimeout(function () {
                        reset_zoom_center();
                    }, 2000);
                }
            } else {
                alert("Tour cancelled");
            }
        }
        next(true);
    };

    return (
        <>
            <div class="flex justify-center gap-5 bg">
                <button onClick={tour} title="start tour">
                    <img src="logos/play.svg" alt="start tour" />
                </button>
                <button onClick={reset_map} title="reset map">
                    <img src="logos/reset.svg" alt="reset tour" />
                </button>
            </div>
            <div
                onWheel={handle}
                id="map"
                style={{ width: "100%", height: "100vh" }}
            />
        </>
    );
}

export default MapView;
