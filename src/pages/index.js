'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CountdownTimer from '../components/CountdownTimer';
import GlassCard from '../components/GlassCard';
import UploadMoment from '../components/UploadMoment';

// Dynamically import MomentCarousel to prevent SSR/prerender errors
const MomentCarousel = dynamic(() => import('../components/MomentCarousel'), {
  ssr: false,
  loading: () => <p>Loading moments...</p>,
});

const Home = () => {
  const [moments, setMoments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMoments = async () => {
      try {
        // Only import supabase on the client side
        const { supabase } = await import('../lib/supabase');
        const { data, error } = await supabase
          .storage
          .from('moments')
          .list();

        if (!error && data) {
          setMoments(data);
        }
      } catch (err) {
        console.error('Failed to fetch moments:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchMoments();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-midnight-navy text-ivory">
      <GlassCard>
        <CountdownTimer targetDate={new Date('2027-03-14T00:00:00Z')} />
      </GlassCard>
      <GlassCard>
        {loading ? <p>Loading moments...</p> : <MomentCarousel moments={moments} />}
      </GlassCard>
      <GlassCard>
        <UploadMoment />
      </GlassCard>
    </div>
  );
};

export default Home;
