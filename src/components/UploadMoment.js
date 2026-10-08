import React, { useState } from 'react';
import { supabase } from '../lib/supabase';

const UploadMoment = () => {
  const [file, setFile] = useState(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!file) {
      setError('Please select an image.');
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .storage
      .from('moments')
      .upload(file.name, file);

    if (error) {
      setError('Failed to upload image.');
    } else {
      setSuccess(true);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <input
        type="text"
        placeholder="Caption"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Uploading...' : 'Upload Moment'}
      </button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">Upload successful!</p>}
    </form>
  );
};

export default UploadMoment;
