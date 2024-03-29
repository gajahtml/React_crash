export default function GalleryCard({ imgUrl, title, pLocation, kTag }) {

  if (kTag.includes(",")) {
    kTag = kTag.split(",").map((item) => (
      <span
        key={item}
        className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-2"
      >
        {`#${item}`}
      </span>
    ));
  } else {
    kTag = 
      <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-4 mb-2">
        {kTag}
      </span>;
  }

  return (
    <div
      className="max-w-sm rounded-lg overflow-hidden shadow-gray-500 shadow-lg bg-gray-900
                    border border-1">
      <img className="w-full h-72" src={imgUrl} alt={title} />
      <div className="px-6 py-3">
        <div className="font-bold text-2xl text-teal-200 mb-2">{title}</div>
        <p className="text-base text-slate-500">{pLocation}</p>
      </div>
      <div className="px-6 pt-4 pb-2">{kTag}</div>
    </div>
  );
}
