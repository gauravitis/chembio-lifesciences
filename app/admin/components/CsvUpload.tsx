'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Papa, { ParseResult } from 'papaparse';
import { ProductInput } from '@/app/types/product';

interface CsvUploadProps {
  onUploadSuccess: () => void;
}

interface ParsedResults extends ParseResult<ProductInput> {
  data: ProductInput[];
}

const CsvUpload = ({ onUploadSuccess }: CsvUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      Papa.parse<ProductInput>(file, {
        header: true,
        complete: async (results: ParsedResults) => {
          try {
            console.log('Parsed data:', results.data); // Debug log

            const response = await fetch('/api/products/bulk-upload', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ products: results.data }),
            });

            const responseData = await response.json();

            if (!response.ok) {
              throw new Error(responseData.error || 'Upload failed');
            }

            setSuccessMessage(responseData.message);
            onUploadSuccess();
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to upload products');
            console.error(err);
          } finally {
            setUploading(false);
          }
        },
        error: (error: Error) => {
          setError('Failed to parse CSV file');
          setUploading(false);
        },
      });
    } catch (err) {
      setError('An unexpected error occurred');
      setUploading(false);
    }
  };

  const downloadTemplate = () => {
    const link = document.createElement('a');
    link.href = '/templates/product-template.csv';
    link.download = 'product-template.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-6 backdrop-blur-sm bg-white/5 rounded-3xl shadow-2xl border border-white/10">
      <h2 className="text-2xl font-bold mb-4 text-white">Bulk Upload Products</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-center w-full">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer border-gray-600 hover:border-purple-500">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
              </svg>
              <p className="mb-2 text-sm text-gray-400">
                <span className="font-semibold">Click to upload CSV</span> or drag and drop
              </p>
              <p className="text-xs text-gray-400">CSV file with product data</p>
            </div>
            <input 
              type="file" 
              className="hidden" 
              accept=".csv" 
              onChange={handleFileUpload}
              disabled={uploading}
            />
          </label>
        </div>

        {uploading && (
          <div className="text-center text-gray-300">
            <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-purple-500 rounded-full" role="status" aria-label="loading">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-2">Uploading products...</p>
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center">
            {error}
          </div>
        )}

        {successMessage && (
          <div className="text-green-500 text-center">
            {successMessage}
          </div>
        )}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-white mb-2">CSV Format Requirements:</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-1">
          <li>File must be in CSV format</li>
          <li>Required columns: catalogueId, name, description, brand, casNumber, packSize, price</li>
          <li>Optional columns: imageUrl</li>
        </ul>
      </div>

      <button
        onClick={downloadTemplate}
        className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
      >
        Download CSV Template
      </button>
    </div>
  );
};

export default CsvUpload; 