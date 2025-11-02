"use client";

import React, { useEffect, useState } from "react";
import { Camera, Upload, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type SizeOption = "4x6" | "5x7" | "8x10";

const PRICE_MAP: Record<SizeOption, number> = {
  "4x6": 1.5,
  "5x7": 3,
  "8x10": 5,
};

type UploadedPhoto = {
  id: string;
  src: string;
  name?: string;
  selected?: boolean;
};

const MAX_PHOTOS = 5;

export default function PhotoPrintCard() {
  const [photos, setPhotos] = useState<UploadedPhoto[]>([]);
  const [size, setSize] = useState<SizeOption>("4x6");
  const [isModalOpen, setModalOpen] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const pricePerPhoto = PRICE_MAP[size];
  const total = (photos.length * pricePerPhoto).toFixed(2);

  useEffect(() => {
    return () => {
      photos.forEach((p) => URL.revokeObjectURL(p.src));
    };
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (!files.length) return;

    const remainingSlots = MAX_PHOTOS - photos.length;
    if (remainingSlots <= 0) return;

    const toAdd = files.slice(0, remainingSlots).map((file) => ({
      id: `${Date.now()}-${Math.random()}`,
      src: URL.createObjectURL(file),
      name: file.name,
      selected: false,
    }));

    setPhotos((prev) => [...prev, ...toAdd]);
    e.currentTarget.value = "";
  };

  const removePhoto = (id: string) => {
    setPhotos((prev) => {
      const toRemove = prev.find((p) => p.id === id);
      if (toRemove) URL.revokeObjectURL(toRemove.src);
      return prev.filter((p) => p.id !== id);
    });
  };

  const handlePayNow = () => {
    if (photos.length === 0) return;
    setModalOpen(true);
  };

  const confirmPayment = () => {
    setModalOpen(false);
    setSuccessPopup(true);
    setTimeout(() => {
      setSuccessPopup(false);
      setPhotos([]);
    }, 2500);
  };

  return (
    <>
      <div className="w-full max-w-2xl mx-auto p-8 bg-white/95 backdrop-blur-lg rounded-3xl shadow-lg border border-white/30">
        <div className="flex items-center gap-3 mb-6">
          <Camera className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-900 drop-shadow-sm">
            Online Photo Printing
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 items-center">
          <label className="col-span-2 flex items-center justify-between border rounded-lg px-3 py-2 cursor-pointer hover:bg-gray-100 transition">
            <span className="text-gray-800 font-medium">
              Upload up to 5 photos
            </span>
            <Upload className="w-5 h-5 text-gray-600" />
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>

          <select
            className="border rounded-lg px-3 py-2 text-gray-800 font-medium"
            value={size}
            onChange={(e) => setSize(e.target.value as SizeOption)}
          >
            {Object.entries(PRICE_MAP).map(([key, value]) => (
              <option key={key} value={key}>
                {key.replace("x", " × ")} — AED {value}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap gap-4 mb-6 justify-center sm:justify-start">
          <AnimatePresence>
            {photos.map((p) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="relative group rounded-xl overflow-hidden border border-gray-200 shadow-sm"
              >
                <button
                  onClick={() => removePhoto(p.id)}
                  className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                >
                  <X className="w-3 h-3" />
                </button>
                <img
                  src={p.src}
                  alt={p.name}
                  className="w-32 h-28 sm:w-40 sm:h-32 object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {photos.length < MAX_PHOTOS && (
            <label className="flex items-center justify-center w-32 h-28 sm:w-40 sm:h-32 bg-gray-100 rounded-xl cursor-pointer border border-dashed border-gray-300 hover:bg-gray-200 transition text-gray-800 font-bold">
              <span className="text-2xl">+</span>
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
          )}
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-sm text-gray-600">Price per photo</div>
            <div className="text-lg font-semibold text-gray-900">
              AED {pricePerPhoto.toFixed(2)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600">Total</div>
            <div className="text-2xl font-bold text-blue-700">AED {total}</div>
          </div>
        </div>

        <button
          onClick={handlePayNow}
          disabled={photos.length === 0}
          className={`w-full py-3 rounded-xl font-semibold transition ${
            photos.length === 0
              ? "bg-blue-300 text-gray-800 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Pay Now
        </button>
      </div>

      {/* Confirm Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-2xl p-8 w-[90%] max-w-md text-center shadow-xl"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Confirm Your Order
            </h3>
            <p className="text-gray-700 mb-4">
              You are printing <strong>{photos.length}</strong> photo(s) in size{" "}
              <strong>{size}</strong> for AED <strong>{total}</strong>.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 border rounded-lg hover:bg-gray-100 text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={confirmPayment}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Confirm & Pay
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Success Popup */}
      <AnimatePresence>
        {successPopup && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/30"
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center"
            >
              <CheckCircle2 className="w-12 h-12 text-green-500 mb-3" />
              <h4 className="text-xl font-semibold text-gray-900">
                Yay! Payment Successful 🎉
              </h4>
              <p className="text-gray-700 mt-2">
                Your photos will be printed shortly.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
