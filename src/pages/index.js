import React, { useState, useEffect } from 'react';
import CountdownTimer from '../components/CountdownTimer';
import GlassCard from '../components/GlassCard';
import MomentCarousel from '../components/MomentCarousel';
import UploadMoment from '../components/UploadMoment';
import { supabase } from '../lib/supabase';

const Home = () => {
  const [moments, setMoments] = useState([]);

  useEffect(() => {
    const fetchMoments = async () => {
      const { data, error } = await supabase
        .storage
        .from('moments')
        .list();

      if (!error) {
        setMoments(data);
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
        <MomentCarousel moments={moments} />
      </GlassCard>
      <GlassCard>
        <UploadMoment />
      </GlassCard>
    </div>
  );
};

export default Home;
