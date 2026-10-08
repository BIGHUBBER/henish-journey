import { supabase } from '../src/lib/supabase';

describe('Supabase Integration', () => {
  it('uploads and retrieves an image', async () => {
    const file = new File(['dummy content'], 'test-image.jpg', { type: 'image/jpeg' });
    const { data: uploadData, error: uploadError } = await supabase
      .storage
      .from('moments')
      .upload('test-image.jpg', file);

    expect(uploadError).toBeNull();
    expect(uploadData).not.toBeNull();

    const { data: downloadData, error: downloadError } = await supabase
      .storage
      .from('moments')
      .download('test-image.jpg');

    expect(downloadError).toBeNull();
    expect(downloadData).not.toBeNull();
  });
});
