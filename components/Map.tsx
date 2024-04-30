'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXZhbnphdGVjIiwiYSI6ImNsdm1peG5wdDAzMHEycnM0NXMxMmIwNWwifQ.fHpUy3mYPVhZdGrL83p1Fw';

export default function About() {
  const { t } = useTranslation();

  const mapContainer = useRef<any>(null);
  const map = useRef<mapboxgl.Map | any>(null);

  // Rivas 11.471338, -85.859057
  // Nicaragua 12.960367413976618, -85.10190884542044
  // Rond point Rivas 11.444187, -85.826933

  const [lng, setLng] = useState(-85.826933);
  const [lat, setLat] = useState(11.444187);
  const [zoom, setZoom] = useState(12);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/avanzatec/clvmq08ai06zh01nu6rwfa04p',
      center: [lng, lat],
      zoom: zoom,
    });
    map.current.scrollZoom.disable();
  });

  return <div ref={mapContainer} className="map-container" />;
}
