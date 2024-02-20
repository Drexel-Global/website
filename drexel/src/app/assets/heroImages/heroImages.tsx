export const heroImages: {
  money: string;
  money2: string;
  bullish: string;
  background: string;
} = {
  money: "drexel-finance-website/landing/twgl3zmhxz90kfquohwq",
  money2: "drexel-finance-website/landing/rmh7wwmwldbjjktlo79l",
  bullish:
    "https://res.cloudinary.com/db09icibj/image/upload/v1708384734/drexel-finance-website/landing/welgtels2kmsjqfhktof.png",
  background: "drexel-finance-website/landing/b392sqnl2r715zmxvmh4",
};

export const getImageUrlWithWidth = (url: string, width: number): string => {
  // Split the URL into parts
  const parts = url.split("/");

  // Find the index of the transformation part
  const uploadIndex = parts.findIndex((part) => part === "upload");

  // If the upload part exists
  if (uploadIndex !== -1) {
    // Insert the width at the appropriate position
    parts.splice(uploadIndex + 1, 0, `w_${width}`);
  }

  // Join the parts back into a URL
  return parts.join("/");
};
