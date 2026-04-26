import { supabase } from '../lib/supabase';

export const productService = {
  // പ്രോഡക്റ്റുകൾ എടുക്കാൻ
  async getProducts() {
    const { data, error } = await supabase.from('products').select('*');
    if (error) throw error;
    return data;
  },

  // പുതിയ പ്രോഡക്റ്റ് ആഡ് ചെയ്യാൻ (With Image Upload)
  async addProduct(productData: any, imageFile: File) {
    // 1. ഇമേജ് അപ്‌ലോഡ് ചെയ്യുക
    const fileName = `${Date.now()}_${imageFile.name}`;
    const { data: imgData, error: imgError } = await supabase.storage
      .from('product-images')
      .upload(fileName, imageFile);

    if (imgError) throw imgError;

    // 2. ഇമേജ് ലിങ്ക് എടുക്കുക
    const { data: { publicUrl } } = supabase.storage
      .from('product-images')
      .getPublicUrl(fileName);

    // 3. ഡാറ്റാബേസിൽ വിവരങ്ങൾ ചേർക്കുക
    const { data, error } = await supabase.from('products').insert([
      { ...productData, image_url: publicUrl }
    ]);

    if (error) throw error;
    return data;
  }
};
