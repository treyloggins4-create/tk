'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ServiceAreaMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapError, setMapError] = useState(false)

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'AIzaSyDh9c5t7qXZi0DpN5iUK9qRBk1vPJ5Bxpc'
    
    if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
      setMapError(true)
      return
    }

      // Wait for Google Maps to load
      const initMap = () => {
        if (typeof window !== 'undefined' && (window as any).google && (window as any).google.maps) {
        try {
          // Fowlerville, MI coordinates
          const fowlerville = { lat: 42.6606, lng: -84.0730 }
          
          const map = new (window as any).google.maps.Map(mapRef.current, {
            center: fowlerville,
            zoom: 9,
            styles: [
              {
                featureType: 'all',
                elementType: 'geometry.fill',
                stylers: [{ color: '#f5f5f5' }]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{ color: '#c9c9c9' }]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#757575' }]
              }
            ]
          })

            // Add marker for Fowlerville
            new (window as any).google.maps.Marker({
            position: fowlerville,
            map: map,
            title: 'TK Prime Services LLC - Fowlerville, MI',
            icon: {
              url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="20" cy="20" r="18" fill="#3b82f6" stroke="#ffffff" stroke-width="4"/>
                  <path d="M20 8l4 8h-8l4-8z" fill="#ffffff"/>
                </svg>
              `),
                scaledSize: new (window as any).google.maps.Size(40, 40),
                anchor: new (window as any).google.maps.Point(20, 20)
            }
          })

          // Add 40-mile radius circle
          new (window as any).google.maps.Circle({
            strokeColor: '#3b82f6',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#3b82f6',
            fillOpacity: 0.15,
            map: map,
            center: fowlerville,
            radius: 40 * 1609.34 // Convert 40 miles to meters
          })

          // Add info window
          const infoWindow = new (window as any).google.maps.InfoWindow({
            content: `
              <div style="padding: 10px; text-align: center;">
                <h3 style="margin: 0 0 5px 0; color: #1f2937; font-size: 16px;">TK Prime Services LLC</h3>
                <p style="margin: 0; color: #6b7280; font-size: 14px;">40 miles surrounding Fowlerville, MI</p>
                <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">(517) 302-7743</p>
              </div>
            `
          })

          // Add click listener to marker
          const marker = new (window as any).google.maps.Marker({
            position: fowlerville,
            map: map,
            title: 'TK Prime Services LLC - Fowlerville, MI'
          })

          marker.addListener('click', () => {
            infoWindow.open(map, marker)
          })
        } catch (error) {
          console.error('Error initializing map:', error)
          setMapError(true)
        }
      } else {
        // Google Maps not loaded yet, try again in 100ms
        setTimeout(initMap, 100)
      }
    }

    // Start trying to initialize the map
    initMap()

      // Set a timeout to show error if map doesn't load within 10 seconds
      const timeout = setTimeout(() => {
        if (!(window as any).google || !(window as any).google.maps) {
          setMapError(true)
        }
      }, 10000)

    return () => clearTimeout(timeout)
  }, [])

  if (mapError) {
    return (
      <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
            <MapPin className="h-8 w-8 text-primary-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Service Area Map
          </h3>
          <p className="text-gray-600 mb-4">
            40 miles surrounding Fowlerville, MI
          </p>
          <div className="space-y-2 text-sm text-gray-500">
            <div className="flex items-center justify-center">
              <Phone className="h-4 w-4 mr-2" />
              <span>(517) 302-7743</span>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>treyloggins18@gmail.com</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Interactive map requires Google Maps API key with billing enabled
          </p>
          <div className="mt-2 text-xs text-gray-500">
            <p>To enable the map:</p>
            <p>1. Go to Google Cloud Console</p>
            <p>2. Enable billing for your API key</p>
            <p>3. Refresh this page</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
      <div ref={mapRef} className="w-full h-full" />
    </div>
  )
}
