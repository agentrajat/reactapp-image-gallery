import React from 'react'

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');
    let tagKey = 0;
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="random photo" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
              {image.likes}
            </li>
          </ul>
        </div>
        <div className="px-6 py-2">
            {tags.map(tag => (
                <span key={image.id + "-" + ++tagKey} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mt-2">
                    #{tag.trim()}
              </span>
            ))}
        </div>
      </div>
    )
}

export default ImageCard;
