'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXZhbnphdGVjIiwiYSI6ImNsdm1peG5wdDAzMHEycnM0NXMxMmIwNWwifQ.fHpUy3mYPVhZdGrL83p1Fw';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  const { t } = useTranslation();

  const mapContainer = useRef(null);
  const map = useRef(null);

  // Rivas 11.471338, -85.859057
  // Nicaragua 12.960367413976618, -85.10190884542044
  const [lng, setLng] = useState(-85.10190884542044);
  const [lat, setLat] = useState(12.960367413976618);
  const [zoom, setZoom] = useState(3);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <section className="about">
      <Container>
        <Row>
          <Col md={5} className="thumb">
            <Image
              src="/images/kairos-worker-on-wind-turbine.jpeg"
              width={500}
              height={500}
              alt={t('About.photoAlt')}
            />
          </Col>

          <Col md={7}>
            <h4>{t('About.title')}</h4>
            <p className="large-text">{t('About.description')}</p>

            <p>{t('About.paragraph1')}</p>

            <p>{t('About.paragraph2')}</p>

            <p>{t('About.paragraph3')}</p>
          </Col>
        </Row>
      </Container>
      <div>
        <div ref={mapContainer} className="map-container" />
      </div>
    </section>
  );
}
