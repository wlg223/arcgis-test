import React, { useRef, useEffect } from "react";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import ArcGISMap from "@arcgis/core/Map";
import DictionaryRenderer from "@arcgis/core/renderers/DictionaryRenderer";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import portalItems, { portalUrl } from "../../constants/portalItems";
import styles from "../../styles/EsriMap.module.scss";
import { API_KEY } from "../../secrets";
import esriConfig from "@arcgis/core/config.js";



function EsriMap() {
  const mapDiv = useRef(null);
  esriConfig.apiKey = API_KEY;
  const map = useRef<WebMap>(null);

  // Get the dispatcher so we can update the SideBarState from the map
  // const {
  //   state: { filters },
  //   dispatch,
  // } = useContext(SideBarContext);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: portalItems.map,
          url: portalUrl,
        },
      });

      const view = new MapView({
        map: webmap,
        container: mapDiv.current,
        
      });

   
    }
  }, []);

  return <div className={styles.mapDiv} ref={mapDiv}></div>;
}

export default EsriMap;