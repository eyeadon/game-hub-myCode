const getCroppedImageUrl = (url: string) => {
  if (!url) return "";

  const target = "media/";
  //                                to start cursor/position at the end of url
  const index = url.indexOf(target) + target.length;

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
